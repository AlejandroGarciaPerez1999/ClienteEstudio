
function mostrarDatoEnId(idElemento, valor){
    let elemento = document.getElementById(idElemento);
    if(elemento){
        elemento.textContent = "Tu presupuesto actual es de " + valor + " €";
    }
}

function mostrarGastoWeb(idElemento, gasto){
    let elemento = document.getElementById(idElemento);
    if(elemento && gasto){
        let divGasto = document.createElement("div");
        divGasto.classList.add("gasto");

        let divDescripcion = document.createElement("div");
        divDescripcion.classList.add("gasto-descripcion");
        divDescripcion.textContent = gasto.descripcion;
        divGasto.appendChild(divDescripcion);
        
        let divFecha = document.createElement("div");
        divFecha.classList.add("gasto-fecha");
        divFecha.textContent = gasto.fecha;
        divGasto.appendChild(divFecha);

        let divValor = document.createElement("div");
        divValor.classList.add("gasto-valor");
        divValor.textContent = gasto.valor;
        divGasto.appendChild(divValor);

        let divEtiquetas = document.createElement("div");
        divEtiquetas.classList.add("gasto-etiquetas");

        for (let etiqueta of gasto.etiquetas) {
            let spanEtiqueta = document.createElement("span");
            spanEtiqueta.classList.add("gasto-etiquetas-etiqueta");
            spanEtiqueta.textContent = etiqueta;
            divEtiquetas.appendChild(spanEtiqueta);
        }

        divGasto.appendChild(divEtiquetas);

        elemento.appendChild(divGasto);
    }
}

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo){

}

export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}