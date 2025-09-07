const turma = [
    { nome: "Jéssica", nota: 5 },
    { nome: "Luis", nota: 7 },
    { nome: "Flavia", nota: 8 },
    { nome: "Gustavo", nota: 4 }
];


//aqui deve retornar em array as informações da variavel turma
const alunos = turma.map(function(estudante){
    return estudante;
});

//aqui deve retornar em array apenas os alunos que tiveram nota maior ou igual a 6
const aprovados = turma.filter(function(estudante){
    return estudante.nota >= 6;
})

console.log(aprovados)


//Criação de uma classe que irá receber como atributos o nome e a nota do aluno
class Sala {
    constructor(nome, nota){
        this.nome = nome;
        this.nota = nota;
    }

    resutadoProva(){
    console.log(`${this.nome} sua nota foi ${this.nota}`);
    };

    aprovacao = new Promise((resolve, reject) =>{
            if (this.nota >= 6){
                resolve("Aprovado")
            }else{
            reject("Reprovado")
        }
    })
}
const estudante1 = new Sala("Jéssica", 5);

estudante1.resutadoProva();
estudante1.aprovacao.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
