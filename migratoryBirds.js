function migratoryBirds(arr) {
    // Write your code here
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    for(let i= 0 ; i<arr.length ; i++ ){
       if(arr[i]===1){
           count1++
       } else if(arr[i]===2){
           count2++
       }else if(arr[i]===3){
           count3++
       }else if(arr[i]===4){
           count4++
       }else{
           count5++
       }
            
    }
    
    let countArr=[count1,count2,count3,count4,count5]
    console.log(countArr)
    let maxVal = Math.max(...countArr)
    for(let j = 0 ; j<countArr.length; j++){
        if(countArr[j] === maxVal){
            return j+1
        }
    }

}