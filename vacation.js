var myArray = ['Euskal Herria', 'Madrid', 'Beijing'];
var vacationSpots = myArray;

// for loop which logs from first myArray item position to the last one
for(var i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}

// for loop which logs from last myArray item position to the first one
for(var i = vacationSpots.length - 1; i >= 0; i--) { // the - 1 operation is used for avoiding undefined array items logging as myArray.length is 3 and last item comes about myArray[2]
  console.log('I would love to visit ' + vacationSpots[i]);
}
