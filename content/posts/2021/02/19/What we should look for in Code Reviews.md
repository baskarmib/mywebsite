---
title: "What we should look for in Code Reviews"
description: "We might be having different opinions about Code Reviews.There is no one step formula"
date: 2021-02-19
author: "baskarmib"
---

We might be having different opinions about Code Reviews. There is no one step formula to define Code Reviews.  Every company and team have their own style of reviewing code.

In this post, I will be sharing my opinions about Code Review which are specific to C# and dotNet Core which can be extended to other languages were applicable. Thanks to all who responded to my tweet sharing your views on Code Review.

https://twitter.com/baskarmib/status/1352723013972733953


### Common Opinions about Code Review

- For some Code Review is about maintaining readability in application code. 

- For some Code Review is about using the right design aspects. 

- For some Code Review is about checking if the new changes are not impacting the functionality of the system.

- For some Code Review is about following the industry standards and practices.

- For some Code Review is about making sure performance of the application is not impacted with new changes.

- For some Code Review is about making sure code coverage metrics are ensured properly with unit tests and integration tests.

> For some Code Review is used as an approval process to merge code and exhibit authority. If this is your team do not do this.

### Code Review Demystified

In my opinion Code Review can be performed by focusing into the below three zones.  

- Technical Review
- Functional Review
- Non-Functional Review - Architecture Characteristics Review

### Technical Review

As part of technical review, we can review the technical aspects of the code ranging from design, low level implementations and look for improvements to reduce technical debt. Every team can define their own checklist which can be used before committing code to feature branch or main branch. Having a standard defined by the team, would reduce the number of hours spent on code review making the process smooth and quick and overtime this would help the developers in practicing writing application code that is clean and maintainable.

Some of these would include below. 

- Refactoring repeated logics.
- Ensuring concepts like SOLID, DRY is followed based on use case.
- Ensuring proper memory utilization by properly disposing objects.
- Avoiding high cyclomatic complexity.
- Checking for n+1 query issue in for loops.
- Checking for object dependencies.
- Proper handling of opening and closing of database connections.
- Ensuring concepts like Circuit Breaker and Retry Patterns are followed where applicable.
- Optimizing string utilizations using constants like logs across the application.
- Optimizing async and await operations following the guidance mentioned in resources.
- Using proper naming for methods and variables maintaining readability as per agreed standards.
- Avoiding boxing and unboxing where applicable.
- Unless it is required avoiding .ToList() on query results from LINQ Queries.
- If performance is a more important concern, design your API to use arrays, List<T> or ImmutableArray<T>.
- Avoiding IEnumerable<T>, IList<T>, and IReadOnlyList<T> for property and method return types if we can, and do not use ImmutableList<T> unless we are actively manipulating immutable collections.


### Functional Review

We can perform functional review by making sure that our code changes do not impact any existing functionalities, by ensuring that our code is tested properly using unit tests and integration tests. This will be our first focus area as part of Functional Review. 

As a common practice we can ensure that all our existing tests and new tests are getting passed before our changes are merged to main or feature branch. If we use Test Driven Development as our development methodology we can ensure that all code is tested by developers before merging the same to main or feature branch.

### Non-Functional Review - Architecture Characteristics Review

Non-Functional Review is to cover areas like performance and security which are either not included as part of our requirements or functionalities. As stated in Mark Richards and Neal Ford - Fundamentals of Software Architecture book, it is good to consider requirements like performance, security, availability , reliability as architecture characteristics instead of calling them as Non-Functional Requirements.

For example, we can review aspects of code performance by comparing the metrics taken by running Benchmark tests and making sure that results are not deviated more from previous captured metrics. These can also be included in our test. 

Verifying these metrics as part of code review helps us in making sure that code will not introduce major performance problems in test and production regions. We can also go an extra mile by making sure to verify secure coding practices as part of our reviews.

### Closing Thoughts

A proper code review can be done when the reviewer runs codebase on their machine. Reviewing code using GitHub alone might not help because we are not executing the code or looking at the big picture on how the dependencies are used if we must review the code based on architecture characteristics.

Software development methodologies like Extreme Programming generally encourages a collective code review by the team, where the entire team can review the code and suggest improvements collectively. 

> If we are given an opportunity to review code it is our first chance to mentor junior or peer developers and not using them as an opportunity to criticize.

Code Reviews can be done quickly when the commits are small. Feel free to check the resource section on additional details about micro commits. Interested to know how code review is done at Microsoft, then check out the references section on details about CodeFlow. The article itself is a great read on how to improve code review process. Thanks to threddyrex for sharing this article.

https://twitter.com/threddyrex/status/1362542838269968384


Feel free to share your thoughts on different aspects that we can generally use as part of code reviews through a tweet tagging me(@baskarmib)

### Related Links
<div class="notification is-info">
<p>
<a href="http://wiki.c2.com/?CollectiveCodeOwnership" target="_blank" rel="noopener noreferrer">Extreme Programming and Collective Code Ownership</a>
</p>
<p>
<a href="https://martinfowler.com/bliki/ExtremeProgramming.html" target="_blank" rel="noopener noreferrer">Extreme Programming Overview</a>
</p>
<p>
<a href="https://cacm.acm.org/magazines/2019/2/234350-codeflow/fulltext" target="_blank" rel="noopener noreferrer">CodeFlow - Code Review Process Improvement</a>
</p>
<p>
<a href="https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design#single-responsibility-principle" target="_blank" rel="noopener noreferrer">SOLID Design Pattern</a>
</p>
<p>
<a href="https://zapier.com/blog/dont-repeat-yourself/" target="_blank" rel="noopener noreferrer">DRY principles Overview</a>
</p>
<p>
<a href="https://github.com/davidfowl/AspNetCoreDiagnosticScenarios/blob/master/AsyncGuidance.md" target="_blank" rel="noopener noreferrer">Async and Await Reference Guidance</a>
</p>
<p>
<a href="https://github.com/davidfowl/AspNetCoreDiagnosticScenarios/blob/master/AspNetCoreGuidance.md" target="_blank" rel="noopener noreferrer">ASP Net Core Guidance</a>
</p>
<p>
<a href="https://docs.microsoft.com/en-us/dotnet/framework/performance/performance-tips#boxing-and-unboxing" target="_blank" rel="noopener noreferrer">dotNet Performance Tips</a>
</p>
<p>
<a href="https://carlos.mendible.com/2018/08/22/net-core-benchmarkdotnet-for-vs-foreach-performance/" target="_blank" rel="noopener noreferrer">For and ForEach Performance Benchmark</a>
</p>
<p>
<a href="https://www.infoq.com/articles/For-Each-Performance/" target="_blank" rel="noopener noreferrer">ForEach Performance Observations</a>
</p>
<p>
<a href="https://www.industriallogic.com/blog/whats-this-about-micro-commits/" target="_blank" rel="noopener noreferrer">Micro-Commits</a>
</p>
<p>
<a href="https://www.stevejgordon.co.uk/introduction-to-benchmarking-csharp-code-with-benchmark-dot-net" target="_blank" rel="noopener noreferrer">Benchmarking Csharp Code</a>
</p>
<p>
<a href="https://docs.microsoft.com/en-us/dotnet/standard/security/secure-coding-guidelines" target="_blank" rel="noopener noreferrer">Secure dotNet Development</a>
</p>
</div>