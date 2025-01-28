const form = document.getElementById('formulario');
const inputTarefa = document.getElementById('input-tarefa');
//const listaTarefa = document.getElementById('lista-tarefa');
const tarefas = [];

let item = ' ';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    inputTarefa = ' ';
})

function adicionaItem(){
    
    const corpoLinhas = document.querySelector('lista-tarefa');
    corpoLinhas.innerHTML = item;


    if (tarefas.includes(inputTarefa.value)){
        alert('tarefa ja inclusa');
    } else {
        tarefas.push(inputTarefa.value);

        let itens = '<ul>';
        itens +=`<li> ${inputTarefa.value}</li>`;
        itens += '</ul>';

        itens += item;
    }
}