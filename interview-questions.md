# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer:
  This means that Rails provides default structures for a database, a web service, and web pages.

  Researched answer: 
  MVC is a pattern for the architecture of a software application. It separates an application into the following components:
       Models for handling data and business logic
       Controllers for handling the user interface and application
       Views for handling graphical user interface objects and presentation
https://www.sitepoint.com/model-view-controller-mvc-architecture-rails/


2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: 
  Create, Read, Update, and Delete are the four basic functions that models should be able to do.

  Researched answer: 
  Create, Read, Update, Delete
  CRUD is basic functionality that we want our models to possess in our applications. So if we’re building an API that has a Recipe model, then that model should be able to Create new recipes, Read (or Show) those recipes, Update (and Edit) them, and lastly we should be able to Delete them. Seems pretty straight forward and honestly it is! Let’s see what these individual functions look like.
https://www.codecademy.com/articles/what-is-crud
https://medium.com/@thorntonbrenden/whats-a-crud-app-e5a29cce03b5


3. What is a relational database? Are there other kinds of databases?

  Your answer: 
  A relational database is a collection of information that provides access to data points.


  Researched answer:
  A relational database is a type of database that stores and provides access to data points that are related to one another. Relational databases are based on the relational model, an intuitive, straightforward way of representing data in tables. In a relational database, each row in the table is a record with a unique ID called the key. The columns of the table hold attributes of the data, and each record usually has a value for each attribute, making it easy to establish the relationships among data points.

  <!-- Study this  -->
  "Recollect that ActiveRecord is an Object Relational Mapper (ORM) — specific to Ruby (DSL)— defined by the documentation as “a technique that connects the rich objects of an application to tables in a relational database management system.” A technique is an understatement. It is a multi-purpose back-end technology designed to handle any task related to an application’s database. It allows you to construct, persist, store, read and manipulate real world objects that interact with one another without having to write any SQL. You can shape these objects to fit together, sort of like a Jigsaw puzzle.
Models are the pieces to the Jigsaw. They are bound by ActiveRecord associations and are structured however you intend your data to flow in conjunction. After migrating a model’s table to the database, ActiveRecord maps the columns of each row with the attributes that make up said model. This is essentially how a relational database operates."
https://medium.com/swlh/rails-activerecord-relational-objects-f0c31ee679ca


4. What are the 5 HTTP verbs? What are they important?

  Your answer: get, post, put, patch, delete

  Researched answer:

HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. Although they can also be nouns, these request methods are sometimes referred to as HTTP verbs. Each of them implements a different semantic, but some common features are shared by a group of them: e.g. a request method can be safe, idempotent, or cacheable.

GET
The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

POST
The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.

PUT
The PUT method replaces all current representations of the target resource with the request payload.

PATCH
The PATCH method is used to apply partial modifications to a resource.

DELETE
The DELETE method deletes the specified resource.




5. What is object-relational mapping?

  Your answer:
  ORM (Object-relational mapping) is a programming technique for converting data between incompatible systems using object-oriented programming languages. ORM is a tool that allows developers to write SQL queries using Rails.

  Researched answer:

  Object-relational-mapping is the idea of being able to write queries like the one above, as well as much more complicated ones, using the object-oriented paradigm of your preferred programming language.
  Long story short, we are trying to interact with our database using our language of choice instead of SQL.
https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a


6. What is a gem?

  Your answer:
  A gem is a package that you can download & install. 

  Researched answer:
  They are simply open source libraries that contain Ruby code and are packaged with a little extra data . Using a gem allows a programmer to use the code within the gem in their own program, without explicitly inserting that code.



7. What are primary keys? Why are they important?

  Your answer:
  A primary key is a key in a relational database that is unique for each record.

  Researched answer:


Definition - What does Primary Key mean?

A primary key is a special relational database table column (or combination of columns) designated to uniquely identify each table record.

A primary key is used as a unique identifier to quickly parse data within the table. A table cannot have more than one primary key.

A primary key’s main features are:

It must contain a unique value for each row of data.
It cannot contain null values.
Every row must have a primary key value.
A primary key might use one or more fields already present in the underlying data model, or a specific extra field can be created to be the primary key.
https://www.techopedia.com/definition/5547/primary-key


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- RESTful routes
Restful routes are just a conventional pattern to follow when structuring different routes for interacting with the server whenever an HTTP request is made by the client. And for a route to be completely restful it must do the following:
Separate the client from the server
Not hold state between requests (i.e all information necessary to respond to a request is available in each request: no data or state, is held by the server from request to request)
Use HTTP and HTTP methods
Be reliable (for e.g most APIs follow the restful route pattern when specifying the process for authentication and important URLs)
https://medium.com/@atingenkay/restful-routes-what-are-they-8fe221521bb

- JSON
JSON stands for JavaScript Object Notation

JSON is a lightweight format for storing and transporting data

JSON is often used when data is sent from a server to a web page

JSON is "self-describing" and easy to understand
https://www.w3schools.com/whatis/whatis_json.asp

- Endpoints
An endpoint is a remote computing device that communicates back and forth with a network to which it is connected.
https://www.paloaltonetworks.com/cyberpedia/what-is-an-endpoint

- Strong params
It provides an interface for protecting attributes from end-user assignment. This makes Action Controller parameters forbidden to be used in Active Model mass assignment until they have been explicitly enumerated.

In addition, parameters can be marked as required and flow through a predefined raise/rescue flow to end up as a 400 Bad Request with no effort.
https://api.rubyonrails.org/classes/ActionController/StrongParameters.html

- Validations
Validations are used to ensure that only valid data is saved into your database. For example, it may be important to your application to ensure that every user provides a valid email address and mailing address. Model-level validations are the best way to ensure that only valid data is saved into your database. They are database agnostic, cannot be bypassed by end users, and are convenient to test and maintain. Rails makes them easy to use, provides built-in helpers for common needs, and allows you to create your own validation methods as well.

https://guides.rubyonrails.org/active_record_validations.html
