
// ===== IMPORTS =====
import { encontrarSubarrayMaximo } from "./ejercicio26.js";
import { combinarVectores } from "./ejercicio27.js";
import { encontrarPrimos } from "./ejercicio28.js";
import { multiplicarMatrices, parseMatrix } from "./ejercicio29.js";
import { ordenarPorMezcla } from "./ejercicio30.js";

// ===== ELEMENTOS DOM =====
const select = document.getElementById("selectEjercicio");
const boton = document.getElementById("botonEjecutar");
const botonTest = document.getElementById("botonTest");
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

// ===== EJECUTAR EJERCICIO =====
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
                res = encontrarSubarrayMaximo(v26);
                break;

            case "27":
                const vA = document.getElementById("vector27AInput").value;
                const vB = document.getElementById("vector27BInput").value;
                res = combinarVectores(vA, vB);
                break;

            case "28":
                const limite = document.getElementById("limite28Input").value;
                const primos = encontrarPrimos(limite);
                res = "Primos: " + primos.join(", ");
                break;

            case "29":
                const textoA = document.getElementById("matriz29AInput").value;
                const textoB = document.getElementById("matriz29BInput").value;

                const m1 = parseMatrix(textoA);
                const m2 = parseMatrix(textoB);

                const matriz = multiplicarMatrices(m1, m2);
                res = matriz.map(fila => fila.join(", ")).join(" | ");
                break;

            case "30":
                const v30 = document.getElementById("valores30Input").value;
                res = ordenarPorMezcla(v30);
                break;
        }

    } catch (error) {
        res = "Error: " + error.message;
    }

    resultado.textContent = res;
});


// ======================================================
// 🧪 TESTS (BOTÓN TEST)
// ======================================================
botonTest.addEventListener("click", () => {

    const resultados = [];

    function check(nombre, condicion) {
        resultados.push(`${nombre}: ${condicion ? "APROBADO" : "NO APROBADO"}`);
    }

    try {

        // ===== 26 =====
        check(
            "Ejercicio 26",
            typeof encontrarSubarrayMaximo([1,2,3,-1,5]) === "number"
        );

        // ===== 27 =====
        check(
            "Ejercicio 27",
            JSON.stringify(combinarVectores([1,2],[3,4])) === JSON.stringify([1,2,3,4])
        );

        // ===== 28 =====
        check(
            "Ejercicio 28",
            Array.isArray(encontrarPrimos(10))
        );

        // ===== 29 =====
        check(
            "Ejercicio 29",
            Array.isArray(
                multiplicarMatrices(
                    parseMatrix("1,2;3,4"),
                    parseMatrix("5,6;7,8")
                )
            )
        );

        // ===== 30 =====
        check(
            "Ejercicio 30",
            Array.isArray(ordenarPorMezcla([5,3,1,4]))
        );

    } catch (e) {
        resultados.push("Error en tests: " + e.message);
    }

    resultado.textContent = resultados.join("\n");
});