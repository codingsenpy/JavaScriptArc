function addNums(a,b){  //accepts 2 parameters only
  return a+b
}
console.log(addNums(2,3))

function addNumbers(){
  let ans=0;
  console.log(arguments) //prints all the arguments passed during function call
  for(let i=0; i<arguments.length;i++){
    ans=+arguments[i];
  }
  return ans
}

console.log(addNumbers(2,3,4,5,6,7,))
