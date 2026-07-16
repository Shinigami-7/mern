let obj = {
    name : "Reezan Shrestha",
    age:23,
    address : "kapan, faika",

    fun :()=>{
        console.log("This is Shinigami");
    }
}

console.log(obj);
obj.fun();


let arr=[1,2,3,4,5];
console.log(arr);
let arr2 = new Array(1,"Shinigami",true);

arr2.push('yo',"hoo");
console.log(arr2);

arr2.pop()
console.log(arr2);


console.log(arr2.slice(2,5));

arr2.splice(2,1,"taicho"); //(from where, how many, what to replace)
console.log(arr2);

let ans = arr.map((num)=>{
    return num*num;
})
console.log(ans);

arr.map((num)=>{
    console.log(num*2);
})

console.log("\n\n");
arr.map((num,index)=>{
    console.log(num*2);
    console.log(index);
})

let arrflt= arr.filter((num)=>{
    return num%2===0;
})
 console.log(arrflt);


 let arr3 = [1,2,3,4,"reezan","shrestha",true,false,null,"shinigami"];
 let flt = arr3.filter((value)=>{
    if(typeof(value)==='string'){
        return true;
    }
    else{
        return false;
    }
 })
 console.log(flt);

 let ans1 = arr.reduce((acc,cur)=>{
    return acc+cur;
 },0);
 console.log(ans1);

 let arr4 =[1,4,2,9,6,3,7];
 console.log(arr4.sort());
 console.log(arr4.indexOf(4))

 arr.forEach((value,index)=>{
    console.log("Number : ",value,"Index : ",index)
 })

 console.log("\n\n");

 let obj1 = {
    fname : "Reezan",
    lname : "Shrestha",
    age : 23,
    address : "kapan"
 };
 for (let key in obj1){
    console.log(key," ",obj1[key]);
 }

 let fname = "Reezan Shrestha";
 for(val of fname){
    console.log(val);
 }