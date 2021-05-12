LoadLDocA("libros.xml", "xml");
function leerXML(fichero)
{
    let main = document.querySelector("main");
    main.innerText = fichero;
}