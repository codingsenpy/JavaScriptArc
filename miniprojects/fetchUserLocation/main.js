const getloc=document.getElementById("getloc");
const loc=document.getElementById("loc")

async function gotLocation(position){
    console.log(position);
    const result=await getData(position.coords.latitude,position.coords.longitude);
    console.log(result)
    loc.innerText=result.location.name

}

function failed(){
    console.log("Location fetch has failed");
}



async function getData(lat,long) {                                                           //api must be in format: (latitude,longitude)
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=3580cf9cd4df499f9dd151915240809&q=${lat},${long}&aqi=yes`)
    return await promise.json();
}


getloc.addEventListener('click', async ()=>{
    const result=navigator.geolocation.getCurrentPosition(gotLocation,failed);
})
