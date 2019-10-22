// // QUESTION: 1 A
class Person {
  constructor(firstName,lastName, middlename){
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middlename;
  }
  fullName(firstName, middleName,lastName){
    return this.firstName + " " + this.middleName + " " + this.lastName
  }
}
let kelvin = new Person("Kelvin", "A", "")
let ohidur = new Person("Ohidur", "R", "W")
console.log(kelvin.firstName);

//B
console.log(kelvin.fullName());
console.log(ohidur.fullName());

// QUESTION: 2
//A
 class Book{
   constructor(title, author, rating){
     this.title = title;
     this.author = author;
     this.rating = rating;
   }
   isGood(){
     if(this.rating >= 7){
       return true
     } else {
       return false
     }
   }
 }
 let ender = new Book("Ender's Game", "Orson Scottcard", 8.0)
 let potter = new Book("Harry Potter", "J.K Rowling", 3.0)
console.log(ender.isGood());
console.log(potter.isGood());

// QUESTION: 3
//

class Dog {
  constructor(name,breed,mood,hungry){
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
  }
  playFetch(){
     this.hungry === true
      this.mood === "playful"
    return "Ruff!"
  }
  feed(){
    if(this.hungry === false){
      return "Woof!"
    }else {
      return "The dog doesnt't look hungry."
    }
  }
  toString(){
    return this.name + " " + this.breed + " " + this.mood + " " + this.hungry
  }
}

let spots = new Dog("spots","mutts","happy",false)
console.log(spots);
console.log(spots.playFetch());
console.log(spots.feed());
console.log(spots.toString());

// QUESTION:  4

class FreezingPoint {
  constructor(celsius = 0,fahrenheit = 32 ,kelvin = 273){
    this.celsius = celsius;
    this.fahrenheit = fahrenheit;
    this.kelvin = kelvin;
  }
}
class Celsius {
  constructor(celsius){
    this.celsius = celsius
  }
  getFahrenheitTemp(){
    return (1.8 * this.celsius) + 32
  }
  getKelvinTemp(){
    return this.celsius + 273
  }
  isBelowFreezing(c){
    if( c < 0){
      return true
    }
  }
}
let outsideTempt = new Celsius(10.0)
console.log(outsideTempt.celsius)
console.log(outsideTempt.getKelvinTemp());
console.log(outsideTempt.getFahrenheitTemp());
console.log(outsideTempt.isBelowFreezing(-30));

// QUESTION: 5
class Movie {
  constructor(name,year,genre,cast,description){
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description;

  }
  blurb(){
    return this.name + " came out in "+ this.year + ". It was an "+ this.genre + " film starring " + this.cast + " " +this.description

  }
}
let borat = new Movie("Borat", 2006, "odd", "Sacha Baron Cohen", "as a man named Borat who was visiting America from Kazakhstan.")
console.log(borat)
console.log(borat.blurb());

// QUESTION: 6
class Vector {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  plus(vector){
  let newVector =  ((this.x + vector.x)(this.y +vector.y))
    return newVector
    }
  }
var v1 = new Vector(1,2)
var v2 = new Vector(4,3)
console.log(v1.plus(v2));
