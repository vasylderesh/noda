/**
 * Given three numbers, returns true is a triangle exists with those three
 * numbers as side lengths, and false otherwise.
 *
 * @param {number} a Side length #1
 * @param {number} b Side length #2
 * @param {number} c Side length #3
 * @returns {boolean} True if a triangle exists with side lengths of a, b, and c. Returns false otherwise.
 */
function isValidTriangle(a, b, c) {
    // Put your code here
}
  

console.log('Running sanity checks for isValidTriangle:');

// The order of the arguments should not matter.
console.log(isValidTriangle(3, 4, 5) === true);
console.log(isValidTriangle(3, 5, 4) === true);
console.log(isValidTriangle(4, 3, 5) === true);
console.log(isValidTriangle(4, 5, 3) === true);
console.log(isValidTriangle(5, 3, 4) === true);
console.log(isValidTriangle(5, 4, 3) === true);
