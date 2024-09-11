function binarySearch(arr, desiredNumber) {
    let left = 0; 
    let right = arr.length -1;

    while (left <= right){
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === desiredNumber) {
            return mid;
        } else if (arr[mid] < desiredNumber) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

function linearSearch(arr, desiredNumber) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === desiredNumber) {
            return i;
        }
    }
    
    return -1;
}

const arr= [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11 ,12, 13, 14, 15, 16, 17, 18, 
    19, 20, 21, 22, 23, 24, 25, 26, 
    27, 28, 29, 30, 31, 32, 33, 34
];

const desiredNumber = 22;

const resLinear = linearSearch(arr, desiredNumber);
const resBinary = binarySearch(arr, desiredNumber);


console.log("Linear: ", resLinear !== -1 ? arr[resLinear] : 'Not found');
console.log("Binary: ", resBinary !== -1 ? arr[resBinary] : 'Not found');
