let guess
let cond=true
do{
    guess=parseInt(prompt("guess"))
    if(guess==5){
        cond=false
        console.log("nice guess")
    }
}
while(cond)
