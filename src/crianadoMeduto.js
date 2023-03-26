const concessionariaAutocar = [
    {
        id: 1,
        modelo: 'Maverick',
        marca: 'Chevrolet',
        ano: 2002
    },
    {
        id: 2,
        modelo: 'ano',
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

const concessionariaDosSantos = [
    {
        id: 1,
        modelo: 'a3',
        marca: 'audi',
        ano: 2016
    },
    {
        id: 2,
        modelo: 'i30',
        marca: 'hyldai',
        ano: 2015
    },
    {
        id: 3,
        modelo: 'a200',
        marca: 'mercedes',
        ano: 2015,
    },
    {
        id: 4,
        modelo: 'celta',
        marca: 'chevrolet',
        ano: 2006,
    }
]

// atidade complementar 

const genereteNewCarsWithdefert = (carros) => {
    const newcarro = (carro, def) => {
        return {
            ...carro,
            defeitos: def,
        } 
    }
    const novosCarros = carros.map(carro => {
        switch(carro.id) {
            case 1:
                return newcarro(carro, ['macha lenta','farol quebrado', 'sinistro'])
            
            case 2:
                return newcarro(carro, ['lata amassada','farol queimado', 'cronico'])
            case 3:
                return newcarro(carro, ['embreagem','lanterna traceira queimada', 'motor batido'])
            case 4:
                return newcarro(carro, ['problema embreagem'])
            default: 
                return newcarro(carro, ['defeito generico'])
                
        }
    })
    return novosCarros
}

console.log({concessionasria1: JSON.stringify(genereteNewCarsWithdefert(concessionariaAutocar), null, 2)})
console.log({concessionaria2: JSON.stringify(genereteNewCarsWithdefert(concessionariaDosSantos), null, 2)})

