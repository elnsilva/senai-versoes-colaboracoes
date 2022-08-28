/* Sistema de cadastro de eventos
Requisitos:
* A data do evento deve ser posterior à data atual;
* O participante deve ter mais de 18 anos;
* Permitir até 100 inscritos;
* Exibir lista de participantes e palestrantes.*/


let dataEvento = new Date(2022,10,20);
let dataAtual = new Date();{console.log(dataAtual)}
let idade = 18
let lista = ['Ana', 'Bruna','Carlos','Denise','Elaine','Francisco']

console.log("-----------Data-------------")
if (dataAtual < dataEvento) {console.log("Próximo.")}
    else {console.log("Não podemos permitir seu cadastro. O evento já foi realizado.")}

console.log("-----------Idade-------------")
if (idade < 18) {console.log ("Não podemos permitir seu cadastro. Evento para maiores de 18 anos.")}
    else {console.log("Próximo.")}

console.log("-----------Vaga-------------")
if (lista.length < 100) {console.log ("Próximo")}
    else {console.log ("Vagas esgotadas.")}

console.log("-----------Ver Lista-------------")
lista.forEach(function(participantes) {
    console.log(participantes);
  });


