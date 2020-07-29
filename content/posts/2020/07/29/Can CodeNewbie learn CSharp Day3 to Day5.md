---
title: "Can CodeNewbie learn C#? Yes, you can Day 3 to Day 5"
description: "Learning Path for CodeNewbie to get started with C#"
date: 2020-07-29
author: "baskarmib"
---

In previous posts we discussed about the building blocks of C# and how we can get started using Visual Studio to build and debug your applications. 
In this post we are going to continue our learning journey further. 

> "One learns from books and example only that certain things can be done. Actual learning requires that you do those things" – Frank Herbert

## Day 3 to Day 5

### String Formatting

Getting a basic knowledge on various string formatting options available in C# is important.  No matter the number of years of experience we gain, we will still be writing code which uses various string formats. We will be using string format options while writing log files, displaying messages in console window, displaying text and currency formats in our websites and more. Our relationship with string formatting in C# will continue as long as we code.

So how do we format strings in C#? 

```csharp
string first = "a";
string second = "test";
string last = "message";
Console.WriteLine(string.Format("This is {0} {1} {2}", first, second, last));
```

The above code will display the message as "This is a test message". 

Strings in C# are immutable. We will keep getting this question in every interview one way or other. 

Let us see this with an example. 

```csharp
string firstMessage = "message1";
string secondMessage= "message2";
//Compiler will create another location to store the result for secondMessage
secondMessage =  firstMessage + secondMessage; 
```

In these scenarios, it is recommended to use StringBuilder.  StringBuilder is part of System.Text Namespace.  The same example can be created using the Append method of StringBuilder.

```csharp
StringBuilder test = new StringBuilder();
test.Append("message1");
test.Append("message2");
```

We can also use AppendLine if we want to add text to the newline.

### Date Time Operations

DateTime Operations can be performed in C# using System.DateTime. We can also apply various string formats while performing date time operations. We can initialize DateTime with and without options to create date objects as per our requirement.

Check out the resources section for additional information on Date Time Operations.

### Statements in C#

C# supports the following Control Flow Statements and Iteration Statements. It is important to get an understanding of these, because we will be using them as long as we are programming using C#.

### Control Flow Statements

1. If-Else 
2. Switch - Case

### Iteration Statements

1. For Loop
2. ForEach Loop
3. While Loop
4. Do-While Loop

Getting an idea of Control Flow and Iteration Statements will help us, because we will be using these statements while writing code to implement various scenarios. Check out the resource section for more information on Statements.

### Arrays and Collections

Arrays can be used to store group of items which belong to the same type. We can create integer arrays, string arrays and many.  Arrays in C# support a maximum of 32 dimensions. 

```csharp
int[] numberArray = new int[5]{1,2,3,4,5};
```

In the above snippet we are creating a single dimension array called numberArray which can store only integer values. The array is defined with maximum length of 5. This is called fixed length array. The array has 5 items 1,2,3,4,5. 

We can access items from an array by mentioning the index. The below code snippet retrieves the item which is present in first position ,third position and fifth position. 

```csharp
Console.WriteLine(numberArray[0]);
Console.WriteLine(numberArray[2]);
Console.WriteLine(numberArray[4]);
```

In C# the index starts from zero.  If we try to access an item by using an index beyond the length of array will result in IndexOutofRangeException. 

```csharp
Console.WriteLine(numberArray[6]); 
```

ArrayList can be used to store items of different type. ArrayList is currently not recommended to use. We can use List in place of ArrayList. List is present as part of System.Collections.Generic namespace. With List we can store objects which are type safe.

```csharp
List<string> stringList = new List<string>();
stringList.Add("message1");
stringList.Add("message2");

Console.WriteLine(stringList.Count);
Console.WriteLine(stringList[1]);
```

In above code snippet, we are creating a List collection which is of type string. After initializing the collection we are adding two items. We can access the number of items in the collection using the Count. We get the item at second position by mentioning the index.  

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

