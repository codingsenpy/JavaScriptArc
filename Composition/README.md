**THIS IS FUNCTIONAL CODE FOR 'COMP2.JS'**



// Function to sum any number of arguments
function add(...args) {
  return args.reduce((a, b) => a + b, 0);
}

// Function to square a number
function square(a) {
  return a * a;
}

// Function to compose multiple functions
function compose(...fns) {
  return function(...values) {
    // Apply functions from right to left
    return fns.reduceRight((acc, fn) => [fn(...acc)], values)[0];
  };
}

const task = compose(square, add);
console.log(task(2, 3)); // Output: 25

// ES6 modern JavaScript version
const composeES6 = (...fns) => (...values) => 
  fns.reduceRight((acc, fn) => [fn(...acc)], values)[0];

const taskES6 = composeES6(square, add);
console.log(taskES6(2, 3)); // Output: 25
