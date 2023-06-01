console.log("================================================");
console.log("Starting Out");
console.log("================================================");
let personOne = {
  name: {
    first: "Timmy",
    last: "Timtim",
  },
  age: 30,
  location: {
    city: "New York",
    state: "New York",
    zip: 10001,
  },
};

let personTwo = {
  name: {
    first: "Julie",
    last: "July",
  },
  age: 28,
  location: {
    city: "Albany",
    state: "New York",
    zip: 12201,
  }
};
console.log(personOne.location);
console.log(personTwo.location);
////////////////////////////////

console.log("================================================");
console.log("First Move");
console.log("================================================");
function moveLocation(person, newLocation) {
  person.location = newLocation;
}
const nLoc = {
  city: "Rochester",
  state: "New York",
  zip: 14604,
};
moveLocation(personTwo, nLoc);
console.log(personOne.location);
console.log(personTwo.location);
////////////////////////////////

// Define getter and setter for personTwo's location property
Object.defineProperty(personTwo, "location", {
  get() {
    return personOne.location;
  },
  set(value) {
    personOne.location = value;
  },
});
////////////////////////////////

console.log("================================================");
console.log("Getting Married");
console.log("================================================");



const newLoc = {
  city: "Mountain View",
  state: "California",
  zip: 94035,
};

moveLocation(personOne, newLoc);
console.log(personOne.location);
console.log(personTwo.location);
////////////////////////////////

console.log("================================================");
console.log("Having a baby!");
console.log("================================================");
const personThree = {
  name: {
    first: undefined,
    last: undefined,
  },
  age: undefined,
  location: {
    city: undefined,
    state: undefined,
    zip: undefined,
  },
};
Object.defineProperty(personThree, "location", {
    get() {
      return personOne.location;
    },
    set(value) {
      personOne.location = value;
    },
  });

personThree.name.first = "Tim Jr.";
personThree.name.last = personOne.name.last + "-" + personTwo.name.last;
personThree.age = 0;



moveLocation(personTwo, nLoc);
console.log(personTwo.location);
console.log(personOne.location);
console.log(personThree.location);
