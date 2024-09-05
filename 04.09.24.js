function binary(arr, number) {
    let left = 0; 
    let right = arr.length -1;

    while (left <= right){
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == number) {
            return mid;
        } else if (arr[mid] < number){
            left = mid;
        } else {
            right = mid;
        }
    }
}
function linear(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == number) {
            return i;
        }
    }
}

const arr= [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11 ,12, 13, 14, 15, 16, 17, 18, 
    19, 20, 21, 22, 23, 24, 25, 26, 
    27, 28, 29, 30, 31, 32, 33, 34
];

let number = 22;

let resLinear = linear(arr, number);
let resBinary = binary(arr, number);


console.log("Linear: ", arr[resLinear]);
console.log("Binary: ", arr[resBinary]);

