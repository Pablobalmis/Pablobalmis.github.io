function LoadLDocA(fichero, tipo)
{
    let http = new XMLHttpRequest();
    http.open("GET", fichero, true);
    http.setRequestHeader("Content-type", "text/xml");
    http.send();
    http.addEventListener('load', (event) => {
        if(http.status == 200)
        {
            if(tipo == "xml")
            {
                leerXML(http.responseXML);
            }/*
            else
            {
                leerTXT(http.responseTXT);
            }*/
        }
    })
}

