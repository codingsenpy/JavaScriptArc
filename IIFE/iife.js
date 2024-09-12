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
