function add(a,b){
  return a+b;
}

function square(a){
  return a*a;
}

function compose(func1,fucn2){
  return function(a,b){
    return func2(func1(a,b));
  };
}
const addThenMultiply=compose(add,square);
console.log(addThenMultiply(2,3));
