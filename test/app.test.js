import { encontrarSubarrayMaximo } from "../js/ejercicio26.js";
import { combinarVectores } from "../js/ejercicio27.js";
import { encontrarPrimos } from "../js/ejercicio28.js";
import { multiplicarMatrices, parseMatrix } from "../js/ejercicio29.js";
import { ordenarPorMezcla } from "../js/ejercicio30.js";

// ================= TEST 26 =================
function test26(texto) {
    try {
        const nums = texto.split(",").map(Number);
        if (nums.some(isNaN)) return "Test no aprobado";

        const res = encontrarSubarrayMaximo(texto);

        let max = nums[0];
        let actual = nums[0];

        for (let i = 1; i < nums.length; i++) {
            actual = Math.max(nums[i], actual + nums[i]);
            max = Math.max(max, actual);
        }

        return res === max ? "Test aprobado" : "Test no aprobado";

    } catch {
        return "Test no aprobado";
    }
}

// ================= TEST 27 =================
function test27(v1, v2) {
    try {
        const arr1 = v1.split(",").map(Number);
        const arr2 = v2.split(",").map(Number);

        if (arr1.some(isNaN) || arr2.some(isNaN)) return "Test no aprobado";

        const esperado = arr1.concat(arr2);
        const res = combinarVectores(v1, v2);

        return JSON.stringify(res) === JSON.stringify(esperado)
            ? "Test aprobado"
            : "Test no aprobado";

    } catch {
        return "Test no aprobado";
    }
}

// ================= TEST 28 =================
function test28(limite) {
    try {
        limite = Number(limite);
        if (isNaN(limite)) return "Test no aprobado";

        const res = encontrarPrimos(limite);

        for (let n of res) {
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) return "Test no aprobado";
            }
        }

        return "Test aprobado";

    } catch {
        return "Test no aprobado";
    }
}

// ================= TEST 29 =================
function test29(a, b) {
    try {
        const m1 = parseMatrix(a);
        const m2 = parseMatrix(b);

        if (!Array.isArray(m1) || !Array.isArray(m2)) return "Test no aprobado";

        const res = multiplicarMatrices(m1, m2);

        return Array.isArray(res)
            ? "Test aprobado"
            : "Test no aprobado";

    } catch {
        return "Test no aprobado";
    }
}

// ================= TEST 30 =================
function test30(texto) {
    try {
        const arr = texto.split(",").map(Number);
        if (arr.some(isNaN)) return "Test no aprobado";

        const res = ordenarPorMezcla(texto);

        const esperado = [...arr].sort((a, b) => a - b);

        return JSON.stringify(res) === JSON.stringify(esperado)
            ? "Test aprobado"
            : "Test no aprobado";

    } catch {
        return "Test no aprobado";
    }
}

// ================= EXPORT (CLAVE) =================
export function ejecutarTestPorEjercicio(num, inputs) {
    switch (num) {
        case "26": return "Ejercicio 26: " + test26(inputs.v1);
        case "27": return "Ejercicio 27: " + test27(inputs.v1, inputs.v2);
        case "28": return "Ejercicio 28: " + test28(inputs.limite);
        case "29": return "Ejercicio 29: " + test29(inputs.a, inputs.b);
        case "30": return "Ejercicio 30: " + test30(inputs.v1);
        default: return "Seleccione un ejercicio";
    }
}