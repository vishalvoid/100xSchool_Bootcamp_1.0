// best way to set class and objects.
class Animal2 {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    ``;
    this.speaks = speaks;
  }

  // here we can define some function station that should only be called on a class. and that means it should not be called on it's objects. for example
  // we can create so many different types of architecture. but the pace of paper where that architecture is called should be white in color.
  static myType() {
    console.log("this property only class will have");
  }

  // we can create any function here and that will have all the properties that we have st it here.
  speak() {
    console.log("this animal " + this.speaks);
  }
}

let dog = new Animal2("karma", 4, "bhow bhow");
let cat = new Animal2("Cat", 4, "meow meow");

// here I can call the function on the objects. that means out all animals have speak capability.

dog.speak();

// here we can all the static method which should not be called on objects. it should directly called on the class itself.
Animal2.myType();
