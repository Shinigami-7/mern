function name(){
    console.log("This is Shinigami");
}

name();

function sum(a,b){
    let c= a+b;
    console.log(c);
}

sum(3,5);

function getAvg(a,b){
    let avg = (a+b)/2;
    return avg;

}

let ans = getAvg(5,9);
console.log(ans);


function getMulti(a,b){
    return a*b;
}

console.log(getMulti(5,6));

let getsqr = (x,y)=>{
    return x**y;
}

console.log(getsqr(2,3));