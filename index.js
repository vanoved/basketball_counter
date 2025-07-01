const score_home = document.getElementById("score_home")
const score_guest = document.getElementById("score_guest")
const btn_1_home = document.getElementById("btn_1_home")
const btn_2_home = document.getElementById("btn_2_home")
const btn_3_home = document.getElementById("btn_3_home")
const btn_1_guest = document.getElementById("btn_1_guest")
const btn_2_guest = document.getElementById("btn_2_guest")
const btn_3_guest = document.getElementById("btn_3_guest")
const btn_reset = document.querySelector(".btn_reset")

let score_home_number = 0
let score_guest_number = 0

btn_1_home.onclick = plus_1_home
btn_2_home.onclick = plus_2_home
btn_3_home.onclick = plus_3_home
btn_1_guest.onclick = plus_1_guest
btn_2_guest.onclick = plus_2_guest
btn_3_guest.onclick = plus_3_guest
btn_reset.onclick = reset

function plus_1_home() {
    score_home_number += 1
    score_home.textContent = score_home_number  
    uderline_winner()     
}

function plus_2_home() {
    score_home_number += 2
    score_home.textContent = score_home_number  
    uderline_winner()     
}

function plus_3_home() {
    score_home_number += 3
    score_home.textContent = score_home_number 
    uderline_winner()      
}

function plus_1_guest() {
    score_guest_number += 1
    score_guest.textContent = score_guest_number 
    uderline_winner()      
}

function plus_2_guest() {
    score_guest_number += 2
    score_guest.textContent = score_guest_number 
    uderline_winner()      
}

function plus_3_guest() {
    score_guest_number += 3
    score_guest.textContent = score_guest_number   
    uderline_winner()    
}

function uderline_winner() {
    if (score_guest_number > score_home_number) {
        document.getElementById("guest_item").style.color = '#F94F6D';
        document.getElementById("home_item").style.color = 'white';
    }
    else if (score_home_number > score_guest_number) {
        document.getElementById("home_item").style.color = '#F94F6D';
        document.getElementById("guest_item").style.color = 'white';
    } else {
        document.getElementById("home_item").style.color = 'white';
        document.getElementById("guest_item").style.color = 'white';    
    }
}

function reset() {
    score_guest_number = 0
    score_home_number = 0   
    score_guest.textContent = score_guest_number 
    score_home.textContent = score_home_number 
    uderline_winner()  
}