let accomplishments = document.querySelectorAll(".Accomplishment");
let skills = document.querySelectorAll(".skills");
let knowledges = document.querySelectorAll(".knowledge"); 
let responsibilities = document.querySelectorAll(".responsibilities");

let btnAccomplish = document.getElementById("btnaccomplishment");
let btnSkills = document.getElementById("btnskills");
let btnKnowledge = document.getElementById("btnknowledge");
let btnrespon = document.getElementById("btnrespon");

btnAccomplish.addEventListener('click',()=>{
    btnAccomplish.style.background = "white";
    btnSkills.style.background = "transparent";
    btnKnowledge.style.background = "transparent";
    btnrespon.style.background = "transparent";

    const len = accomplishments.length;
    for(let i=0;i<len;i++){
        responsibilities[i].style.display = "none";
        accomplishments[i].style.display = "block";
        knowledges[i].style.display = "none";
        skills[i].style.display = "none";
    }
});

btnSkills.addEventListener('click',()=>{
    btnSkills.style.background = "white";
    btnAccomplish.style.background = "transparent";
    btnKnowledge.style.background = "transparent";
    btnrespon.style.background = "transparent";
    
    const len = accomplishments.length;
    for(let i=0;i<len;i++){
        responsibilities[i].style.display = "none";
        accomplishments[i].style.display = "none";
        knowledges[i].style.display = "none";
        skills[i].style.display = "block";
      
    }
});

btnKnowledge.addEventListener('click',()=>{
    btnKnowledge.style.background = "white";
    btnAccomplish.style.background = "transparent";
    btnSkills.style.background = "transparent";
    btnrespon.style.background = "transparent";

    const len = accomplishments.length;
    for(let i=0;i<len;i++){
        accomplishments[i].style.display = "none";
        knowledges[i].style.display = "block";
        skills[i].style.display = "none";
        responsibilities[i].style.display = "none";
    }
});

btnrespon.addEventListener('click',()=>{
    btnrespon.style.background = "white";
    btnAccomplish.style.background = "transparent";
    btnKnowledge.style.background = "transparent";
    btnSkills.style.background = "transparent";

    const len = accomplishments.length;
    for(let i=0;i<len;i++){
        responsibilities[i].style.display = "block";
        knowledges[i].style.display = "none";
        skills[i].style.display = "none";
        accomplishments[i].style.display = "none";
    }
});






