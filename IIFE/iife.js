//Syntax:
(function add(a,b){
  console.log(a+b);
})(2,3); // O/P:5

(function greet(){
  console.log0("hey");
})();// O/P:hry
//////////////////////
//////⇓⇓⇓ES6⇓⇓⇓///////////////////
(()=>console.log("es6 iife"))();//
//////////////////////////////////
const val=(()=>100);
console.log(val);// O/P:100
/////////////////////////////////
//////////↓↓↓EXAMPLE1↓↓↓/////////
///↓↓↓READ.md for more info↓↓↓///
const data(async()=>fetch)()

//////↓↓↓PRACTICAL USE CASE↓↓↓/////    ps: dont think this is iife,but js tutorial vid included this in the iife vid
const atm=function(initialBalance){
  let balance = initialBalance;
  function withdraw(amount){
    if (amount>balance){
      return "UR BROKE";
    }else{
      balance-=amount;
      return balance;
    }
  }
    return { withdraw };
  }

 const zain=atm(6000);
  console.log(zain.withdraw(2500)); // Output: 3500
  console.log(zain.withdraw(3500)); //Output: UR BROKE
