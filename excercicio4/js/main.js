const botao = document.querySelector("[data-botao]")
const lista = document.querySelector("[data-lista]")
console.log(lista)
botao.addEventListener('click',lista.classList.toggle(".lista"))

console.log(botao)