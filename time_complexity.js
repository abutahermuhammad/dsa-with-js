/***********************************************************/
/*                      Big O Notation                     */
/***********************************************************/
// Time Complexity defines how much runtime do we need as the inputs provided to the code gets larger?
//      - Arithmetic operations have constant time complexity of O(1).
//      - Variable assignment has constant time complexity of O(1).
//
//
// Space Complexity defines how much more memory use (RAM) do we need as the inputs provided to the Code get larger.
//      - Storing values in variables always takes up memory.
//      - Most Primitives (Booleans and Numbers) take up O(1) /  Constant Space.
//      - String, Array and Object take up O(n)/ Linear Space.
//
//
// Logarithmic Time Complexity:
//      - When the input `N` gets doubled, then we only have to do one more operation.
//      - Big O only cares about worst care scenario.
//
//
// Constants do NOT Matter:
//      - O(12) --> O(1)
//      - O(2n) --> O(n)
//      - O(n/2) --> O(n)
//      - O(13n^2) --> O(n^2)
//
//      NOTE:
//      - Imagine that big O only cares about Graph Shape in the long run...
//
//
// Smaller Terms do NOT Matter:
//      - O(n+10) --> O(n)
//      - O(1337n+50) --> O(n)
//      - O(n^2+12n+8) --> O(n^2)
//
//      Note:
//      - Big O only cares about the number of operation to do as N approaches infinity.
//
//
// Other terms of big O notation:
//      - O(1) --> Constant Time
//      - O(n) --> Linear Time
//      - O(n^2) --> Quadratic Time
//
//      Note:
//      - Big O only cares about the number of operation to do as N approaches infinity.


/**
 * The function prints the same message four times.
 * 
 * The function has a loop that runs four times regardless of the input.
 * Therefore, the total number of iterations is 4, which gives the time 
 * complexity of O(1); means constant time.
 */
function shoutWhatsUp() {
    for (let i = 0; i < 4; i++) {
        console.log("What's up?");
    }
}
// shoutWhatsUp()


/**
 * The function prints the same message twice for each value of n.
 * 
 * The function has two loops that run n times each, where n is the parameter. 
 * Therefore, the total number of iterations is 2n, which gives the time complexity of O(n).
 */
function shoutWhatsUp1(n) {
    for (let i = 0; i < n; i++) {
        console.log("What's up?");
    }

    for (let i = 0; i < n; i++) {
        console.log("What's up?");
    }
}
// shoutWhatsUp1(1)


/**
 * The function prints each word from the array followed by a space and each word 
 * from the same array in a new line.
 * 
 * The function has a nested loop that runs n times for each element of the array, 
 * where n is the length of the array. Therefore, the total number of iterations is n*n, 
 * which gives the time complexity of O(n^2). 
 */
function shoutUp(arr) {
    // 
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i] + " " + arr[j]);
        }
    }
}

let input = ["canoodle", "wabbit", "alcoholic"];
// shoutUp(input);


/**
 * The function uses a nested loop to iterate over two arrays of different lengths. 
 * The outer loop runs n times, where n is the length of the first array. 
 * The inner loop runs m times, where m is the length of the second array. 
 * Therefore, the total number of iterations is n*m, which gives the time
 * complexity of O(nm).
 */
function shoutUp1(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            console.log(arr1[i] + " " + arr2[j]);
        }
    }
}

let arr1 = ["canoodle", "wabbit", "alcoholic"];
let arr2 = ["canoodle", "wabbit"];
shoutUp1(arr1, arr2);

