const needle = require('needle')

let ricky='https://rickandmortyapi.com/api/character';


needle('get', ricky )
.then((response)=>{
    return response.data.results.forEach((tipo)=>{
        console.log(`Tipo: ${tipo.name}`);
        console.log("ooooo---111")
    })
})

.catch(

)