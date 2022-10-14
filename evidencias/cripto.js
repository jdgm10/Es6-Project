let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let ricky='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

const exito= (response)=> {

    //  const personajes = JSON.parse(response).results
    // personajes.forEach((personaje) => {
    //     console.log(`Personaje: ${personaje.species}`);
    //     console.log("/*----------------*/");
    // });
    const tipos = JSON.parse(response).results
    tipos.forEach((nombre)=>{
        console.log(`nombre: ${nombre.name}`);
        console.log("-----------------")
    })
    //console.log(JSON.parse(response.data))
    
}

const fallo=(status)=> {
    console.log(status)
    console.log("No se logró gente")
}



 const get_data=(ricky)=> {
// definir una promesa para la conexion APi
    let promise = new Promise((resolve , reject) => {

//CREACIÓN OBJETO CONEXIÓN API
    let http = new XMLHttpRequest()
    //ABRIR CONEXIÓN API
    http.open('get', ricky)
    //ENVIAR SOLICITUD A LA API
    http.send()
    //HACER TRATAMIENTO DE LA RESPONSE 
    http.onload = ()=> {
        if (http.status === 200) {
            resolve(http.responseText)
        }else(
        reject(http.status)
        )
    }

    }
    )
    return promise                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
 }

async function f(){

    try {
        let response = await get_data(ricky)
     exito(response)
    } catch (error) {
        fallo(error)
    }
     
}
 f()
 //INVOCAR FUNCION
//  get_data(ricky)
//  .then((response)=>{
// exito(response);
//  })
//  .catch((status) =>{
// fallo(status)
//  })
// console.log();