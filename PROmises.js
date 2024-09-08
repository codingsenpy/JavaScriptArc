let a=2;            //    these
let b=3;            //        are
let result=a+b;     //          synchronus
console.log(result) //              code

let data=fetch("https://jsonplaceholder.typicode.com/comments");
console.log(data);    //Promise { <pending> }

//^WON'T WORK^// because promise is not resolved before console.log()






async function getData(){                                                    //  'ASYNC' KEYWORD MAKES THE FUNCTION RUN ASYNCHRONOSLY
  let datav2=await fetch("https://jsonplaceholder.typicode.com/comments");   //  'AWAIT' PAUSES WXECUTION OF ASYNC FUNCTION UNTIL PROMISE IS RESOLVED
  console.log("datav2");                                                     //  
}                                                                            //  CALLING THE FUNC WHICH LOGS THE FETCHED DATA
getData();                                                                   //  SINCE FETCHING DATA TAKED TIME, 'RESULT' IS PRINTED BEFORE 'DATAV2' ISPRINTED
console.log(result)                                                                  

//^BETTER BUT NOT BEST^//



                                                                                    //'CATCH' RUNS IF THERE IS AN ERROR
fetch("https://jsonplaceholder.typicode.com/comments").then((data)=>console.log(data)).catch((err)=>console.log(err))   //EITHER THEN OR CATCH RUNS
                                            //'THEN' WAITS FOR PROMISE TO RESOLVE THEN IT RUNS

//^GOOD WAY BUT NOT VERY REDEABLE SO NOT PERFECT^//
