let obj = {
    name : "Shivanshu Sarin",
    add : {
        country : "India",
        state : {
            code : "DL",
            pin : "110022"
        }
    }
}

// Normal Way
    // let name = obj.name;
    // let country = obj.add.country;
    // console.log(name, country)

// Destructuring Objects
let {name, add, add : {country}, add: {state : {code}}} = obj;
console.log(name, add, country, code)