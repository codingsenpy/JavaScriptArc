const s3 = ["Clem", "Javi", "David", "gabe", "kate", "Tripp"];


// forEach()
// `forEach` iterates over each element and applies the given function.
// It does not return a new array; it just performs an action.
s3.forEach((val) => console.log(val + "twd")); // Appends 'twd' & prints each element one by one


// map()
// `map` returns a new array where each element is transformed by the given function.
const s3modded = s3.map((val) => val + "twd");
console.log(s3modded); // ["Clemtwd", "Javitwd", "Davidtwd", "gabtwd", "katetwd", "Tripptwd"]


// find()
// `find` returns the first element that satisfies the provided testing function.
let mvp = s3.find((val) => val === "Clem");
console.log("The main character is " + mvp); // Output: Clem


// filter()
// `filter` creates a new array with all elements that pass the test implemented by the provided function.
const s3but4letters = s3.filter((val) => val.length === 4);
console.log(s3but4letters); // ["Clem", "Javi", "gabe", "kate"]


// slice() 
// `slice` returns a shallow copy of a portion of an array into a new array object.
// It includes elements from the start index up to, but not including, the end index.
const best = s3.slice(0, 3); // Elements from index 0 to 2 (3 - 1)
console.log(best); // ["Clem", "Javi", "David"]


// splice() 
// `splice` changes the contents of an array by removing or replacing existing elements and/or adding new elements.
const worst = s3.splice(5, 2); // Removes 2 elements starting from index 5
console.log(worst); // ["kate", "Tripp"]
console.log(s3); // ["Clem", "Javi", "David", "gabe"]


