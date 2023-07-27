const form = document.getElementById('form-cadastro')

function validaNome (nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2;
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const nomeValido = document.getElementById('nome-completo')
    if (validaNome(nomeValido.value) === false){
        alert('Por favor, digite seu nome completo')
    }

})

$(document).ready(function () {

    $('#cpf').mask('000.000.000-00')
    $('#telefone').mask('(00) 00000-0000')
    $('#cep').mask('00000-000')
    
    $('form').validate({
        rules: {
            nome: {
                //campo obrigatorio
                required: true
            },
            telefone: {
                //campo obrigatorio
                required: true
            },
            email: {
                //campo obrigatorio
                required: true,
                email: true
            },
            cpf: {
                //campo obrigatorio
                required: true,
            },
            endereço: {
                //campo obrigatorio
                required: true,
            },
            cep: {
                //campo obrigatorio
                required: true,
            }
        },
        messages: {
            //estilizando mensagens
            nome: 'Por favor, insira seu nome!',
            telefone: 'Por favor, insira seu telefone!',
            email: 'Por favor, insira seu email!',
            cpf: 'Por favor, insira seu CPF!',
            endereço: 'Por favor, insira seu Endereço!',
            cep: 'Por favor, insira seu CEP!',
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})
