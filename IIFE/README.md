*interview question*
IIFE: Immediately Invoked Function Expression

why use iife?:  ●to prevent polluting global space. 
                eg:  let num=0;
                    console.log(num+5);
                    /////using iife/////
                    (()=>{
                      let num=0;
                      console.log(num+5);
                      }
                  in this example. the nums variable will not be available in global space and will be deleted after execution of function so it is useful for 1time use variables    
              ●to help make easier async functions. eg in iife.js(eg1)
                 
