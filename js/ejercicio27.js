export function combinarVectores(v1, v2) {
    let arr1 = v1.split(",").map(Number);
    let arr2 = v2.split(",").map(Number);

    let combinado = arr1.concat(arr2);

    return combinado; // 👈 SOLO array
}