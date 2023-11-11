/*
* Rules
1. cheese burger is 4.20
2. chicken sandwich is 5.10
3. fries are 2.25
4. drink is 1.25
5. combo meal one cheese burger fries and drink 6.25
6. combo meal two chicken sandwich fries and drink 7.35
*/

function comboMealCreator(cheeseBurger: boolean, chickenSandwich: boolean, fries: boolean, drink: boolean) => {
    if(cheeseburger) return 4.20;
    if(chickenSandwich) return 5.10;
    if((cheeseBurger && fries)|| (chickenSandwich && fries)) return 6.25;
    else(return: 0)
}

console.log("this should be combo meal one", comboMealCreator(true, false, true, true))
console.log("this should be combo meal two", comboMealCreator(false, true, true, true))
console.log("this should be fries and a drink", comboMealCreator(false, false, true, true))

// This is just a few examples, not fully completed. 

function takeOrder(ticket: string):string {
    if(ticket == "Combo Meal One"){
        return "6.25";
    } else if (ticket == "Combo Meal Two"){
        return "7.35";
    } else {
        return `We do not carry ${ticket}`;
    }
}