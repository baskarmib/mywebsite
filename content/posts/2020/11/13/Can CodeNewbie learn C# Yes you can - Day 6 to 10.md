---
title: "Can CodeNewbie learn C#? Yes you can - Day 6 to 10"
description: "Press the gas pedal and accelerate our learning journey"
date: 2020-11-13
author: "baskarmib"
---

By this time, we should be having a basic understanding of all the building blocks of C# along with complete understanding of string operations, date time operations, control flow statements, iteration statements, collections, arrays, and the usage of lists.

In this segment, we will press the gas pedal and accelerate our learning journey. We will go through the basics of File Operations, Diagnostics Operations, Logger Implementations and last but not the least Serialization and Deserialization.

### File Operations

File Operations are performed by importing the namespace System.IO. Using the namespace, we can perform file operations like reading file, writing file, deleting file, creating file, moving file etc. Files can be written to filesystem using local path, relative path, network share location etc.

No matter the number of years of experience we gain, we will be writing code that reads files, writes files. Check out the resources section for more details.

### Diagnostics and Logging

This is mostly used to observe the behavior of the system. Imagine if we are suffering from health issues, our doctor generally orders some diagnostics to run to see how our health system is functioning. Based on the diagnostic’s results doctors will recommend their course of medication to help us overcome the health issue.

We can use the same analogy here. As developers we are going to make provisions in our application so that we can monitor how our application is performing. Using diagnostics, we will be able to trace the issues which happen in production code.

Some common usages are as follows -

1. Include code to log information as methods are executed. These can be informational logs.
2. Include code to log information when errors happen in our application.
3. Include code to log time taken to complete execution of methods.

It is more important to understand the log levels. As we deploy applications to our production we can enable only critical logs to be captured, to make sure we don't consume storage space. This can be achieved by using log levels like Verbose, Information, Debug, Error . Each Logging Packages in Dotnet like NLog, ILogger and Serilog have their own set of configurations to configure the log level.

For more details check the resource section to have deep understanding of implementing logging and diagnostics mechanisms in our application.

### Serialization and De-Serialization

Once we start developing applications we will be hearing these terms Serialization and De-Serialization.

### So, what does this mean?

With C# we can convert an object of class to XML or JSON Format - This process is called Serialization.

Constructing an object of class from XML or JSON Format - This process is called De-Serialization.

### When do we use this?

We use this to pass our class objects to our APIs or sending information over the wire. Before passing our class objects we perform serialization and convert the class to XML or JSON Format and then pass the details to our services or APIs which receive the XML or JSON and convert them back to class objects before running our business logics in our APIs.

Though the most common preferred approach these days is to use JSON Format, there are some legacy applications which still uses XML. So, having knowledge on both types of serialization usually helps.

Check the resources section to get in-depth overview on XML and JSON serialization and deserialization.

### Additional Resources

[https://docs.microsoft.com/en-us/troubleshoot/dotnet/csharp/read-write-text-file](https://docs.microsoft.com/en-us/troubleshoot/dotnet/csharp/read-write-text-file)

[https://docs.microsoft.com/en-us/dotnet/core/diagnostics/logging-tracing](https://docs.microsoft.com/en-us/dotnet/core/diagnostics/logging-tracing)

[https://serilog.net/](https://serilog.net/)

[https://docs.microsoft.com/en-us/aspnet/core/fundamentals/logging/?view=aspnetcore-5.0](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/logging/?view=aspnetcore-5.0)

[https://docs.microsoft.com/en-us/dotnet/standard/serialization/system-text-json-how-to?pivots=dotnet-5-0](https://docs.microsoft.com/en-us/dotnet/standard/serialization/system-text-json-how-to?pivots=dotnet-5-0)

[https://docs.microsoft.com/en-us/dotnet/standard/serialization/xml-and-soap-serialization](https://docs.microsoft.com/en-us/dotnet/standard/serialization/xml-and-soap-serialization)

### Self-Check

1. How do we read and write files to network share?
2. What is UNC Path?
3. Implement a console application to monitor a folder location and read files as they come through?
4. What are the different log levels used for diagnostics?
5. How to implement code to receive email when error is logged in our application?
6. What are event sinks and sources in Serilog?
7. What is serialization and deserialization?
8. What is JSON Format and namespace that is used to perform JSON Serialization and De-Serialization.
9. Write code to serialize and de-serialize below class to JSON Format
```csharp
public class Employee
{
public string Name;
public int EmployeeId;
public DateTime DateOfJoining;
}
```

Going through this path, helps one to get the fundamental understanding of C#. These can be done in 10 days or more than 10 days. 
Do not concentrate on the number of days that you take to complete this path.

Hope the resources will be helpful. These foundations are more important before proceeding to write code to implement database operations and developing APIs.

Feel free to reach out to me if you need any help while traversing through this path.

Happy learning.