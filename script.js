function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quant){
    this.preco += quant
}

Produto.prototype.desconto = function(quant){
    this.preco -= quant
}

function Camisa(nome, preco, cor){
    Produto.call(this,nome,preco,cor)
}
Camisa.prototype = Object.create(Produto.prototype)
Camisa.prototype.constructor = Camisa

Camisa.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco)
    this.material = material
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque

        },
        set: function(valor) {
            if(typeof valor != 'number') return
            estoque = valor
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

let produto1 = new Produto('Gen', 111)
let camisa1 = new Camisa('Regata', 49.99, 'Preta')
let caneca1 = new Caneca('Caneca', 50, 'Metal', 2)
console.log(caneca1)
console.log(camisa1)
console.log(produto1)