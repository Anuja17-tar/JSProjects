console.log("Welcome")

let fetchBtn = document.getElementById("fetchBtn")
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler() {
    const xhr = new XMLHttpRequest();
//     //xhr.open('GET','anuja.txt',true);
//     xhr.onprogress = function(){
//         console.log("in progress")
//     }
//     xhr.onload=function(){
//        let display = document.getElementById("display");
//        if(this.status == 200){
//         display.innerHTML = `
//         <div class="card" style="width: 18rem;">
//    <div class="card-body">
//      <h5 class="card-title">Card title</h5>
//      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//      <p class="card-text">${this.responseText}</p>
//      <a href="#" class="card-link">Card link</a>
//      <a href="#" class="card-link">Another link</a>
//    </div>
//  </div>
//         `
//        }
//        else
//        {
//         display.innerHTML = `
//         <div class="card" style="width: 18rem;">
//    <div class="card-body">
//      <h5 class="card-title">Card title</h5>
//      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//      <p class="card-text">Some error occured</p>
//      <a href="#" class="card-link">Card link</a>
//      <a href="#" class="card-link">Another link</a>
//    </div>
//  </div>
//         `
//        }
       
//     }
//     //xhr.send();

//post
  xhr.open('POST','https://node-fake-api-server.herokuapp.com/',true);
xhr.getResponseHeader('Content-type:application/json')
params = `{
	"external_id": "postman"

}`


xhr.send(params);
}