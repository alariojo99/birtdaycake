
const container = document.getElementById('container')

const cakeBtn = document.getElementById('cake-btn')
const candleBtn = document.getElementById('candle-btn')
const lighterBtn = document.getElementById('lighter-btn')

const menu = document.getElementsByClassName('header-btns')

let buttonClicked = ''

cakeBtn.addEventListener('click', function(){
    buttonClicked = 'cakeBtn'
})

candleBtn.addEventListener('click', function(){
    buttonClicked = 'candleBtn'
})

lighterBtn.addEventListener('click', function(){
    buttonClicked = 'lighterBtn'
})

container.addEventListener('click', function(e){
    console.log(e.target)
    if ((buttonClicked === 'cakeBtn')&&(e.target.matches('button')===false)){
        const cake = document.createElement('img')
        cake.src='img/chocolatecake_nb.png'
        cake.setAttribute('class', 'cake')
        cake.style.left = (e.x-350) + 'px'
        cake.style.top = (e.y-680) + 'px'

        container.append(cake)
    }else if ((buttonClicked === 'candleBtn')&&(e.target.matches('button')===false)){
        const candle = document.createElement('img')
        candle.src = 'img/candle2.png'
        candle.setAttribute('class','candle')
        candle.style.left = (e.x-14) + 'px'
        candle.style.top = (e.y-112) + 'px'

        container.append(candle)
    }else if ((buttonClicked === 'lighterBtn')&&(e.target.matches('button')===false)){
        const light = document.createElement('img')
        light.src = 'img/flame.png'
        light.setAttribute('class','light')
        light.style.left = (e.x-15) + 'px'
        light.style.top = (e.y-50) + 'px'

        container.append(light)
    }
})

//Apagar velas
function deleteLights(){
    const lights = document.querySelectorAll('.light')

    for(let i=0; i <lights.length; i++){
        lights[i].remove()
    }

}

