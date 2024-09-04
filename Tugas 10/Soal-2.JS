function calculatePrice(quantity, pricePerItem, isMember) {
  let total = quantity * pricePerItem;
  if (isMember == true) {
    return total - (total * 15) / 100;
  } else {
    return total;
  }
}
console.log(calculatePrice(3, 150, true));

function confirmPrice(isConfirmed, totalPrice) {
    if (isConfirmed == true) {
        return `Purchase Confirmed with total ${totalPrice}`;
    } else {
        return `Purchase not confirmed`
    }
}

console.log(confirmPrice(true, calculatePrice(3, 150, true)));
