// for...of loops
for (const val of [1,2,3,4,5,6]){
  console.log(val);
}

//making custom iterator//
function makeiterator(start=0, end=Infinity, stepSize=1){
  let nextStart=start;
  let iterationCount=0;
  return {
    next(){
      let result;
      if(iterationCount<end){
        result={value: nextStart, done:false};
        nextStart+=stepSize;
        iterationCount++;
        return result
    }
    }
    return {value:iterationCount, done:true};
},
};

const myIterator= makeIterator(10,20);
let result=myIterator.next();
while(!result.done){
  console.log(myIterator.value);
  result=myIterator.next;
}
