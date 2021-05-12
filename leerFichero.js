LoadLDocA("libros.xml", "xml");
function PrecioMenor(libros)
{
    let menor = 0;
    let libroMasBarato;
    for(let i = 0; i < libros.length; i++)
    {
        if(libros[i].querySelector("precio").textContent < menor)
        {
            menor = libros[i].querySelector("precio").textContent; 
        }
    }
    return menor;
}
function leerXML(fichero)
{
    let tabla = document.querySelector(".tabla");
    let libros = fichero.querySelectorAll("libro");
    let libroMasBarato = PrecioMenor(libros);
    for(let i = 0; i < libros.length; i++)
    {
        console.log(libros[i].querySelector("ISBN").textContent);
        tabla.innerHTML += "<div class='fila'> <div class='columna'>" + libros[i].querySelector("ISBN").textContent + " " + "</div>" + "<div class='columna'>" + libros[i].querySelector("titulo").textContent + " " + "</div>" + "<div class='columna'>" + libros[i].querySelector("nivelProfundidad").textContent + " " + "</div>" + "<div class='columna'>" + libros[i].querySelector("autor").textContent + " " + "</div>" + "<div class='columna'>" + libros[i].querySelector("editorial").textContent + " " + "</div>" + "<div class='columna'>" + libros[i].querySelector("fechaPublicacion").textContent + " " + "</div>" + "<div class='columna'>" + libros[i].querySelector("paginaWeb").textContent + " " + "</div>";
        
        if(menor == libros[i].querySelector("precio").textContent)
        tabla.innerHTML += "<div class='columna barato'>" +  libros[i].querySelector("precio").textContent + "</div>" + "</div>";
        else
         tabla.innerHTML += "<div class='columna'>" +  libros[i].querySelector("precio").textContent + "</div>" + "</div>";
        
        
    }
}
