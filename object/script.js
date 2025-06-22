//objects

const myObject = {
  name: "John",
};

const anotherObject = {
  alive: true,
  answer: 42,
  hobbies: ["reading", "gaming", "coding"],
  beverage: {
    morning: "coffee",
    evening: "tea",
  },
  action: function() {
    return `Time for a ${this.beverage.morning}!`;
  },
};


console.log(anotherObject["alive"]); // Accessing a property using bracket notation
console.log(anotherObject.alive); // Accessing a property using dot notation

console.log(anotherObject.beverage.morning); // Accessing a nested property using dot notation
console.log(anotherObject["beverage"]["evening"]); // Accessing a nested property using bracket notation

console.log(anotherObject.action()); // Calling a method in the object


//.........................
const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrooooom!";
    }
};

const truck = Object.create(vehicle);
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function(){
    return "Whoooose";
}

console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car); 
console.log(tesla.wheels);
//changinf the method 
tesla.engine = function(){
    return "Shhhhhhh...";
};
console.log(tesla.engine());

// band object
const band = {
    vocals: "Robert Plant",
    guitar: "Jimy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

delete band.drums; // deletes the drums property
console.log(band.hasOwnProperty("drums")) // returns a boolean, if the property is present in the object or not

console.log(Object.keys(band));
console.log(Object.values(band));

for(let job in band){
    console.log(`On ${job}, it's ${band[job]}!`)
}


//------------------------------------------------
// DESTRUCTURING OBJECTS (ES6+)
//------------------------------------------------

// 1️⃣  Basic destructuring – pull properties straight into variables
const { vocals, guitar } = band;
console.log(vocals); // Robert Plant
console.log(guitar); // Jimy Page

// 2️⃣  Renaming while destructuring – give the variables nicer names
const { vocals: leadSinger, guitar: leadGuitar } = band;
console.log(leadSinger);  // Robert Plant
console.log(leadGuitar);  // Jimy Page

// 3️⃣  Providing default values – in case a property is missing
// (remember we deleted band.drums earlier)
const { drums = "Session Drummer" } = band;
console.log(drums); // "Session Drummer"

// 4️⃣  Nested destructuring – dive into objects inside objects
const {
  beverage: { morning: firstCup, evening: secondCup },
} = anotherObject;

console.log(firstCup);  // coffee
console.log(secondCup); // tea

// 5️⃣  Rest syntax – grab "the rest" of the properties in one go
const { vocals: v, ...instruments } = band;
console.log(v);          // Robert Plant
console.log(instruments); // { guitar: 'Jimy Page', bass: 'John Paul Jones' }

// 6️⃣  Destructuring in function parameters – super‑clean APIs
function introduceBand({ vocals, guitar, bass }) {
  console.log(
    `Tonight's lineup: ${vocals} on vocals, ${guitar} wailing on guitar, and ${bass} holding down the low end!`
  );
}

introduceBand(band);

//------------------------------------------------
// All done! These patterns cover 90% of real‑world
// destructuring you’ll use day‑to‑day.
//------------------------------------------------

