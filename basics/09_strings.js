const name="aarushi"
const repo=20

console.log(name+repo+ " value")//not reccomended
console.log(`hello my name is ${name} and my variable count is ${repo}`);
//we make placeholders where variable are directly injected

const gamename=new String('aarushi-kp-ns-gf')
//string is object
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length)
console.log(gamename.toUpperCase())
//original string is not modified
console.log(gamename.charAt(2))
console.log(gamename.indexOf('a'))
 const newsring =gamename.substring(0,4)//4 is exclusive//here negative values are not allowed
 console.log(newsring);


 const anotherstring=gamename.slice(-9,4)
console.log(anotherstring)
const str="    aarushi       "
console.log(str);
console.log(str.trim());//remove starting and end spaces//white space characters
//trim js mdn
const url="https://youtube.com/aaru%20cs"
console.log(url.replace('%20','-'))
console.log(url.includes('youtu'))//true
console.log(url.includes('kk'))//false

console.log(gamename.split('-'))//returns an array ,here '-' is a separator
