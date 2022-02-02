let numbers = [1,2,3,4,5,6,7,8,9,10];

let people = [
    {
        name: 'kaspar',
        age: 28
    },
    {
        name: 'martin',
        age: 42
    },
    {
        name: 'oleg',
        age: 86
    },
    {
        name: 'jaanus',
        age: 11
    },
    {
        name: 'gagarin',
        age: 53
    },
];



let evenNumbers = numbers.filter(num => num%2===0);
console.log(evenNumbers);

let youngPeople = people.filter(person => person.age < 60);
console.log(youngPeople);
let oldPeople = people.filter(person => person.age >= 60);
console.log(oldPeople);

let poweredNumbers = numbers.map(num => num*num);
console.log(poweredNumbers);

let names = people.map(person => person.name);
console.log(names);

let ageSum = people.reduce((sum, person) => sum+=person.age, 0);
console.log(ageSum);

people.sort((personA, personB) => personB.age-personA.age);
console.log(people);

people.forEach(value => {
    console.log(value.name);
});