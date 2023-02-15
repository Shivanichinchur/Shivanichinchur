// function hof(x,y,task){
//     a=task(x,y);
//     return a;
// }
// let add=hof(20,40,function(x,y)
// {
//     return x+y;
// }
// console.log(add);
// let sub=hof(20,40,function (x,y)
// {
//     return x+y;
// }
// console.log(sub);
// ARRAY
let a=[1,"hello",true,false,undefined,null,function a(){}]
console.log(a);
console.log(typeof a);
console.log(Array.isArray(a));
// array method
// push
let array=[100,200,300,400]
console.log(array.push(500,"hii"));
console.log(array);
// unshift
let array1=[100,200,300,400]
console.log(array1.unshift("000"));
console.log(array1);
// pop
let array3=[100,200,300,400]
console.log(array3.pop());
console.log(array3);
// shift
let array2=[100,200,300,400]
console.log(array2.shift());
console.log(array2);
// slice
let array4=[200,300,550,600,700]
console.log(array4.slice(1,4)); //includes starting indexe,excludes ending index.
console.log(array4);
// splice
let array5=[300,400,500,600,700,800]
console.log(array5.splice(2,3,"hi","hello","bye")); //index of an array
console.log(array5);
//fill
let array6=[200,400,550,600,700,900]
console.log(array6.fill("10"));
console.log(array6);
//concat
let array7=[200,400,550,600,700,900]
let array8=["good","bad"]
console.log(array7.concat(array8));
//join
let array9=[200,400,550,600,700]
console.log(array9.join(" + "));
//reverse
let array10=[200,400,550,600,700,900]
console.log(array10.reverse());

let array122=[];
let n=122;
console.log(array122);
console.log(typeof array122);
console.log(Array.isArray(array122));
console.log(Array.isArray(n));

let array126=[1000,2000,3000,4000,5000,6000]
console.log(array126);
console.log(array126.length);//6
console.log(array126(9));//undefined

array126[0]="D boss";
console.log(array126);

delete array126[10] = "last element";
console.log(array126);

delete array126[8]
console.log(array126);

delete array126[5]
console.log(array126);

//map method
let number=[1,2,3,4];
let dn=number.map(n=>n+2);
console.log(dn);

//filter
let number1=[1,2,3,4];
let dn1=number1.filter(n=>n>1);
console.log(dn1);

//reduce
let number3=[1,2,3,4,5]
let initialValue=0;
let result=number3.reduce((accu,value)=>value+accu,initialValue);