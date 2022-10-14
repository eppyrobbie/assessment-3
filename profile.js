function favColor(){

    alert('My favorite color is blue')
}

let colorAlert = document.querySelector("#color")

colorAlert.addEventListener('click', favColor)

function favPlace(){

    alert('My favorite place is NYC')
}

let placeAlert = document.querySelector("#place")

placeAlert.addEventListener('click', favPlace)

function favRitual(){

    alert('My favorite ritual is drinking water before I go to bed')
}

let ritualAlert = document.querySelector("#ritual")

ritualAlert.addEventListener('click', favRitual)