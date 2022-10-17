function mostrargama(){
    const accion=document.querySelector('input[name=accion]:checked').value
switch(accion){
    case 'crear': $("#crear").show();$("#actualizar,#eliminar,#ccodigo,#resultado").hide();break;
    case 'actualizar': $("#actualizar").show(); $("#crear,#eliminar,#ccodigo,#resultado").hide(); break;
    case 'eliminar': $("#eliminar").show(); $("#crear,#actualizar,#ccodigo,#resultado").hide(); break;
    case 'ctodos':$("#resultado").show() ;$("#crear,#eliminar,#actualizar,#ccodigo").hide();traerInformaciongama(); break;
    case 'ccodigo': $("#ccodigo").show(); $("#crear,#actualizar,#eliminar,#resultado").hide(); break;
}
}


function traerInformaciongama(){
    $.ajax({
        
        url:"http://129.146.18.141:8080/api/Gama/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestagama(respuesta);
            
        }
    
    });

}

function pintarRespuestagama(items){

    $("#resultado").empty();

   //declarar variables js
   let myTable="<table>";
   myTable += "<tr><th>Codigo</th><th>nombre</th><th>descripción</th></tr>";
   for(i=0;i<items.length;i++){
       myTable+="<tr>";
       myTable+="<td>"+items[i].idGama+"</td>";
       myTable+="<td>"+items[i].name+"</td>";
       myTable+="<td>"+items[i].description+"</td>";               
       myTable+="</tr>";
   }
   myTable +="</table>";
   $("#resultado").append(myTable);
}
function guardarInformaciongama(){

    $("#resultado").empty();

    let myData ={name:$("#namegama").val(),description:$("#descriptiongama").val()}
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {

            url          : 'http://129.146.18.141:8080/api/Gama/save',
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
function editarInformaciongama() {
    
    let myData ={idGama:$("#gamaIdUpdate").val(),name:$("#namegamaUpdate").val(),description:$("#descriptiongamaUpdate").val()}
    let dataToSend = JSON.stringify(myData);
    
    $.ajax (
                {

                    url          : 'http://129.146.18.141:8080/api/Gama/update',
                    type         : 'PUT',
                    data         :  dataToSend,
                    datatype     :  "JSON",
                    contentType  : 'application/json',                    
                    success      :  function(respuesta){
                                        //console.log(respuesta);
                                        alert("Actualizacion exitosa");
                                    },
                    error       :   function(xhr,status){
                                        alert('Operacion no satisfactoria,'+ xhr.status );
                                    }

                }
            );

}
function borrarElementogama(){

    let codigo = $("#gamaIdDelete").val();
    

    $.ajax (
        {

            url          : 'http://129.146.18.141:8080/api/Gama/' + codigo,
            type         : 'DELETE',
            contentType  : 'application/json',
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


function consultarIdgama() {

    let codigo = $("#gamaIdSearch").val();

    $.ajax (
                {

                    url          : 'http://129.146.18.141:8080/api/Gama/' + codigo ,
                    type         : 'GET',
                    dataType     : 'json',
                    success:function(respuesta){
                        $("#resultado").show();
                        $("#resultado").empty();
                        let myTable="<table>";
                        myTable += "<tr><th>Codigo</th><th>nombre</th><th>descripción</th></tr>";
                        myTable+="<tr>";
                        myTable+="<td>"+respuesta.idGama+"</td>";
                        myTable+="<td>"+respuesta.name+"</td>";
                        myTable+="<td>"+respuesta.description+"</td>";               
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

function mostrarCar(){
    const accion=document.querySelector('input[name=accionCar]:checked').value
switch(accion){
    case 'crear': $("#crearCar").show();$("#actualizarCar,#eliminarCar,#ccodigoCar,#resultado").hide();break;
    case 'actualizar': $("#actualizarCar").show(); $("#crearCar,#eliminarCar,#ccodigoCar,#resultado").hide(); break;
    case 'eliminar': $("#eliminarCar").show(); $("#crearCar,#actualizarCar,#ccodigoCar,#resultado").hide(); break;
    case 'ctodos':$("#resultado").show() ;$("#crearCar,#eliminarCar,#actualizarCar,#ccodigoCar").hide();traerInformacion(); break;
    case 'ccodigo': $("#ccodigoCar").show(); $("#crearCar,#actualizarCar,#eliminarCar,#resultado").hide(); break;
}
}


function traerInformacion(){
    $.ajax({
        
        url:"http://129.146.18.141:8080/api/Car/all",
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
   myTable += "<tr><th>Codigo</th><th>Nombre</th><th>marca</th> <th> modelo</th><th>descripcion</th></tr>";
   for(i=0;i<items.length;i++){
       myTable+="<tr>";
       myTable+="<td>"+items[i].idCar+"</td>"; 
       myTable+="<td>"+items[i].name+"</td>";
       myTable+="<td>"+items[i].brand+"</td>";
       myTable+="<td>"+items[i].year+"</td>";
       myTable+="<td>"+items[i].description+"</td>";                 
       myTable+="</tr>";
   }
   myTable +="</table>";
   $("#resultado").append(myTable);
}

function guardarInformacion(){

    $("#resultado").empty();

    let myData ={name:$("#name").val(),brand:$("#brand").val(),year:$("#year").val(),description:$("#description").val(), gama:{idGama:$("#gamaid").val()}}
    let dataToSend = JSON.stringify(myData);
    
    $.ajax (
        {

            url          : 'http://129.146.18.141:8080/api/Car/save',
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
    
    let myData ={idCar:$("#carIdUpdate").val(),name:$("#nameUpdate").val(),brand:$("#brandUpdate").val(),year:$("#yearUpdate").val(),description:$("#descriptionUpdate").val()}
    let dataToSend = JSON.stringify(myData);
    
    $.ajax (
                {

                    url          : 'http://129.146.18.141:8080/api/Car/update',
                    type         : 'PUT',
                    data         :  dataToSend,
                    datatype     :  "JSON",
                    contentType  : 'application/json',                    
                    success      :  function(respuesta){
                                        console.log(respuesta);
                                        alert("Actualizacion exitosa");
                                    },
                    error       :   function(xhr,status){
                                        alert('Operacion no satisfactoria,'+ xhr.status );
                                    }

                }
            );

}

function borrarElemento(idElemento){
    let codigo = $("#carIdDelete").val();
    

    $.ajax (
        {

            url          : 'http://129.146.18.141:8080/api/Car/' + codigo,
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

    let codigo = $("#carIdSearch").val();

    $.ajax (
                {

                    url          : 'http://129.146.18.141:8080/api/Car/' + codigo ,
                    type         : 'GET',
                    dataType     : 'json',
                    success      :  function(respuesta){
                        $("#resultado").show();
                        $("#resultado").empty();
                        let myTable="<table>";
   myTable += "<tr><th>Codigo</th><th>Nombre</th><th>marca</th> <th> modelo</th><th>descripcion</th></tr>";
   
       myTable+="<tr>";
       myTable+="<td>"+respuesta.idCar+"</td>"; 
       myTable+="<td>"+respuesta.name+"</td>";
       myTable+="<td>"+respuesta.brand+"</td>";
       myTable+="<td>"+respuesta.year+"</td>";
       myTable+="<td>"+respuesta.description+"</td>";                 
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