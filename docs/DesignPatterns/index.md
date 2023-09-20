---
description: Landing page for Design Patterns
sidebar_label: Design Patterns
---

# Design Patterns 

## References

1. [Design Patterns, Refactoring Guru](https://refactoring.guru/design-patterns)

## Notes:

**O**bject **O**riented **P**rogramming is paradigm based on concept of wrapping peices of data, and behaviour related to that data, into special bundles called **Objects**, which are constructed from blueprints aka **Classes**

## Pillars of OOP

### 1. Abstraction 
1. The concept of simplifying complex reality, by modeling classes based on the **essential properties and behaviors** they exhibit.
2. It cannot be instantiated directly and serves as a blueprint for other classes.
3. It defines one or more abstract methods, which are methods without an implementation. Subclasses that inherit from an abstract class must provide concrete implementations for these abstract methods.

### 2. Encapsulation
1. It is a way of restricting direct access to some of an object's components while exposing others through well-defined interfaces.
2. Main goals of encapsulation are - Data hiding, Access Control, Abstraction

### 3. Polymorphism
Polymorphism is the ability of a program to detect the real class of an object and call its implementation even when its real type is unknown in the current context.

### 4. Inheritance
1. Inheritance allows you to create a new class that is a modified or specialized version of an existing class, promoting code reuse and the creation of a hierarchical class structure.

## Relation between Objects 

1. Association Classes
    a. Aggregation 
    b. Composition
2. Dependecy
    a. Compile-time dependency
    b. Runtime dependency
3. Inheritance (Generalization)
4. Realization (Interface Implementation)
5. Composition Over Inheritance (COI)
7. Dependency Injection
8. Collaboration
9 Peer (Sibiling) Objects

## Classification of Patterns

- Creational Patterns: provide **object creation mechanisms** that increase felxiblity & reuse of existing code.

- Structural Patterns: explain how to **assemble objects and classes into larger structures**, still keeping the structures flexible and efficient.

- Behavioural Patterns: take care of **effective communication & the assignment of responsibilities** between objects.

## Features of Good Design 

- Code reuse
- Extensibility

## Design Principles 

- Encapsulate what varies 
    - Encapsulation on a method level
    - Encapsulation on a class level
- Program to an Interface, not an Implementation
- Favor Composition over inheritance


## SOLID Principles
- **S**ingle Responsiblity Principle
- **O**pen/Closed Principle
- **L**iskov Substitution Principle
- **I**nterface Segregation Principle
- **D**ependency Inversion Principle

