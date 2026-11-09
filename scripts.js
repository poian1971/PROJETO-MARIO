/*
Variável
    Caixinha para guardar informações que serão utilizadas no código.
    Palavras mágicas para criar variáveis: var, let e const.
    var: não é mais utilizada'
    let: variável local, pode ser alterada e acessada apenas dentro do bloco onde foi criada.
    const: variável local, não pode ser alterada e só pode ser acessada dentro do bloco onde foi criada.

    let nome = "Mario";
    let idade = 30;
    let altura = 1.75;
    let peso = 70;

*/

/* 
    Funções:

    É um trecho de código que, só é executado, quando chamado (quando nós quisermos)
    
    Funções são blocos de código que podem ser reutilizados em qualquer parte do programa.
    Palavras mágicas para criar funções: function e arrow function. 

    Palavrinha mágica para criar fun~ções:
        function: função tradicional, pode ser chamada em qualquer parte do código.
*/

/*
    Objetivo: Quando clicar no botão, mostrar o formulário e a máscara de fundo.
    1 - Qual botão clicar;
    2 - Qual formulário mostrar;
    3 - Qual máscara de fundo mostrar;
    4 - O que é "mostrar"?
        - Trazer o formulario da esquerda para a direita
        - Centralizar o formulário na tela
        - Exibir a máscara de fundo
*/

const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");

function mostrarForm() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

function esconderForm() {
    formulario.style.left = "-230px";
    formulario.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}

