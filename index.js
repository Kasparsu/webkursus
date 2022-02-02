let num = 2;

let num2 = num;

num2 = 3;
console.log(num2);
console.log(num);

let obj = {
    num: 2
}

let obj2 = JSON.parse(JSON.stringify(obj));

obj2.num = 3;

console.log(obj);
console.log(obj2);