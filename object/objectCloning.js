let src = {
    name : "Reezan Shrestha",
    age : 20,
    address : "Kapan",
    height : 5.5

}
let dst = {...src};  // cloning the  object
dst.age = 23;
console.log(src);
console.log(dst);