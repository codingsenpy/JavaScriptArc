**REGULAR FUNCTIONS**
arguments is a builtin object which stores all the arguments passed during function call along with index and total numbers of arguments passed in a PROPERTY "length".
u can access it by using arguments.length
u can access each argument in order by using "arguments[i]"

*Hoisting*
hoisting means we can call the function before its deleration/definition. it gets "hoisted" to the top of code during compile phase

OR

*Spread operator*
u can use "rest parameter syntax" to store all the arguments passed in an array like 
function add(...nums) here nums is an array


**ARROW FUNCTIONS**
syntax: const functionname=(argument1,argument2,....)=>{
                    //body;
                    //return statement;
                    };
        *OR*(for "one liner" arrow functions which has only return statement we can
        const functioname=(argument1,argument2,....)=> argument1+argument2+....    //in one liner functions we dont need to use return keyword

'arguments' ketword: the "arguments" object is not available or doesnt exist in arrow functions so we have to use *spread operator* ^refer above^
limitations: *Hoisting* doesnt work on arrow functions
             *This keyword* in arrow functions points to the browser window instead of the called of the function  
