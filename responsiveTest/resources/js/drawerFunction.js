function setDrawerFunction(actual){

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
            case 3:
                status = window.parent.getEstatusSlide(3);
                if(status == 3){
                    $(this).click(function () {
                        window.parent.backPage(3);
                    });
                }
            break;
            case 4:
                status = window.parent.getEstatusSlide(4);
                if(status == 3){
                    $(this).click(function () {
                        window.parent.backPage(4);
                    });
                }
            break;
            case 5:
                status = window.parent.getEstatusSlide(10);
                if(status == 3){
                    $(this).click(function () {
                        window.parent.backPage(10);
                    });
                }
            break;
            case 6:
                status = window.parent.getEstatusSlide(11);
                if(status == 3){
                    $(this).click(function () {
                        window.parent.backPage(11);
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