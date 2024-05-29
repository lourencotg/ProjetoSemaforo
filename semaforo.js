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
        imagem.src = cores[i];
        i++;
        if (i >= cores.length) {
            i = 0;
        }
    }, 1000);

}

let parar = () => {
    clearInterval(loop);
}

botaoVermelho.addEventListener('click', cliqueVermelho);
botaoAmarelo.addEventListener('click', cliqueAmarelo);
botaoVerde.addEventListener('click', cliqueVerde);
botaoAutomatico.addEventListener('click', cliqueAutomatico);
botaoParar.addEventListener('click', parar);