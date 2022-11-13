document.querySelector("#one").addEventListener("submit",signup);
let userdata=JSON.parse(localStorage.getItem("userdetail"))||[];
let Userarr =[]
function signup(event){
event.preventdefault()
let username = document.querySelector("#name").value;
let useremail = document.querySelector("#email").value;
let usernumber = document.querySelector("#num").value;
let userpass = document.querySelector("#pass").value;
let confirm_pas = document.querySelector("#con").value;

let obj = {
    username,
    useremail,
    usernumber,
    userpass,
    confirm_pas
}

if ( userpass==confirm_pas){
    if(username!="" && useremail!="" && usernumber!="" && userpass!="" && confirm_pas!=""){
        userdata.push(obj)
        Userarr.push(obj)
        localStorage.setItem("userdetail",JSON.stringify(userdata))
        localStorage.setItem("dell",JSON.stringify(Userarr))

         
    }else{
        alert("Please fill all details")
    }
}else{
    alert("Password is incorrect")
}

}


signup()