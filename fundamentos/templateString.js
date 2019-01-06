const nome = 'Beatriz'
const concatenacao = 'Olá' + nome + '!'
const template = `
    Olá 
    ${nome}!
` // ao colocar o `` abre-se um template string onde ele ira ler todas as quebras de linhas, espaços e etc
console.log(concatenacao)
console.log(template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${nome} tome ${up('cuidado')}!`)