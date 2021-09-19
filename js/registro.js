// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {

  //Expresion regular del correo
  if(formulario.nombres.value.trim().length == 0){
    document.getElementById("errornombres").innerHTML="Este Campo es obligatorio";
    
  }
  
  let reg =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!reg.test(formulario.email.value)){
    document.getElementById("errorEmail").innerHTML = "Campo invalido";
  }

  if(formulario.contrasena.value.trim().length < 7){
    document.getElementById("errorContrasena").innerHTML = "Debe contener al menos 7 caracteres";
  }

  if(formulario.contrasena.value != formulario.confirmacion.value){
    document.getElementById("errorConfirmacion").innerHTML = "No coincide con la contraseña";
  }

  if(formulario.tipo.value == -1){
    document.getElementById("errorTipo").innerHTML = "Este campo es obligatorio";
  }

  if(!formulario.acepto.checked){
    document.getElementById("errorAcepto").innerHTML = "Este campo es obligatorio";
  }

  



}
