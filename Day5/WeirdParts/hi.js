function b() {
  console.log("Inside b", myVar);
}

function a() {
  var myVar = 2;
  console.log("Inside a", myVar);
  b();
}

var myVar = 1;
console.log("Before Calling", myVar)
a();

console.log("After Calling", myVar)
