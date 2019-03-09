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
// var years = [1992, 1994, 2009, 2003, 1995];
//
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }
//
// function calculateAge(el) {
//   return 2019 - el;
// }
//
// function isFullAge(el) {
//   return el >= 18;
// }
//
// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - (0.67 * el));
//   } else {
//     return -1;
//   }
// }
// var ages = arrayCalc(years, calculateAge);
// console.log(ages);
// var isFull = arrayCalc(ages, isFullAge);
// console.log(isFull);
// var rates = arrayCalc(ages, maxHeartRate);
// console.log(rates);

// function returning function
// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log(name + 'can u explain ux');
//     }
//   } else if (job === 'teacher') {
//     return function(name) {
//       console.log(name + ' teach what subject');
//     }
//   } else {
//     return function(name) {
//       console.log('hello' + 'what do you do');
//     }
//   }
// }
//
// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('ko');
// var designerQuestion = interviewQuestion('designer');
// teacherQuestion('jhon');

// IIFE
// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

// (function() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();
//
// // console.log(score);
//
// (function(good) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - good);
// })(5);

// closure
// function retirement(retirementAge) {
//   var a = ' years left until retirement';
//   return function(yearOfBirth) {
//     var age = 2019 - yearOfBirth;
//     console.log((retirementAge - age) + a);
//   }
// }
//
// var retirementLao = retirement(70);
// var retirementThai = retirement(65);
// retirementLao(1990);
// retirementThai(1990);
// retirement(70)(1995);
//
// function interviewQuestion(job) {
//   return function(name) {
//     if (job === 'designer') {
//       console.log(name + 'can u explain ux');
//     } else if (job === 'teacher') {
//       console.log(name + ' teach what subject');
//     } else {
//       console.log('hello' + 'what do you do');
//     }
//   }
// }
//
// interviewQuestion('teacher')('phone');

// bind, call and apply
var phone = {
  name: 'phone',
  age: 24,
  job: 'Web Developer',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a' + this.job + 'and I\'m ' + this.age + 'years old.');
    } else if (style == 'friendly') {
      console.log('Hey! whats up I\'m ' + this.name + ', I\'m a' + this.job + 'and I\'m ' + this.age + 'years old. have a nice' + timeOfDay + '.')
    }
  }
};

var test = {
  name: 'test',
  age: 25,
  job: 'Web designer'
};

phone.presentation('formal', 'morning');
phone.presentation.call(test, 'friendly', 'afternoon');

var testFriendly = phone.presentation.bind(phone, 'friendly');
testFriendly('morning');

var testFormal = phone.presentation.bind(test, 'formal');
testFormal('afternoon');