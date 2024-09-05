const sayHello=()=>{    //can use let,const,var
  console.log("hello");
};                      //put semi colon at end

sayHello();    //function call like regular function

// const add=(a,b)=>{
//   return a+b;
// };            this function is valid and syntactically correct 
//"better" way to write this function
const add=(a,b)=>a+b;  //since the function had only 1line in body we can write the function like this
