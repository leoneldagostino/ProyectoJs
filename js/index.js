// Hemos omitido los acentos en los comentarios por compatibilidad
let hola;
//Define las variables que necesites 
const peticion = new XMLHttpRequest ();
let fecha;

peticion.addEventListener("load",()=>{
  let dato;
  let fechasOrdenadas;
  if(peticion.status == 200 && peticion.readyState == 4){
    dato=peticion.response;
  }
  fecha = new Date(JSON.parse(dato).fechaActual);
  console.log(fecha);
  
  fechasOrdenadas = JSON.parse(dato).eventos.sort(function (a, b) {
    return new Date(a.fecha).getTime() - new Date(b.fecha).getTime(); 
  });
  console.log(fechasOrdenadas);

  
  
});



peticion.open('GET','info.json')  
peticion.send();





  //Carga los datos que estan en el JSON (info.json) usando AJAX

  //Guarda el resultado en variables

  //Clasifica los eventos segun la fecha actual del JSON

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  //Extrae solo dos eventos

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  //Extrae solo dos eventos

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado


