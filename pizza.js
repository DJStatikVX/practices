var orderCount = 0;

function takeOrder(topping, crustType) {
  orderCount = orderCount + 1;
  console.log('Order: ' + crustType + ' crust pizza topped with ' + topping);
}

function getSubTotal(itemCount) {
  return itemCount * 7.5;
}

function getTax() {
  return getSubTotal(orderCount) * 0.06;
}

function getTotal() {
  return getSubTotal(orderCount) + getTax();
}

takeOrder('pineapple', 'thin');
takeOrder('bacon', 'classic');
takeOrder('BBQ sauce', 'thin');

console.log(getSubTotal(orderCount));
console.log(getTotal());
