const pessoa1 = ['Felipe','18 anos','Desenvolvedor']//Criação de um Array dentro de uma variavel
const pessoa2 = ['Beatriz','19 anos','Designer']
console.log(pessoa1[0],pessoa1[1],pessoa1[2])//Exibição dos valores encontrados em suas posições
console.log(pessoa2)//Exibição da estrutura do Array
console.log(pessoa1.length)//o Length mostra a quantidade de dados num Array
pessoa1.push({id : 3},false, null, 'teste')//a Função Push é utilizada para inserir dados no Array
console.log(pessoa1)//Presar por um Array mais centrado, sem a mistura de diverosos valores com propositos diferentes
console.log(pessoa2.pop())//a Função pop retira o ultimo valor do array e retorna
console.log(pessoa2)
delete pessoa1[2]
console.log(pessoa1)

console.log(typeof pessoa1)//em JavaScript o Array é um objeto 