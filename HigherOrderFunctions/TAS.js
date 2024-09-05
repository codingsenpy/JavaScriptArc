function add(a,b,cb){
  let result=a+b;
  cb(result);

  ()=>console.log(result);
}

let resultfunc=add(34,523,()=>{});  //it doesnt output anything yet as the final return statement is just stored in the function 'resultfunc'

resultfunc();  //calling the func actually displays the output in console
