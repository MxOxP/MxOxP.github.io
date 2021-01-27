function setDrawerFunction(actual){

     /*
     
     *CF
     Se crea una eqtiqueta <li>Poner aqui NOMBRE TEMA</li> por cada slide que se agregue y se coloca en la linea de abajo

     */
     $(".contentDrawer").html("<ul><li>Instrucciones</li><li>Poner aqui el nombre del tema</li></ul>");
    
    
    
     let numSlide=1; //8 mas
    $(".contentDrawer ul li").each(function(){
        //console.log($(this));
        //console.log(numSlide);
        let status = 0;
        switch(numSlide){
            case 1:
                status = window.parent.getEstatusSlide(1);
                if(status == 3){
                    $(this).click(function () {
                        window.parent.backPage(1);
                    });
                }
            break;
            case 2:
                status = window.parent.getEstatusSlide(2);
                if(status == 3){
                    $(this).click(function () {
                        window.parent.backPage(2);
                    });
                }
            break;
        }
        if(status == 3){
            $(this).addClass("visto");
        }else{
            $(this).addClass("no-visto");
        }

        if(actual == numSlide){
            $(this).removeClass("visto");
            $(this).addClass("actual");
        }
        numSlide++;
    });
}