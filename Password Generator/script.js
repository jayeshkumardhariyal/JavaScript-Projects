let inputSlider = document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let passBox=document.getElementById("passBox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let genBtn=document.getElementById("genBtn");
let copyIcon=document.getElementById("copyIcon");


 // this is for intitial value
sliderValue.textContent=inputSlider.value;
// this is used for changing the value from slider
inputSlider.addEventListener('input', ()=>{
sliderValue.textContent=inputSlider.value;
})

// for genrate password button
genBtn.addEventListener('click', ()=>{
    passBox.value= generatePassword();
});
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numChars="0123456789";
let symChars="!@#$%^&*()_+~`|}{[]:;?><,./-=";
// to genrate password generate password function
function generatePassword(){
    let genPass="";
    let allChars="";
    allChars += lowercase.checked? lowerChars:"";
    allChars += uppercase.checked? upperChars:"";
    allChars += numbers.checked? numChars:"";
    allChars += symbols.checked? symChars:""; 
    if(allChars == "" || allChars.length == 0){
        return "";
    }
    let i=1;
    while(i<=inputSlider.value){
        genPass+=allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
    }
    return genPass;
}

copyIcon.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.length >= 1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerHTML="check";   
        copyIcon.title=" Password copied";
    }
    setTimeout(()=>{
        copyIcon.innerHTML="content_copy";
        copyIcon.title="";
    }, 2000);
});
