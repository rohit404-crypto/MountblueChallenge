function angryProfessor(k, a) {
    // Write your code here
    let onTime = 0 ;
     for ( let i =0; i<a.length ; i++ ){
         if(a[i]<=0){
             onTime++;
         }
     }
    
    if(onTime>=k){
        return "NO"
    }else{
        return "YES"
    }

}