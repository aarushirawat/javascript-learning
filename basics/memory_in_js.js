//stack(primitive) , heap(non primitve)
//when stack memory is used ,it means we get a copy of the variable that we declared
//when heap memory is used ,we get the reference of the original value
let myname="aashi" 
let anothername=myname
anothername="rawat"
console.log(myname);
console.log(anothername);

let userone={
    email: "user@gmail.com",
    upi: "user@ybl"
}
let usertwo=userone
usertwo.email="am@youtube.com"
console.log(userone.email)
console.log(usertwo.email);
//if we make changes in usertwo ,userone will also change because the refernce is given to both of them
