let message = document.querySelector('#message');
let pingButton = document.querySelector('#pingButton');

pingButton.addEventListener('click', getPingFromWebServices);
/*function getPing() {
  console.log('pong');
  message.innerHTML = 'pong';
}*/

function getPingFromWebServices(){
    const url = 'http://localhost:3030/ping'

    //Encadenar los datos de la url con la respuesta
    fetch (url)
        .then((response) => {
            //console.log(response)
         return response.json()//solicitar respuesta en formato json
        })
        .then((data)=> {
            console.log(data)
            message.innerHTML=data.message//asignar la data retornada al message
        })
        .catch(function(error){
            console.log(error)
            message.innerHTML= 'No se puede conectar al servidor ${url}'
        })
 }
