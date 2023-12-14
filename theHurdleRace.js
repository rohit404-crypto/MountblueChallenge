function hurdleRace(k, height) {
    // Write your code here
    let count = 0;
    let max = k;
    for(let i=0 ; i<height.length ; i++){
        if(height[i]>max){
            max=height[i];
            
        }
    
    }
    count = max-k
    return count;
    
}