function calcularSoma() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        var soma = num1 + num2;
        document.getElementById("resultado").innerHTML = "parabéns, seu cartão foi clonado, envie esse link para 5 pessoas ou voce tera má sorte por 2 semanas, aliás o resultado é:" + soma;
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    }
}