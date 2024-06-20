const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let btn= document.getElementById("btn");
const qoutes=["Be yourself; everyone else is already taken.","To live is the rarest thing in the world. Most people exist, that is all.","True friends stab you in the front.","Women are made to be Loved, not understood.","Be the change that you wish to see in the world.", "Live as if you were to die tomorrow. Learn as if you were to live forever.","No one can make you feel inferior without your consent.","Great minds discuss ideas; average minds discuss events; small minds discuss people.","Do what you feel in your heart to be right - for you'll be criticized anyway.","Do one thing every day that scares you.","Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.","Our lives begin to end the day we become silent about things that matter.",];
let req_int;
document.getElementById("btn").addEventListener("click",randomiser)
function randomiser(){
    let hexcode="#";
    let randint1= randint(16);
    for(let i=0; i<6;i++){
        let randint1= randint(16);
        hexcode+=hex[randint1];
        console.log(hexcode);
    }
    let randint2=randint(qoutes.length);
    console.log(randint2);
    document.body.style.backgroundColor=hexcode;
    document.getElementById("qoute-text").innerHTML=qoutes[randint2];
}
function randint(req_int){
    return Math.floor(Math.random()*req_int);
}