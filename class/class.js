class Dog{
    name= "Sophia";
    bread = "local";
    #age = 2; // private
    weight;
    height;

    constructor(weight,height){
        this.weight=weight;
        this.height=height;
    }

    get getAge(){
        return this.#age;
    }

    set setAge(age){
        this.#age=age;
    }
    

    sound(){
        console.log("Dogs Bark");
    }

    walk(){
        console.log("Dog walks");
    }

}

let obj = new Dog(40,80);
obj.setAge=10;
console.log(obj.name);
console.log(obj.getAge);
console.log(obj.weight);

function yourage(){
    return 23;
}

function bio(name,age=yourage()){
    console.log("Name : ",name,"\nAge : ",age);
}
bio("Reezan");
let rnd = Math.random()*100;
console.log(Math.round(rnd));