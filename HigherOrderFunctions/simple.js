//lets consider simple example
function add(a,b){
  return a+b;
}
console.log(add(2,3))
//now lets apply higherorder

//**2**
function add1(a,b,cb){  //cb refers to callback
  let result=a+b;
  cb(result);
}

//**3**
function showresult(arg){
  console.log(arg);
}

//**1**
add1(2,3,showresult); 

// 1,2,3 are order of execution


//we can simply this code even more
add1(2,3, function (val){    //here we integrated the 'showresult' function in here itself, making code smaller
  console.log(val);
});

//we can use arrow functions here instead
add1(2,3,(val)=>console.log(val));
