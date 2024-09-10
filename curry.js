function add(a){
  return function(b){
    return function(c){
      return a+b+c;
    };
  };
}
//This ensures the 'return a+b+c'only works when we have all 3 values
console.log(add(3)(4)(6));
