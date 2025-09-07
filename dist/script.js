"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var turma = [{
  nome: "Jéssica",
  nota: 5
}, {
  nome: "Luis",
  nota: 7
}, {
  nome: "Flavia",
  nota: 8
}, {
  nome: "Gustavo",
  nota: 4
}];

//aqui deve retornar em array as informações da variavel turma
var alunos = turma.map(function (estudante) {
  return estudante;
});

//aqui deve retornar em array apenas os alunos que tiveram nota maior ou igual a 6
var aprovados = turma.filter(function (estudante) {
  return estudante.nota >= 6;
});
console.log(aprovados);

//Criação de uma classe que irá receber como atributos o nome e a nota do aluno
var Sala = /*#__PURE__*/function () {
  function Sala(nome, nota) {
    var _this = this;
    _classCallCheck(this, Sala);
    _defineProperty(this, "aprovacao", new Promise(function (resolve, reject) {
      if (_this.nota >= 6) {
        resolve("Aprovado");
      } else {
        reject("Reprovado");
      }
    }));
    this.nome = nome;
    this.nota = nota;
  }
  return _createClass(Sala, [{
    key: "resutadoProva",
    value: function resutadoProva() {
      console.log("".concat(this.nome, " sua nota foi ").concat(this.nota));
    }
  }]);
}();
var estudante1 = new Sala("Jéssica", 5);
estudante1.resutadoProva();
estudante1.aprovacao.then(function (resultado) {
  return console.log(resultado);
})["catch"](function (erro) {
  return console.log(erro);
});