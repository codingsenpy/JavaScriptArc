document.getElementById("time");

function displayTime(){
    const currentTime=new Date();
    const time=`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    console.log(time)
    document.getElementById("time").innerText=time;
}

document.getElementById("stop").addEventListener('click',()=>clearInterval(timer));
const timer=setInterval(displayTime,1000);
