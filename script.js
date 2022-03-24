// Spread-Destructuring-Functions Exercise

fence = n =>{
    console.log(`${n}` + `.o.`.repeat(12));
}

//1a
const jPDinos = [
    `Velociraptors`,
    `Tyrannosaurus Rex`,
    `Dilophosaurus`
];

fence(`1b`);

function seeDinos(a, ...b){
    console.log( a);
    console.log(b);
}
seeDinos(...jPDinos);
/*
Velociraptors
[ 'Tyrannosaurus Rex', 'Dilophosaurus' ]
*/

fence(`2a && 2b `);

const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
};

seeCharacters = ({ellieSattler}) =>{ //Don't forget the {}
    console.log(ellieSattler);
}

seeCharacters(jPCharacters);


fence(`BONUS 3a && 3b `);

const jurassicParkMovies = [
   {
        one: "Jurassic Park", 
        two: "The Lost World: Jurassic Park",  
        three: "Jurassic Park III"
    },
    {
        four: "Jurassic World", 
        five: "Jurassic World: Fallen Kingdom", 
        six: "Jurassic World: Dominion"  
    }
    
];

const [{one, two, three}, {four, five, six}] = jurassicParkMovies;

const allMovies = [one, two, three, four, five, six];
console.log(allMovies);
 

seeJPMovies = (y) => {
 console.log(one);
 console.log(two);
 console.log(three);
 console.log(four);
 console.log(five);
 console.log(six);
}

seeJPMovies(allMovies);

