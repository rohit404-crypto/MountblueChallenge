function diagonalDifference(arr) {
    
    let primaryDiagonalSum = 0
    let secondaryDiagonal = 0
    for(let i =0 ; i<arr.length ; i++){
        for(let j =0 ; j<arr.length; j++){
            if(i===j){
               primaryDiagonalSum += arr[i][j];
                
            }
        }
    }for(let i =0 ; i<arr.length ; i++){
        for(let j =0 ; j<arr.length; j++){
            if((i+j)===arr.length-1){
              secondaryDiagonal+= arr[i][j];
                
            }
        }
    }
     return (Math.abs( primaryDiagonalSum-secondaryDiagonal))
    
}