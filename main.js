let next = document.querySelector(".right");
let prev =document.querySelector(".left");
let cont = document.querySelector(".container");
let my = document.querySelector(".list");
let mycontainer = document.querySelector(".small");


next.onclick = function(){
showslider("next");
}
prev.onclick = function(){
showslider("prev");
}
function showslider(type){
    let migitems = document.querySelectorAll(".item");
    let smitems = document.querySelectorAll(".item1");
    if(type==="next"){
    cont.classList.add("next");
    my.appendChild( migitems[0]);
    mycontainer.appendChild(smitems[0]);
    }
    else{
    cont.classList.add("prev");
    my.prepend( migitems[3]);
    mycontainer.prepend(smitems[3]);
}

clearTimeout(2);
setTimeout(function(){
    cont.classList.remove("next");
    cont.classList.remove("prev");
},3000);
}