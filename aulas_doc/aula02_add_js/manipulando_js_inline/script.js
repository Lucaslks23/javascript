function criarParagrafo() {
    let para = document.createElement("p")
    para.textContent = "Você clicou o botão!"
    document.body.appendChild(para)
}