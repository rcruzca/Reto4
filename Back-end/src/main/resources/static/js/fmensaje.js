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
    
    url:"http://129.146.18.141:8080/api/Message/all",
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
   myTable += "<tr><th>Codigo</th><th>Mensaje</th></tr>";
   for(i=0;i<items.length;i++){
       myTable+="<tr>";
       myTable+="<td>"+items[i].idMessage+"</td>";
       myTable+="<td>"+items[i].messageText+"</td>";               
       myTable+="</tr>";
   }
   myTable +="</table>";
   $("#resultado").append(myTable);
}

function guardarInformacion(){

    $("#resultado").empty();

    let myData ={messageText:$("#messagetext").val(),client:{idClient:$("#clientId").val()},car:{idCar:$("#carId").val()}}
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {

            url          : 'http://129.146.18.141:8080/api/Message/save',
            type         : 'POST',
            data         :  dataToSend,
            datatype     :  "JSON",
            contentType  : 'application/json',
            success      :  function(respuesta){
                            //console.log(respuesta);
                            alert("Inserción exitosa");
                            },
            error       :   function(xhr,status){
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }

        }
    );
}


function editarInformacion() {
    
    let myData ={idMessage:$("#messageIdUpdate").val(),messageText:$("#messagetextUpdate").val()}
    let dataToSend = JSON.stringify(myData);
    
    $.ajax (
                {

                    url          : 'http://129.146.18.141:8080/api/Message/update',
                    type         : 'PUT',
                    data         :  dataToSend,
                    datatype     :  "JSON",
                    contentType  : 'application/json',                    
                    success      :  function(respuesta){
                                        //console.log(respuesta);
                                        console.log(dataToSend);
                                        alert("Actualizacion exitosa");
                                    },
                    error       :   function(xhr,status){
                        console.log(dataToSend);
                                        alert('Operacion no satisfactoria,'+ xhr.status );
                                    }

                }
            );

}

function borrarElemento(idElemento){
    let codigo = $("#messageIdDelete").val();
    

    $.ajax (
        {

            url          : 'http://129.146.18.141:8080/api/Message/' + codigo,
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

    let codigo = $("#messageIdSearch").val();

    $.ajax (
                {

                    url          : 'http://129.146.18.141:8080/api/Message/' + codigo ,
                    type         : 'GET',
                    dataType     : 'json',
                    success      :  function(respuesta){
                        $("#resultado").show();
                        $("#resultado").empty();
                        let myTable="<table>";
                        myTable += "<tr><th>Codigo</th><th>Mensaje</th></tr>";
   
       myTable+="<tr>";
       myTable+="<td>"+respuesta.idMessage+"</td>";
       myTable+="<td>"+respuesta.messageText+"</td>";               
       myTable+="</tr>";
   
   myTable +="</table>";
   $("#resultado").append(myTable);
  
                                    },
                    error       :   function(xhr,status){
                        console.log(respuesta);
                                        alert('Operacion no satisfactoria,'+ xhr.status );
                                    },



                }
            );
}