const nome = document.getElementById("name")
const sobrenome = document.getElementById("sobrenome")
const idade = document.getElementById("age")
const sexo = document.getElementById("sexo")
const email = document.getElementById("email")
const password = document.getElementById("senha")
const form = document.getElementById("form")
const btn = document.getElementById("btn")

const verifyFilds = (nome, sobrenome) => {
    if (!nome) alert("Invalid name")
    if (!sobrenome) alert("Invalid sobrenome")
}

const verifyPassword = (pass) => {
    if (pass.length < 6) {
        password.style.border = "1px solid red"
        console.log("A senha deve ser maior que 5 caracteres")
    }
}

const verifyEmail = (email) => {
    if(!email.includes("@")) console.log("o email deve ter ao menos um '@'")
    if(!email) console.log("Invalid email")
}

const verifyAge = (age) =>{

}

form.addEventListener("submit", function (e) {
    verifyFilds(nome.value, sobrenome.value)
    verifyPassword(password.value)
    verifyEmail(email.value)
    console.log(nome.value, sobrenome.value, password.value, sexo.value, idade.value)
    e.preventDefault()
})