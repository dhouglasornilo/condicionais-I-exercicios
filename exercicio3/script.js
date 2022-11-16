// Exercício 3

// Crie uma função que receba do usuário sua nacionalidade, utilize um prompt que diga:
// "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.

/* Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
- brasileira;
- argentina;
- uruguaia;
- chilena;
- colombiana;

Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade`
é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console.
O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade`
não correspondaa nenhum dos valores.

> 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas.  */

/* Resolução:
Criar uma variavel da pergunta: const nome da função = prompt("string").toLowerCase() ou .toUpperCase()
Criar uma função: const nome da função = (parâmetro) => {
    if(parâmetro (for igual valor e tipo) === "string digitada na variavel pergunta"){
        console.log(`string ${parâmetro}`)
    }else if(parâmetro (for igual valor e tipo) === "string digitada na variavel pergunta"){
        console.log(`Você é ${parâmetro}!`)
Fazer quantos else if precisar e ao final apenas o else, pois siginifica que se nenhuma das
anteriores forem true, essa automáticamente será.
    }else{
        console.log(`string de erro`)
    }
}
*/

const nacionalidade = prompt("Qual é a sua nacionalidade?").toLowerCase()

const verificarNacionalidade = (nacionalidade) => {
    if(nacionalidade === "brasileiro" || nacionalidade === "brasileira"){
        console.log(`Você é ${nacionalidade}!`)
    }else if(nacionalidade === "argentino" || nacionalidade === "argentina"){
        console.log(`Você é ${nacionalidade}!`)
    }else if(nacionalidade === "uruguaio" || nacionalidade === "uruguaia"){
        console.log(`Você é ${nacionalidade}!`)
    }else if(nacionalidade === "chileno" || nacionalidade === "chilena"){
        console.log(`Você é ${nacionalidade}!`)
    }else if(nacionalidade === "colombiano" || nacionalidade === "colombiana"){
        console.log(`Você é ${nacionalidade}!`)
    }else{
        console.log(`Nacionalidade não encontrada!`)
    }
}

verificarNacionalidade(nacionalidade)