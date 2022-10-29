let zib = "zibert";

console.log(zib.includes("zib"));

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age + " лет";
        this.gender = gender;
    }
    greet() {
        return `Hi! ${this.name}`;
    }
}

const person = new Person("Jogn", 25, "male");
console.log(person);

class Developer extends Person {
    constructor(...args) {
        super(...args);
        this.skills = args[3] || [];
    }
    greet() {
        const res = super.greet();
        return `${res}. Yea!`;
    }
    develop() {
        return "cool!";
    }
}

const developer = new Developer("Sol", 30, "shemale", ["zib"]);
console.log(developer.develop());

// functions
// const Person = function(name, age, gender) {
//     this.name = name;
//     this.age = age + " лет";
//     this.gender = gender;
// };

// const functionality = {
//     start: 0,
//     end: 122,
//     step: 1,
//     greet() {
//         return `Hi! ${this.name}`;
//     }
// };

// Person.prototype = functionality;
// Person.prototype.constructor = Person;

// const person = new Person("Zibert", 25, "male");

// console.log(person);

// // -----------------------------------------------------

// const Developer = function(name, age, gender, skills) {
//     Person.apply(this, arguments);

//     this.skills = skills || [];
// };

// Developer.prototype = Object.create(Person.prototype);
// Developer.prototype.constructor = Developer;

// const developer = new Developer("John", 25, "male", ["css", "html"]);

// console.log(developer);
// console.log(developer.greet());




// Objects
// const Person = {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age + " лет";
//         this.gender = gender;

//         return this;
//     },
//     greet() {
//         return `Hi! ${this.name}`;
//     }
// };

// const person = Object.create(Person).constructor("Zibert", 25, "male");

// console.log(person);

// const Developer = Object.create(Person);

// Developer.constructor = function(name, age, gender, skills) {
//     Person.constructor.apply(this, arguments);
//     this.skills = skills || [];

//     return this;
// };

// const developer = Object.create(Developer)
//     .constructor("Stanislav", 25, "male");

// console.log(developer);
// console.log(developer.greet());
