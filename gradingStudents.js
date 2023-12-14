function gradingStudents(grades) {
    // Write your code here
    let finalGrades=[];
    for(let i = 0 ; i<grades.length;i++){
         if(grades[i]>37){
            if(5-(grades[i]%5)<3&&5-(grades[i]%5!==0)){
                grades[i] = grades[i]+(5-(grades[i]%5))
            }
        }
       
    }
    return grades
}