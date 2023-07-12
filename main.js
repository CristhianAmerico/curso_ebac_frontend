const form = document.getElementById('form-valida')

function validaForms(valorA, valorB ){
    return valorB > valorA
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const valorA = document.getElementById('numero-A');
    const valorB = document.getElementById('numero-B');

    const mensagemSucesso = `Tudo certo, o valor B: ${valorB.value} é maior que o valor A: ${valorA.value}`;

    formEValido = validaForms(valorA.value, valorB.value)
    if (formEValido){
        alert(mensagemSucesso)

        valorA.value = '';
        valorB.value = '';
        

    }else{
        alert('Algo deu errado, o numero digitado em B é menor que o A')

        valorA.value = '';
        valorB.value = '';
        
    }
})

console.log(form)