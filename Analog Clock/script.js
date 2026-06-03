let hr=document.getElementById("hour");
let mn=document.getElementById("min");
let sc=document.getElementById("sec");

function displayTime(){
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hr_rotation=30*hh + mm/2;
    let mn_rotation=6*mm;
    let sc_rotation=6*ss;

    hr.style.transform=`rotate(${hr_rotation}deg)`;
    mn.style.transform=`rotate(${mn_rotation}deg)`;
    sc.style.transform=`rotate(${sc_rotation}deg)`;
}
setInterval(displayTime,1000);