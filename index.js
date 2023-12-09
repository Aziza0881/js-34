let numContainer = document.getElementById("num")
let value = 0

let btninc = document.querySelector(".inc")
let btnDec = document.querySelector(".dec")
let btnReset = document.querySelector(".reset")



btninc.addEventListener("click", () =>  {
    value++
    numContainer.textContent = value
})

btnDec.addEventListener("click", () => {
    value--
    numContainer.textContent = value
})

btnReset.addEventListener("click", () => {
    value = 0
    numContainer.textContent= value
})



if (value <= 0){
    value = 0
   
}

btnDec.addEventListener("click", () => {
    if (value <= 0){
        value = 0
       
    }
    numContainer.textContent = value
})



btninc.addEventListener("click", () =>  {
   if (value > 10){
    value=10
   }
    numContainer.textContent = value
})