
function mostrarDatoEnId(idElemento, valor){
    let elemento = document.getElementById(idElemento);
    if(elemento){
        elemento.textContent = valor;
    }
}

function mostrarGastoWeb(idElemento, gasto){

}

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo){

}

export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}