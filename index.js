 //stored all buttons in variables
 const display = document.querySelector(".display")
 const oneButton = document.querySelector(".one")
 const twoButton = document.querySelector(".two")
 const threeButton = document.querySelector(".three")
 let minusBotton = document.querySelector(".minus")
 const fourButton = document.querySelector(".four")
 const fiveButton = document.querySelector(".five")
 const sixButton = document.querySelector(".six")
 const divideButton = document.querySelector(".divide")
 const sevenButton = document.querySelector(".seven")
 const eightButton = document.querySelector(".eight")
 const nineButton = document.querySelector(".nine")
 const multiplybutton = document.querySelector(".multiply")
 const equalsButton = document.querySelector(".equals")
 const zeroButton = document.querySelector(".zero")
 const addButton = document.querySelector(".add")
 const delButton = document.querySelector(".clear")
 console.log(oneButton)
 oneButton.addEventListener("click", (e) => { 
     display.value = display.value + e.target.innerText
    })

twoButton.addEventListener("click", (e) => {
    display.value = display.value + e.target.innerText
})
threeButton.addEventListener("click", (e) => {
    display.value = display.value + e.target.innerText
})
minusBotton.addEventListener("click", (e) => {
    display.value = display.value + e.target.innerText
})

 delButton.addEventListener("click", (e) => { 
     display.value = ""

 })
 fourButton.addEventListener("click", (e) => {
 display.value = display.value + e.target.innerText
 })
 fiveButton.addEventListener("click", (e) => {
    display.value = display.value + e.target.innerText
 })
 sixButton.addEventListener("click", (e) => {
    display.value = display.value + e.target.innerText
 })
 divideButton.addEventListener("click", (e) => {
    display.value = display.value + e.target.innerText
 })
 sevenButton.addEventListener("click", (e) => {
    display.value = display.value + e.target.innerText
 })
 eightButton.addEventListener("click", (e) => {
    display.value = display.value + e.target.innerText
 })
 nineButton.addEventListener("click", (e) => {
    display.value = display.value + e.target.innerText
 })
 multiplybutton.addEventListener("click", (e) => {
    display.value = display.value + "*"
 })
 divideButton.addEventListener("click", (e) => {
    display.value = display.value + e.target.innerText
 })
 equalsButton.addEventListener("click", (e) => {
    display.value = eval(display.value)
 })
 zeroButton.addEventListener("click", (e) => {
    display.value = display.value + e.target.innerText
 })
 addButton.addEventListener("click", (e) => {
    display.value = display.value + e.target.innerText
 })