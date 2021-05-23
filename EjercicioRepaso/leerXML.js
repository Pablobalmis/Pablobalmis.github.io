LoadLDocA("libros.xml", "xml");
function leerXML(xml)
{
    let  div = document.querySelector(".tabla");
    let libros = xml.querySelectorAll("libro");
    for(let i = 0; i < libros.length; i++)
    {
        div.innerHTML += libros[i].querySelector("titulo").textContent;
    }
}