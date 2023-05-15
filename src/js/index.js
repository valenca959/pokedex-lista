const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body")
console.log(body);

const imagemBotaoTrocadeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivado = body.classList.contains("modo-escuro")

    if (modoEscuroAtivado) {
        body.classList.remove("modo-escuro");

        imagemBotaoTrocadeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        console.log("clicou no botão");

        body.classList.add("modo-escuro");

        imagemBotaoTrocadeTema.setAttribute("src", "./src/imagens/moon.png");

    }

})
