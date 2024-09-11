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
console.log(addThenSquare2,3));
const addThenMul=compose(add,mult);
console.log(addThenMul(2,3));
