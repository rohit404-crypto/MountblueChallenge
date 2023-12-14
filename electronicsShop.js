
function getMoneySpent(keyboards, drives, b) {
    let maxSpent = -1;
 
     for (let i = 0; i < keyboards.length; i++) {
         for (let j = 0; j < drives.length ; j++) {
             let totalSpent = keyboards[i] + drives[j];
             if (totalSpent <= b && totalSpent > maxSpent) {
                 maxSpent = totalSpent;
             }
         }
     }
 
     return maxSpent;
 
 }