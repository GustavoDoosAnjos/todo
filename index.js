const botao = document.querySelector(".botao");
const texto = document.querySelector(".textoTodo");
function criarTodo() {
    let x = document.createElement("P");
    let t = document.createTextNode(texto.value);
    x.appendChild(t);
    document.body.appendChild(x);
}