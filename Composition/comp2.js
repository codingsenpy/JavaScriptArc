/////////////////////////////////////////////////////////////////////COMPOSITION FOR INFINITE AMOUNT OF FUNCTIONS//////////////////////////////
function add(args){  //INTERNAL   => function add(...args){                // WE HAVE TO DO THIS
  return a[0]+a[1];  //  WORKING  =>      return args.reduce((a,b)=>a+b,0);//     BECAUSE WE ARE PASSING
}                    //    IS LIKE=>    }                                  //        AN ARRAY OF VALUES IN COMPOSE FUNC

function square(a){
  return a*a;
}

function compose(...fns){          // AN ARRAY OF FUNCTIONS
  return function(...values){      // AN ARRAY OF VALUES
    fns.reduce((a,b)=>b(a),values);// ITERATING THROUGH FUNCTIONS USING A,B. VALUES ARE PARAMETERS OF FUNCTIONS A,B
  };                               //
}                                  //

const task=compose(add,square);
console.log(task(2,3));

////////↓↓↓↓ES6 MODERN JS VERSION↓↓↓↓///////
const c2f=(...fns)=>(...values)=>fns.reduce((a,b)=>b(a),values);
