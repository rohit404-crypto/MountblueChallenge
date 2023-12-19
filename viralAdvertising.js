function viralAdvertising(n) {
    // Write your code here
    let liked = 0
    let shared = 5
    let cumalative = 0 
    for(let i = 1 ;i<=n;i++){
        if(i===1){
            liked=Math.floor(shared/2)
            cumalative += liked
        }else{
            shared=liked*3
            liked=Math.floor(shared/2)
            cumalative +=liked
            
        }
    }
    return cumalative

}