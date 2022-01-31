//console.log(foo);
var bar;
console.log(bar);

let foo = 'FOO'; // foo, bar, baz
bar = 'bar'; // hoisting

const baz = 'afaf';
console.log(baz);
//baz = 'gasdasd'; //error 

let text = 'asdasd' + baz + foo;

let text2 = 'asdasd' + baz + foo;

console.log(text[3]);
console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.substring(3, text.length-3));
//console.log(text.normalize());

let array = [1, 2, 3, 4, 5];
console.log(array);
array.push(6);
console.log(array);
array.push(7, 8, 9);
console.log(array);
console.log(array.pop());
console.log(array);

