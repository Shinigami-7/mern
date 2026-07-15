// for(let i=0;i<=10;i++){
//     console.log("Shinigami");
// }


// for(let i=5;i>0;--i){
//     console.log(i);
    
// }

// for(let i=0;i<=10;i++){
//     if(i==4 || i==8){
//         break;
//     }else{
//         console.log(i);
//     }
// }

// for(let i=0;i<=10;i++){
//     if(i==4 || i==8){
//         continue;
//     }else{
//         console.log(i);
//     }
// }

// let i=5;
// do{
//     console.log("Shinigami");
//     i++;
// }while(i<4)


// let name='yo ho'
// let name = `This 
// is 
// Shinigami`
// console.log(name);


let firstName = "Reezan ";
let lastName = "Shrestha";

let name = firstName + lastName;

console.log(name);

let name2 = `${firstName}${lastName}`
console.log(name2);

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(5));
console.log(name.substring(4));
console.log(name.substring(4,12));
console.log(name.split(' '));

let word=name.split(' ');
console.log(word.join('-'));
