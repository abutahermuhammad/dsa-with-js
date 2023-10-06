
// const sumUpToN = (n) => {
//     let total = 0;

//     for (let i = 0; i <= n; i++) {
//         total += i;
//     }

//     return total;
// }

const sumUpToN = (n) => {
    return (n * (n + 1)) / 2;
}


console.log(sumUpToN(12562124555));

// First solution has 1 operation. Therefore, time complexity O(n).
//  &
// The second one has 3 operation. Therefore, time complexity is O(1)!
// As mathematical operations has time complexity of O(1).