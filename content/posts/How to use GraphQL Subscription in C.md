---
title: "How to use GraphQL Subscription in C#"
description: "Experiences from learning Subscriptions in GraphQL Dot Net"
date: 2019-12-19
---


This blog post is part of Third C# Annual Advent organized by Matt Groves, Developer Advocate Couchbase and Microsoft MVP. Thanks to Matt for giving me an opportunity to participate again this year.

<div class="notification is-info">
You can follow the C# Advent <a href="https://crosscuttingconcerns.com/" target="_blank" rel="noopener noreferrer">here</a>. 
</div>

GraphQL is nothing but Graph Query Language. If you are from SQL world, you are aware of queries. You can use the same analogy to GraphQL, but here we are not only executing these queries against database. With GraphQL API we can use the query and request data from REST APIs or any resource on the net. 


As per GraphQL website -

> GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.


<div class="notification is-info">
This blog post, does not deal in to more specifics of GraphQL you can get an initial understanding from this article by <a href="https://dev.to/dotnet/how-you-can-build-a-web-api-using-graphql-net-core-and-entity-framework-1ago" target="_blank" rel="noopener noreferrer">Chris Noring.</a>
</div>

Chris did a great job in explaining about implementation of Queries and Mutations. 
In this blog I am going to deal with Subscriptions. With GraphQL subscription a client can be easily notified when there is change to the underlying data which client has subscribed.  

We can achieve this with Signal R but we have to do the additional plumbing between our data store and API using database Change Notifications. 


