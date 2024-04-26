//Nessa variável foi atribuído um número aleatório entre 1 e 100, calculado usando um algoritimo matemático.
var numeroAleatorio = Math.floor(Math.random()) + 1

//Essas variáveis foram criadas para guardar uma referência para os parágrafos resultantes em nosso HTML, e são usadas para inserir valores nos paragráfos de mesma classe no código
var palpites = document.querySelector(".palpites")
var ultimoResultado = document.querySelector(".ultimoResultado")
var baixoOuAlto = document.querySelector("baixoOuAlto")

//Essas variáveis armazenam referências para o campo de texto e o botão de envio e são usados para controlar o envio do palpite.
var envioPalpite = document.querySelector(".envioPalpite")
var campoPalpite = document.querySelector(".campoPalpite")

//Essas variáveis são usadas para armazenar a contagem dos palpites do usuário, e o outro é uma referência para o botão reset, que não existe ainda(mas irá existir).
var contagemPalpites = 1
var botaoReinicio

campoPalpite.focus()


function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value)
    if (contagemPalpites === 1) {
        palpites.textcontent = "Palpites anteriores: "
    }
    palpites.textContent += palpiteUsuario + " "

    if(palpiteUsuario === numeroAleatorio){
        ultimoResultado.textContent = "Parabéns! Você acertou!"
        ultimoResultado.style.backgroundColor = "green"
        baixoOuAlto.textContent = ""
        configFimDeJogo()
    } else if(contagemPalpites === 10) {
        ultimoResultado.textContent = "!!! FIM DE JOGO !!!"
        baixoOuAlto.textContent = ""
        configFimDeJogo()
    } else {
        ultimoResultado.textContent = "Errado!"
        ultimoResultado.style.backgroundColor = "red"
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = "Seu palpite está muito baixo!"
        } else if(palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = "Seu palpite está muito alto!"
        }
    }

    contagemPalpites++
    campoPalpite.value = ""
    campoPalpite.focus()
}

envioPalpite.addeventListener("click", conferirPalpite)

    function configFimDeJogo() {
        campoPalpite.disable = true
        envioPalpite.disable = true
        botaoReinicio = document.createElement("button")
        botaoReinicio.textContent = "Iniciar novo jogo"
        document.body.appendChild(botaoReinicio)
        botaoReinicio.addeventListener("click", reiniciarJogo)
    }

    function reiniciarJogo() {
        contagemPalpites = 1

        var reiniciarParas = document.querySelectorAll(".resultadoParas p")
        for (const reiniciarPara of reiniciarParas){
            reiniciarPara.textContent = ""
        }

        botaoReinicio.parentNode.removeChild(botaoReinicio)

        campoPalpite.disable = false
        envioPalpite.disable = false
        campoPalpite.value = ""
        campoPalpite.focus()

        ultimoResultado.style.backgroundColor = "white"

        numeroAleatorio = Math.floor(Math.random()) + 1
    }