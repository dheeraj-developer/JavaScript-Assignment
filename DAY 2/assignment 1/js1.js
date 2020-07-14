console.log("hi");
console.error("Sorry, This is an error!! :|")
console.warn("Hey, It is a warning here:(")
console.log('%c Custom message','color:blue;')
console.time('Time Taken');
var student1={name:"Agalya", age:"20", city:"Coimbatore", country:"India"}
var student2={name:"Dheeraj", age:"19", city:"Banglore", country:"India"}
var student3={name:"Aravind", age:"20", city:"Chennai", country:"India"}
console.log({student1, student2, student3});
console.table({student1, student2, student3});
console.timeEnd('Time Taken');