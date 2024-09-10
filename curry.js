function add(a){                                                        // 
  return function(b){                                                   //
    return function(c){                                                 // 
      return a+b+c;                                                     // 
    };                                                                  //
  };                                                                    //  
}                                                                       // 
//This ensures the 'return a+b+c'only works when we have all 3 values   // 
console.log(add(3)(4)(6));                                              //
//////////////////////////////////////////////////////////////////////////
///////////////////↓↓↓↓↓PRACTICAL USE CASE↓↓↓↓↓///////////////////////////////////////////////////////////////////////////////
function autoEmail(to){                                                                                                     //
  return function(subject){                                                                                                 //
    return function(body){                                                                                                  // 
      console.log(`Sending email to ${to} on the subject ${subject} with body: ${body}`);                                   //  
    }                                                                                                                       //
  }                                                                                                                         //
}                                                                                                                           //
let step1=autoEmail("Zain");                                                                                                // 
let step2=step1("Progress");                                                                                                // 
step2("How is ur javaScriptArc?");  //O/P:Sending email to Zain on the subject Progress with body: How is ur javaScriptArc? //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////↓↓↓↓↓↓↓CONSINE VERSION↓↓↓↓↓↓↓///////////////////////////////////////////////////////
const autoEmail=(to)=>(subject)=>(body)=>console.log(`Sending email to ${to} on the subject ${subject} with body: ${body}`);//
let step1=autoEmail("Zain");                                                                                                // 
let step2=step1("Progress");                                                                                                // 
step2("How is ur javaScriptArc?");  //O/P:Sending email to Zain on the subject Progress with body: How is ur javaScriptArc? //
