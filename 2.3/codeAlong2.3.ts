console.log("Our Object\n");

var myPerson = {
    firstName: "Arthur",
    lastName: "Morgan",
    age: "35"
};

console.log(`Our person \n Name: "${myPerson.firstName} ${myPerson.lastName}"\n Age: ${myPerson.age}`);

console.log("\n Our Array \n");
var iceCreamFlavors: Array<string> = [
    "Strawberry",
    "Mint Chocolate Chip",
    "Chocolate",
    "Cookies & Cream",
    "Lemon",
    "Coffe",
];

iceCreamFlavors.forEach((flavor, i) => {
    console.log(`${i + 1}. ${flavor}`);
});

console.log("\n Array of Objects \n")

var people = [
    {
        firstName: "Arthur",
        lastName: "Morgan",
        age: "35",

    },
    {
        firstName: "Sadie",
        lastName: "Adler",
        age: "24"
    }
]

people.forEach((person) =>{
    console.log(`Person: \n "${person.firstName} ${person.lastName} ${person.age}`);
});



console.log("\n An Object with An Array \n");

var personWithIceCream = {
    firstName: "Arthur",
    lastName: "Morgan",
    age: "35",
    favoriteIceCreams: [
        "Strawberry",
        "Mint Chocolate Chip",
        "Chocolate",
        "Cookies & Cream",
        "Lemon",
        "Coffe",
    ]
};
// array with an object
personWithIceCream.favoriteIceCreams.forEach((flavor) =>{
    console.log(`If ${personWithIceCream.firstName} ${personWithIceCream.lastName}`);
});