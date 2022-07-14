# PROGRAMMING PARADIGMS

## Introduction

Imperative Programming
Start doing this and then do that.

Functional programming
At least in javascript avoid iterating! Use map,reduce, slice, etc.

Avoid immutability

Structural sharing instead of changing,removing or creatinga new array

## Object Oriented Programming

Objects are **instances of a class** <br>
Classes are **templates for objects**

1- Encapsulation ----> Getters and setters <br>
2- Abstraction --> We care about Interface. Not the implementation behind the hood.<br>
3- Inheritance --> Extending classes... Access modifiers: public, private, modifier<br>
4- Polymorphism --> Interface / Implements in Java ... Same methods' name, but different implementations of methods.<br>

## 4 Pillars of OOP

**Encapsulation**:

- Refers to bundling data with methods that can operate on that data within a class.
- It’s the idea of hiding data within a class, preventing anything outside that class directly interacting with it.
- Keeps the programmer in control of access to data.
- Prevents the programmer from ending up in any strange or unwanted states.

**Abstraction**:

- Refers to the idea to only showing essential details and keeping everything else hidden.
- The classes you create should act like your car. Users of your classes should not worry about the inner details of those classes.
- This is very important when working on your program incrementally.

**Inheritance**:

- Is the principle that allows classes to derive from other classes.

**Polymorphism**:

- Describes methods that are able to take on many forms.
- Allows methods to take on many different forms.
- Be sure that you are calling the correct form of the method.
- There are two types of polymorphism:
  - _Dynamic polymorphism_:
    - Occurs during the runtime of the program.
    - Describes when a method signature is in both subclass and a superclass.
    - The methods share the same name but have different implementation.
    - The implementation of the subclass that the object is an instance of overrides that of the superclass.
  - _Static polymorphism_:
    - Occurs during compile-time rather than during runtime.
    - Refers to when multiply methods with the same name but different arguments are defined in the same class.
    - The parameters are different type or taken in different order.
    - This is known as method overloading.
