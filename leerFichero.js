LoadLDocA("libros.xml", "xml");
function leerXML(fichero)
{
    let tabla = document.querySelector(".tabla");
    let libros = fichero.querySelectorAll("titulo");
    for(let i = 0; i < libros.length; i++)
    {
        tabla.innerHTML += "<div class='fila'>" + libros[i].textContent + "</div>";
    }
}