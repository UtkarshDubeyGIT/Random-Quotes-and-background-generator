let date=document.getElementById("date");
let day=document.getElementById("day");
let year=document.getElementById("year");
let month=document.getElementById("month");
let hours=document.getElementById("hours");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");
let weekdays=[0,"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let monthnames=["January","February","March","April","May","June","July","August","September","October","November","December"]
setInterval(()=>{
let today=new Date();
date.innerHTML =today.getDate();
day.innerHTML=weekdays[today.getDay()];
month.innerHTML=monthnames[today.getMonth()];
year.innerHTML=today.getFullYear();
hours.innerHTML=today.getHours();
minutes.innerHTML=today.getMinutes();
seconds.innerHTML=today.getSeconds();
},1000)


