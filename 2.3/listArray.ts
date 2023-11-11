let firstList: Array<number> = []

let candyBars: Array<string> = [
    "snickers",
    "twix",
    "payday",

];

// * push adds items to our arrays.

firstList.push(100);
firstList.push(1000);
firstList.push(10000);
// * the array should look like this internally firstList: array<number> = [100,1000,10000];

console.log("The FirstList should look like this", firstList);
// * Pop takes the last thing or value added to your array, prints the item and then deletes it from the array.
console.log("It should print and delete 'payday'", candyBars.pop());
// * after using pop we should only get back "snickers" and "twix"
console.log("This should only have the two remaining values", candyBars);
//* arrays start at 0 adding [] with the value we are looking to get back it should print that item on the list.
console.log("should give us back 100", firstList[0]);
console.log("should give us back 1000", firstList[1]);

// when testing Jest cannot be found.