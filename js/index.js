// Hemos omitido los acentos en los comentarios por compatibilidad
let hola;
//Define las variables que necesites 
const peticion = new XMLHttpRequest ();
let fecha;
let eventosPasados=[] ;
let eventosProximos=[];
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
  
  for(i = 0;i<fechasOrdenadas.length;i++){
    let fe=fechasOrdenadas[i];
    if(new Date(fe.fecha) < fecha){
      eventosPasados.unshift(fe);
      // console.log(eventosPasados);
    }
    else{
      eventosProximos.unshift(fe);
      console.log(eventosProximos)
    }
  }
  document.getElementById('tituloEvento1').innerHTML = eventosProximos[0].nombre;
  document.getElementById('fechaEvento1').innerHTML = eventosProximos[0].fecha;
  document.getElementById('descripcionEvento1').innerHTML = eventosProximos[0].descripcion;
  document.getElementById('tituloEvento2').innerHTML = eventosProximos[1].nombre;
  document.getElementById('fechaEvento2').innerHTML = eventosProximos[1].fecha;
  document.getElementById('descripcionEvento2').innerHTML = eventosProximos[1].descripcion;
  document.getElementById('tituloEventoPasados1').innerHTML = eventosPasados[0].nombre;
  document.getElementById('fechaEventoPasados1').innerHTML = eventosPasados[0].fecha;
  document.getElementById('descripcionEventoPasados1').innerHTML = eventosPasados[0].descripcion;
  document.getElementById('tituloEventoPasados2').innerHTML = eventosPasados[1].nombre;
  document.getElementById('fechaEventoPasados2').innerHTML = eventosPasados[1].fecha;
  document.getElementById('descripcionEventoPasados2').innerHTML = eventosPasados[1].descripcion;

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


