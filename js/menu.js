// ===== IMPORTS =====
import { encontrarSubarrayMaximo } from "./ejercicio26.js";
import { combinarVectores } from "./ejercicio27.js";
import { encontrarPrimos } from "./ejercicio28.js";
import { multiplicarMatrices, parseMatrix } from "./ejercicio29.js";
import { ordenarPorMezcla } from "./ejercicio30.js";

import { ejecutarTestPorEjercicio } from "../test/app.test.js";

// ===== DOM =====
const select = document.getElementById("selectEjercicio");
const boton = document.getElementById("botonEjecutar");
const botonTest = document.getElementById("botonTest");

const resultado = document.getElementById("resultado");
const resultadoTest = document.getElementById("resultadoTest");
const inputsContainer = document.getElementById("inputsContainer");

// ===== OCULTAR INPUTS =====
function ocultarInputs() {
    const bloques = inputsContainer.querySelectorAll("div");
    bloques.forEach(div => div.style.display = "none");
}

// ===== CAMBIO DE EJERCICIO =====
select.addEventListener("change", () => {
    ocultarInputs();
    const bloque = document.getElementById("inputs" + select.value);
    if (bloque) bloque.style.display = "block";
});

// ===== EJECUTAR =====
boton.addEventListener("click", () => {

    const opcion = select.value;
    let res = "";

    if (!opcion) {
        resultado.textContent = "Seleccione un ejercicio";
        return;
    }

    try {
        switch (opcion) {

            case "26":
                const v26 = document.getElementById("vector26Input").value;
                res = "Subarray máximo: " + encontrarSubarrayMaximo(v26);
                break;

            case "27":
                const vA = document.getElementById("vector27AInput").value;
                const vB = document.getElementById("vector27BInput").value;
                res = "Vector combinado: " + combinarVectores(vA, vB).join(", ");
                break;

            case "28":
                const limite = document.getElementById("limite28Input").value;
                res = "Primos: " + encontrarPrimos(limite).join(", ");
                break;

            case "29":
                const a = document.getElementById("matriz29AInput").value;
                const b = document.getElementById("matriz29BInput").value;
                const m = multiplicarMatrices(parseMatrix(a), parseMatrix(b));
                res = m.map(f => f.join(", ")).join(" | ");
                break;

            case "30":
                const v30 = document.getElementById("valores30Input").value;
                res = "Ordenado: " + ordenarPorMezcla(v30).join(", ");
                break;
        }

    } catch (e) {
        res = "Error: " + e.message;
    }

    resultado.textContent = res;
});

// ===== TEST INDIVIDUAL =====
botonTest.addEventListener("click", () => {

    const ejercicio = select.value;

    if (!ejercicio) {
        resultadoTest.textContent = "Seleccione un ejercicio";
        return;
    }

    let inputs = {};

    switch (ejercicio) {
        case "26":
            inputs.v1 = document.getElementById("vector26Input").value;
            break;

        case "27":
            inputs.v1 = document.getElementById("vector27AInput").value;
            inputs.v2 = document.getElementById("vector27BInput").value;
            break;

        case "28":
            inputs.limite = document.getElementById("limite28Input").value;
            break;

        case "29":
            inputs.a = document.getElementById("matriz29AInput").value;
            inputs.b = document.getElementById("matriz29BInput").value;
            break;

        case "30":
            inputs.v1 = document.getElementById("valores30Input").value;
            break;
    }

    const res = ejecutarTestPorEjercicio(ejercicio, inputs);

    resultadoTest.textContent = res;

    if (res.toLowerCase().includes("no aprobado")) {
        resultadoTest.className = "test-no-aprobado";
    } else {
        resultadoTest.className = "test-aprobado";
    }
});