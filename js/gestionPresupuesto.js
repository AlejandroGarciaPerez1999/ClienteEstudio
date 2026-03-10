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

function CrearGasto(descripcion, valor) {
    // TODO
    if (typeof valor !== 'number' || valor < 0) {
        valor = 0;
    }
    /*let gasto = {
        descripcion: descripcion,
        valor: valor
    };*/
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
}

function listarGastos(){

}

function anyadirGasto(){

}

function borrarGasto(){

}

function calcularTotalGastos(){

}

function calcularBalance(){
    
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
