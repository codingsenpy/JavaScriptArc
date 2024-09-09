const font=document.getElementById("font");
const btn25=document.getElementById("25px");
const btn10=document.getElementById("10px");
const btn75=document.getElementById("75px");

function size(n){
    function adjust(){
        font.style.fontSize=`${n}px`
    }
    return adjust;
}

setfont10=size(10);
setfont25=size(25);
setfont75=size(75);


btn10.addEventListener('click',setfont10);
btn25.addEventListener('click',setfont25);
btn75.addEventListener('click',setfont75);
