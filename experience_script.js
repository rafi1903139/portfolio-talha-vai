
accordion = document.getElementsByClassName('accordion_item')
//console.log(accordion)
for(i = 0; i < accordion.length; i++)
{
    accordion[i].addEventListener('click', function(){
       
        for(j = 0; j < accordion.length; j++){
            if(this != accordion[j]){
                accordion[j].classList.remove('active')
            }
        }
        this.classList.toggle('active')
        console.log('accordion clicked')
    })
}


btnOpenModal = document.getElementsByClassName('btn-open-modal');
btnCloseModal = document.getElementsByClassName('btn-close-modal');

// show modal when the see details button is clicked
for(var btnOpen of btnOpenModal)
{
    
    btnOpen.addEventListener('click', ()=>{
        console.log();
        var container = btnOpen.parentNode.nextElementSibling;
        container.classList.add('show');
    });
}

// close modal when the close button is clicked
for(var btnClose of btnCloseModal)
{
    btnClose.addEventListener('click',()=>{
        var container = btnClose.parentNode.parentNode.parentNode;
        container.classList.remove('show');
    });
}