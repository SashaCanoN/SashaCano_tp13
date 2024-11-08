let nombre = "Sasha";
let apellido = "Cano";
let montoInicial = 500000;

// matriz de 10x2 con ceros y valores aleatorios de depósitos y retiros
function iniciarMatriz(matriz) {
    for (let f = 0; f < 10; f++) {
        matriz[f] = [];
        for (let c = 0; c < 2; c++) {
            matriz[f][c] = 0;
        }
    }

    // Agregar 10 movimientos positivos en la columna 0 (depósitos)
    for (let i = 0; i < 10; i++) {
        let rnd = Math.floor(Math.random() * 2000) + 1;
        matriz[i][0] = rnd;
    }

    // Agregar 10 movimientos negativos en la columna 1 (retiros)
    for (let i = 0; i < 10; i++) {
        let rnd_neg = Math.floor(Math.random() * 50000) + 1;
        matriz[i][1] = -rnd_neg;
    }
}

// Función para calcular los saldos totales de depósitos, retiros y saldo actual
function calcularBalances(operaciones) {
    let totalDeposito = 0;
    let totalRetiro = 0;

    for (let i = 0; i < operaciones.length; i++) {
        totalDeposito += operaciones[i][0]; 
        totalRetiro += operaciones[i][1];   
    }

    let saldoActual = montoInicial + totalDeposito + totalRetiro;


    return {
        totalDeposito: totalDeposito,
        totalRetiro: totalRetiro,
        saldoActual: saldoActual
    };
}


function bankBalance(nombre, apellido, operaciones) {
    let balances = calcularBalances(operaciones); 

    return {
        nombreCompleto: "${nombre} ${apellido}",
        totalDeposito: balances.totalDeposito,
        totalRetiro: balances.totalRetiro,
        saldoActual: balances.saldoActual
    };
}

let matriz = [];
iniciarMatriz(matriz);

console.table(matriz);


let resultadoBalance = bankBalance(nombre, apellido, matriz);

console.log(`Estimado/da ${resultadoBalance.nombreCompleto}`);
console.log(`Su monto total de los depósitos es de: ${resultadoBalance.totalDepositos}`);
console.log(`Su monto total de los retiros es de: ${resultadoBalance.totalRetiros}`);
console.log(`Su saldo actual es de: ${resultadoBalance.saldoActual}`);

module.exports = bankBalance