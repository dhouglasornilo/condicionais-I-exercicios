// Exercício 2

// Escreva uma função que receba três valores. Uma idade, um booleano que responda se a pessoa terminou
// ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

/* Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa é maior de idade
- Se a pessoa terminou o ensino médio ou não
- Se a pessoa está cursando alguma faculdade ou não

Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira. */

// Resolução:

/* criar uma função = (propriedade1, propriedade2, propriedade3) => {
    (se) if(propriedade1 maior ou igual (>=) 18 e (&&) propriedade1 menor ou igual (<=) 130){
        console.log("string")
    }(se não se) else if(parametro1 maior (>) 130){
        console.log("string")
    }(se não se) else if(parametro1 menor ou igual <= 0){
        console.log("string")
    }(se não) else{
        console.log("string")
    }

    (se) if(propriedade2 (é igual valor e tipo) === "string booleana"){
        console.log("string")
    }(se não se) else if(parametro2 === "string booleana oposta a primeira"){
        console.log("string")
    }(se não) else{
        console.log("string")
    }

    (se) if(propriedade3 (é igual valor e tipo) === "string booleana"){
        console.log("string")
    }(se não se) else if(propriedade3 (é igual valor e tipo) === "string booleana oposta a primeira"){
        console.log("string")
    }(se não) else{
        console.log("string")
    }
}

criar 3 variáveis para armazenar os dados digitados pelo usuário:

variavel1 = nome da variavel = Number(prompt("string"))
variavel2 = nome da variavel = (prompt("string")).toLowerCase()
variavel3 = nome da variavel = (prompt("string")).toLowerCase()

chamar a função:

função(variavel1, variavel2, variavel3)

*/

const verificador = (maiorIdade, ensinoMedioCompleto, cursandoFaculdade) => {
    if(maiorIdade >= 18 && maiorIdade <= 130){
        console.log("Você é maior de idade!")
    }else if(maiorIdade > 130){
        console.log("Com essa idade você provavelmente já estaria morto!")
    }else if(maiorIdade <= 0){
        console.log("Você provavelmente ainda não nasceu!")
    }else{
        console.log("Você não é maior de idade!")
    }

    if(ensinoMedioCompleto === "sim"){
        console.log("Você terminou o ensino médio!")
    }else if(ensinoMedioCompleto === "nao" || ensinoMedioCompleto === "não"){
        console.log("Você não terminou o ensino médio!")
    }else{
        console.log("Resposta inválida!")
    }

    if(cursandoFaculdade === "sim"){
        console.log("Você está cursando faculdade!")
    }else if(cursandoFaculdade === "nao" || cursandoFaculdade === "não"){
        console.log("Você não está cursando faculdade!")
    }else{
        console.log("Resposta inválida!")
    }

}

const idade = Number(prompt("Insira sua idade."))
const ensinoMedio = prompt("Você já concluiu o ensino médio? (Sim ou Não?)").toLowerCase()
const faculdade = prompt("Você está cursando alguma faculdade? (Sim ou Não?)").toLowerCase()

verificador(idade, ensinoMedio, faculdade)