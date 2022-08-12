container = document.getElementById("popupwindow")
btnOpen = document.getElementById("open")
btnClose = document.getElementById("close")

btnOpen.addEventListener('click', () => {
    console.log("button clicked")
    container.classList.add('show')
   
})

btnClose.addEventListener('click', () => {
    container.classList.remove('show')
})

accordion = document.getElementsByClassName('accordion_item')
console.log(accordion)
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