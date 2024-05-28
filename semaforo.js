let botaoVermelho = document.getElementById('red');
let botaoAmarelo = document.getElementById('yellow');
let botaoVerde = document.getElementById('green');
let botaoAutomatico = document.getElementById('automatic');
let botaoParar = document.getElementById('parar');

let imagem = document.getElementById('img');

let cliqueVermelho = () => {
    imagem.src = "./img/vermelho.png";
} 

let cliqueAmarelo = () => {
    imagem.src = "./img/amarelo.png";
} 

let cliqueVerde = () => {
    imagem.src = "./img/verde.png";
} 

let cliqueAutomatico = () => {
    const cores = ["./img/vermelho.png", "./img/amarelo.png", "./img/verde.png"];
    let i = 0;

    loop = setInterval(() => {
        imagem.src = cores[i]; // Atualiza a imagem com a cor correspondente ao índice atual
        i++; // Incrementa `i`
        if (i >= cores.length) { // Verifica se `i` atingiu o comprimento da array
            i = 0; // Reseta `i` para 0
        }
    }, 1000); // Executa a cada 1000 milissegundos (1 segundo)
}

let parar = () => {
    clearInterval(loop);
}

botaoVermelho.addEventListener('click', cliqueVermelho);
botaoAmarelo.addEventListener('click', cliqueAmarelo);
botaoVerde.addEventListener('click', cliqueVerde);
botaoAutomatico.addEventListener('click', cliqueAutomatico);
botaoParar.addEventListener('click', parar);