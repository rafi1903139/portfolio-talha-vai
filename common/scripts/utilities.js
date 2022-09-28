var navForIndex = `
<!--nav start--> <nav class=" navbar navbar-expand-lg navbar-light position-sticky top-0 fs-5 pb-0 " > <div class="container-fluid"> <a class="navbar-brand fs-5" href="./index.html" ><img src="./assets/logo/logo.png" alt="logo" /></a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" > <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup" > <div class="navbar-nav p-2"> <a class="nav-text nav-link active underline" aria-current="page" href="../../index.html" >Home</a > <a class="nav-text nav-link px-3" href="./views/experience/experience.html" >Experience</a > <a class="nav-link px-3" href="./views/education/education.html">Education</a> <a class="nav-link px-3" href="./views/skills/skills.html">Skills</a> <a class="nav-link px-3" href="./views/trainings/trainings.html" >Training</a > <a class="nav-link px-3" href="./views/portfolio/portfolio.html">Portfolio</a> <a class="nav-link px-3" href="#">Extra Curricular</a> <a class="nav-link px-3" href="./views/reference/refrence.html">Reference</a> <a class="nav-link px-3" href="./views/organization/organization.html" >Org. Affiliation</a > </div> </div> </div> </nav> <!--nav end-->
`;

var navForOther = `
<!--nav start--> <nav class=" navbar navbar-expand-lg navbar-light position-sticky top-0 fs-5 pb-0 " > <div class="container-fluid"> <a class="navbar-brand fs-5" href="./index.html" ><img src="../../assets/logo/logo.png" alt="logo" /></a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" > <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup" > <div class="navbar-nav p-2"> <a id="home" class="nav-text nav-link" aria-current="page" href="../../index.html" >Home</a > <a class="nav-text nav-link px-3" href="../../views/experience/experience.html">Experience</a> <a class="nav-link px-3" href="../../views/education/education.html">Education</a> <a class="nav-link px-3" href="../../views/skills/skills.html">Skills</a> <a class="nav-link px-3" href="../../views/trainings/trainings.html">Trainings</a> <a class="nav-link px-3" href="../../views/portfolio/portfolio.html">Portfolio</a> <a class="nav-link px-3" href="#">Extra Curricular</a> <a class="nav-link px-3" href="../../views/reference/refrence.html">Reference</a> <a class="nav-link px-3" href="../../views/organization/organization.html" >Organization</a > </div> </div> </div> </nav> <!--nav end-->
`;

var elmnt = document.querySelector('header');
var title = document.title;

if(document.title == 'Home')
{
  elmnt.innerHTML = navForIndex;
}
else 
{
  elmnt.innerHTML = navForOther;
}

var navItems = elmnt.getElementsByTagName('a');

for(var item of navItems)
{
  console.log(item.innerHTML, title);
  if(title.toLowerCase() == item.innerHTML.toLowerCase())
  {
    item.classList.add('active');
    item.classList.add('underline');
  }
}