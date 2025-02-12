
const logo=$("#imagen")
const padre=$(".negro")
const seccionA=$(".seccion1")
const boton=$(".boton")

seccionA.animate({marginRight:"-270%"},2000)
logo.animate({marginTop: "-100%"},2000)

setTimeout(
    function(){
        padre.css("zIndex","1")
    },3000
)
boton.click(function(){
    window.location.href='login.html';
})

