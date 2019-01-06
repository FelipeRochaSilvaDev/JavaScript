const nome1 = "Beatriz da Glória Castro ♥"
const nome2 = "Felipe Rocha da Silva"
console.log(nome1, nome2)
console.log(nome1)
console.log(nome2)
console.log(nome1.charAt(4))//charAt retorna a letra que se encontra em determinada posição
console.log(nome2.charAt(8))
console.log(nome2.charAt(55))
console.log(nome1.charCodeAt(5))//de um caraceter especifico e retorna de maneira numeral para pesquisar na tabela unicode
console.log(nome2.indexOf('R'))//Procura onde se encontra um determinado caracter
console.log(nome1.substring(4))//Escreve a partir da determinada posição
console.log(nome2.substring(0, 5))//substing com um de até
console.log('Eu amo a '.concat(nome1).concat(', ').concat(nome2))//O concat concatena uma string junto com outras strings tanto de maneira direta, como por meio de variaveis
console.log('Eu amo a ' + nome1 + ', ' + nome2)
console.log(nome2.replace('e', 3))//O replace substitui um caracter por outro
console.log('Beatriz,Felipe,Amor'.split(','))//o split quebra aa virgula e gera um array