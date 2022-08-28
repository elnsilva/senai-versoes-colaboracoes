/* Classificação de Alunos - Savinis. Requisitos:
* se o número for par, escreva 'par' e o número correspondente.
* se o número for ímpar, escreva 'ímpar' e o número correspondente.
* se o número for zero, escreva 'zero' e o número correspondente.*/

let listaAlunos = ["Artur", "Bruna", "Cristiano", "Denise", "Eva", "Fabrício", "Gustavo", "Helena", "Isadora", "Jorge"];
console.log("Total de alunos na turma: " + listaAlunos.length)

for (let index = 0; index < listaAlunos.length; index++) {
    //const element = array[index];
    console.log(index)
    if (index == 0) {
        console.log("zero localizado: "  + listaAlunos[index])
    } else if (index % 2 != 0) {
        console.log ("Número ímpar localizado: " + listaAlunos[index])
    } else {console.log("Número par localizado: " + listaAlunos[index])}
}