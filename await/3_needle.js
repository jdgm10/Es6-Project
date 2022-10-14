const needle = require("needle")

let ricky='https://rickandmortyapi.com/api/character';


const f = async(
    
) => {
    try {
        let response = await needle(config)
        return response.body.results.forEach(tipo=>{
         console.log(`Tipo: ${tipo.name}`);
         console.log("**********************")
        });
    } catch (error) {
        console.error(error);
    }
}
f()