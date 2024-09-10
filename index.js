function calcular() {

    var a = document.querySelector('.resultado-container');
    const valorInput = document.getElementById("valor");
    const resultadoDiv1 = document.getElementById("resultado1");
    const resultadoDiv2 = document.getElementById("resultado2");
    const resultadoDiv3 = document.getElementById("resultado3");
    const porcentagem = parseFloat(document.getElementById("porcentagem").value);
    const frete = parseFloat(document.getElementById("frete").value);
    const valor = parseFloat(valorInput.value);
    if (isNaN(valor)) {
        resultadoDiv1.innerText = "";
        resultadoDiv2.innerText = "";
        resultadoDiv3.innerText = "";
    } else {
        a.style.display = 'block';
        a.style.backgroundColor = "#333333";
        const resultado1 = (valor / 20 + frete) * (porcentagem / 100 + 1);
        const resultado2 = (valor / 20 + frete) * 1.02 * (porcentagem / 100 + 1);
        const resultado3 = (valor / 20 + frete) * 1.02 * 1.02 * (porcentagem / 100 + 1);
        resultadoDiv1.innerText = `A vista: R$ ${resultado1.toFixed(4)}`;
        resultadoDiv2.innerText = `30 dias: R$ ${resultado2.toFixed(4)}`;
        resultadoDiv3.innerText = `60 dias: R$ ${resultado3.toFixed(4)}`;
    }
}

