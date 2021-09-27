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
  function generarTarjeta(){
    for(i=0;i<eventosPasados.length;i++){
    var catDiv = document.createElement("div");
    let cuerpo = document.getElementById("pasados");
    let cartaDiv = document.createElement("div");
    cuerpo.appendChild(catDiv); 
    catDiv.setAttribute("class","card");
    catDiv.setAttribute("style","width: 85rem; margin: 2.25rem");
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
    cuerpoCarta.innerHTML = eventosPasados[i].fecha+" - "+eventosPasados[i].lugar;
    let descripcion = document.createElement("p");
    cuerpoCarta.appendChild(descripcion);
    descripcion.setAttribute("class","text-dark")
    descripcion.innerHTML = eventosPasados[i].descripcion;
    let invitados = document.createElement("p");
    cuerpoCarta.appendChild(invitados);
    invitados.setAttribute("class","text-info")
    invitados.innerHTML = "invitados: "+eventosPasados[i].invitados;
     
    
  }  
}
generarTarjeta();
});
peticion.open('GET','info.json')  
peticion.send();

  //Carga los datos que estan en el JSON (info.json) usando AJAX

  //Guarda el resultado en variables

  //Selecciona los eventos que sean anteriores a la fecha actual del JSON

  //Ordena los eventos segun la fecha (los mas recientes primero)

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado


