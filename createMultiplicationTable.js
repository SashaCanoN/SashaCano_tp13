function createMultiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        console.log(`
    **************************
    Tabla de multiplicar x${i}
    **************************
`);

    for (let s = 1; s <= 10; s++) {
        console.log(`${s} * ${s} = ${i * s}`);
    }

    }
}

createMultiplicationTable();

module.exports = createMultiplicationTable;