//EFECTO PARALLAX DE LA PORTADA (IMAGEN DE FONDO)
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  });
})(jQuery); // end of jQuery name space

//GALERIA DE IMAGENES (SECCION "PROYECTOS")
 $(document).ready(function(){
      $('.slider').slider({full_width: true});
});
       
//IMAGENES (SECCIÓN HERRAMIENTAS)
$(".foo, .bar").smoove({
    offset  : '15%',
    // moveX is overridden to -200px for ".bar" object
    moveX   : '100px',
    moveY   : '100px',
  });