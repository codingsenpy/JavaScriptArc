function user(username, logInCount, isLoggedIn){
  this.username=username;
  this.logInCount=logInCount;
  this.isLoggedIn=isloggedIn;

return this;  //this return is not necesasry as it happens implicitly by default
}

//creating an object
const userone= user("Zain",11,true);
console.log(userone);  // output is as expected(values which u provided are printed)

//making another user without "new" keyword
const usertwo= user("SperkSy",3,false);
console.log(userone)  // when printing values of userone, the values of usertwo are printed. original values are reaplced with new ones provided to usertwo(OVERRIDE)
//This can be avoided by using the "new" keyword
const userthree = new user("shadowgun",1,false);