<div class="notification is-info">
Check this out if you are looking to implement the same in Cosmos DB with Signal R. Our Friend Hasan Savran has done a great job in covering the aspects.
<a href="https://h-savran.blogspot.com/2019/09/adding-azure-signalr-service-to.html" target="_blank" rel="noopener noreferrer">
[https://h-savran.blogspot.com/2019/09/adding-azure-signalr-service-to.html]
</a>
</div>


With GraphQL implementing this functionality is easier. 

To implement Subscriptions in GraphQL you need to add or install GraphQL Server. Subscriptions are supported with the help of WebSockets. 

Install below Nuget Packages to have the GraphQL Middleware and Support for Websockets
<div class="notification is-info">
GraphQL.Server.Transports.AspNetCore  - Version 3.5.0-alpha0027

GraphQL.Server.Transports.WebSockets  - Version 3.5.0-alpha0027
</div>

Install below Nuget Packages to test the GraphQL API using GraphiQL.
<div class="notification is-info">
GraphQL.Server.Ui.GraphiQL - Version 3.5.0-alpha0027
</div>

Below code will be used in the Startup.cs file.  If you are using Kestrel with .Net Core 3.0 then it is recommended by the GraphQL Server package authors to include the AllowSynchronousIO option as true.

EnableMetrics - When Enabled would provide query execution performance statistics in the results. This can be made as configurable option to reduce the size of JSON in your result.

ExposeExceptions - This can be used to show the Exception Stack Trace. 

```js
    public void ConfigureServices(IServiceCollection services)
            {
    
    #if NETCOREAPP3_0
                // Workaround until GraphQL can swap off Newtonsoft.Json and onto the new MS one.
                // Depending on whether you're using IIS or Kestrel, the code required is different
                // See: https://github.com/graphql-dotnet/graphql-dotnet/issues/1116
                services.Configure<KestrelServerOptions>(options =>
                {
                    options.AllowSynchronousIO = true;
                });
                services.Configure<IISServerOptions>(options =>
                {
                    options.AllowSynchronousIO = true;
                });
    #endif
                services.AddSingleton<IAuthor, AuthorDetails>()                
                .AddSingleton<GraphSchema>()
                // Add GraphQL services and configure options
                .AddGraphQL(options =>
                {
                    options.EnableMetrics = true;
                    options.ExposeExceptions = true;
                    options.UnhandledExceptionDelegate = ctx =>
                    {
                        Console.WriteLine("error: " + ctx.OriginalException.Message);
                    };
                })
                .AddWebSockets()
                .AddDataLoader()
                .AddGraphTypes(typeof(GraphSchema));
            }
```

UseWebSockets, UseGraphQLWebSockets are needed for Subscription.
```js
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
            {
                if (env.IsDevelopment())
                {
                    app.UseDeveloperExceptionPage();
                }
                
                // this is required for websockets support
                app.UseWebSockets();
                app.UseGraphQLWebSockets<GraphSchema>("/graphql");
                app.UseGraphQL<GraphSchema, GraphQLHttpMiddleware<GraphSchema>>("/graphql");
                app.UseGraphiQLServer(new GraphiQLOptions
                {
                    Path = "/ui/graphiql",
                    GraphQLEndPoint = "/graphql",
                });            
            }
```
### Scenario Details:

When a new author is added, send payload with name and Id of the newly added Author to subscribers.

To implement this, we will use AuthorMutation and AuthorSubscription. 

AuthorMutation will have the details of the name of Mutation, the arguments which are passed as part of mutation and the resolver methods to execute and return the author details. We are loading existing authors from JSON file and adding the newly passed author details to the collection. This can be replaced with a database call.

```js
    public class AuthorMutation : ObjectGraphType
        {
            private readonly IAuthor _author;
            public AuthorMutation(IAuthor author)
            {
                _author = author;
                
                Field<AuthorType>("addAuthor",
                      arguments: new QueryArguments(
                          new QueryArgument<StringGraphType> { Name = "name" }
                      ),
                      resolve: context =>
                      {
                          var receivedMessage = context.GetArgument<String>("name");
                          return Add(receivedMessage.ToString());                      
                      });
            }      
            
            public Author Add(string name)
            {
                JObject jsonContent = JObject.Parse(System.IO.File.ReadAllText(@"SampleData.json"));
                //List<Author> authors = new List<Author>();
                JArray a = (JArray)jsonContent["Authors"];
                IList<Author> authors = a.ToObject<IList<Author>>();
                int authorid = GenerateRandomNo();
                authors.Add(new Author() { Id = authorid, Name = name });
    
                Message message = new Message();
                message.Id = authorid;
                message.Name = authors.Where(x => x.Id == authorid).First().Name;
                
                //This will send the Newly added author to Observable in Subscription.
                _author.AddAuthor(message);
    
                return authors.Where(x => x.Id == authorid).First();
            }
    
            public int GenerateRandomNo()
            {
                int _min = 1000;
                int _max = 9999;
                Random _rdm = new Random();
                return _rdm.Next(_min, _max);
            }
        }
```

The below code is used in AuthorSubscription. AuthorSubscription will have the details of Subscription name, and the methods to resolve. The Subscribe method returns the content from an Observable. It is the observable which is used in the background to send information as payload to all subscribers. 

```js
    public class AuthorSubscription : ObjectGraphType
        {
            private readonly IAuthor _author;        
            public AuthorSubscription(IAuthor authordetails)
            {
                _author = authordetails;
    
                AddField(new EventStreamFieldType
                {
                    Name = "authorAdded",
                    Type = typeof(MessageType),
                    Resolver = new FuncFieldResolver<Message>(ResolveAuthor),
                    Subscriber = new EventStreamResolver<Message>(Subscribe)
                });
            }
            private Message ResolveAuthor(ResolveFieldContext context)
            {
                return context.Source as Message;
            }
            private IObservable<Message> Subscribe(ResolveEventStreamContext context)
            {
                return _author.GetLatestAuthors();
            }
        }
```

When any new content is added to the messageStream the payload is sent to all subscribers.

```js
    public interface IAuthor
        {
            IObservable<Message> GetLatestAuthors();
            Message AddAuthor(Message authorDetails);
            ConcurrentStack<Message> AllAuthors { get; }
        }
    
        public class AuthorDetails : IAuthor
        {
            private readonly ISubject<Message> _messageStream = new ReplaySubject<Message>(1);
            public ConcurrentStack<Message> AllAuthors { get; }
    
            public AuthorDetails()
            {
                AllAuthors = new ConcurrentStack<Message>();
            }
    
            public IObservable<Message> GetLatestAuthors()
            {
                return _messageStream.Select(author =>
                {   
                    return author;
                })
                    .AsObservable();
            }
    
            public Message AddAuthor(Message authorDetails)
            {
                AllAuthors.Push(authorDetails);
                _messageStream.OnNext(authorDetails);
                return authorDetails;
            }
    
            public void AddError(Exception exception)
            {
                _messageStream.OnError(exception);
            }
        }
    
        public class MessageType : ObjectGraphType<Message>
        {
            public MessageType()
            {
                Field(o => o.Id);
                Field(o => o.Name);
            }
        }
    
        public class Message
        {
            public int Id { get; set; }
            public string Name { get; set; }
        }
```

This is the Schema which we have used for this sample. I have tried to use some portions from Chris Sample where the schema is defined inline. We can also define parts of our schema separately as we did with AuthorMutation and AuthorSubscription.  

```js
    public class GraphSchema : Schema
        {
            private ISchema _schema { get; set; }
            public IAuthor _author { get; set; }
            public ISchema GraphQLSchema
            {
                get
                {
                    return this._schema;
                }
            }
            public GraphSchema(IAuthor authorContent)
            {
                //this._author = new AuthorDetails();
                this._author = authorContent;
                this._schema = Schema.For(@"
              type Book {
                id: ID
                name: String,
                genre: String,
                published: Date,
                Author: Author
              }
    
              type Author {
                id: ID,
                name: String,
                books: [Book]
              }
              
              type Query {
                  books: [Book],
                  author(id: ID): Author,
                  authors: [Author],
                  hello: String,
                  messages: [MessageType]
              }
          ", _ =>
                {
                    _.Types.Include<Query>();                
                });
                
                //This is needed.
                Query = this._schema.Query;
                Mutation = new AuthorMutation(authorContent);
                Subscription = new AuthorSubscription(authorContent);
            }       
        }
```

The sample code can be found in my GitHub in references section to have an understanding on the implementation of Subscriptions in GraphQL. 
It is still work in progress repo and not recommended for production usage. The repo is tested for subscriptions with .Net Core 3.0

We can test the API using GraphIQL which will be initialized when we browse 

```js
http: localhost:5000/ui/graphiql 
```

<br></br>

![Before Mutation](./Subs1.png)

<br></br>

![Subscription](./Subs2.png)

<br></br>
![After Mutation](./Subs3.png)
<br></br>

The Subscription Manager keeps track of all the subscriptions. At any time if you want to know how many clients are clients are subscribed, you can find them in the console log.

![Console Log](./Subs4.png)

<br></br>
<br></br>

<div class="notification is-info">
To have a better understanding of use cases to consider while implementing subscriptions, you can check the recommendations in Apollo Documentation.
<a href="https://www.apollographql.com/docs/react/data/subscriptions/#when-to-use-subscriptions" target="_blank" rel="noopener noreferrer">[https://www.apollographql.com/docs/react/data/subscriptions/#when-to-use-subscriptions]</a>
</div>
This is my attempt to learn how Subscriptions are supported in GraphQL Dot Net. 

Hope you have got a better understanding to implement.

### References -

<div class="notification is-info">
<p>
<a href="https://graphql-dotnet.github.io/docs/getting-started/subscriptions/" target="_blank" rel="noopener noreferrer">[https://graphql-dotnet.github.io/docs/getting-started/subscriptions/](https://graphql-dotnet.github.io/docs/getting-started/subscriptions/]</a>
</p>
<p>
<a href="https://graphql-dotnet.github.io/docs/getting-started/graphiql/" target="_blank" rel="noopener noreferrer">[https://graphql-dotnet.github.io/docs/getting-started/graphiql/]</a>
<p>
<p>
<a href="https://github.com/graphql-dotnet/server/tree/develop/samples" target="_blank" rel="noopener noreferrer">[https://github.com/graphql-dotnet/server/tree/develop/samples]</a>
</p>
<p>
My GitHub Sample - <a href="https://github.com/baskarmib/CodeCamp2019/tree/master/aspnetcoreapp" target="_blank" rel="noopener noreferrer">[https://github.com/baskarmib/CodeCamp2019/tree/master/aspnetcoreapp]</a>
</p>
</div>

