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
// var a = 23;
// var b = a,
//   a = 46;
// console.log(a);
// console.log(b);
//
// var obj1 = {
//   name: 'phone',
//   age: 24
// };
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

//passing function as arguement
var years = [1992, 1994, 2009, 2003, 1995];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2019 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}
var ages = arrayCalc(years, calculateAge);
console.log(ages);
var isFull = arrayCalc(ages, isFullAge);
console.log(isFull);
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);