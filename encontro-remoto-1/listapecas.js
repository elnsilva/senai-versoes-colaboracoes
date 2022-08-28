/*Sistema de cadastro de peças Savinis.   
Requisitos:
* Peça com peso superior à 100 gramas;
* Quantidade de peças inferior à 10;
* Se nome da peça tiver menos que três caracteres, informar mensagem de erro.*/

const listaDePecas = ['Selim','Aro','Quadro']

console.log("------------------------")
console.log("Início do cadastro de peças.")
console.log("------------------------")

let pesoPeca = 150
if (pesoPeca > 100) {console.log("Próximo.")}
else {console.log("Cadastro não permitido. Peça com peso inferior à 100 gramas.")}

console.log("------------------------")

let quantidadePeca = 10
if (quantidadePeca > 10) {console.log("Quantidade de peças superior à capacidade da caixa.")}
else {console.log("Próximo.")}

console.log("------------------------")

for (let index = 0; index < listaDePecas.length; index++) {
        const nomePeca = listaDePecas[index];
             if (nomePeca.length < 3) {console.log("Insira um nome de peça com três caracteres ou mais.")}
             else {console.log("O nome da peça foi aceito.")}
}

console.log("------------------------")
console.log("Fim do cadastro.")
console.log("------------------------")
