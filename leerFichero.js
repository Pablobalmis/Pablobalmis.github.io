LoadLDocA("libros.xml", "xml");
function leerXML(fichero)
{
    let main = document.querySelector("main");
    let libros = fichero.querySelectorAll("titulo");
    for(let i = 0; i < libros.length; i++)
    {
        main.innerHTML = main.innerHTML + "<p>" + libros[i].textContent + "</p>";
    }
}