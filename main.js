const form = document.getElementById('form-agenda');
const imgCelular = '<img src="./images/cel-phone.png" alt="celular"/>'
const imgTelefone = '<img src="./images/phone.png" alt="telefone"/>'

const img = document.getElementById("tipo");
const contatos = []
const numeros = []
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    adicionaContato()
    atualizaAgenda()
    atualizaContatos()
});

function adicionaContato() {
    
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    const inputTipo = document.getElementById('tipo')
    
    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} ja foi adicionado`)
    } else {
        contatos.push(inputNomeContato.value)
        numeros.push(parseFloat(inputNumeroContato.value))

        let linha = '<tr>' //abrindo a inclusao
        linha += `<td>${inputNomeContato.value}`
        linha += `<td>${inputNumeroContato.value}`
        linha += `<td>${img.value == 'telefone' ? imgTelefone : imgCelular} </td>`
        linha += '</tr>' //fechando a inclusao

        linhas += linha;
    }
    inputNomeContato.value = ''
    inputNumeroContato.value = ''
    inputTipo.value = '';
}

function atualizaAgenda() {
    //colocando conteudo dentro da tabela
    const corpoTabela = document.querySelector('tbody');
    //inserindo o conteudo dentro da tag
    corpoTabela.innerHTML = linhas;
}

function atualizaContatos() {
    const numeroDeContatos = totalContatos();
    document.getElementById('total-contatos').innerHTML = numeroDeContatos
}

function totalContatos() {
    let totalContatos = 0

    for (let i = 0; i < numeros.length; i++) {
        totalContatos += numeros[i];
    }
    return numeros.length;
}
