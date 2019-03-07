// function constructor
// var phone = {
//   name: 'Phone',
//   yearOfBirth: 1995,
//   job: 'Web Developer'
// };
//
// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }
//
// Person.prototype.calculateAge = function() {
//   console.log(2019 - this.yearOfBirth);
// }
//
// var phone = new Person('Phonekham', 1995, "Developer");
// var phone2 = new Person('Phonekham2', 1994, "Developer");
// console.log(phone);
// phone.calculateAge();
// phone2.calculateAge();

// object.create
// var personProto = {
//   calculateAge: function() {
//     console.log(2019 - this.yearOfBirth);
//   }
// };
// var phone = Object.create(personProto);
// phone.name = 'phone';
//
// var test = Object.create(personProto, {
//   name: {
//     value: 'phone'
//   },
//   yearOfBirth: {
//     value: 1995
//   },
//   job: {
//     value: 'Developer'
//   }
//
// });

// primative vs object
var a = 23;
var b = a,
  a = 46;
console.log(a);
console.log(b);

var obj1 = {
  name: 'phone',
  age: 24
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);