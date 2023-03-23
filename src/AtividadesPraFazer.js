/**Ralize as seguintes atividades */

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
    }
]


const carroGol = {
    id: 3,
    modelo: 'gol',
    marca: 'Volkswagen',
    ano: 2020
} 
/**
 *   
 *  1 - Mude a marca de 'fiat' para 'Volkswagen' da matriz de carrosAntigos. E lance para o repositorio
 * 
 * 
 *  2 - Para o objeto do id 1 mude o ano do carro para 2005
 * 
 * 
 *  3 - Adicione o novo objeto "carroGol:  para a matriz "carros"
 * 
 * 
 * 
 */

 const alterarMarcar = carros.map(carro => {         // atividade 01
     if(carro.id === 2) {
         const newcarro = {
             id: carro.id,
             modelo: carro.modelo,
             marca: 'Volkswagen',
             ano: carro.ano
         } 
         return newcarro
     }
     return carro
 })
 console.log(alterarMarcar)