namespace myApp
{
    class Program
    {
        static void Main()
        {
          Employee firstobject = new Employee(){Name="test",Id=1};
          Employee secondobject = new Employee(){Name="test2", Id=2};
          List<Employee> empList = new List<Employee>();
          empList.Add(firstobject);
          empList.Add(secondobject);
          Console.WriteLine(empList.Count);        
        }
    }

    public class Employee
    {
        public string Name;
        public int Id;
    }
}
```

With List we can create Collections of any type. The above snippet we are creating two objects of Emp class by providing their values. We are creating an empty list called empList. Then we are adding the objects to empList. The program will print the count of items from empList.

Check the resources section for additional information on List and various operations that can be performed with List.

### Additional Resources

[https://docs.microsoft.com/en-us/learn/modules/csharp-literals-variables/](https://docs.microsoft.com/en-us/learn/modules/csharp-literals-variables/)

[https://docs.microsoft.com/en-us/learn/modules/csharp-basic-operations/](https://docs.microsoft.com/en-us/learn/modules/csharp-basic-operations/)

[https://docs.microsoft.com/en-us/learn/modules/csharp-basic-formatting/](https://docs.microsoft.com/en-us/learn/modules/csharp-basic-formatting/)

[https://www.pluralsight.com/guides/understanding-string-immutability-csharp](https://www.pluralsight.com/guides/understanding-string-immutability-csharp)

[https://docs.microsoft.com/en-us/dotnet/api/system.text.stringbuilder?view=netcore-3.1](https://docs.microsoft.com/en-us/dotnet/api/system.text.stringbuilder?view=netcore-3.1)

[https://docs.microsoft.com/en-us/dotnet/api/system.datetime?view=netcore-3.1#initializing-a-datetime-object](https://docs.microsoft.com/en-us/dotnet/api/system.datetime?view=netcore-3.1#initializing-a-datetime-object)

[https://docs.microsoft.com/en-us/dotnet/api/system.array?view=netcore-3.1](https://docs.microsoft.com/en-us/dotnet/api/system.array?view=netcore-3.1)

[https://docs.microsoft.com/en-us/dotnet/api/system.indexoutofrangeexception?view=netcore-3.1](https://docs.microsoft.com/en-us/dotnet/api/system.indexoutofrangeexception?view=netcore-3.1)

[https://docs.microsoft.com/en-us/dotnet/api/system.collections.arraylist?view=netcore-3.1](https://docs.microsoft.com/en-us/dotnet/api/system.collections.arraylist?view=netcore-3.1)

[https://docs.microsoft.com/en-us/learn/modules/csharp-arrays/](https://docs.microsoft.com/en-us/learn/modules/csharp-arrays/)

[https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=netcore-3.1](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=netcore-3.1)

[https://docs.microsoft.com/en-us/learn/modules/csharp-if-elseif-else/](https://docs.microsoft.com/en-us/learn/modules/csharp-if-elseif-else/)

[https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/statements](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/statements)

[https://dotnet.microsoft.com/learn/dotnet/in-browser-tutorial/1](https://dotnet.microsoft.com/learn/dotnet/in-browser-tutorial/1)

### Self Check

1. Are strings mutable?
2. What is StringBuilder?
3. What is difference between Append and AppendLine?
4. What are different formatting options for dates?
5. How do we get current date?
6. How do we get current date and time in UTC format?
7. How do we print short date and long date?
8. What are the control flow statements and iteration statements in C#?
9. What is the difference between Array and ArrayList?
10. What is the difference between Array and List?
11. How many dimensions are supported in Array?
12. How do we create string array and retrieve elements from the array?
13. How do we create List with class and add and retrieve elements from List?
14. What is IList?
15. How do we create two dimension array?
16. How do we create an array and list with specific size?
17. What is the primary difference between For Loop and ForEach Loop?




