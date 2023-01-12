
const container = document.getElementById('container')

const cakeBtn = document.getElementById('cake-btn')
const candleBtn = document.getElementById('candle-btn')
const lighterBtn = document.getElementById('lighter-btn')

//Pastel
function cake(){
    container.addEventListener('click', cakeHandler)
    cakeBtn.removeEventListener('click', cake)
}

function cakeHandler(e){
    if(e.target.matches('button') === false){
        const cake = document.createElement('img')
        cake.src = 'img/chocolatecake_nb.png'
        cake.setAttribute('class','cake')
        cake.style.left = (e.x-350) + 'px'
        cake.style.top = (e.y-680) + 'px'

        container.append(cake)
        container.removeEventListener('click', cakeHandler)
    }
}

//Velas
let numberOfCandles = 0;
candleBtn.addEventListener('click', function(){
    container.addEventListener('click', function(e){
        if(numberOfCandles === 24){
            container.removeEventListener('click', arguments.callee);
            return;
        }

        if(e.target.matches('button') === false){
            const candle = document.createElement('img')
            candle.src = 'img/candle.png'
            candle.setAttribute('class','candle')
            candle.style.left = (e.x-14) + 'px'
            candle.style.top = (e.y-112) + 'px'
    
            container.append(candle)
            numberOfCandles++;
    
        }
    })
})

//Llamas
let numberOfLights = 0;
lighterBtn.addEventListener('click', function(){
    container.addEventListener('click', function(e){
        if(numberOfLights === 24){
            container.removeEventListener('click', arguments.callee);
            return;
        }

        if(e.target.matches('button') === false){
            const light = document.createElement('img')
            light.src = 'img/flame.png'
            light.setAttribute('class','light')
            light.style.left = (e.x-15) + 'px'
            light.style.top = (e.y-50) + 'px'
    
            container.append(light)
            numberOfLights++;
    
        }
    })
})

//Apagar velas
function deleteLights(){
    const lights = document.querySelectorAll('.light')

    for(let i=0; i <lights.length; i++){
        lights[i].remove()
    }

}

