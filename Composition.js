function add(a,b){
  return a+b;
}

function square(a){
  return a*a;
}

function mult(a,b){
  return a*b;
}

function compose(func1,fucn2){
  return function(a,b){
    return func2(func1(a,b));
  };
}
const addThenSquare=compose(add,square);
console.log(addThenSquare(2,3));
const addThenMul=compose(add,mult);
console.log(addThenMul(2,3));


////////↓↓↓↓ES6 MODERN JS VERSION↓↓↓↓///////
const c2f=(fn1,fn2)=>(a,b)=>fn2(fn1(a,b));//
const ats=c2f(add,square);                //
console.log(ats(2,3));                    //
////////////////////////////////////////////
