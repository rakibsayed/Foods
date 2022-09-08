document.querySelector(".menu").addEventListener("click" , function(){
    document.querySelectorAll('.target').forEach(function(item){
        item.classList.toggle("change")
    })
})


const icons = document.querySelectorAll(".section-1-icons i");
let i = 0;

setInterval(()=>{
    i++;
    const icon = document.querySelector(".section-1-icons .show-icon")
    icon.classList.remove("show-icon")
    if (i < icons.length){ 
        icon.nextElementSibling.classList.add("show-icon")     
    }

    else{
        i = 0
        icons[0].classList.add("show-icon")
    }
  

},4000)
