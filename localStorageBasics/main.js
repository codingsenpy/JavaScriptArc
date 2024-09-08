const username=document.getElementById("username");
const userinput=document.getElementById("userinput");
const buttone=document.getElementById("button");

buttone.addEventListener('click',()=>{
    const val=userinput.value;
    console.log(val)
    localStorage.setItem('name',val);
    location.reload();
}
);

window.addEventListener('load',()=>{
    const val=localStorage.getItem('name');
    username.innerText=val;
});
