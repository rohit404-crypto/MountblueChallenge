function utopianTree(n) {
    // Write your code here
    let hieght = 0;
 for(let i=0; i<=n; i++){
     if(i===0||i%2===0){
         hieght++
     }else{
         hieght *=2
     }
 }
  return  hieght
}
