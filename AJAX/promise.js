// promise - resolve,reject,pending

function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
        let error = false;
        if(!error){
            
            console.log("Fucntion: Promise is resolved")
            resolve("Congrats");
        }
        else{
            console.log("Function: Promise is not resolved")
            reject("Sorry");
        }
            }, 2000);
           
       
    })
}
func1().then((res) => {
    console.log("Anuja: Resolved "+ res)
}).catch((err) => {
    console.log("Anuja: Rejected "+ err)
});

let students =[
    {name:"Anuja",subject:"Javascript"},
    {name:"Anu",subject:"Angular"}
]

function enrollStudent(student){
    return new Promise(function (resolve,reject) {
        setTimeout(() => {
            students.push(student);
            console.log("Student has been enrolled")
          resolve();
        }, 3000);
       
    })
   

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

enrollStudent({name:"Anuj",subject:"Java"}).then(()=>{
    getStudents();
}).catch(()=>{
    console.log("Some error occured")
});