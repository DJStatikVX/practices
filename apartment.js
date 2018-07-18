// wrong code when logging because of refering variables on a functional scope

function myApartment() { // here comes all variables on functional, not global scope
  var myCoffeeMaker = 'Aeropress';
  var buildingAddress = '150 E 14th St, New York, NY';
  var myCloset = 'Extra coats in the back';
  var buildingLaundryCode = 4927;
  var myRefridgerator = 'Filled with veggies and dark chocolate.';
  var myDog = 'Nikko';
  var buildingPhone = '(481) 516-2342';
}

console.log("**Apartment Building Information**");
console.log("Laundry code: " + buildingLaundryCode + "\nPhone: " + buildingPhone + "\nMailing address: " + buildingAddress);

// right code after changing myApartment function variables into global scope

function myApartment() {
  
}

var myCoffeeMaker = 'Aeropress';
var buildingAddress = '150 E 14th St, New York, NY';
var myCloset = 'Extra coats in the back';
var buildingLaundryCode = 4927;
var myRefridgerator = 'Filled with veggies and dark chocolate.';
var myDog = 'Nikko';
var buildingPhone = '(481) 516-2342';

console.log("**Apartment Building Information**");
console.log("Laundry code: " + buildingLaundryCode + "\nPhone: " + buildingPhone + "\nMailing address: " + buildingAddress);

// successful output
