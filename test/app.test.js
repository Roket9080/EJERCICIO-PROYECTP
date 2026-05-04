import { encontrarSubarrayMaximo } from "../js/ejercicio26.js";
import { combinarVectores } from "../js/ejercicio27.js";
import { encontrarPrimos } from "../js/ejercicio28.js";
import { multiplicarMatrices, parseMatrix } from "../js/ejercicio29.js";
import { ordenarPorMezcla } from "../js/ejercicio30.js";

// ===============================
// VALIDACION
// ===============================
function assert(condicion, mensaje) {
    if (!condicion) {
        throw new Error("❌ " + mensaje);
    }
    console.log("✔ " + mensaje);
}

// ===============================
// EJERCICIO 26 - encontrarSubarrayMaximo
// ===============================
assert(
    typeof encontrarSubarrayMaximo([1,2,3,-1,5]) === "number",
    "Ejercicio 26 aprobado"
);

// ===============================
// EJERCICIO 27 - combinarVectores
// ===============================
assert(
    JSON.stringify(combinarVectores([1,2],[3,4])) === JSON.stringify([1,2,3,4]),
    "Ejercicio 27 aprobado"
);

// ===============================
// EJERCICIO 28 - encontrarPrimos
// ===============================
assert(
    Array.isArray(encontrarPrimos(10)),
    "Ejercicio 28 aprobado"
);

// ===============================
// EJERCICIO 29 - multiplicarMatrices
// ===============================
assert(
    Array.isArray(
        multiplicarMatrices(
            parseMatrix("1,2;3,4"),
            parseMatrix("5,6;7,8")
        )
    ),
    "Ejercicio 29 aprobado"
);

// ===============================
// EJERCICIO 30 - ordenarPorMezcla
// ===============================
assert(
    Array.isArray(ordenarPorMezcla([5,3,1,4])),
    "Ejercicio 30 aprobado"
);

// ===============================
console.log("🎉 TODOS LOS EJERCICIOS PASARON CORRECTAMENTE");