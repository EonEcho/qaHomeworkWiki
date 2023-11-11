function getSpecials(weekDay: string):string {
    switch(weekDay){
        case "Monday":
            return "Cup of Mud Mondays 25% off a cup of mud"
            break;
        case "Tuesday":
            return "Taco Tuesday 50% off tacos"
            break;
        case "Wednesday":
            return "waffle Wednesday 30% off all waffles"
            break;
        default:
        return "Happy Weekend 30% off all ice cream"
    }
}

console.log(getSpecials("Monday"))
console.log(getSpecials("Tuesday"))
console.log(getSpecials("Wednesday"))

//npx ts-node 