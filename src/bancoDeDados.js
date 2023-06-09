const sequece = {
    _id: 1,
    get id() { return this._id++}
}

const produtos = {}

// Adicionando uma nova altera~cao


// mais uma alteraçao do robson

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequece.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos [id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }