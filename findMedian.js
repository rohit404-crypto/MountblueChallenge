function findMedian(arr) {
    // Write your code here
arr.sort((a,b)=> a-b)
    console.log(arr)
let medianIndex = Math.floor(arr.length/2)
 return arr[medianIndex]

}