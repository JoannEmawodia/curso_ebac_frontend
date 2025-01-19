
const form = document.getElementById('formulario');

function validaForm(numero1, numero2) {
    if (numero2 > numero1) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const mensagemInsucesso = `Erro: O campo B: ${campoB.value} é menor que o campo A: ${campoA.value}`;
    
    formValido = validaForm(Number(campoA.value), Number(campoB.value));
    if (!formValido) {
        alert(mensagemInsucesso);
        campoA.value = ' ';
        campoB.value = ' ';
    } else {
        alert("Formulário submetido com sucesso");

        campoA.value = ' ';
        campoB.value = ' ';
    }

})

