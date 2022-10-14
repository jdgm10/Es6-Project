const axios = require('axios')

let config = {
    method:'get' ,
    url: "http://swapi.dev/api/people"
}
axios(config)
.then((response) =>{
return response.data.results
})
.then((data)=>{
    data.forEach((tipo)=>{
        console.log(`Tipo: ${tipo.name}`);
        console.log("++++++++++++++++++++++++dddd+")
    })
})
.catch((error)=>{
    console.error(error)
})