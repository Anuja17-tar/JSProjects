console.log("Hi");
const next = document.getElementById("next");

const Data = [
    {
        name:'Anjel',
        location:'US',
        age:19,
        skills:"Java",
        photo:"https://randomuser.me/api/portraits/med/women/75.jpg"
    },
    {
        name:'Anji',
        location:'UK',
        age:29,
        skills:"JavaScrpt",
        photo:"https://randomuser.me/api/portraits/med/women/85.jpg"
    },
    {
        name:'Anuj',
        location:'Germany',
        age:39,
        skills:"Python",
        photo:"https://randomuser.me/api/portraits/med/men/75.jpg"
    },
    {
        name:'Anushka',
        location:'US',
        age:19,
        skills:"Java",
        photo:"https://randomuser.me/api/portraits/med/women/25.jpg"
    }
]
 function iterator(profiles) {
     nextIndex=0;
     return {
         next : function () {
             return nextIndex<profiles.length? {value:profiles[nextIndex++],done:false} : {done:true}
         }

     }
     
 }
 const candidates = iterator(Data);
 function nextCV() {
     
   
        const currentCandidate = candidates.next().value;
        if(currentCandidate!=undefined){
        let image = document.getElementById("image");
        let profile = document.getElementById("profile");
        image.innerHTML = `<img src = '${currentCandidate.photo}'>`;
        profile.innerHTML=`<ul class="list-group">
        <li class="list-group-item">Name :${currentCandidate.name}</li>
        <li class="list-group-item">Age :${currentCandidate.age}</li>
        <li class="list-group-item">Location : ${currentCandidate.location}</li>
        <li class="list-group-item">Skils : ${currentCandidate.skills}</li>
       </ul>`;
        }
     
     else{
        image.innerHTML =``
         profile.innerHTML=`
         <h1>Done!</h1>
         `
         next.innerHTML=``
     }
    
 }
nextCV();
 next.addEventListener('click',nextCV);