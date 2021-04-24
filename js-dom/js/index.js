let motherBox = document.querySelector(".mother-box");

motherBox.style.display = "flex"
motherBox.style.flexDirection = "column"
motherBox.style.justifyContent = "center"
motherBox.style.alignItems = "center"


let title = document.getElementById("title")

title.style.color = "red"

title.removeAttribute("style")

let containerCard = document.createElement("div")
motherBox.appendChild(containerCard)

containerCard.setAttribute("class", "container-card")
containerCard.style.width = "400px"
containerCard.style.height = "400px"
containerCard.style.backgroundColor = "aqua"
containerCard.style.display = "flex"
containerCard.style.flexDirection = "column"
containerCard.style.alignItems = "center"

let titleCard = document.createElement("h2")
containerCard.appendChild(titleCard)

titleCard.textContent = "Primeira aula de js"

let containerInputs = document.createElement("form")
containerCard.appendChild(containerInputs)

let containerInputPeso = document.createElement("div")
containerInputs.appendChild(containerInputPeso)

let containerInputAltura = document.createElement("div")
containerInputs.appendChild(containerInputAltura)

let containerBtn = document.createElement("div")
containerInputs.appendChild(containerBtn)

let containerResultado = document.createElement("div")
containerInputs.appendChild(containerResultado)

let inputPeso = document.createElement("input")
let labelPeso = document.createElement("label")
labelPeso.textContent = "Peso: "
let inputAltura = document.createElement("input")
let labelAltura = document.createElement("label")
labelAltura.textContent = "Altura: "
let btn = document.createElement("button")
btn.textContent = "Calcular IMC"

containerInputs.setAttribute("action", "#")

inputPeso.setAttribute("id", "peso")
inputPeso.setAttribute("type", "number")

inputAltura.setAttribute("id", "altura")
inputAltura.setAttribute("type", "number")

btn.setAttribute("type", "submit")

containerInputPeso.appendChild(labelPeso)
containerInputPeso.appendChild(inputPeso)
containerInputAltura.appendChild(labelAltura)
containerInputAltura.appendChild(inputAltura)
containerBtn.appendChild(btn)

containerInputs.style.display = "flex"
containerInputs.style.flexDirection = "column"
containerInputs.style.height = "200px"
/* containerInputs.style.backgroundColor = "green" */
containerInputs.style.justifyContent = "space-evenly"

containerInputPeso.style.display = "flex"
containerInputPeso.style.justifyContent = "space-between"

containerBtn.style.display = "flex"
containerBtn.style.justifyContent = "center"

containerResultado.style.display = "flex"
containerResultado.style.justifyContent = "center"

btn.addEventListener("click", function(e){
    e.preventDefault()

    const peso = document.getElementById("peso").value
    const altura = document.getElementById("altura").value
    let alturaFormat = 0

    altura.includes(".") ? 
    alturaFormat = Number(altura.split(".").join("")) / 100 :
    alturaFormat = altura / 100

    /* if(altura.includes(".")){
        alturaFormat = Number(altura.split(".").join("")) / 100
    } else {
        alturaFormat = altura / 100
    } */

    const resultado = Number(peso) / (Number(alturaFormat) * Number(alturaFormat)) 

    containerResultado.innerHTML = `<p>Seu IMC é: ${resultado.toFixed(2)}</p>`

})

