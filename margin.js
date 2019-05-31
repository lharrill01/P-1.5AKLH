'use strict';


let marg = document.getElementById("marg").addEventListener("mouseover", textDisappear);

function textDisappear(){
    for(let i = 0; i <4; i++){
    document.getElementsByClassName("con").item(i).style.visibility = "hidden";
    }
}

