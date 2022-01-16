let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let output=""
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText=='C'){
            output ="";
            screen.value=output;
        }
        else if(buttonText=="="){
            output = eval(output);
            screen.value = output;
        }
        else{
            output+=buttonText;
            screen.value=output;
        }
    })
}