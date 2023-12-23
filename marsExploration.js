function marsExploration(s) {
    // Write your code here
    let diff = 0 ;
    const regex = /^[^SOso]+$/;
     for(let i =0; i<s.length ; i++){
         if(regex.test(s[i])){
             diff++
         }
     }
    return diff
    

}