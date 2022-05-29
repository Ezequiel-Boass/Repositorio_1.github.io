function Validar() {

    var nombre, email, telefono;

    nombre = document.getElementById("Nombre").value;
    email = document.getElementById("Correo").value;
    telefono = document.getElementById("Telefono").value;
    ExpReg= /\w+@\w+\.+[a-z]/;
 //------------------------------------------------------------

    //----------valido que no haya campos vacios---------------
    if (nombre === "" || email === "" || telefono === "") {
        alert("Hay campos vacios");
        return false;
    }

    //------valido el numero de telefono----------------------
    else if( isNaN(telefono)){
        alert("No es un numero de telefono valido");
        document.formulario.Telefono.focus();
        return false;
    }
    else if(telefono.length >= 12){
        alert("El telefono es muy largo");
        document.formulario.Telefono.focus();
        return false;
    }

    //---------------validar-correo---------------------------
    else if(!ExpReg.test(email)){
        alert("Correo invalido");
        document.formulario.Correo.focus();
        return false;
    }

}