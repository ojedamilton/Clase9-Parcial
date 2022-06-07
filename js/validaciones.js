window.onload = function () {
    let error='';
    ///////////////////////////////////
    /// Validacion NOMBRE y APELLIDO // Texto - Debe tener más de 3 letras 
    ///////////////////////////////////
    // Variables Name
    let nombre = document.getElementById('nombre');
    let errorNombre = document.getElementById('errorNombre');
    // Focus Name
    nombre.onfocus=function () {
        nombre.style.borderColor= "#ced4da"; 
        errorNombre.style.display='none';
    }
    // Variables Apellido
    let apellido = document.getElementById('apellido');
    let errorApellido = document.getElementById('errorApellido');
    // Focus Apellido
    apellido.onfocus=function () {
       apellido.style.borderColor= "#ced4da"; 
       errorApellido.style.display='none';
    }    
    function validateLetterOb(letter,errorLetter,e){
        expr=/^([a-zA-Z])*$/;
        if(letter.value.length >= 3){
            if (!expr.test(letter.value)) {
                letter.style.borderColor= "red";
                errorLetter.style.display='block';
                errorLetter.innerHTML="Caracteres Invalidos";
                error = true;
            }
        }else{
            letter.style.borderColor= "red";
            errorLetter.style.display='block';
            errorLetter.innerHTML='Debe contener al menos 3 letras';
            error = true;
        }
    }

    ///////////////////////////////////
    /// Validacion CORREO ELECTRONICO// Debe tener un formato de email válido.
    ///////////////////////////////////
    let correo = document.getElementById('correo');
    let errorCorreo = document.getElementById('errorCorreo');
    // Focus Correo
    correo.onfocus=function () {
        correo.style.borderColor= "#ced4da"; 
        errorCorreo.style.display='none';
    }
    function validateEmail(e) {
        expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( !expr.test(correo.value)) {
            correo.style.borderColor= "red";
            errorCorreo.style.display='block';
            errorCorreo.innerHTML='Debe ser una direccion de correo valida';
            error = true;
        }
    }
    /////////////////////////
    /// Validacion EDAD   /// número entero mayor a 0 y menor a 100.
    /////////////////////////

    let edad = document.getElementById('edad');
    let errorEdad = document.getElementById('errorEdad');
    // Focus Edad
    edad.onfocus=function () {
        edad.style.borderColor= "#ced4da"; 
        errorEdad.style.display='none';
    }
    function validateEdad(e) {
        // ?= verificacion numeros 
        expr = /^[0-9]{1,2}$/;
        if (!expr.test(edad.value)) {
            edad.style.borderColor= "red";
            errorEdad.style.display='block';
            errorEdad.innerHTML='Debe ser numero entero entre 0 y 100';
            error = true;            
        }
    }

    /*         EVENTO SUBMIT           */
    var form = document.getElementById("formulario");
    form.addEventListener('submit', function (evento) {
        error=false;
        evento.preventDefault();
        validateLetterOb(nombre,errorNombre);
        validateLetterOb(apellido,errorApellido);
        validateEmail();
        validateEdad();
    })    
}    