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
     ////////////////////////
    /// Validacion Pais  ///  Campo Requerido
    ////////////////////////
    let pais = document.getElementById('pais');
    let errorPais = document.getElementById('errorPais');
    // Focus Pais
    pais.onfocus=function () {
        pais.style.borderColor= "#ced4da"; 
        errorPais.style.display='none';
    } 
    function validatePais(e) {

        if (pais.value == 0) {
            pais.style.borderColor= "red";
            errorPais.style.display='block';
            errorPais.innerHTML='Debe seleccionar un pais';
            error = true;   
        }
        
    }

    ///////////////////////
    /// Validacion Sexo /// Campo Requerido
    ///////////////////////

    let sexo = document.querySelectorAll('[name="sexo[]"]');
    let errorSexo = document.getElementById('errorSexo');
    let CantCheck=0;
    function validateSexo(e) {

        for (let i = 0; i < sexo.length; i++) {
            if (!sexo[i].checked){
                CantCheck+=1;
            };
        }
        if (CantCheck == sexo.length) {
            errorSexo.style.display='block';
            errorSexo.innerHTML='Debe seleccionar un sexo';
            error = true;
        }else{
            errorSexo.style.display='none';
        }
    }

    ////////////////////////////////
    /// Validacion Temas Interes /// Campo Requerido
    ////////////////////////////////

    let tema = document.querySelectorAll('[name="interes[]"]');
    let errorTema = document.getElementById('errorTema');
    function validateTema(e) {    
        let cantCheckTema = 0;
        for (let i = 0; i < tema.length; i++) {
            if (!tema[i].checked){
                cantCheckTema+=1;
            };
        }
        if (cantCheckTema == tema.length) {
            errorTema.style.display='block';
            errorTema.innerHTML='Debe seleccionar un Tema de Interes'
            error = true;
        }else{
            errorTema.style.display='none';
        }
    }
    
     /////////////////////
    ///   M O D A L   /// 
    ////////////////////
     // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    /* ////////  EVENTO SUBMIT  ///////// */
    var form = document.getElementById("formulario");
    form.addEventListener('submit', function (evento) {
        error=false;
        evento.preventDefault();
        validateLetterOb(nombre,errorNombre);
        validateLetterOb(apellido,errorApellido);
        validateEmail();
        validateEdad();
        validatePais();
        validateSexo();
        validateTema();
        if(!error) modal.style.display = "block";
    })    
}    