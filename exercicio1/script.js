// Exercício 1

/* Crie uma função que receba uma const numérica qualquer. Crie um (if) para verificar se o número guardado na const
é (par). Caso seja, a função deve retornar a mensagem: "o número é par". Se não for, deve retornar
o número é impar". Após imprima o retorno no console. */

// Resolução: 
// definir uma variavel = (parametro) => {
// if(parametro % (divisível) 2 === 0){
//      return `string ${parametro}`
// }else{
//      return `string ${parametro}`
// }

// depois fazer uma variável = Number(prompt("string"))
// chamar a função: nome da função(variavel)
// e imprimir: console.log(nome da função(variavel))

const randomNumber = (num) => {
    if(num % 2 === 0){
        return `O número ${num} é par`
    }else{
        return `O número ${num} é ímpar`
    }
}

const numero = Number(prompt("Digite um número aleatório"))
randomNumber(numero)
console.log(randomNumber(numero))