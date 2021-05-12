LoadLDocA("libros.xml", "xml");
function leerXML(fichero)
{
    let tabla = document.querySelector(".tabla");
    let libros = fichero.querySelectorAll("libro");
    for(let i = 0; i < libros.length; i++)
    {
        console.log(libros[i].querySelector("ISBN").textContent);
        tabla.innerHTML += "<div class='fila'> <div class='columna'>" + libros[i].querySelector("ISBN").textContent + " " + "</div>" + "<div class='columna'>" + libros[i].querySelector("titulo").textContent + " " + "</div>" + "<div class='columna'>" + libros[i].querySelector("nivelProfundidad").textContent + " " + "</div>" + "<div class='columna'>" + libros[i].querySelector("autor").textContent + " " + "</div>" + "<div class='columna'>" + libros[i].querySelector("editorial").textContent + " " + "</div>" + "<div class='columna'>" + libros[i].querySelector("fechaPublicacion").textContent + " " + "</div>" + "<div class='columna'>" + libros[i].querySelector("paginaWeb").textContent + " " + "</div>" + "<div class='columna'>" + libros[i].querySelector("precio").textContent + " " + "</div>" + "</div>";
    }
}
