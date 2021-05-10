function LoadLDoc(fichero, tipo)
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
                return leerXML(http.responseXML);
            }/*
            else
            {
                leerTXT(http.responseTXT);
            }*/
        }
    })
}

function leerXMl()
{
if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest();
  }
else
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET",dname,false);
xhttp.send();
return xhttp.responseXML;
}