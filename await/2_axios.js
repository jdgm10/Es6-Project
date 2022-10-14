const axios = require('axios')

let config = {
    method:'get' ,
    url: "https://rickandmortyapi.com/api/character"
}

const f = async () =>{
try {
   let response = await axios(config)
   return response.data.results.forEach(tipo=>{
    console.log(`Tipo: ${tipo.name}`);
    console.log("**********************")
});
} catch (error) {
    console.error(error)
}
}

f()
