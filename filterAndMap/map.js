let arr = [1,2,3,4];
let narr = [];
// for(let i=0; i<arr.length; i++){
//     narr[i] = arr[i]*2;
// }

// console.log(arr);

narr = arr.map((val) => {
    return val*2;
})
console.log(narr);