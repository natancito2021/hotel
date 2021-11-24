let maximo=140;
let resto=0;
const validationTextarea= document.getElementById("validationTextarea");
const mensaje = document.getElementById("mensaje");

validationTextarea.addEventListener("input",actualizar);
function actualizar (){
    resto=maximo-validationTextarea.value.length;
    console.log(validationTextarea.value.length);
    if (validationTextarea.value.length>=maximo){
        mensaje.innerHTML="superaste los 140"
    } else {
        mensaje.innerHTML="te faltan caracteres "+ resto;
    }
    
}
