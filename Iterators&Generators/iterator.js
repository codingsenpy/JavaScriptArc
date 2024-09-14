//for...of loops
for (const val of [1,2,3,4,5,6]){
  cosnole.log(val);
}

//making custom iterator//
function makeiterator(start=0, end=Infinity, stepSize=1){
  let nextStart=start;
  let iterationCount=0;
