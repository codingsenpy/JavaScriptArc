let a=2;            //    these
let b=3;            //        are
let result=a+b;     //          synchronus
console.log(result) //              code

let data=fetch("https://jsonplaceholder.typicode.com/comments");
console.log(data);    //Promise { <pending> }
//^WON'T WORK//

async function getData(){                                                    //  'ASYNC' KEYWORD MAKES THE FUNCTION RUN ASYNCHRONOSLY
  let datav2=await fetch("https://jsonplaceholder.typicode.com/comments");   //  'AWAIT' PAUSES WXECUTION OF ASYNC FUNCTION UNTIL PROMISE IS RESOLVED
console.log("datav2");                                                       //  
}                                                                            //  CALLING THE FUNC WHICH LOGS THE FETCHED DATA
getData();                                                                   //  SINCE FETCHING DATA TAKED TIME, 'RESULT' IS PRINTED BEFORE 'DATAV2' ISPRINTED
console.log(result)                                                                  
