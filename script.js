  


function contacto() {

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var comentario = document.getElementById("comentario").value;

    console.log ("Datos ingresados: ", nombre, apellido, email, telefono, comentario);

     /*
    if (nombre==""){
        document.getElementById("nombre").innerHTML = "el nombre es obligatorio";
    } else {
        if (apellido==""){
            document.getElementById("apellido").innerHTML = "el apellido es obligatorio";
        }else {
            if (email=="") {
                document.getElementById("email").innerHTML= "el email es obligatorio";
            } else {
                if (telefono=="") {
                    document.getElementById("telefono").innerHTML= "el teléfono es obligatorio";
                }
            }
        }
        }
        */

    alert ("Gracias! En breve nos contactaremos.");

}

