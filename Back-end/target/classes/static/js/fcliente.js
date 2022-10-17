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
    
    url:"http://129.146.18.141:8080/api/Client/all",
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
   myTable += "<tr><th>Codigo</th><th> Correo</th><th> Contraseña</th><th>Nombre</th><th>Edad</th></tr>";
   for(i=0;i<items.length;i++){
       myTable+="<tr>";
       myTable+="<td>"+items[i].idClient+"</td>";
       myTable+="<td>"+items[i].email+"</td>";
       myTable+="<td>"+items[i].password+"</td>";
       myTable+="<td>"+items[i].name+"</td>";
       myTable+="<td>"+items[i].age+"</td>";                
       myTable+="</tr>";
   }
   myTable +="</table>";
   $("#resultado").append(myTable);
}

function guardarInformacion(){

    $("#resultado").empty();

    let myData ={name:$("#name").val(),email:$("#email").val(),password:$("#password").val(),age:$("#age").val()}
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {

            url          : 'http://129.146.18.141:8080/api/Client/save',
            type         : 'POST',
            data         :  dataToSend,
            datatype     :  "JSON",
            contentType  : 'application/json',
            success      :  function(respuesta){
                            console.log(myData);
                            alert("Inserción exitosa");
                            },
            error       :   function(xhr,status){
                console.log(myData);
                console.log(dataToSend);
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }

        }
    );
}


function editarInformacion() {
    
    let myData ={idClient:$("#clientIdUpdate").val(),name:$("#nameUpdate").val(),email:$("#emailUpdate").val(),password:$("#passwordUpdate").val(),age:$("#ageUpdate").val()}
    let dataToSend = JSON.stringify(myData);
    
    $.ajax (
                {

                    url          : 'http://129.146.18.141:8080/api/Client/update',
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
    let codigo = $("#clientIdDelete").val();
    

    $.ajax (
        {

            url          : 'http://129.146.18.141:8080/api/Client/' + codigo,
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

    let codigo = $("#clientIdSearch").val();

    $.ajax (
                {

                    url          : 'http://129.146.18.141:8080/api/Client/' + codigo ,
                    type         : 'GET',
                    dataType     : 'json',
                    success      :  function(respuesta){
                        $("#resultado").show();
                        $("#resultado").empty();
                        let myTable="<table>";
                        myTable += "<tr><th>Codigo</th><th> Correo</th><th> Contraseña</th><th>Nombre</th><th>Edad</th></tr>";
                        
                            myTable+="<tr>";
                            myTable+="<td>"+respuesta.idClient+"</td>";
                            myTable+="<td>"+respuesta.email+"</td>";
                            myTable+="<td>"+respuesta.password+"</td>";
                            myTable+="<td>"+respuesta.name+"</td>";
                            myTable+="<td>"+respuesta.age+"</td>";                
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