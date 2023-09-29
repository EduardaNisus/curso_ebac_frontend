const form = document.getElementById ('form');


form.addEventListener('submit', function(e) {
    e.preventDefault();


    const respostaA = parseFloat(document.getElementById ('campoA').value);
    const respostaB = parseFloat(document.getElementById ('campoB').value);
    const mensagemSucesso = ('Resposta válida!');

    if (respostaA < respostaB) {
        alert(mensagemSucesso);

    } else {
        alert("O valor B deve ser maior que o valor A. Tente novamente.");
    }
})
