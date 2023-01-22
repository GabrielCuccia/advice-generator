

let advice = document.querySelector("#advice")
let title = document.querySelector("#title")
let button = document.querySelector("#button")
let img = document.querySelector(".advice__container__img")
let adviceContainer = document.querySelector(".advice__container")
console.log(img)
function adviceGenerate(){
    fetch("https://api.adviceslip.com/advice")
    .then(res=> res.json())
    .then(data => {
        console.log(data)
        title.innerText = `"${data.slip.advice}" `
        advice.innerText = `ADVICE #${data.slip.id}`
})
}
button.addEventListener("click", ()=>{
    adviceGenerate()
})
