const carros = [
    {
        id: 1,
        modelo: 'Maverick',
        marca: 'Chevrolet',
        ano: 2002
    },
    {
        id: 2,
        modelo: 'Fusca',
        marca: 'fiat',
        ano: 2015
    },
    {
        id: 3,
        modelo: 'gol',
        marca: 'Volkswagen',
        ano: 2020
    }
]



const precoCarros = [20000, 30000, 44000]


/**
 * 
 * 
 * 1  - Monte uma lista de frases para cada objeto da matriz
 *      Texto Exemplo: "Tenho um carro <MODELO> da marca <MARCA> para vender urgente, o ano do veiculo e <ANO>"
 * 
 * 
 * 2 - Adicione  preco nos carros de acordo com a orderm da lista de "precoCarros"
 * 
 * 
 * 3 - Recupere o ultimo objeto da lista de carros
 * 
 * 
 * 4 - Recupere o primeiro objeto da lista de carros
 * 
 * 
 * 5 - Adicione uma lista de defeitos para cada carro, sendo q cada carro tem defeitos diferentes
 *   exemplo: [... { ... defeitos: ["macha lenta", "farol quebrado", "sinistro"]}]
 * 
 * 
 * 6 - Adicione uma propriedade "vendido: sim/nao" em cada carro sinalizando se ja foi vendido.
 * 
 * 
 */

// atividade 01

const descCarros = carros.map(carro => {
    const desc = `Tenho um carro ${carro.modelo} da marca ${carro.marca} para vender urgente, o ano do veiculo e ${carro.ano}`  
    return desc
})

// atividade 02

const addPreco = carros.map((carro, index) => {
    const newcarro = {
       ...carro,
        valor: precoCarros[index]
    } 
    return newcarro
})

// atividade 05 
const addDefeitos = carros.map((carro, index) => {
    if(carro.id === 1) {
        const newcarro = {
           ...carro,
            defeitos: ['macha lenta','farol quebrado', 'sinistro'],
        } 
        
        return newcarro 
    }
    if(carro.id === 2) {
        const newcarro = {
            ...carro,
            defeitos: ['lata amassada','farol queimado', 'cronico'],
        } 
        return newcarro 
    }
    if(carro.id === 3) {
        const newcarro = {
            ...carro,
            defeitos: ['embreagem','lanterna traceira queimada', 'motor batido'],
        } 
        return newcarro 
    }
})

// atidade complementar 

const genereteNewCars = (carros) => {
    const addDefeitos = carros.map((carro, index) => {
        if(carro.id === 1) {
            const newcarro = {
               ...carro,
                defeitos: ['macha lenta','farol quebrado', 'sinistro'],
            } 
            
            return newcarro 
        }
        if(carro.id === 2) {
            const newcarro = {
                ...carro,
                defeitos: ['lata amassada','farol queimado', 'cronico'],
            } 
            return newcarro 
        }
        if(carro.id === 3) {
            const newcarro = {
                ...carro,
                defeitos: ['embreagem','lanterna traceira queimada', 'motor batido'],
            } 
            return newcarro 
        }
    })
    return addDefeitos
}

console.log(genereteNewCars(carros))
// atividade 06

const financeiro = [true, false, false]

const addStatus = carros.map((carro, index) => {
    const newcarro = {
        ...carro,
        Vendido: financeiro[index],
    } 
    return newcarro
})


// atividade 03

const reUltimoItem = carros.pop()

// atividade 04

const rePrimeirotem = carros.shift()

