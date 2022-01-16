showNotes();

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  notes = localStorage.getItem("notes");
  title = localStorage.getItem("title");

  
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    notes : addTxt.value,
    title: addTitle.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  addTxt.value = "";
  addTitle.value = "";
  showNotes();
});
function showNotes() {
  let html = "";
  notes = localStorage.getItem("notes");
  console.log(notes);
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.forEach(function (element, index) {
    html += `
        <div class="noteCard my-2 mx-2" style="width: 18rem;">
        <div  >
          <h5> ${element.title}</h5>
          <p >${element.notes}</p>
          <button class="btn btn-primary" id =${index} onClick='deleteNote(this.id)'>Delete Note</button>
        </div>
      </div>
        `;
  });
  let notesElem = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElem.innerHTML = html;
  } else {
    notesElem.innerHTML = `Nothing to show here! Add your note!`;
  }
}

function deleteNote(index) {
  notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let searchTxt = document.getElementById("searchTxt");
let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener('click',function(e){
    e.preventDefault();
    let inputVal = searchTxt.value

    console.log('Input event Fired!',inputVal);

    //e.preventDefault();
    let cards = document.getElementsByClassName('noteCard');
  
    Array.from(cards).forEach(function(element){
       
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
     console.log(cardTxt)

        if(cardTxt.includes(inputVal)){
            console.log("hi")
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})
searchTxt.addEventListener('input',function(){
    let inputVal = searchTxt.value.toLowerCase()

    console.log('Input event Fired!',inputVal);

    //e.preventDefault();
    let cards = document.getElementsByClassName('noteCard');
  
    Array.from(cards).forEach(function(element){
       
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
     console.log(cardTxt)

        if(cardTxt.toLowerCase().includes(inputVal)){
            console.log("hi")
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
    inputVal = ""
})
//

function search(){
  
}
