function plusMinus(arr) {
    // Write your code here
 let plus = 0;
 let zero = 0;
 let minus = 0;
  for(let i=0 ; i< arr.length;i++){
      if(arr[i]===0){
          zero++
      }else if(arr[i]>0){
          plus++;
      }else{
          minus++;
      }
  }
    console.log(plus/arr.length);
    console.log(minus/arr.length)
     console.log(zero/arr.length)
}