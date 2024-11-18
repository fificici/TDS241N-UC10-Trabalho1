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

let numeros = [8, 7, 2, 10, 3, 1, 6, 4, 5, 9]
let teste = bubblesort(numeros)

console.log(teste)