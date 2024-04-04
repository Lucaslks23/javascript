const para = document.querySelector("p#p1")
const para2 = document.querySelector("p#p2")

para.addEventListener("click", atualizarNome)

function atualizarNome() {
    var nome = prompt("Insira um novo nome")
    para.textContent = "Jogador 1: " + nome
}

para2.addEventListener("click", atualizarNome2)

function atualizarNome2() {
    var nome2 = prompt("Insira um novo nome")
    para2.textContent = "Jogador 2: " + nome2
}