let counthome = document.getElementById("count-h")
let countguest = document.getElementById("count-g")


let countHome = 0
let countGuest = 0

function incrementHomeScore1() {
    countHome += 1
    counthome.textContent = countHome
}

function incrementHomeScore2() {
    countHome += 2
    counthome.textContent = countHome
}


function incrementHomeScore3() {
    countHome += 3
    counthome.textContent = countHome
}


function incrementGuestScore1() {
    countGuest += 1
    countguest.textContent = countGuest
}

function incrementGuestScore2() {
    countGuest += 2
    countguest.textContent = countGuest
}

function incrementGuestScore3() {
    countGuest += 3
    countguest.textContent = countGuest
}
