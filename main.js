let incrementButton = document.querySelector(".increment")
let decrementButton = document.querySelector(".decrement")
let countView = document.querySelector(".count")

console.log(incrementButton)
console.log(decrementButton)
console.log(countView)


function onIncrement (event){
    console.log("We're Incrementing")
     
    let currentCount = parseInt(countView.textContent)
    let newCount = currentCount + 1
    
    countView.textContent = newCount
}

function onDecrement (event){
    console.log("We're Decrementing")
     
    let currentCount = parseInt(countView.textContent)
    let newCount = currentCount - 1
    
    countView.textContent = newCount
}

incrementButton.addEventListener("click", onIncrement) // callBack function
decrementButton.addEventListener("click", onDecrement) // callBack function
//This is asynchronous programming


function onKeypress(event){
    console.log(event)
}

document.addEventListener("keydown" , onKeypress)
