function miniMaxSum(arr) {
    // Write your code here
    let sumArr= []
   
    for(let i = 0; i<arr.length;i++){
        let sum = 0;
        for(let j=0;j<arr.length;j++){
            if(i!==j){
                sum+=arr[j]
            }
        }
        sumArr.push(sum)
    }
     let min = Math.min(...sumArr)
     let max = Math.max(...sumArr)
     
    console.log(`${min} ${max}`)
    
}
