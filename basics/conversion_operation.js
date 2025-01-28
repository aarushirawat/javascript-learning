let score=33
//let score=undefined,nulll,bool
//const {score}=req.body
console.log(typeof score);
console.log(typeof (score));
let ss="33";
console.log(typeof ss);
console.log(typeof (ss));
let valueInNumber =Number (ss)
console.log(typeof valueInNumber)//number
let ss2="33abc";
console.log(typeof ss2);
console.log(typeof (ss2));
let valueInNumber1 =Number (ss2)
console.log(typeof valueInNumber1)//number
console.log(valueInNumber1)//Nan
//"33"=>33
//"33abc"=>NaN(type is number)
//true=>1;false=>0
console.log('------------PART II(BOOLEAN)--------------- ')
let isLoggedIn=""//try "aarushi" ,5,-1 lik these

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
//1=>true ;0=>false
//""=>false
//"aarushi"=>true
console.log('------------PART III(STRING)--------------- ')
let someNumber =33
let stringNumber=String(someNumber);
console.log(stringNumber)
console.log(typeof stringNumber)