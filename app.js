// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo(){

let amigoInsertado = document.getElementById('amigo').value;

if( amigoInsertado === '') {

    alert("Porfavor ingrese un nombre valido"); 

}else{

    amigos.push(amigoInsertado);
    document.querySelector('#amigo').value = '';
    mostrarAmigosInsertados();
}

console.log(amigos);

}

function mostrarAmigosInsertados(){
 
let lista = document.getElementById('listaAmigos');
lista.innerHTML = "";

for(let i = 0; i < amigos.length; i++){
 
    let li = document.createElement("li"); 
    li.textContent = amigos[i]; 
    lista.appendChild(li);

}

} 

function sortearAmigo(){

    if(amigos.length === 0) {

        alert("Porfavor ingrese un nombre valido");
        return;
        
    }else{
      
        let eleccionAmigo = Math.floor(Math.random()* amigos.length);

        let amigoElegindo = amigos[eleccionAmigo];
        let resultadoElecccion = document.getElementById('resultado');
        resultadoElecccion.innerHTML="";
        
        let li= document.createElement("li");
        li.textContent = `El amigo secreto sorteado es: ${amigoElegindo}`;
        resultadoElecccion.appendChild(li);
    }
}




