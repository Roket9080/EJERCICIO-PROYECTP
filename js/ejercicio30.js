export function ordenarPorMezcla(texto) {
    if (!texto) return "Ingresa valores";

    const array = texto.split(",").map(n => Number(n.trim()));

    if (array.some(isNaN)) {
        return "Solo números separados por coma";
    }

    const ordenado = mergeSort(array);

    return "Ordenado: " + ordenado.join(", ");
}

// ===== MERGE SORT =====
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(a, b) {
    let r = [], i = 0, j = 0;

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            r.push(a[i]);
            i++;
        } else {
            r.push(b[j]);
            j++;
        }
    }

    return r.concat(a.slice(i)).concat(b.slice(j));
}