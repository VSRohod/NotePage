// seletores
const textodigitado = document.querySelector("#textodigitado");
const palavrabuscar = document.querySelector("#palavrabuscar");
const palavrasubstituir = document.querySelector("#palavrasubstituir");
const trocar = document.querySelector("#trocar");
const trocarTodos = document.querySelector("#trocarTodos");
const salvarBtn = document.querySelector("#salvar");
const resetarBtn = document.querySelector("#resetar");

// eventos
trocar.addEventListener("click", trocarTexto);
trocarTodos.addEventListener("click", trocarTodosTexto);
salvarBtn.addEventListener("click", salvar);
resetarBtn.addEventListener("click", resetar);
document.addEventListener("mouseleave", verificarSalvo);

//local Storage
var dadoSalvo = localStorage.getItem("text");
textodigitado.innerHTML = dadoSalvo;

function salvar(){
    localStorage.setItem("text",textodigitado.value);
}

function resetar(){
    textodigitado.value = "";
    localStorage.setItem("text","");
}

function verificarSalvo(){
    let textodigitadoConfere = textodigitado.value;
    let dadoSalvoConfere = localStorage.getItem("text");
    if(dadoSalvoConfere != textodigitadoConfere){
        var opcao = confirm("Há dados não salvos nessa página! Tem certeza que quer sair?");

        if(opcao){
            window.location.reload();
        }
    }
}

// functions
function trocarTexto(){
    let textodigitadoValue = textodigitado.value;
    let palavrabuscarValue = palavrabuscar.value;
    let palavrasubstituirValue = palavrasubstituir.value;
            
    const textoFormatado = textodigitadoValue.replace(palavrabuscarValue,palavrasubstituirValue);
    textodigitado.value = textoFormatado;
}

function trocarTodosTexto(){
    let textodigitadoValue = textodigitado.value;
    let palavrabuscarValue = palavrabuscar.value;
    let palavrasubstituirValue = palavrasubstituir.value;
            
    const textoFormatado = textodigitadoValue.replaceAll(palavrabuscarValue,palavrasubstituirValue);
    textodigitado.value = textoFormatado;
}
