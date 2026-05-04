// ===== IMPORTS =====
import { encontrarSubarrayMaximo } from "./ejercicio26.js";
import { combinarVectores } from "./ejercicio27.js";
import { encontrarPrimos } from "./ejercicio28.js";
import { multiplicarMatrices, parseMatrix } from "./ejercicio29.js";
import { ordenarPorMezcla } from "./ejercicio30.js";

// ===== ELEMENTOS DOM =====
const select = document.getElementById("selectEjercicio");
const boton = document.getElementById("botonEjecutar");
const resultado = document.getElementById("resultado");
const inputsContainer = document.getElementById("inputsContainer");

// ===== OCULTAR INPUTS =====
function ocultarInputs() {
    const bloques = inputsContainer.querySelectorAll("div");
    bloques.forEach(div => div.style.display = "none");
}

// ===== CAMBIO DE EJERCICIO =====
select.addEventListener("change", () => {
    ocultarInputs();

    const valor = select.value;

    if (valor) {
        const bloque = document.getElementById("inputs" + valor);
        if (bloque) bloque.style.display = "block";
    }
});

// ===== EJECUTAR =====
boton.addEventListener("click", () => {

    const opcion = select.value;
    let res = "";

    // Validación básica
    if (!opcion) {
        resultado.textContent = "Seleccione un ejercicio";
        return;
    }

    try {

        switch (opcion) {

            // ===== EJERCICIO 26 =====
            case "26":
                const v26 = document.getElementById("vector26Input").value;
                res = encontrarSubarrayMaximo(v26);
                break;

            // ===== EJERCICIO 27 =====
            case "27":
                const vA = document.getElementById("vector27AInput").value;
                const vB = document.getElementById("vector27BInput").value;
                res = combinarVectores(vA, vB);
                break;

            // ===== EJERCICIO 28 =====
            case "28":
                const limite = document.getElementById("limite28Input").value;
                const primos = encontrarPrimos(limite);
                res = "Primos: " + primos.join(", ");
                break;

            // ===== EJERCICIO 29 =====
            case "29":
                const textoA = document.getElementById("matriz29AInput").value;
                const textoB = document.getElementById("matriz29BInput").value;

                const m1 = parseMatrix(textoA);
                const m2 = parseMatrix(textoB);

                if (!m1 || !m2) {
                    res = "Formato inválido. Usa: 1,2;3,4";
                    break;
                }

                const matriz = multiplicarMatrices(m1, m2);

                // Convertir matriz a texto
                res = matriz.map(fila => fila.join(", ")).join(" | ");
                break;

            // ===== EJERCICIO 30 =====
            case "30":
                const v30 = document.getElementById("valores30Input").value;
                res = ordenarPorMezcla(v30);
                break;

            default:
                res = "Opción inválida";
        }

    } catch (error) {
        res = "Error: " + error.message;
    }

    resultado.textContent = res;
});