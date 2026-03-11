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

    function anyadirEtiquetas(...etiquetas){
        if(etiquetas.length > 0){
            for(let i = 0; i < etiquetas.length; i++){
                this.etiquetas = etiquetas[i];
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
    calcularBalance 
}
