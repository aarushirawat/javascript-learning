//data types ->primitive and non primitive(on the basis of how data is stored in memory and then accessed)
console.log("The primitive are divided into 7 categories")
//non primiive=>reference types
//primitive=>call by value
//7 types: string,number,boolean,null,undefined,symbol(to make anything unique),BigInt
//reference type(non primitive)---->
//array ,objects,functions
const score=100
// js is dynamically typed
const scorevalue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;//undefined
// let useremail=undefined;(can type like this also)
const id =Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid)

const bigNumber=3455634342534343n
console.log("the non primtive data types :");
const fruits=["apple","banana","cheeku"];
let myobj ={
    name:"aarushi",
    age:18,
}

const myfunction=function(){
    console.log("hello world");
}
console.log(typeof bigNumber)
console.log(typeof outsideTemp)//object
console.log(typeof myfunction)//function object
console.log(typeof fruits)
