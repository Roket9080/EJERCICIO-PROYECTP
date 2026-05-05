export function ordenarPorMezcla(texto) {

    // convertir a array
    let arr = texto.split(",").map(Number);

    // validar
    if (arr.some(isNaN)) {
        throw new Error("Entrada inválida");
    }

    // algoritmo merge sort
    function mergeSort(array) {
        if (array.length <= 1) return array;

        const mitad = Math.floor(array.length / 2);
        const izquierda = mergeSort(array.slice(0, mitad));
        const derecha = mergeSort(array.slice(mitad));

        return merge(izquierda, derecha);
    }

    function merge(left, right) {
        let resultado = [];
        let i = 0, j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                resultado.push(left[i]);
                i++;
            } else {
                resultado.push(right[j]);
                j++;
            }
        }

        return resultado.concat(left.slice(i)).concat(right.slice(j));
    }

    return mergeSort(arr); // 👈 ARRAY
}