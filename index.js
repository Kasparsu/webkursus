
function sayHello(){
    console.log("Hello!!!");
}

sayHello();

let sayName = function (name){
    console.log("Hello " + name);
}

sayName('Kaspar');
sayName('Martin');

let sayAge = (age) => {
    if(age > 1) {
        console.log("you are " + age + " years old");
    } else {
        console.log("you are " + age + " year old");
    }
} 


// will talk about this more in future

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What is your age ? ', function (age) {
//     sayAge(age);
//     rl.close();
// });



//alert('afasfasdasd');
console.log(this);

function example1(){
    console.log(this);
}

let person = {
    age: 24,
    getAge(){
       console.log(this); 
    },
    getAge2: function () {
        console.log(this);
    },
    getAge3: () => {
        console.log(this);
    }
}

person.getAge();
person.getAge2();
person.getAge3();


person = {
    age: 24,
    getAge(){
       return this.age;
    }
}

let age = person.getAge();
console.log(age);
console.log(person.getAge());

function recursive(i){
    console.log(i);
    if(i<10){
        recursive(i+1);
    }
}
recursive(0);

function multipleParams(a, b, c){
    
}