const axios = require('axios')

let config = {
    method:'get' ,
    url: "https://rickandmortyapi.com/api/character"
}
axios(config)
.then((response) =>{
return response.data.results
})
.then((data)=>{
    data.forEach((tipo)=>{
        console.log(`Tipo: ${tipo.name}`);
        console.log("+++++++++++++++++++++++++")
    })
})
.catch((error)=>{
    console.error(error)
})