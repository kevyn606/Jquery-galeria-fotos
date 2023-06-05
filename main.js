$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
   
})

$('#Cancelar').click(function(){
    $('form').slideUp();
    
})


$('form ').on('submit',function(e){
    e.preventDefault()
    const enderecoNovaImg = $('#imagem_nova').val();
    const novoItem = $('<li style="display:none"></li>')
    $(`<img src="${enderecoNovaImg}" />`).appendTo(novoItem)
    
    $(` <div class="imagem_link"> 
            <a href="${enderecoNovaImg}" title="Ver imagem em tamanho real" target="_blank">
                Ver imagem em tamanho real
            </a>
        </div>`
    ).appendTo(novoItem)
    $(novoItem).appendTo('ul')
    $(novoItem).fadeIn(1000)
    $('#imagem_nova').val('')
})
