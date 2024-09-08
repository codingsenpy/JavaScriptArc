console.log('hi')
const searchButton=document.getElementById("searchButton");
const inputcity=document.getElementById("city");
const cityname=document.getElementById("cityname");
const localtime=document.getElementById("localtime");
const temp=document.getElementById("temp");


async function getData(input) {
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=3580cf9cd4df499f9dd151915240809&q=${input}&aqi=yes`)
    return await promise.json();
}

searchButton.addEventListener('click',async ()=>{
    const result=await getData(inputcity.value);
    console.log(result);
    cityname.innerText=`${result.location.country} - ${result.location.name}, ${result.location.region}`
    localtime.innerText=`${result.location.localtime}`
    temp.innerText=`${result.current.temp_c }`
})
//http://api.weatherapi.com/v1/current.json?key=3580cf9cd4df499f9dd151915240809&q=London&aqi=yes
