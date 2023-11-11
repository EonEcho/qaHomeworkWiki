class Employee {
    id: number;
    name: string;
    phone: number;
    email: string;
    // all of these are required in order to use the Employee class.
    constructor(id:number, name: string, phone: number, email: string){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    // toString method is taking all the employee information in a way that looks cleaner
    toString():string {
        let record =
        `Employee Record --- Id: ${this.id}\n`+
        `Name: ${this.name}\n`+
        `Contact Information\n`+
        `Phone: ${this.phone}\n`+
        `Email: ${this.email}\n`;
        return record;
    };
};


let firstEmployee = new Employee (
    1,
    "Ahsoka Tano",
    8018675309,
    `bestpadawanever@mylightsabersarecoolerthanyours.com`
);

let secondEmployee = new Employee (
    2,
    "Obi Wan Kanobi",
    8018008000,
    `itsoveranakin@ihavethehighground.com`
);

console.log(firstEmployee.toString());
console.log(secondEmployee.toString());


