$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const inputTarefa = $('#input-tarefa').val();
        
        $(`<li>"${inputTarefa}" </li>`).appendTo('ul');
        
        $('li').click(function(){
            $(this).css("text-decoration", "line-through");             
        });

        $("button").cslick(function(){
            $('#input-tarefa').empty();
        });            
    })
})
