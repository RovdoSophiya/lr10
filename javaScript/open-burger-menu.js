document.addEventListener("DOMContentLoaded",function(){
  document.querySelector(".burger-menu-btn").addEventListener("click",function(){
     const menu=document.querySelector(".burger-menu")
     menu.classList.toggle("openBg");
     document.body.classList.toggle("no-scroll",menu.classList.contains("openBg"));
  })
})