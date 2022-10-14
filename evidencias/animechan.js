const axios = require('axios')

let config = {
    method:'get' ,
    url: "https://animechan.vercel.app/api/random"
}
axios(config)
.then((response) =>{
console.log(response.data.anime); 
})

.catch((error)=>{
    console.error(error)
})