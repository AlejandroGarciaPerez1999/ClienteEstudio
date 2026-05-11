import * as gpw from './gestionPresupuestoWeb.js';
import * as gp from './gestionPresupuesto.js';

gp.actualizarPresupuesto(1500);

gpw.mostrarDatoEnId("presupuesto", 1500);

let gastos = [
    {descripcion: "Compra carne", valor: 23.44, fecha: "2021-10-06", etiquetas: ["casa", "comida"]},
    {descripcion: "Compra fruta y verdura", valor: 14.25, fecha: "2021-09-06", etiquetas: ["supermercado", "comida"]},
    {descripcion: "Bonobús", valor: 18.60, fecha: "2020-05-26", etiquetas: ["transporte"]},
    {descripcion: "Gasolina", valor: 60.42, fecha: "2021-10-08", etiquetas: ["transporte", "gasolina"]},
    {descripcion: "Seguro hogar", valor: 206.45, fecha: "2021-09-26", etiquetas: ["casa", "seguros"]},
    {descripcion: "Seguro coche", valor: 195.78, fecha: "2021-10-06", etiquetas: ["transporte", "seguros"]}
]

for(let gasto of gastos){
    gp.anyadirGasto(gasto);
}

let totalGastos = gp.calcularTotalGastos();
gpw.mostrarDatoEnId("gastos-totales", totalGastos);

let balanceTotal = gp.calcularBalance();
gpw.mostrarDatoEnId("balance-total", balanceTotal);

for (let gasto of gastos) {
    gpw.mostrarGastoWeb("listado-gastos-completo", gasto);
}

// let gastosSeptiembre = gp.filtrarGastos({ mes: "09", año: "2021" });
// for (let gasto of gastosSeptiembre) {
//     gpw.mostrarGastoWeb("listado-gastos-filtrado-1", gasto);
// }

let fechaDesde = new Date("2021-09-01").getTime();
let fechaHasta = new Date("2021-09-30").getTime();

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

// let gastosAgrupadosPorDia = gp.agruparGastos("dia");
// gpw.mostrarGastosAgrupadosWeb("agrupacion-dia", gastosAgrupadosPorDia, "día");

// let gastosAgrupadosPorMes = gp.agruparGastos("mes");
// gpw.mostrarGastosAgrupadosWeb("agrupacion-mes", gastosAgrupadosPorMes, "mes");

// let gastosAgrupadosPorAnyo = gp.agruparGastos("anyo");
// gpw.mostrarGastosAgrupadosWeb("agrupacion-anyo", gastosAgrupadosPorAnyo, "año");
