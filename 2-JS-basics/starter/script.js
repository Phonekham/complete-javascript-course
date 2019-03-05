function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = .2;
  } else if (bill >= 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * bill;
}
// console.log(tipCalculator(100));
var bills = [55, 100, 300];
var tips = [tipCalculator(bills[0]),
  tipCalculator(bills[2])
];
var finalvalue = [bills[0] + tips[0],
  bills[2] + tips[2]
];
console.log(tips, finalvalue);

var phone = {
  name: "phone",
  age: 23
}
phone.name = "hub";
phone['age'] = 24;
console.log(phone);