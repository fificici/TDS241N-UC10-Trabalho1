let readline = require('readline-sync')

function bubblesort (numeros) {
    let tamanho = numeros.length
    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho - i - 1; j++) {
            if(numeros[j] > numeros[j + 1]) {
                let num = numeros[j]
                numeros [j] = numeros[j + 1]
                numeros[j + 1] = num
            }
        }
    }
    return numeros
}

let q1 = readline.questionInt("Digite um numero: ")
let q2 = readline.questionInt("Digite um numero: ")
let q3 = readline.questionInt("Digite um numero: ")
let q4 = readline.questionInt("Digite um numero: ")
let q5 = readline.questionInt("Digite um numero: ")
let q6 = readline.questionInt("Digite um numero: ")
let q7 = readline.questionInt("Digite um numero: ")
let q8 = readline.questionInt("Digite um numero: ")
let q9 = readline.questionInt("Digite um numero: ")
let q10= readline.questionInt("Digite um numero: ")

let numeros = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
let teste = bubblesort(numeros)

console.log(teste)