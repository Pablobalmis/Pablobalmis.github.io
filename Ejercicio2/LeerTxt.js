LoadLDocA("Mensajes.txt", "txt");
function leerTXT(fichero)
{
    alert(fichero);
    let lineas = fichero.split("/");
    let izquierda = document.querySelector(".izquierda");
    let derecha = document.querySelector(".derecha");
    for(let i = 0; i < lineas.length; i++)
    {
        if(i%2 == 0)
        {
            izquierda.innerHTML(lineas[i]);
        }
        else
        {
            derecha.innerHTML(lineas[i]);
        }
    }
}