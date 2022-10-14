let restList = ['Communal', 'Black Sheep Diner', 'Ks Kitchen', 'Station 22']


function randRest(){
    const random = Math.floor(Math.random() * restList.length)
    alert(random)
    //don't know how to do just the name haha
}

let alertRest = document.querySelector('#restButton')

alertRest.addEventListener('click', randRest)