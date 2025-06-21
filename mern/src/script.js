var a = 10;
a = 20;



sum1();

var sum1=()=>{
    console.log("Hello world");
}
sum1();

var num =5




var arr = [10,20,30]; 
var arr2 = [...arr,40];
console.log(arr);
console.log(arr2);


var marks = [90,99,100,98,97];
var [m1,m2,m3,m4,m5] = marks;
console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)
console.log(m5)

function demo)(){
    console.log("Hello from demo");
}
var callBack=(func)=>{
    console.log("Hello from callback");
    func();
}
callBack(demo)