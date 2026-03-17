"use strict"
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0; 
let gastos = [];
let idGasto = 0;

function actualizarPresupuesto(p) {
    // TODO
    if(p < 0|| isNaN(p)){
        console.log("ERROR valor menor que 0, o no es un número")
        return -1;
    }
    presupuesto = p;
    return presupuesto;
}

function mostrarPresupuesto() {
    // TODO
    return ("Tu presupuesto actual es de " + presupuesto + " €");
}

function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
    // TODO
    if (typeof valor !== 'number' || valor < 0) {
        valor = 0;
    }

    this.descripcion = descripcion;
    this.valor = valor

    this.mostrarGasto = function()
    {
        return "Gasto correspondiente a " + this.descripcion + " con valor " + this.valor + " €";
    }

    this.actualizarDescripcion = function(descripcion){
        if(descripcion === null){
        return "No se ha añadido ninguna descripción.";
    }
    this.descripcion = descripcion;
    }

    this.actualizarValor = function(valor){
        if(valor < 0|| isNaN(valor)){
        return "No se ha añadido ningun valor.";
    }
    this.valor = valor;
    }

    //https://javascript.info/date
    if(Date.parse(fecha)){
        this.fecha = Date.parse(fecha);  
    }
    else{
        this.fecha = Date.now();
    }
    
    if(etiquetas.length === 0){
        this.etiquetas = [];
    }
    else{
        this.etiquetas = [...etiquetas];
    }

    this.anyadirEtiquetas = function(...etiquetas){
        if(etiquetas.length > 0){
            for(let i = 0; i < etiquetas.length; i++){
                let existe = false;
                for(let j = 0; j < this.etiquetas.length; j++){
                    if (etiquetas[i] === this.etiquetas[j]) {
                        existe = true;
                        break;
                    }
                }
                if (!existe) {
                this.etiquetas.push(etiquetas[i]);
                }
            }
        }
    }

    this.mostrarGastoCompleto = function(){
        let fechaDate = new Date(this.fecha);
        let frase = ("Gasto correspondiente a " + this.descripcion + " con valor " + this.valor + " €.\n" + 
                     "Fecha: " + fechaDate.toLocaleString() + "\n" +
                     "Etiquetas:\n");
        for(let i = 0; i < this.etiquetas.length; i++){
            frase += ("- " + this.etiquetas[i] + "\n");
        }
        return frase;
    }
    
    this.actualizarFecha = function(fechaActualizada){
        if(Date.parse(fechaActualizada)){
            this.fecha = Date.parse(fechaActualizada);  
        }
    }

    this.borrarEtiquetas = function(...etiqBorrar){
        if(etiqBorrar.length > 0){
            for(let i = 0; i < etiqBorrar.length; i++){
                for(let j = 0; j < this.etiquetas.length; j++){
                    if (etiqBorrar[i] === this.etiquetas[j]) {
                        this.etiquetas.splice(j, 1);
                        j--;
                    }
                }
            }
        }
    }

    this.obtenerPeriodoAgrupacion = function(periodo){
        let fechaDate = new Date(this.fecha);
        
        if(periodo == "anyo"){
            return fechaDate.getFullYear();
        }
        if(periodo == "mes"){
            if(fechaDate.getMonth() + 1 >= 10){
                return (fechaDate.getFullYear() + "-" + (fechaDate.getMonth() + 1));
            }
            else{
                return (fechaDate.getFullYear() + "-0" + (fechaDate.getMonth() + 1));
            }
            
        }
        if(periodo == "dia"){
            if(fechaDate.getMonth() + 1 < 10 && fechaDate.getDate() < 10){
               return (fechaDate.getFullYear() + "-0" + (fechaDate.getMonth() + 1) + "-0" + fechaDate.getDate()); 
            }
            if(fechaDate.getMonth() + 1 < 10 && !fechaDate.getDate() < 10){
                return (fechaDate.getFullYear() + "-0" + (fechaDate.getMonth() + 1) + "-" + fechaDate.getDate());
            }
            if(!fechaDate.getMonth() + 1 < 10 && fechaDate.getDate() < 10){
                return (fechaDate.getFullYear() + "-" + (fechaDate.getMonth() + 1) + "-0" + fechaDate.getDate());
            }
            if(!fechaDate.getMonth() + 1 < 10 && !fechaDate.getDate() < 10){
                return (fechaDate.getFullYear() + "-" + (fechaDate.getMonth() + 1) + "-" + fechaDate.getDate());
            }  
        }
    }
}

function listarGastos(){
    return gastos;
}

function anyadirGasto(gasto){
    gasto.id = idGasto;
    gastos.push(gasto);
    idGasto++;
}

function borrarGasto(id){
    let index = gastos.findIndex(gasto => gasto.id == id);
    gastos.splice(index, 1);
}

function calcularTotalGastos(){
    let totalGastos = 0;
    for(let i = 0; i < gastos.length; i++){
        totalGastos += gastos[i].valor;
    }
    return totalGastos;
}

function calcularBalance(){
    let totalGastos = calcularTotalGastos();
    let balance = presupuesto - totalGastos;
    return balance;
}

function filtrarGastos(objFiltrado){
    let arrayFiltrado = [...gastos];
    
        if(objFiltrado.fechaDesde){
            arrayFiltrado = arrayFiltrado.filter(item => item.fecha >= Date.parse(objFiltrado.fechaDesde));
        }
        
        if(objFiltrado.fechaHasta){
            arrayFiltrado = arrayFiltrado.filter(item => item.fecha <= Date.parse(objFiltrado.fechaHasta));
        }

        if(objFiltrado.valorMinimo){
            arrayFiltrado = arrayFiltrado.filter(item => (item.valor >= objFiltrado.valorMinimo));
        }
        
        if(objFiltrado.valorMaximo){
            arrayFiltrado = arrayFiltrado.filter(item => (item.valor <= objFiltrado.valorMaximo));
        }

        if(objFiltrado.descripcionContiene){
            let descBuscada = objFiltrado.descripcionContiene.toLowerCase();
            // let descGasto = arrayFiltrado.descripcion.toLowerCase();
            arrayFiltrado = arrayFiltrado.filter(item => (item.descripcion.toLowerCase().includes(descBuscada)));
        }

        arrayFiltrado = arrayFiltrado.filter(item => 
            objFiltrado.etiquetasTiene.every(etiqueta => item.etiquetas.includes(etiqueta))
        );
  
        return arrayFiltrado;
}

function agruparGastos(){

}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance,
    filtrarGastos,
    agruparGastos
}
