function mostrar(){
    const accion=document.querySelector('input[name=accion]:checked').value
switch(accion){
    case 'crear': $("#crear").show();$("#actualizar,#eliminar,#ccodigo,#resultado").hide();break;
    case 'actualizar': $("#actualizar").show(); $("#crear,#eliminar,#ccodigo,#resultado").hide(); break;
    case 'eliminar': $("#eliminar").show(); $("#crear,#actualizar,#ccodigo,#resultado").hide(); break;
    case 'ctodos':$("#resultado").show() ;$("#crear,#eliminar,#actualizar,#ccodigo").hide();traerInformacion(); break;
    case 'ccodigo': $("#ccodigo").show(); $("#crear,#actualizar,#eliminar,#resultado").hide(); break;
}
}



function traerInformacion(formulario){
$.ajax({
    
    url:"http://129.146.18.141:8080/api/Reservation/all",
    type:"GET",
    datatype:"JSON",
    success:function(respuesta){
        pintarRespuesta(respuesta);
        
    }





});



}
function pintarRespuesta(items){

    $("#resultado").empty();

   //declarar variables js
   let myTable="<table>";
   myTable += "<tr><th>Codigo reserva</th><th>fecha inicio</th><th> fecha devolucion</th><th>codigo cliente</th><th>codigo vehiculo</th><th>estado</th><th>calificacion</th></tr>";
   for(i=0;i<items.length;i++){
       myTable+="<tr>";
       myTable+="<td>"+items[i].idReservation+"</td>";
       myTable+="<td>"+items[i].startDate+"</td>";
       myTable+="<td>"+items[i].devolutionDate+"</td>";
       myTable+="<td>"+items[i].client.idClient+"</td>";
       myTable+="<td>"+items[i].car.idCar+"</td>";
       myTable+="<td>"+items[i].status+"</td>"; 
       myTable+="<td>"+items[i].score+"</td>";                     
       myTable+="</tr>";
   }
   myTable +="</table>";
   $("#resultado").append(myTable);
}


function guardarInformacion(){

    $("#resultado").empty();

    let myData ={startDate:$("#startdate").val(),devolutionDate:$("#devolutiondate").val(),client:{idClient:$("#clientId").val()},car:{idCar:$("#carId").val()}}
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {

            url          : 'http://129.146.18.141:8080/api/Reservation/save',
            type         : 'POST',
            data         :  dataToSend,
            datatype     :  "JSON",
            contentType  : 'application/json',
            success      :  function(respuesta){
                            console.log(dataToSend);
                            alert("Inserción exitosa");
                            },
            error       :   function(xhr,status){
                console.log(dataToSend);
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }

        }
    );
}

function editarInformacion() {
    
    let myData ={idReservation:$("#reservationIdUpdate").val(),startDate:$("#startdateUpdate").val(),devolutionDate:$("#devolutiondateUpdate").val(),status:$("#statusUpdate").val()}
    let dataToSend = JSON.stringify(myData);
    
    $.ajax (
                {

                    url          : 'http://129.146.18.141:8080/api/Reservation/update',
                    type         : 'PUT',
                    data         :  dataToSend,
                    datatype     :  "JSON",
                    contentType  : 'application/json',                    
                    success      :  function(respuesta){
                                        console.log(dataToSend);
                                        alert("Actualizacion exitosa");
                                    },
                    error       :   function(xhr,status){
                                        alert('Operacion no satisfactoria,'+ xhr.status );
                                    }

                }
            );

}

function borrarElemento(idElemento){
    let codigo = $("#reservationIdDelete").val();
    

    $.ajax (
        {

            url          : 'http://129.146.18.141:8080/api/Reservation/' + codigo,
            type         : 'DELETE',
            datatype     :  "JSON",
            success      :  function(respuesta){
                                // console.log(respuesta);
                                alert("Borrado exitoso");
                            },
            error       :   function(xhr,status){                                
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }
        }
    );


}


function consultarId() {

    let codigo = $("#reservationIdSearch").val();

    $.ajax (
                {

                    url          : 'http://129.146.18.141:8080/api/Reservation/' + codigo ,
                    type         : 'GET',
                    dataType     : 'json',
                    success      :  function(respuesta){
                        $("#resultado").show();
                        $("#resultado").empty();
                        let myTable="<table>";
                        myTable += "<tr><th>Codigo reserva</th><th>fecha inicio</th><th> fecha devolucion</th><th>codigo cliente</th><th>codigo vehiculo</th><th>estado</th><th>calificacion</th></tr>"
   
       myTable+="<tr>";
       myTable+="<td>"+respuesta.idReservation+"</td>";
       myTable+="<td>"+respuesta.startDate+"</td>";
       myTable+="<td>"+respuesta.devolutionDate+"</td>";
       myTable+="<td>"+respuesta.client.idClient+"</td>";
       myTable+="<td>"+respuesta.car.idCar+"</td>"; 
       myTable+="<td>"+respuesta.status+"</td>"; 
       myTable+="<td>"+respuesta.score+"</td>";                
       myTable+="</tr>";
   
   myTable +="</table>";
   $("#resultado").append(myTable);
  
                                    },
                    error       :   function(xhr,status){
                        
                                        alert('Operacion no satisfactoria,'+ xhr.status );
                                    },



                }
            );
}
