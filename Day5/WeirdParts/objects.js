var person = new Object();

person["name"] = "Tony";
person["secondName"] = "Alex";
const firstNameProperty = "name";
console.log(person)
console.log(person[firstNameProperty])

var objectLiterals = {
  firsName: "Ravi",
  lastName: "Aswin",
  address: {
    state: "Tamil Nadu",
    city: "Salem",
  },
  play() {
    console.log("Playing Cricket")
  }
}

console.log(objectLiterals)
objectLiterals.play();
function greet(person) {
  console.log("Hi" + person.firsName);
}

greet(tony);

greet({
  firsName: "Pravin",
  lastName: "Doe"
});