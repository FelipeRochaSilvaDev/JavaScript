const produto1 = {} //{} significa aquilo é um objeto, assim como [] signifca que é um array
produto1.nome = 'Galaxy J7 Prime'//criando o indicador de maneira dinamica,sem antes mesmo de te-lo  criado
produto1.preco = 1200.00// mesmo o indicador aceitando espaço não é recomendado
produto1.descricao = 'Otimo aparelho, com otimo desempenho'
produto1.fichatécnica={
    origem : 'Nacional',
    Peso : '10gr',
    Tamanho  : '5,5 polegadas'
}
const produto2 = {}
produto2.nome = 'LG Q6'
produto2.preco = 1200.00
produto2.descricao='Otimo aparelho, com otimo desempenho'
produto2.fichatécnica={
    origem : 'Nacional',
    peso : '15gr',
    Tamanho : '4,5 polegadas'
}
console.log(produto1, produto2) 
const produto3 = {
    nome : 'Iphone X',
    preco :  5500.00,
    descricao : 'Muito Caro',
    fichatécnica :{
        origem : 'Importado',
        peso : '30gr',
        Tamanho : '6,5 polegadas'
    }
}
//JSON é um formato textual
'{"nome" : "Iphone X", "preco" :  5500.00, "descricao" : "Muito Caro",  fichatécnica:{"origem": "Importado", "peso" : "30gr","Tamanho" : "6,5 polegadas"}}'
console.log(produto3)
'{"nome":"Felipe", "idade":"18 anos"}'