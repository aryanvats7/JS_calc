function performAddition() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent = "Result: " + add(num1, num2);
}

function performSubtraction() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent = "Result: " + subtract(num1, num2);
}

function performMultiplication() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent = "Result: " + multiply(num1, num2);
}

function performDivision() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent = "Result: " + divide(num1, num2);
}
