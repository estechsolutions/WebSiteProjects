// This will log to the console in Chrome
console.log("Success");

// Variables
const pi = 3.14;

let fname = 'Roxy'; // String Literal
let age = 10; //Number Literal
let lovesCates = true; //Boolean Literal
let color = null;
let list; //Undefined

let message = fname + ' ' + age;

let message1 = `${fname} is ${age}`;

//console.log(message)

const numbers = new Array(1,2,3,4,5,6);
const modernNumbers = [1,2,3,4,5,6];
//console.log(numbers);
//console.log(modernNumbers);

const colors = ['red', 'blue', 'green', 'yellow'];
colors[4] = 'black';
colors.push('white');
//console.log(colors);

const myArray = [['red','green','blue'], true, 1, 200, [1,2,3]];
//console.log(myArray);

let stopColor = myArray[0][0];
//console.log(stopColor);

// object literals

const person = {
    firstname: 'James',
    lastname: 'Bond',
    age: 45,
    pets: ['birds', 'dogs', 'cats'],
    address:{
        street: '123 Main St',
        city: 'Denver',
        state: 'Colorado'
    }
}

//console.log(person);
//console.log(person.firstname);
//console.log(person['lastname']);
let key = 'age';
//console.log(person[key]);

//console.log(person.address.state);
//console.log(person.address['city']);

const {firstname, lastname, address: {city}} = person;
//console.log(firstname, lastname, city);


const people = [
    {
    firstname: 'James',
    lastname: 'Bond',
    age: 45,
    pets: ['birds', 'dogs', 'cats'],
    address:{
        street: '123 Main St',
        city: 'Denver',
        state: 'Colorado'
    }
},
{
    firstname: 'Cindy',
    lastname: 'Bond',
    age: 40,
    pets: ['birds', 'dogs', 'cats'],
    address:{
        street: '123 Main St',
        city: 'Denver',
        state: 'Colorado'
    }
}
];   

for (let p of people){
    console.log(p);
}

const peopleJSON = JSON.stringify(people);
//console.log(peopleJSON);
//console.log(JSON.parse(peopleJSON));

//functions

function hello(name){
    console.log('Hello '+name);
    console.log(`${name}`);
}

hello('James');

//Lambda Functions

const convertPercent = (num) => {
    return num/100;
}

console.log(convertPercent(50));

const convtPercent = num => num/100;
console.log(convtPercent(75));

people.forEach(function(p){
    console.log(p);
});

people.forEach(p => console.log(p.age));

const personName = people.map(p => p.firstname);
console.log(personName);

const personAgeUnder45 = people.filter(p => p.age < 45);
console.log(personAgeUnder45);