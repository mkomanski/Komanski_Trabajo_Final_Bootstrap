
function contacto() {

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var comentario = document.getElementById("comentario").value;

    console.log ("Datos ingresados: ", nombre, apellido, email, telefono, comentario);

    alert ("Gracias! En breve nos contactaremos.");

}

