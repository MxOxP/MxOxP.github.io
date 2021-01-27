let ModoTitulo;
$(document).ready(function () {

    /*
   
   *CF
   Poter titulo del Header aqui

   */
    $(".margenHeader label").text("Titulo Header");


    $(window).scroll(function () {
        var desplazamientoActual = $(document).scrollTop();
        if (desplazamientoActual > 50) {
            $(".headWebR .logoCec").removeClass("d-none");
            $(".footerCentro div").removeClass("d-none");
            $(".headMobil .logoCec").addClass("d-none");
            $(".headMobil .logoMobility").addClass("d-none");
            if (ancho < 780 && ModoTitulo != 'corto') {


                /*
   
   *CF
   Poter titulo del Header aqui

   */
                $(".margenHeader label").html("Titulo Header");


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
            /*
               
               *CF
               Poter titulo del Header aqui "Titulo movíl"
            
               */
            $(".margenHeader label").html("Titulo Header");


        }
    });
    $(window).resize(function () {
        alto = $(window).height();
        ancho = $(window).width();
        if (ancho < 768) {
            desplazamientoActual = 0;
            $(".headWebR .logoCec").addClass("d-none");
            $(".footerCentro div").addClass("d-none");
        }
    });
});
