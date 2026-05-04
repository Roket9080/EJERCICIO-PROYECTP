export function encontrarSubarrayMaximo(texto) {
    let nums = texto.split(",").map(Number);

    let maxActual = nums[0];
    let maxGlobal = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxActual = Math.max(nums[i], maxActual + nums[i]);
        maxGlobal = Math.max(maxGlobal, maxActual);
    }

    return "Subarray máximo: " + maxGlobal;
}