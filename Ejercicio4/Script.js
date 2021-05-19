function ReocgerDatos()
{
    let usuario = document.getElementById("usuario").value;
    let contraseña2 = document.getElementById("contraseña2").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let correo = document.getElementById("mail").value;
    let edad = document.getElementById("edad").value;
    let telefono = document.getElementById("telefono").value;
    let contraseña = document.getElementById("contraseña").value;
    
    ValidaDatos(usuario, contraseña, contraseña2, nombre, apellidos, correo, edad, telefono);
}
function ValidaDatos(usuario, contraseña, contraseña2, nombre, apellidos, correo, edad, telefono)
{
    if(!UsuarioCorrecto(usuario) || !NombreCorrecto(nombre) || !ContraseñaCorrecta(contraseña, contraseña2) || !ApellidosCorrectos(apellidos) || !TelefonoCorrecto(telefono))
    {
        alert("Datos Incorrectos");
    }
    else
    {
        alert("Datos correctos");
    }
    
}
function UsuarioCorrecto(usuario)
{
    let REGEXP = /^[A-Z].*[0-9]$/;
    let correcto = false;
    if(usuario.match(REGEXP))
    {
        correcto = true
    }
    return correcto;
}
function NombreCorrecto(nombre)
{
    let REGEXP = /^[A-Z]/;
    let correcto = false;
    if(nombre.match(REGEXP))
    {
        correcto = true
    }
    return correcto;
}
function ContraseñaCorrecta(contraseña, contraseña2)
{
    let REGEXP = /^[0-9].*[A-Z]$/;
    let correcto = false;
    if(contraseña.match(REGEXP) && contraseña == contraseña2 && contraseña.length > 8)
    {
        correcto = true
    }
    return correcto;
}
function ApellidosCorrectos(apellidos)
{
    let REGEXP = /^[A-Z]/;
    let correcto = false;
    if(apellidos.match(REGEXP))
    {
        correcto = true
    }
    return correcto;
}
function TelefonoCorrecto(telefono)
{
    let REGEXP = /^[679]/;
    let correcto = false;
    if(apellidos.match(REGEXP))
    {
        correcto = true
    }
    return correcto;
}