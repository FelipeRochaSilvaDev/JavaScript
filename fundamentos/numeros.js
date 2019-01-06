const peso1 = 1.0
const peso2 = Number('2.5')//o Number tem que ser escrito com o N maisculo

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))//Number isInteger verifica se o numero de uma determinada variavel é inteiro
console.log(Number.isFinite(peso2))//Numer isFinite verifica se o numero de uma determinada variavel é finito
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.567
const avaliacao2 = 8.765
const avaliacao3 = 7.555
const avaliacao4 = 6.987

const total = avaliacao1 * peso1 + avaliacao2 * peso1 + avaliacao3 * peso2 + avaliacao4 * peso2
const media = total / (peso1 + peso2)

console.log(total.toFixed(2))// O toFixed é utilizado para controlar a quantidade de casas decimais apos a virgula
console.log(media.toFixed(3))
console.log(media.toFixed(5).toString())//O toString transforma um numer para uma string
console.log(typeof total)
console.log(typeof media)
