function ReocgerDatos()
{
    let correo = document.getElementById("mail").value;
    let contraseña = document.getElementById("contraseña").value;
    ValidaDatos(correo, contraseña);
}
function ValidaDatos(correo, contraseña)
{
    let error = true;
    if(!correo.includes("@iesdoctorbalmis.com"))
    {
        alert("El correo introducido no es correcto");
        error = false;
    }
    if(contraseña.length != 8)
    {
        alert("La contraseña introducida es incorrecta");
        error = false;
    }
    if(error)
    {
        alert("Datos correctos");
    }
    
}