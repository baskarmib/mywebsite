---
title: "Technology design patterns in every day of life - Part 1"
description: "A look into design patterns used in technology and regular daily life"
date: 2020-03-10
author: "baskarmib"
---

I remember the days while I was interviewing for software developer positions, the common question one would ask is

> "Have you used any design patterns in your application? Can you name or code a few patterns?"

Every developer would have gone through this phase. Every developer would have prepared theoretically to answer questions like these. 

We would start learning about "Gang of Four" and remember few words from the three pillars of Gang of Four - Creational, Structural and Behavioral patterns.

I have been there. I have read all those just for the sake of interviews without knowing that I have been using some of the patterns in my code when I started my career. As of today a lot has changed.

Design Patterns got evolved over time and now there are more patterns each addressing a specific problem. If you are developing Cloud Based Applications on Azure, Amazon Web Services or Google Cloud Platform (GCP) there are new patterns to consider application development. 
If you are developing Cloud Native Applications, there are patterns and suggestions to follow to develop them. 12 Factor Apps provide guidance and suggestions to develop SAAS based applications. 
Each provide a specific guideline to address a problem.

As a developer it is difficult to remember all the patterns and guidelines that are available. So, in this post I will try to uncover some patterns which we use regularly at our daily life without knowing that they are the same patterns that we use to code applications.

> Design Patterns should be used to solve a problem, that the pattern aims to solve. It is not required to over engineer applications by including patterns in your application when your application is not going to face the problem the pattern is used to handle.

Now let us investigate some of the patterns and some buzz words that we use today.

**Self-Healing -**

One of the primary aspects as part of Cloud Native Applications is to develop self-healing applications. The application we develop should have the capability to recover from a failure and resume running business as usual.

In our daily life, we also perform activities like self-healing. Assume you are trying to implement a logic using code and you are stuck to proceed. We try to change context by taking a short break, go for walk or taking a shower and then revisit the code to see that we can resolve the same code and proceed without getting stuck. So, changing context is our capability to recover from the failure and ensuring that we proceed to complete implementing our logic.

**Scalability -**

Cloud Native Applications, or applications developed using 12 Factor Apps are usually designed to support scalability. Applications should be able to easily scale to handle application loads. Scaling can be vertical or horizontal. In this scenario we are discussing about horizontal scaling. Horizontal Scaling is to increase the number of nodes or web servers. If you are using a docker container then we are discussing about increasing the number of containers based on load on the application.

In real life, we can see scalability solutions used everywhere. For example, to increase productivity of developers we use multiple screen displays. Consider airports we usually see multiple terminals and multiple gates. To support handling of multiple flights we use multiple gates in a terminal.

**Retry Pattern -**

When our application is designed to invoke APIs or perform any remote operations which can fail due to network issues or any transient failures- Retry pattern can be used to address scenarios like these. The application can retry the same operation another time to see if it can complete the operation successfully.

> In real life, we use Retry Pattern every day.

Do you remember the last time you cleared a technical certification?

Some would have cleared those in their first shot, but for some you had to retry to clear the certification.

Do you remember how many times you would have applied to jobs when you are searching for your perfect role?

You would have kept applying to every job posting that you came across until you received a call from the recruiter.

You are using Retry Pattern here.

**Circuit Breaker Pattern -**

Circuit Breaker Pattern is a variation of Retry Pattern.

Have you ever gone through this situation? Every developer would have gone through this.

Your application encountered an issue overnight and it kept retrying to perform the operation. As developers we like to log the failure and send an alert email to our support team with details of the failure. Your inbox is flooded with the alert emails because the application kept retrying the operation.

This is where a circuit breaker pattern can help. After retrying an operation for "n" number of times, the application should be designed to record the reason of failure and proceed with the next operation.

In real life, we use Circuit Breaker Pattern almost every day.

Consider the same job application process after trying continuously applying for jobs we stop for a moment, take a break and reanalyze our portfolios until we apply for the next job.

> To avoid stress and burn out we should know when to stop and then reassess the situation.

In my next post, I will cover other patterns. 

### Related Links

<div class="notification is-info">
<p>
<a href="https://en.wikipedia.org/wiki/Design_Patterns" target="_blank" rel="noopener noreferrer">[Design Patterns from Wiki]</a>
</p>
<p>
<a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/" target="_blank" rel="noopener noreferrer">[Microsoft Azure Cloud Development Patterns]</a>
</p>
<p>
<a href="https://aws.amazon.com/architecture/?solutions-all.sort-by=item.additionalFields.sortDate&solutions-all.sort-order=desc&whitepapers-main.sort-by=item.additionalFields.sortDate&whitepapers-main.sort-order=desc&reference-architecture.sort-by=item.additionalFields.sortDate&reference-architecture.sort-order=desc" target="_blank" rel="noopener noreferrer">[AWS Amazon Development Patterns]</a>
</p>
<p>
<a href="https://cloud.google.com/solutions/scalable-and-resilient-apps" target="_blank" rel="noopener noreferrer">[Google Cloud Patterns]</a>
</p>
<p>
<a href="https://12factor.net/" target="_blank" rel="noopener noreferrer">[12 Factor App Development Methodology]</a>
</p>
<p>
<a href="https://en.wikipedia.org/wiki/Scalability" target="_blank" rel="noopener noreferrer">[What is Scalability]</a>
</p>
</div>