let students =[
    {name:"Anuja",subject:"Javascript"},
    {name:"Anu",subject:"Angular"}
]

function enrollStudent(student,callBack){
    setTimeout(() => {
        students.push(student);
        console.log("Student has been enrolled")
        callBack();
    }, 3000);
   

}

function getStudents(){
    let str=""
    setTimeout(() => {
       
        students.forEach(function(student){
            str+=`<li>${student.name}</li>`
        })
        let dis = document.getElementById("display");
    dis.innerHTML = str;
    }, 1000);
    
}

enrollStudent({name:"Anuj",subject:"Java"},getStudents);
