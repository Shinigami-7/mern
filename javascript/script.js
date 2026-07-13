console.log("This is Shinigami"); // same as print statement

if(true){
    console.log("yo")
}

let a=10;
a=40;
console.log(a);

const b='50';
console.log(b);

let c;
c="Shinigami"
console.log(typeof(c))

let d=5;
// d=d**3;
console.log(d++);


let age=18;
let vote =(age>=18?"you can vote":"you cannot vote");
console.log(vote);

console.log(2|7);  //OR
console.log(~(5));  //XOR
console.log(5<<2);  //left shift
console.log(5>>4);  //right shift

let age1=23;
if(age1<0){
    console.log("you are not born");
}else if(age1>=18){
    console.log("you can vote");
}else{
    console.log("you cannot vote");
}


let num=2;
 switch(num){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    default:
        console.log("invalid input");
    
 }