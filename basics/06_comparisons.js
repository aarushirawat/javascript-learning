console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);
console.log("--------string with number------------")
console.log("2">1);
console.log("02">1);
console.log("--------null with 0------------")
console.log(null > 0);//false
console.log(null ==  0);//false
console.log(null >= 0);//true
//the reason is that an equality check == and comparisons >,<,<=,>= work 
//differently.
//comparisons convert null to a number treating it as a 0 .
//Thats why (3)null>=0 is true and (1)null>0 is false
console.log(undefined==0);//false
console.log(undefined>=0);//false
console.log(undefined<=0);//false

console.log("----------STRICTLY CHECK---------")
console.log("2"==2);//it does not check the data type
console.log("2"===2);//it also checks the data type 
//line 10 to 12 and 17 to 19 is not a clean code ,avoid these