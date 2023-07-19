var num = [10, 15, 20, 30, 40, 51];

function squared(item) {
  return item ** 2;
}

const array = num.map(squared);
console.log(array);

var arr2 = [];

num.forEach(function (item) {
  arr2.push(item ** 2);
});
console.log(arr2);

var arr3 = num.map(function (item) {
  return item ** 2;
});

console.log(arr3);

// Arrow Function
var arr31 = num.map(function (item) {
  return item ** 3;
});

console.log(arr31);
// We remove function
var arrNew = num.map((item) => {
  return item ** 3;
});

console.log(arrNew);

// we remove brackets
var arrNew2 = num.map((item) => {
  return item ** 3;
});

console.log(arrNew2);

// we remove return & extra colon
var arrNew3 = num.map((item) => item ** 3);

console.log(arrNew3);
