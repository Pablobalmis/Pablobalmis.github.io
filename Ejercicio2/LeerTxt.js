setInterval(CargarFichero,5000);
function CargarFichero()
{
    LoadLDocA("Mensajes.txt", "txt");
}
function leerTXT(fichero)
{
    let lineas = fichero.split("/");
    let izquierda = document.querySelector(".izquierda");
    let derecha = document.querySelector(".derecha");
    let filaIzq = "";
    let filaDcha = "";
    for(let i = 0; i < lineas.length; i++)
    {
        if(i%2 == 0)
        {
            filaIzq += "<div class='mensaje'>" + lineas[i] + "</div>";
        }
        else
        {
            filaIzq += "<div class ='mensaje'>" + lineas[i] + "</div>";
        }
        izquierda.innerHTML = filaIzq;
        derecha.innerHTML = filaDcha;
    }
}