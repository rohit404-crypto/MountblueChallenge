function bonAppetit(bill, k, b) {
    // Write your code here
      bill.splice(k,1)
    let sum = 0;
    let caculation = 0
    for(let i =0 ; i<bill.length; i++){
        sum += bill[i];
    }
    caculation = sum/2
    if(caculation===b){
        console.log("Bon Appetit")
    }else{
        console.log(b-caculation)
    }
}