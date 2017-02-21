//EFECTO PARALLAX DE LA PORTADA (IMAGEN DE FONDO)
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  });
})(jQuery); // end of jQuery name space

       
//IMAGENES (SECCIÓN HERRAMIENTAS)
$(".foo, .bar").smoove({
    offset  : '15%',
    // moveX is overridden to -200px for ".bar" object
    moveX   : '100px',
    moveY   : '100px',
  });