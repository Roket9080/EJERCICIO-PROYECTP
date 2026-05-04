export function parseMatrix(text) {
    try {
        const filas = text.split(";").map(fila =>
            fila.split(",").map(num => Number(num.trim()))
        );

        // validar números
        for (let fila of filas) {
            if (fila.some(isNaN)) return null;
        }

        return filas;
    } catch {
        return null;
    }
}

export function multiplicarMatrices(m1, m2) {
    const filasA = m1.length;
    const colsA = m1[0].length;
    const filasB = m2.length;
    const colsB = m2[0].length;

    if (colsA !== filasB) {
        throw new Error("No se pueden multiplicar: columnas de A ≠ filas de B");
    }

    const resultado = [];

    for (let i = 0; i < filasA; i++) {
        resultado[i] = [];

        for (let j = 0; j < colsB; j++) {
            let suma = 0;

            for (let k = 0; k < colsA; k++) {
                suma += m1[i][k] * m2[k][j];
            }

            resultado[i][j] = suma;
        }
    }

    return resultado; // ✔ SOLO lógica
}