// OOP is a model for programming based on classes and objects

// Classes are like blueprints for objects
// Objects are instances of the class (like the building created from the blueprints)

var name = "bill"
var name2 = "sally"
var name3 = "john"
var address = "123 main st"
var address2 = "234 main st"
//...

// 
var people = [
    {
        name: "bill",
        address: "123 main st",
    },
    {
        name: "sally",
        address: "234 main st",
        phone: "555-1234"
    }
] 

// just an object, not a blueprint
// var Cat = {
//     name: '',
//     color: '',
//     breed: '',
//     declawed: false,
// }

// ES5 syntax - older way, but more true to what is actually going on

// can use a constructor function to create a blueprint
function Cat(name, color, breed, declawed) {
    console.log(this);

    // with the new keyword:
    // var this = {};

    this.name = name;
    this.color = color;
    this.breed = breed;
    this.declawed = declawed; 

    // return this with new keyword
    // return undefined without new keyword

    // this is a method (a function attached to an object)
    // attaching methods in this way is bad practice, because it will duplicate all of the function's code for each instance of the class
    // this.meow = function(){
    //     console.log("MEOW");
    // }
}

var Cheeto = new Cat("Cheeto", "Orange", "Calico", false);

// In JS, the prototype is something that belongs to all functions/objects
// This is the good practice way to add methods to a specific class
Cat.prototype.meow = function() {
    console.log("MEOW!");
}

var Duke = new Cat("Duke", "Blue", "Devil", false);


// ES6 syntax - more like other OOP languages (syntactic sugar)
class Cat2 {
    constructor(name, color, breed, declawed) {
        this.name = name;
        this.color = color;
        this.breed = breed;
        this.declawed = declawed;
    }

    meow() {
        console.log(this.name + " meows!");
    }
}

// instantiating the Cat2 class
var Garfield = new Cat2("Garfield","Orange", "Fat", true);
var Felix = new Cat2("Felix", "Mud brown", "Tomcat", false);

// In class challenge I:

// Make a class constructor for breakfast cereals 
// name => String
// sweetness => Number
// crunchFactor => Number
// mascotName = String


// ES6
class Cereal{
    constructor(name, sweetness, crunchFactor, mascotName){
        this.name = name;
        this.sweetness = sweetness;
        this.crunchFactor = crunchFactor;
        this.mascotName = mascotName;
        this.servings = 4;
    }

    makeYouFat() {
        console.log("Eating " + this.mascotName + "'s cereal will make you fat!")
    }

    pour() {
        if(this.servings <= 0) {
            console.log("None left!");
            return;
        }
        this.servings--;

        if(this.servings === 1) {
            console.log("You're almost out!");
        } else if (this.servings === 0) {
            console.log("Empty! Time to buy a new box");
        }

        console.log("Crunch crunch");
    }

    buyNewBox() {
        this.servings = 4;
    }
}

// ES5
function Cereal2(name, sweetness, crunchFactor, mascotName) {
    this.name = name;
    this.sweetness = sweetness;
    this.crunchFactor = crunchFactor;
    this.mascotName = mascotName;
    this.servings = 4;
}

Cereal2.prototype.makeYouFat = function() {
    console.log("Eating " + this.mascotName + "'s cereal will make you fat!")
}

// create instances of the classes
var CinnamonToastCrunch = new Cereal("Cinnamon Toast Crunch", 10,
4, "Toothless McGee");
var CinnamonToastCrunch2 = new Cereal2("Cinnamon Toast Crunch", 10,
4, "Toothless McGee");

// Challenge II
// Add a method to the Cereal class called makeYouFat
// in the method, print how the cereal will make you fat if you eat too much of it





