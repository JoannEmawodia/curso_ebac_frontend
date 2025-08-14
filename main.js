/*----Descobrir tipo sanguíneo----*/

//Definindo variavel com os tipos sanguineos
const tipos = ["A", "B", "AB", "O"];

//definindo a variavel com as possíveis combinações de tipos sanguíneos
const combinacoes = {
    "O": [["O", "O"], ["A", "O"], ["O", "A"], ["B", "O"], ["O", "B"]],
    "A": [["A", "A"], ["A", "O"], ["O", "A"], ["A", "B"], ["B", "A"]],
    "B": [["B", "B"], ["B", "O"], ["O", "B"], ["A", "B"], ["B", "A"]],
    "AB": [["A", "B"], ["B", "A"]]
};


//Função construtora   
function TipoSanguineo(genitor1, genitor2) {
    
    if (tipos.includes(genitor1)) {
        this.genitor1 = genitor1;
    } else {
        this.genitor1 = null;
    }

    if (tipos.includes(genitor2)) {
        this.genitor2 = genitor2;
    } else {
        this.genitor2 = null;
    }

    this.getGenitores = function() {
        return { 
            genitor1: this.genitor1, 
            genitor2: this.genitor2 
        };
    }
}

//Funcão construtora e herança para verificar tipo sanguíneo dos filhos
function Filhos(genitor1, genitor2){

    TipoSanguineo.call(this, genitor1, genitor2);

    let _podeGerar = (tipoFilho) => {
        if (!tipos.includes(tipoFilho)) return false;
        
        return combinacoes[tipoFilho].some(([g1, g2]) =>
            (g1 === this.genitor1 && g2 === this.genitor2) ||
            (g1 === this.genitor2 && g2 === this.genitor1)
        );
    };
    
    this.verificarFilho = (tipoFilho) => _podeGerar(tipoFilho);
}

//Funcão construtora e herança para verificar os tipos sanguíneos dos pais
function Genitores (genitor1, genitor2){

    TipoSanguineo.call(this, genitor1, genitor2);

    let _possiveisPais = function (tipoFilho) {
        if (!tipos.includes(tipoFilho)) return [];
        return combinacoes[tipoFilho];
    };

    this.verificarPais = (tipoFilho) => _possiveisPais(tipoFilho);
}

// Exemplo 1 (descobrir se é possivel ser filho do casal) 
const carlos = new Filhos("A", "O");

/*console.log(carlos.verificarFilho("O"));*/


//Exemplo 2 (descobrir tipo sanguíneo dos pais)
const criancinha1 = new Genitores();

/*console.log(criancinha1.verificarPais("A"));*/
