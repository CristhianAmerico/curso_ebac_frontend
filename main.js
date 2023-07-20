$(document).ready(function(){
    
    $('.cadastrar').on('click', function(){
        /*iniciando resgade do input*/
        const novaTarefa = $('#tarefa').val();

        /*criando nova linha*/
        const linha = document.createElement('li')

        /*escrevendo o texto da novaTarefa na linha*/
        linha.innerHTML = `${novaTarefa}`
        $('ul').append(linha)

        /*Apagando conteudo da linha*/
        $('#tarefa').val('')

        /*riscando tarefa ao clicar*/
        $(linha).click(function(){
            $(linha).toggleClass('risca')
        })
    })
})