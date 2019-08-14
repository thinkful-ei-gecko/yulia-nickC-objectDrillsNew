'use strict';
const loaf = {
  flour: 300,
  water: 210,
  hydration() {
    return (this.water/this.flour)*100;
  }
}; 
// console.log(loaf.flour);
// console.log(loaf.water);
// console.log(loaf.hydration());

const obj = {
  foo: 'cat',
  bar: 'dog',
  fum: 'bat',
  quux: 'lion',
  spam: 'tiger'
};

for (let key in obj) {
//   console.log(key);
//   console.log(obj[key]);
  //console.log(`${key}: ${obj[key]}`);
}

const meal = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};
//console.log(meal.meals[3]);

const people = [
  {name: 'Yulia', jobTitle: 'Web Developer'},
  {name: 'Nick', jobTitle: 'Software Engineer'},
  {name: 'John', jobTitle: 'Solution Architect'}
];
for (let i=0; i<people.length; i++) {
  console.log(`${people[i]['name']}'s job is ${people[i]['jobTitle']}`);
  
}
