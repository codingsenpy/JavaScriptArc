function main(){         //Main function                                    //     SIMPLE
  const name="Zain"      // Local variable                                  //        EXAMPLE
  function printName(){  // Nested Function                                 //          FOR   
    console.log(name);   // Inner function accessing parent scope variable  //            CLOSURE
  }                      //                                                 // 
  printName();           // Inner function being called                     //   STEP
}                        //                                                 //       ONE
main();                  // Main function being called O/P:Zain             //
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function main(){        //                                                                                                  //    STEP
  const name="Zain"     //                                                                                                  //
  function printName(){ //                                                                                                  //
    console.log(name);  //                                                                                                  //        TWO
  }                     //                                                                                                  //
  return printName;     // just returning the function wihtout calling or executing it                                      //   
}                       //                                                                                                  // 
main();                 // O/P: (nothing comes in console beacase the 'printName'func is not being called like 'printName()'//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const caller=main();                                                                                                        //      STEP
caller(); //here we are calling the inner function because 'caller' stores reference to printName  //O/P: Zain              //          THREE
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////
function adder(num){   //              PRACTICAL                                //  
  function add(n){     //                    USE                                //      STEP
    console.log(num+n);//                      CASE                             // 
  }                    //                                                       //        FOUR
  return add;          //                                                       //       
}                      //                                                       // 
const addTo5=adder(5); //           argument '5' is passed to adder(num) func   //
addTo5(2);             //O/P: 7  // argument '2' is passed to 'add(n)' function // 
addTo5(10);            //O/P: 15 // argument '10' is passed to 'add(n)' function//
//////////////////////////////////////////////////////////////////////////////////
