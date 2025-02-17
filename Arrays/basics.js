const s4=["Clementine","AJ","Louis","Marlon","Violet","Lilly","Abel"];
//print array
console.lon(s4);
//length of array
console.log(s4.length);
//access specific element
console.log(s4[0]);
//change specific element
s4[0]="Clem";
//find index of element
console.log(s4.indexOF("AJ"));//1
//append new element at end of array
s4.push("Minerva");
//add element to start of array
s4.unshift("Lee");
//remove last element
s4.pop();
//remove first element
s4.shift();
// check if element exists in array
consolr.log(s4.includes("Kenny"))//false
//sort
s4.sort()
//reverse
s4.reverse();
//Joins all elements of an array into a string and returns it.
const fullcast=s4.join('-');//each element seperated by '-'

//slicing based on indexes
s4.slice(0,2)// 0 is start index and 2 is end index *it returns a new array*
//splice(similar to slice)
s4.splice(0,2)//0 is the start index and 2 is the number of elements to remove starting from the start index, *it returns new array and modifies the existing array*
