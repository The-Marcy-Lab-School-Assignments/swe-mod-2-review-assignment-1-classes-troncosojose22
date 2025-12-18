# Short Response

## Question 1

For each scenario, identify whether the relationship is **inheritance** or **composition**, and provide a brief explanation.

For example, a `Song` and a `MediaItem` have an inheritance relationship because "a song is a type of media item". Meanwhile a team and player have a composition relationship because "a team has many players".

1. A `Car` class and an `Engine` class, where a car contains an engine
2. A `Dog` class and an `Animal` class, where a dog is a type of animal
3. A `Classroom` class and a `Student` class, where a classroom contains multiple students
4. A `Rectangle` class and a `Shape` class, where a rectangle is a type of shape
5. A `Computer` class and a `CPU` class, where a computer contains a CPU
6. A `Manager` class and an `Employee` class, where a manager is a type of employee

### Response 1

1. This is a **composition** relationship, since we can say that `Engine` is a component of `Car` not a type of `Car`.
2. This is an **inheritance** relationship, since we can say that a `Dog` is a type of `Animal`.
3. This is a composition relationship, since we can say that a `Classroom` has many `Students`
4. This is an inheritance relationship, since we can say that a `Rectangle` is a type of `Shape`
5. This is a composition relationship, since we can say that a `Cpu` is part of a `Computer`.
6. This is an inheritance relationship, since we can say that a `Manager` is a type of `Employee`.

---

## Question 2

In Problem 1, you are asked to implement a `Song`, `Podcast`, and `Audiobook` classes that all extend the `MediaItem` base class. Each class has their own `play()` method. This demonstrates **polymorphism**.

In your own words, explain what polymorphism means and why it is useful. Use the `MediaItem` example from this assignment to support your explanation.

### Response 2

We can say that **polymorphism** is how different types of **objects** can be treated the same way because they share the same interface even though each type implements those **methods** differently.

Polymorphism improves the reusability of our code, we can see it in the `media.js` file where all of our **classes** share the same method `play()`, but each class has a different implementation of this method as shown in the following code snippet:

```js
class Podcast extends MediaItem {
  constructor(title, duration, host, episodeNumber) {
    super(title, duration);
    this.host = host;
    this.episodeNumber = episodeNumber;
  }

  play() {
    return `${super.play()} with host ${this.host}, Episode ${
      this.episodeNumber
    }`;
  }
}

class Audiobook extends MediaItem {
  constructor(title, duration, author, narrator) {
    super(title, duration);
    this.author = author;
    this.narrator = narrator;
  }

  play() {
    return `${super.play()} by ${this.author}, narrated by ${this.narrator}`;
  }
}
```

---

## Question 3

In JavaScript classes, properties and methods can be either **instance-level** or **static**.

a) What is the difference between an instance property and a static property?

b) Give an example of when you would want to use a static property or method instead of an instance property or method.

### Response 3

a) **Instance-level** **properties** are the properties that belong to any **object** instance that is initialized. On the other hand, **static** properties belong to the **class** that creates this instances.

b) For example, if I was creating a `Student` class and I wanted to keep track of every single `Student` instance, I would create a static property called `static allStudents` holding the information of all the instances. This is not information that you would want to keep inside any particular instance, but rather inside of the class itself.
