const object = {
  name: "chime chibuike princewill",
  age: 20,
  complexity: "fait"
};

console.log(object.name); //chime chibuike princewill
console.log(object.age); //2o
console.log(object.complexity); //fair

console.log(object["name"]); //chime chibuike princewill
console.log(object["age"]); //2o
console.log(object["complexity"]); //fair

function Students(name, age, complexity) {
  (this.name = name), (this.age = age), (this.complexity = complexity);
}

let student1 = new Students("chima", 15, "black");
console.log(student1); //Students { name: 'chima', age: 15, complexity: 'black' }
let student2 = new Students("williams", 28, "fair");
console.log(student2); //Students { name: 'williams', age: 28, complexity: 'fair' }

class Student {
  constructor(name, age, complexion) {
    this.name = name;
    this.age = name;
    this.complexion = complexion;
  }
  greeting() {
    return `hello am ${this.name} is nice coming around`;
  }
}

const john = new Student("john", 34, "dark");
console.log(john);
console.log(john.greeting());

// let proto = Object.getPrototypeOf(john);
// console.log(proto);

// let setProto = (Students.prototype.name = "chioma");
Students.prototype.passion = true;
console.log(Students.prototype); //Students { name: 'williams', age: 28, complexity: 'fair' }
let caus = Object.create(student1);
caus.name = "peter";
caus.paw_paw = "fruit";
console.log(caus.age);

function doSomeThing() {}
console.log(doSomeThing.prototype);
var doSomeThing = function() {};
console.log(doSomeThing.prototype);

let animals = {
  name: "doge",
  color: "balck"
};

let cat = {
  neatness: true,
  __proto__: animals
};
// rabbit._proto_: = mammals
console.log(cat.color);

function Buddy(name, age, complexion) {
  this.name = name;
  this.age = age;
  this.complexion = complexion;
}

Buddy.prototype.greeting = function() {
  return `Hello every I am ${this.name} and am ${this.complexion} in complexion`;
};
let buddy1 = new Buddy("paul", 34, "fair");
console.log(buddy1);
console.log(buddy1.greeting());

let buddy2 = new Buddy("peter", 23, "dark");
console.log(buddy2);
console.log(buddy2.greeting);

function Teachers(name, age, complexion, course) {
  Buddy.call(this, name, age, complexion);
  this.course = course;
}
// Teachers.prototype = Object.create(Buddy.prototype);

Teachers.prototype.greeting = function() {
  return `Hello I am ${this.name} and I takes the students on  ${this.course}`;
};
let teacher1 = new Teachers("peace", 25, "fair", "mathematics");
console.log(teacher1.greeting());

let teacher2 = new Teachers("williams", 25, "dark", "english");
console.log(teacher2);
console.log(teacher2.greeting());

class Carrier {
  constructor(name, age, complexion) {
    this.name = name;
    this.age = age;
    this.complexion = complexion;
  }
  greeting() {
    return `hello there I am ${this.name} I am ${this.age} old`;
  }
}

const studentName = new Carrier("grace", 32, "fair");
console.log(studentName);

class Colleagues extends Carrier {
  constructor(name, age, complexion, course) {
    super(name, age, complexion);
    this.course = course;
  }
}

const mate1 = new Colleagues("miracle", 23, "dark", "english");
console.log(mate1);
console.log(mate1.greeting());

function name(names) {
  return this.names;
}
console.log(name("cynthia"));

const names = name => {
  return this.name;
};
console.log(names("cynthia"));
