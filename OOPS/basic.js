function user(username, logInCount, isLoggedIn){
  this.username=username;
  this.logInCount=logInCount;
  this.isLoggedIn=isLoggedIn;

  this.greeting=function(){
    console.log(`hello ${this.username}`);
  
  
//return this;  //this return is not necesasry as it happens implicitly by default
}

//creating an object
const userone=new user("Zain",11,true);
console.log(userone);
userone.greeting();
