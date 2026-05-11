import * as gpw from './gestionPresupuestoWeb.js';
import * as gp from './gestionPresupuesto.js';

let pres = gp.actualizarPresupuesto(1500);
let dato = "Tu presupuesto actual es de " + pres + " €";
gpw.mostrarDatoEnId("presupuesto", dato);

// let gastos = [
//     {descripcion: "Compra carne", valor: 23.44, fecha: "2021-10-06", etiquetas: ["casa", "comida"]},
//     {descripcion: "Compra fruta y verdura", valor: 14.25, fecha: "2021-09-06", etiquetas: ["supermercado", "comida"]},
//     {descripcion: "Bonobús", valor: 18.60, fecha: "2020-05-26", etiquetas: ["transporte"]},
//     {descripcion: "Gasolina", valor: 60.42, fecha: "2021-10-08", etiquetas: ["transporte", "gasolina"]},
//     {descripcion: "Seguro hogar", valor: 206.45, fecha: "2021-09-26", etiquetas: ["casa", "seguros"]},
//     {descripcion: "Seguro coche", valor: 195.78, fecha: "2021-10-06", etiquetas: ["transporte", "seguros"]}
// ]

let g1 = new gp.CrearGasto("Compra carne",23.44,"2021-10-06","casa", "comida");
let g2 = new gp.CrearGasto("Compra fruta y verdura",14.25,"2021-09-06","supermercado", "comida");
let g3 = new gp.CrearGasto("Bonobús", 18.60,"2020-05-26", "transporte");
let g4 = new gp.CrearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina");
let g5 = new gp.CrearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros");
let g6 = new gp.CrearGasto("Seguro coche", 195.78,"2021-10-06","transporte", "seguros");

gp.anyadirGasto(g1);
gp.anyadirGasto(g2);
gp.anyadirGasto(g3);
gp.anyadirGasto(g4);
gp.anyadirGasto(g5);
gp.anyadirGasto(g6);

let totalGastos = gp.calcularTotalGastos();
gpw.mostrarDatoEnId("gastos-totales", totalGastos);

let balanceTotal = gp.calcularBalance();
gpw.mostrarDatoEnId("balance-total", balanceTotal);

for (let gasto of gp.listarGastos()) {
    gpw.mostrarGastoWeb("listado-gastos-completo", gasto);
}

// let gastosSeptiembre = gp.filtrarGastos({ mes: "09", año: "2021" });
// for (let gasto of gastosSeptiembre) {
//     gpw.mostrarGastoWeb("listado-gastos-filtrado-1", gasto);
// }

let fechaDesde = "2021-09-01";
let fechaHasta = "2021-09-30";

let gastosSeptiembre = gp.filtrarGastos({ fechaDesde, fechaHasta });

for (let gasto of gastosSeptiembre) {
    gpw.mostrarGastoWeb("listado-gastos-filtrado-1", gasto);
}


let gastosMayores50 = gp.filtrarGastos({ valorMinimo: 50 });
for (let gasto of gastosMayores50) {
    gpw.mostrarGastoWeb("listado-gastos-filtrado-2", gasto);
}

let gastosSegurosMayores200 = gp.filtrarGastos({ valorMinimo: 200, etiquetas: ["seguros"] });
for (let gasto of gastosSegurosMayores200) {
    gpw.mostrarGastoWeb("listado-gastos-filtrado-3", gasto);
}

let gastosComidaTransporteMenores50 = gp.filtrarGastos({ valorMaximo: 50, etiquetas: ["comida", "transporte"] });
for (let gasto of gastosComidaTransporteMenores50) {
    gpw.mostrarGastoWeb("listado-gastos-filtrado-4", gasto);
}

let gastosAgrupadosPorDia = gp.agruparGastos("dia");
gpw.mostrarGastosAgrupadosWeb("agrupacion-dia", gastosAgrupadosPorDia, "día");

let gastosAgrupadosPorMes = gp.agruparGastos("mes");
gpw.mostrarGastosAgrupadosWeb("agrupacion-mes", gastosAgrupadosPorMes, "mes");

let gastosAgrupadosPorAnyo = gp.agruparGastos("anyo");
gpw.mostrarGastosAgrupadosWeb("agrupacion-anyo", gastosAgrupadosPorAnyo, "año");