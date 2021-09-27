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
  function generarTarjetaProximos(){
    for(i=0;i<2;i++){
    var catDiv = document.createElement("div");
    let cuerpo = document.getElementById("proximos");
    let cartaDiv = document.createElement("div");
    cuerpo.appendChild(catDiv); 
    catDiv.setAttribute("class","card");
    catDiv.setAttribute("style","width: 30rem; margin: 2.25rem");
    catDiv.appendChild(cartaDiv);
    cartaDiv.setAttribute("class","card-body");
    let titulo = document.createElement("h3");
    titulo.setAttribute("class","card-title");
    let vinculo = document.createElement("a");
    vinculo.setAttribute("href","");
    titulo.appendChild(vinculo);
    cartaDiv.appendChild(titulo);
    let cuerpoCarta = document.createElement("p");
    cartaDiv.appendChild(cuerpoCarta);
    vinculo.innerHTML=eventosProximos[i].nombre;
    cuerpoCarta.setAttribute("class","text-secondary")
    cuerpoCarta.innerHTML = eventosProximos[i].fecha
    let descripcion = document.createElement("p");
    cuerpoCarta.appendChild(descripcion);
    descripcion.setAttribute("class","text-dark")
    descripcion.innerHTML = eventosProximos[i].descripcion;
    
  }  
}

function generarTarjetaPasados(){
  for(i=0;i<2;i++){
  var catDiv = document.createElement("div");
  let cuerpo = document.getElementById("pasados");
  let cartaDiv = document.createElement("div");
  cuerpo.appendChild(catDiv); 
  catDiv.setAttribute("class","card");
  catDiv.setAttribute("style","width: 30rem; margin: 2.25rem");
  catDiv.appendChild(cartaDiv);
  cartaDiv.setAttribute("class","card-body");
  let titulo = document.createElement("h3");
  titulo.setAttribute("class","card-title");
  let vinculo = document.createElement("a");
  vinculo.setAttribute("href","");
  titulo.appendChild(vinculo);
  cartaDiv.appendChild(titulo);
  let cuerpoCarta = document.createElement("p");
  cartaDiv.appendChild(cuerpoCarta);
  vinculo.innerHTML=eventosPasados[i].nombre;
  cuerpoCarta.setAttribute("class","text-secondary")
  cuerpoCarta.innerHTML = eventosPasados[i].fecha
  let descripcion = document.createElement("p");
  cuerpoCarta.appendChild(descripcion);
  descripcion.setAttribute("class","text-dark")
  descripcion.innerHTML = eventosPasados[i].descripcion;
  
   
  
}  
}
generarTarjetaProximos();
generarTarjetaPasados();
  /* document.getElementById('tituloEvento1').innerHTML = eventosProximos[1].nombre;
  document.getElementById('fechaEvento1').innerHTML = eventosProximos[1].fecha;
  document.getElementById('descripcionEvento1').innerHTML = eventosProximos[1].descripcion;
  document.getElementById('tituloEvento2').innerHTML = eventosProximos[2].nombre;
  document.getElementById('fechaEvento2').innerHTML = eventosProximos[2].fecha;
  document.getElementById('descripcionEvento2').innerHTML = eventosProximos[2].descripcion;
  document.getElementById('tituloEventoPasados1').innerHTML = eventosPasados[0].nombre;
  document.getElementById('fechaEventoPasados1').innerHTML = eventosPasados[0].fecha;
  document.getElementById('descripcionEventoPasados1').innerHTML = eventosPasados[0].descripcion;
  document.getElementById('tituloEventoPasados2').innerHTML = eventosPasados[1].nombre;
  document.getElementById('fechaEventoPasados2').innerHTML = eventosPasados[1].fecha;
  document.getElementById('descripcionEventoPasados2').innerHTML = eventosPasados[1].descripcion; */

});
console.log(peticion);



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


