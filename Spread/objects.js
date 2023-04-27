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

// let obj2 = obj;
// obj2.name = "Akshit";
// console.log(obj); // name : "Akshit"
// console.log(obj2); // name : "Akshit"

// let obj2 = {...obj}
// obj2.name = "Akshit";
// console.log(obj) // name : "Shivanshu"
// console.log(obj2) // name : "Akshit"

// But for nested objects like "add" and "state", we need to do same so that for obj2 they have a new reference in Heap.
// let obj2 = {...obj, add : {...obj.add}, state: {...obj.add.state} }


// Easier way to do above 
let obj2 = JSON.parse(JSON.stringify(obj)) // This will create a string in Stack which will have new location which will be then parsed to JSON.




