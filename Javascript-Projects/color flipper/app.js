const colors = ['Green', 'Red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click' , function() {
    const randomNumber = getRandomNumber()
    
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors [randomNumber]
    changeColor()
})

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length)
}

function changeColor() {
    const randomNumber = getRandomNumber()
    document.querySelector('.color').style.color = color.textContent
}