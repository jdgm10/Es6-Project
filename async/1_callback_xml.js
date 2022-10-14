let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let pais='https://restcountries.com/v3.1/all';

function exito(response) {
    console.log(JSON.parse(response))
    console.log("Se logró gente")
}

function fallo(status) {
    console.log(status)
    console.log("No se logró gente")
}

 function get_data(pais, exito, fallo) {
    //CREACIÓN OBJETO CONEXIÓN API
    let http = new XMLHttpRequest()
    //ABRIR CONEXIÓN API
    http.open('get', pais)
    //ENVIAR SOLICITUD A LA API
    http.send()
    //HACER TRATAMIENTO DE LA RESPONSE 
    http.onload = function () {
        if (http.status === 200) {
            exito(http.responseText)
        }else(
        fallo(http.status)
        )
    }
    //FALLO
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
 }
 //INVOCAR FUNCION
 get_data(pais, exito, fallo)
// console.log();