import * as gp from './gestionPresupuesto.js';

function mostrarDatoEnId(idElemento, valor){
    let elemento = document.getElementById(idElemento);
    if(elemento){
        elemento.textContent = valor;
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
    let elemento = document.getElementById(idElemento);
    if(idElemento && agrup){
        let divAgrupacion = document.createElement("div");
        divAgrupacion.classList.add("agrupacion");

        let h1 = document.createElement("h1");
        h1.textContent = "Gastos agrupados por " + periodo;
        divAgrupacion.appendChild(h1);
        for(let [clave, valor] of Object.entries(agrup)){
            let divDato = document.createElement("div");
            divDato.classList.add("agrupacion-dato");

            let spanClave = document.createElement("span");
            spanClave.classList.add("agrupacion-dato-clave");
            spanClave.textContent = clave;
            divDato.appendChild(spanClave);

            let spanValor = document.createElement("span");
            spanValor.classList.add("agrupacion-dato-valor");
            spanValor.textContent = valor;
            divDato.appendChild(spanValor);

            divAgrupacion.appendChild(divDato);
        }
        elemento.appendChild(divAgrupacion);
    }
}

function repintar(){
    let pres = document.getElementById("presupuesto");
    pres.innerHTML = "";
    let valor = gp.mostrarPresupuesto();
    mostrarDatoEnId("presupuesto", valor);

    let gastTot = document.getElementById("gastos-totales");
    gastTot.innerHTML = "";
    let calcGastTot = gp.calcularTotalGastos();
    mostrarDatoEnId("gastos-totales", calcGastTot);

    let balancTotal = document.getElementById("balance-total");
    balancTotal.innerHTML = "";
    let bal = gp.calcularBalance();
    mostrarDatoEnId("balance-total", bal);

    let gastComp = document.getElementById("listado-gastos-completo");
    gastComp.innerHTML = "";
    let gastos = gp.listarGastos();
    for(let a of gastos){
        mostrarGastoWeb("listado-gastos-completo", a);
    }
}

let btnActuPres = document.getElementById("actualizarpresupuesto");
    btnActuPres.addEventListener("click" , actualizarPresupuestoWeb);

function actualizarPresupuestoWeb(){
    let presupuesto = prompt("Introduce el presupuesto, gracias");
    presupuesto = Number(presupuesto);
    gp.actualizarPresupuesto(presupuesto);
    repintar();
}

let btnNewGast = document.getElementById("anyadirgasto");
btnNewGast.addEventListener("click", nuevoGastoWeb);

function nuevoGastoWeb(){
    let des = prompt("Introduce la descripcion del gasto, gracias");
    let val = prompt("Introduce el valor del gasto, gracias");
    let fech = prompt("intoduce la fecha del gasto en formato yyyy-mm-dd, gracias");
    let etiq = prompt("Introduce todas las etiquetas separadas por comas, gracias");
    val = Number(val);
    let arrayEtiq = etiq.split(",");
    let gas = gp.CrearGasto(des, val, fech, ...arrayEtiq);
    gp.anyadirGasto(gas);
    repintar();
}

export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb,
    repintar
}