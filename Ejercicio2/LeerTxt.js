LoadLDocA("Mensajes.txt", "txt");
function leerTXT(fichero)
{
    let lineas = fichero.split("/");
    let izquierda = document.querySelector(".izquierda");
    let derecha = document.querySelector(".derecha");
    for(let i = 0; i < lineas.length; i++)
    {
        setTimeout(2000);
        if(i%2 == 0)
        {
            izquierda.innerHTML += "<div class='mensaje'>" + lineas[i] + "</div> <br>";
        }
        else
        {
            derecha.innerHTML += "<div class ='mensaje'>" + lineas[i] + "</div> <br>";
        }
    }
}