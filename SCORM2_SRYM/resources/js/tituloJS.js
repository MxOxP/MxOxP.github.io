/*para que el menú funcione se tiene que reemplzar la función abajo descrita en los slides posteriores - DIEGO BALCAZAR*/
//***********Este metodo va a funcionar practicamente solo para dispositivos moviles para posicionar
// los iconos del header al hacer scroll
let ModoTitulo;
$(document).ready(function () {
    $(window).scroll(function () {
        var desplazamientoActual = $(document).scrollTop();
        if (desplazamientoActual > 50) {
            $(".headWebR .logoCec").removeClass("d-none");
            $(".footerCentro div").removeClass("d-none");
            $(".headMobil .logoCec").addClass("d-none");
            $(".headMobil .logoMobility").addClass("d-none");
            if (ancho < 780 && ModoTitulo != 'corto') {
                // Editar nombre abreviado
                $(".margenHeader label").html("Evaluación: Procesos administrativos de SRyM");
                $("#longHeader").removeClass("longHeader");
                ModoTitulo = 'corto';
            }
        }
        if (ModoTitulo == 'corto' && desplazamientoActual <= 30) {
            $("#longHeader").addClass("longHeader");
            $(".footerCentro div").addClass("d-none");
            $(".headWebR .logoCec").addClass("d-none");
            $(".headMobil .logoCec").removeClass("d-none");
            $(".headMobil .logoMobility").removeClass("d-none");
            ModoTitulo = 'largo';
            $(".margenHeader label").html("Evaluación: Procesos administrativos de SRyM");

        }
    });
    $(window).resize(function () {
        alto = $(window).height();
        ancho = $(window).width();
        if (ancho < 768) {
            $(document).scrollTop(0);
            $(".headWebR .logoCec").addClass("d-none");
            $(".footerCentro div").addClass("d-none");
            $(".headMobil .logoCec").removeClass("d-none");
            $(".headMobil .logoMobility").removeClass("d-none");
        }else{
            $(".headWebR .logoCec").removeClass("d-none");
            $(".footerCentro div").removeClass("d-none");
            $(".headMobil .logoCec").addClass("d-none");
            $(".headMobil .logoMobility").addClass("d-none");
        }
    });
});