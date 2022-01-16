console.log("This");

//utility function
//function:1
//to get DOM element from string
function elementFromString(string) {
  let div =document.createElement('div');
  div.innerHTML=string;
 
  return  div.firstElementChild;
  
}
// Hide parameters box initially
let parameterBox = document.getElementById("parameterBox");
parameterBox.style.display = 'none';

//hide json box if parameter is selected
let params = document.getElementById("params");
params.addEventListener('click',()=>{
    document.getElementById('jsonBox').style.display ='none';
    document.getElementById('parameterBox').style.display ='block';
})

//hide params box if json is selected

let json = document.getElementById("json");
json.addEventListener('click',()=>{
    document.getElementById('parameterBox').style.display ='none';
    document.getElementById('jsonBox').style.display ='block';
})

//if user clicks on plus button add more parameters
let addParams = document.getElementById("addParams");
let count=0;
addParams.addEventListener('click',()=>{

    let extraParams = document.getElementById("extraParams");
  let string = `
  <div class="form-row my-2">
  <label for="url" class="col-sm-2 col-form-label">Parameter ${count+2}</label>
  <div class="col-md-4">
      <input type="text" class="form-control" id="parameterKey${count+2}" placeholder="Enter Parameter ${count+2} Key">
  </div>
  <div class="col-md-4">
      <input type="text" class="form-control" id="parameterValue${count+2}" placeholder="Enter Parameter ${count+2} Value">
  </div>
  <button  class="btn btn-primary deleteParams">-</button>
</div>
  `
  let divElement = elementFromString(string);
  console.log(divElement);
  extraParams.appendChild(divElement);
  //if user clicks minus 
let delParams = document.getElementsByClassName('deleteParams');

for(item of delParams){
  item.addEventListener('click',(e)=>{
    e.target.parentElement.remove();
  })
}
  count++;
  
});

//if user clicks submit
let submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
  document.getElementById('responseJsonText').innerHTML = "Please wait.... Fetching response"
  //fetch all the values entered by user
  url = document.getElementById('url').value;
  requestType = document.querySelector("input[name='requestType']:checked").value;
  contentType = document.querySelector("input[name='contentType']:checked").value;
 console.log(url + requestType + contentType);
 //if user selects use params instead of json, collect all the values in object
 if(contentType=='params'){
   data={}
   for(i=0;i<count+1;i++){
     if(document.getElementById('parameterKey'+(i+1))!=undefined){
     let key = document.getElementById('parameterKey'+(i+1)).value;
     let value = document.getElementById('parameterValue'+(i+1)).value;
    data[key]=value;
    console.log(data);
   }
  }
  data = JSON.stringify(data)
 }
 else{
   data = document.getElementById('requestJsonText').value 
   console.log(data);
 }

 if(requestType == "GET"){
  let ans = get();
  ans.then(data=>{
    console.log(data);
    document.getElementById('responseJsonText').innerHTML = data;
    Prism.highlightAll();
   })
 }
 else{
  let ans = post();
  ans.then(data=>{
    console.log(data);
    document.getElementById('responseJsonText').innerHTML = data;
 Prism.highlightAll();
  })
 }

 async function get(){
  const response = await fetch(url);
  const res = response.text();
  console.log(res);
  return res;
}

async function post(){
  const config = {
    method: 'POST',
    headers: {
        
        'Content-Type': 'application/json; charset=UTF-8',
    },
    body: data,
}
const response = await fetch(url, config)
return response.text();
}

})






