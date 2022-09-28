function includeHTML()
{
  var elmnt = document.querySelector('header');
  var file = elmnt.getAttribute('include-html');

  if(file)
  {
    // make an http request
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4)
        {
            if(this.status == 200)
            {
                elmnt.innerHTML = this.responseText;
            }
            if(this.status == 404)
            {
                elmnt.innerHTML = "file not found";
            }

            // remove the attribute and call the function once more
            elmnt.removeAttribute("include-html");
            includeHTML();
        }
    }
    xhttp.open("GET", file, true);
    xhttp.send();

    return;

  }

  
}

includeHTML();