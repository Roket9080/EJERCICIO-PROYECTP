export function encontrarPrimos(limite) {
    limite = Number(limite);

    if (isNaN(limite) || limite < 2) {
        return [];
    }

    const esPrimo = new Array(limite + 1).fill(true);
    esPrimo[0] = esPrimo[1] = false;

    for (let i = 2; i * i <= limite; i++) {
        if (esPrimo[i]) {
            for (let j = i * i; j <= limite; j += i) {
                esPrimo[j] = false;
            }
        }
    }

    const resultado = [];
    for (let k = 2; k <= limite; k++) {
        if (esPrimo[k]) resultado.push(k);
    }

    return resultado; // ✔ correcto
}