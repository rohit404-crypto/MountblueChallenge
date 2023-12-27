function beautifulDays(i, j, k) {
    // Write your code here
    let count=0
    for(let l = i ; l<= j ; l++ ){
     const reversedNum = parseFloat(l.toString().split('').reverse().join('')) * Math.sign(l);
    if(Math.abs(l-reversedNum)%k===0){
        count++ 
    }
    }
    return count

}
