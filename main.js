const currency = "$"

const hearticon = document.getElementById('wishlist')

function AddWishlist(){
    hearticon.style.color = "#FF0000"
}
function RemoveWishlist(){
    hearticon.style.color = null
}

const price = 1199

function calculate(){
    let SelectX = document.getElementById('formselect')
    const poll = document.getElementById('poll')
    if(SelectX.value == "0"){
        poll.innerText = SelectX.value + " $"
    }
    else{
        poll.innerText = "Total : " + Math.round(price / Number(SelectX.value)) + " $/month"
    }
}


function slider(imgs){
    let mainphoto = document.getElementById('mainphoto')
    mainphoto.src = imgs.src
}
function graphite(){
    mainphoto.src = "./img/graphite1.png"
    photo1.src = "./img/graphite1.png"
    photo2.src = "./img/graphite2.png"
    photo3.src = "./img/graphite3.png"
    photo4.src = "./img/graphite4.png"
}
function blue(){
    mainphoto.src = "./img/blue1.jpg"
    photo1.src = "./img/blue1.jpg"
    photo2.src = "./img/blue2.jpg"
    photo3.src = "./img/blue3.jpg"
    photo4.src = "./img/blue4.jpg"
}

function gold(){
    mainphoto.src = "./img/gold1.jpg"
    photo1.src = "./img/gold1.jpg"
    photo2.src = "./img/gold2.jpg"
    photo3.src = "./img/gold3.jpg"
    photo4.src = "./img/gold4.jpg"
}
