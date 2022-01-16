console.log("HI");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const Cars = document.getElementById("Cars");
const address = document.getElementById("address");
const alert = document.getElementById("alert");
let validName = false;
let validEmail = false;
let validNumber = false;
name.addEventListener('blur',(e)=>{
    console.log("Name is blur");
    let regex = /^[a-zA-Z]+$/
    let str = name.value;
    console.log(regex,str);
    if(!regex.test(str)){
        e.target.className = 'form-control is-invalid'
        let validateName = document.getElementById("validateName");
        validateName.innerText="Name Entered is invalid. Kindly Check!."
    }
   

})
email.addEventListener('blur',(e)=>{
    console.log("email is blur");
    let regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    let str = email.value;
    console.log(regex,str);
    if(!regex.test(str)){
        e.target.className = 'form-control is-invalid'
        let validateEmail = document.getElementById("validateEmail");
        validateEmail.innerText="Email-ID entered is invalid. Kindly Check!."
    }
    
})
phoneNumber.addEventListener('blur',(e)=>{
    console.log("phoneNumber is blur");
    let regex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    let str = phoneNumber.value;
    console.log(regex,str);
    if(!regex.test(str)){
        e.target.className = 'form-control is-invalid'
        let validatephoneNumber = document.getElementById("validatephoneNumber");
        validatephoneNumber.innerText="PhoneNumber Entered is invalid. Kindly Check!."
    }
    
})
let submit = document.getElementById("submit")
submit.addEventListener('click',()=>{
    if(Cars.value == "Choose Your Car" || address.value == ''){
        
        let validateAddress = document.getElementById("validateAddress");
        validateAddress.innerText="Please select all the fields and Try Again"
        submit.disabled = true;
    }
    else {
        alert.className += ' show'
     
    }
    
    
})

console.log(name,email,phoneNumber,address.value );