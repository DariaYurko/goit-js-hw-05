"use strict";
/**
 * Returns the results of checking whether all the items will fit in the container
 * @param {Object} products
 * @param {Number} containerSize
 * @returns {Boolean}
 */
function isEnoughCapacity(products, containerSize) {
  const arrayOfItems = Object.values(products);
  let quantityOfItems = 0;

  for (const item of arrayOfItems) {
    quantityOfItems += item;
  }

  if (quantityOfItems <= containerSize) {
    return true;
  }
  return false;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
