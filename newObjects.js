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

/*
const people = [
  {name: 'Yulia', jobTitle: 'Web Developer', boss: 'John' },
  {name: 'Nick', jobTitle: 'Software Engineer', boss: 'John'},
  {name: 'John', jobTitle: 'Solution Architect'}
];
for (let i=0; i<people.length; i++) {
   if (people[i].hasOwnProperty('boss')) {
    console.log(`${people[i]['name']} reports to ${people[i]['boss']}`);
   }
    else {
     console.log(`${people[i]['jobTitle']} ${people[i]['name']} doesn't report to anybody`)
   }
}
*/


let string = 'craft block argon meter bells brown croon droop';

const cipher= {
  //this object is our cipher/decoder. This will serve as the reference for the code.

  a: 1,
  b: 2,
  c: 4,
  d: 5,
  /*otherLetters() {
    if (!a && !b && !c && !c && !d) {
      return " ";
    }
  }
  */
}

function decode(string){
  let newArray= string.split(" ");  //splits into an array of words.

  //if the character at the index0 equals cipher.a then log string.character at cipher.a.value? 

  //given a string, take the 1st letter and return a certain index 
  //of the string based on the coding system. 
  for (let i=0; i <newArray.length; i++) {

  
    if (newArray[i][0] === 'a')  {console.log(newArray[i][cipher.a]);
    }
    else {
      console.log('test');
    }
    /*
    else if (string.charAt(0) === 'b') {console.log(string.charAt(2));
    }
    else if (string.charAt(0) === 'c') {console.log(string.charAt(3));
    }
    else if (string.charAt(0) === 'd') {console.log(string.charAt(4));
    }
    else {console.log(' ');}
    */
  }
}
let string = 'craft block argon meter bells brown croon droop';

const cipher= {
  //this object is our cipher/decoder. This will serve as the reference for the code.

  a: 1,
  b: 2,
  c: 3,
  d: 4
 
  
}

function decode(str, obj){
  let newArray= str.split(" ");  //splits into an array of words.

  //if the character at the index0 equals cipher.a then log string.character at cipher.a.value? 

  //given a string, take the 1st letter and return a certain index 
  //of the string based on the coding system. 
  for (let i=0; i <newArray.length; i++) {

  
    if (newArray[i][0] === 'a')  {console.log(newArray[i][obj.a]);
    }
    else if (newArray[i][0] === 'b')  {console.log(newArray[i][obj.b]);
    }
    else if (newArray[i][0] === 'c')  {console.log(newArray[i][obj.c]);
    }
    else if (newArray[i][0] === 'd')  {console.log(newArray[i][obj.d]);
    }
    else {console.log(" ")
    }
   
  }
}
decode(string, cipher);

function decodeWords(str, object){
    decode(str, object);
}
decodeWords(string, cipher);


function createCharacter(name, race, origin, attack, defense, weapon) {
  return {
      name,
      race,
      origin,
      attack,
      defense,
      weapon,
      describe(){return `${name} is a ${race} from ${origin} who uses a ${weapon}`},
      evaluateFight(character){ if (character.attack < this.defense) {return 'you receive zero damage'} 
      else {return `Your opponent takes ${character.attack - character.defense} damage and you receive ${this.attack -this.defense} damage`}
      
  }
}
}

const characters =[createCharacter('gandalf', 'Wizard', 'Middle Earth', 10, 6,'wizard staff'), createCharacter('Bilbo', 'Hobbit',
'The Shire', 2, 1, 'the ring' ), createCharacter('Frodo', 'Hobbit', 'The Shire', 3,2, 'string and barrow blade'), createCharacter('Aragorn', 'man', 
'Dunnedain',6, 8, 'anduril' ), createCharacter('Legolas', 'Elf', 'Woodland Realm', 8, 5, 'bow and arrow')];

//console.log(characters);

characters[5]= createCharacter('Arwen', 'Half-Elf', "Rivendell", 'hadhafang');

//console.log(characters);

characters.find(function (element) {
if (element.name == 'Aragorn') {
 return (element.describe())
}
});
const hobbitsOnly = characters.filter((element)=> element.race =='Hobbit');


const attackAboveFive = characters.filter((element)=> element.attack >5);

//console.log(attackAboveFive);

console.log(characters[4].evaluateFight(characters[1]));
