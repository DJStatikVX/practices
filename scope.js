// wrong code due to scope error at line 14

var laundryRoom = 'Basement';
var mailRoom = 'Room 1A';

function myApartment() {
  var mailBoxNumber = 'Box 3'; // myApartment functional scope variable
  laundryRoom = 'In-unit';
  console.log('Mail box: ' + mailBoxNumber + ', Laundry:' + laundryRoom);
}

console.log('Laundry: ' + laundryRoom + ', Mail: ' + mailRoom);

console.log(mailBoxNumber); // will return an error as mailBoxNumber isn't set on global scope

// right code just by calling myApartment function and setting the previous console.log within it

var laundryRoom = 'Basement';
var mailRoom = 'Room 1A';

function myApartment() {
  var mailBoxNumber = 'Box 3'; // myApartment functional scope variable
  laundryRoom = 'In-unit';
  console.log('Laundry: ' + laundryRoom + ', Mail: ' + mailRoom);
}

myApartment();
