const a = {name : 'Felipe Rocha da Silva'}
const b = {name : 'Beatriz da Glória Castro'}
console.log(a)
console.log(b)
const c = a //atribuição de referência
console.log(c)
c.name = 'Mozão da Bea'
console.log(a) 
let d = 03// tipos primitivos fazem um copia do valor, diferente do obejto que faz a copia do caminho de memoria
let e = d
e++
console.log(e)
console.log(d)
 
let valor // não inicializda
console.log(valor)

valor = null // null significa que a variavel não está apontando para nenhum objeto na memória
console.log(valor)
// console.log(valor.toString()) tomar cuidado para não acessar variaveis que estão nulas
const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto.preco)
produto.preco = undefined // NÃO FAZER ISSO NUNCA
console.log(!!produto.preco)
console.log(produto)
produto.preco = null // Sem Preço
console.log(!!produto.preco)
console.log(produto) 
