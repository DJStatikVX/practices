var bucketList = ['One', 'Two', 'Three']; // we use [ and ] for defining arrays
var listItem = bucketList[3]; // [3] means the array position item that will be assigned to the variable. Arrays always start from 0.

bucketList.push('Four', 'Five'); // push() method will add those elements to our bucketList array
bucketList.pop(); // pop() method will always delete the last item from an array

console.log(bucketList.length); // .length property will return how many items our array contains
