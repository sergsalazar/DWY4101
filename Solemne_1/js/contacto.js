$(document).ready(function(){
    $('form[name="formulariocontacto"]')
    .validate({
        rules:{
            txtNombre: {
                required:true
            },
            txtEmail : {
                required:true,
                email:true
            },
            txtNumero : {
                required:true
            },
            txtMensaje : {
                required:true
            },
        messages:{
            txtNombre:{
                required:'Nombre Obligatorio'
                
            },
            txtEmail:{
                required:'Email no valido'
            },

            txtNumero:{
                required:'Numero obligario'
            },

            txtMensaje:{
                required:'Escriba su mensaje'
            }
        }
        }
    })
})

$(document).ready(function(){
    const btnsend =$('#btnsend');
    btnsend.click(function(){
        alert('Su mensaje ha sido enviado con Exito');
            })
        });