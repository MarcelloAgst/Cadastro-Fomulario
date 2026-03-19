const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register__btn");
const loginBtn = document.querySelector(".login__btn");

const nome = document.getElementById("nome")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const idade = document.getElementById("idade")
const cpf = document.getElementById("cpf")
const confirmarSenha = document.getElementById("confirmarSenha")

const form = document.getElementById("formulario")
const msgError = document.getElementsByClassName("msgError")[0]

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

nome.addEventListener("input", (event) => {
  const regex = /^[a-zA-ZÀ-ÿ\s]+$/;
  console.log(regex.test(event.target.value))
  if(event.target.value.length < 3){
    console.log("Nome deve ter no mínimo 3 caracteres!")
  }
  if(!regex.test(event.target.value)){
    console.log("Nome inválido!")
  }
})
const checarNome = () => {
  const regexNome = /^[a-zA-ZÀ-ÿ\s]+$/;
  
  return regexNome.test(nome.value) && nome.value.length > 2
}

email.addEventListener("input", (event) => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(regexEmail.test(event.target.value))
  if(!regexEmail.test(event.target.value)){
    console.log("E-mail inválido!")
  }
})
const checarEmail = () => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regexEmail.test(email.value)
}

senha.addEventListener("input", (event) => {
let senhaValue = event.target.value

  console.log(/[A-Z]/.test(senhaValue))
  console.log(/^[a-zA-Z0-9]/.test(senhaValue))
  console.log(/\d/.test(senhaValue))
  console.log(/^[A-Za-z0-9]/.test(senhaValue))

  event.target.value = senhaValue
  console.log(event.target.value)
})
const checarSenha = () => {
  const regexSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#_])[0-9a-zA-Z$*&@#_]{10,}$/
  return regexSenha.test(senha.value) 
}

confirmarSenha.addEventListener("input", (event) => {
  if(event.target.value !== senha.value){
    console.log("Senha inválidada!")
  }else{
    console.log("Senha válidada!")
  }
})
const confirmaSenha = () => {
  if(confirmarSenha.value !== senha.value){
    return false
  }
  return true
}

idade.addEventListener("input", (event) => {
  let idade = event.target.value.replace(/\D/g, "")
  if(idade >= 18 && idade <= 110){
    console.log("Idade válida!")
  }else{
    console.log("Idade inválida!")
  }
})
const checarIdade = () => {
  const regexIdade = /^(?:1[89]|[2-9][0-9])$/
  return regexIdade.test(idade.value)
}

cpf.addEventListener("input", (event) => {
  let valorCPF = event.target.value
  valorCPF = valorCPF.replace(/\D/g, "")
  valorCPF = valorCPF.substring(0, 11)
  valorCPF = valorCPF = valorCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  event.target.value = valorCPF
})
const checarCPF = () => {
  const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
  return regexCPF.test(cpf.value)
}

// -------- CONFIRMAR SENHA (function) --------
/* function verificarSenha(){
  let senha = document.getElementById("senha").value
  let confirmarSenha = document.getElementById("confirmarSenha").value
  if(senha === confirmarSenha){
    console.log("Senha válida!")
    return `Senha válida!`
  }
  return `Senha inválida!`
} */

// ------- CHECAGEM SENHA ------
function checagemSenha (senha){
  if (!/[A-Z]/.test(senha)) {
    return `A senha deve ter pelo menos 1 letra maiúscula`
  }
  if(!/[^a-zA-Z0-9]/.test(senha)){
    return `A senha deve ter pelo menos 1 caracter especial`  
  }
  if(!/\d/.test(senha)){
    return `A senha deve ter pelo menos 1 número`  
  }
  if(!/[\d{10}]/.test(senha)){
    return `A senha deve ter pelo menos 10 dígitos`  
  }
}

// ------- MSG ERRO -----------


const createDipslayMsgError = (mensagem) => {
  msgError.textContent = mensagem
  setTimeout(() => {
    msgError.textContent = ""
  }, 5000)
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  if(!checarNome()){
    createDipslayMsgError("Nome inválido!") 
    msgError.style.color = 'red'
    return
  }
  console.log("Nome válido!")

  if(!checarEmail()){
    createDipslayMsgError("E-mail inválido!")
    msgError.style.color = 'red'
    return
  }
  console.log("E-mail válido")

  if(!checarSenha()){
    createDipslayMsgError("Senha inválida! Deve ter pelo menos \n 1 número, 1 caracter especial e 1 letra maiúscula")
    msgError.style.color = 'red'
    return
  }
  console.log("Senha válida!")

  if(!confirmaSenha()){
    createDipslayMsgError("As senhas não coincidem! \n Repita a mesma senha")
    msgError.style.color = 'red'
    return
  }
  console.log("Senhas validadas!")

  if(!checarIdade()){
    createDipslayMsgError("Idade inválida! Você deve ser maior de 18 anos.")
    msgError.style.color = 'red'
    return
  }
  console.log("Idade válida!")

  if(!checarCPF()){
    createDipslayMsgError("CPF inválido!")
    msgError.style.color = 'red'
    return
  }
  console.log("CPF válido")

  if(checarNome() && checarEmail() && checarSenha() && checarIdade() && checarCPF() === true){
    console.log("FORMULÁRIO ENVIADO")
  }
})