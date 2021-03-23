// A Project that uses data in some way: arrays 

// An array that will run the first element 
const arr = ["first element", 1, "new element", 2, 3, 4];
arr.pop();
arr.unshift("first element");
console.log(arr);

// In ways of merging two sorted arrays

function mergeSorted(arr1, arr2) {
    const result = [];
    let left = 0;
    let right = 0;

    const length = arr1.length + arr2.length;

    while (result.length < length) {
        if (arr1[left] === undefined) {
            result.push(arr2[right]);
            right++;
        } else if (arr2[right] === undefined) {
            result.push(arr1[left]);
            left++;
        } else if (arr1[left] < arr2[right]) {
            result.push(arr1[left]);
            left++;
        } else {
            result.push(arr2[right]);
            right++;
        }
    }
    console.log(`Length: ${length}`);
    return result;
}
const arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const arr2 = [2, 555];
console.log(mergeSorted(arr1, arr2));


// Reversing, flipping the str in arr 
function reverse(str) {
    const arr = str.split("");
    const n = arr.length - 1;
    const midpoint = Math.floor(n / 2);

    for (let i = 0; i < midpoint; i++) {
        // flipping elements
        let temp = arr[i];
        arr[i] = arr[n - i];
        arr[n - i] = temp;
    }

    return arr.join("");
}

const str = "12345";
console.log(reverse(str));