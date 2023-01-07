let count = 0 

const value = document.querySelector('#value')
const decrease = document.querySelector(".decrease")
const reset = document.querySelector(".reset")
const increase = document.querySelector(".increase")

decrease.addEventListener('click', function() {
    count--
    if (count > 0) {
        value.style.color = 'green'
    }
    
    if (count < 0) {
        value.style.color = 'red'
    } 
    
    if (count === 0 ) {
        value.style.color = 'black'
    }
    value.textContent = count
})

reset.addEventListener('click', function () {
    count = 0
    if (count > 0) {
        value.style.color = 'green'
    }
    
    if (count < 0) {
        value.style.color = 'red'
    } 
    
    if (count === 0 ) {
        value.style.color = 'black'
    }
    value.textContent = count
})

increase.addEventListener('click', function() {
    count++
    if (count > 0) {
        value.style.color = 'green'
    }
    
    if (count < 0) {
        value.style.color = 'red'
    } 
    
    if (count === 0 ) {
        value.style.color = 'black'
    }
    value.textContent = count
})
