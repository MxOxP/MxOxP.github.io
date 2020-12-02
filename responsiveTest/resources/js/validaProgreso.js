let numSlide=1; //8 mas
            $(".contentDrawer ul li").each(function(){
                let status = 0;
                switch(numSlide){
                    case 1:
                        status = window.parent.getEstatusSlide(2);
                        if(status == 3){
                            $(this).click(function () {
                                window.parent.backPage(2);
                            });
                        }
                    break;
                    case 2:
                        status = window.parent.getEstatusSlide(3);
                        if(status == 3){
                            $(this).click(function () {
                                window.parent.backPage(3);
                            });
                        }
                    break;
                    case 3:
                        status = window.parent.getEstatusSlide(4);
                        if(status == 3){
                            $(this).click(function () {
                                window.parent.backPage(4);
                            });
                        }
                    break;
                    case 4:
                        status = window.parent.getEstatusSlide(5);
                        if(status == 3){
                            $(this).click(function () {
                                window.parent.backPage(5);
                            });
                        }
                    break;
                    case 5:
                        status = window.parent.getEstatusSlide(6);
                        if(status == 3){
                            $(this).click(function () {
                                window.parent.backPage(6);
                            });
                        }
                    break;
                    case 6:
                        status = window.parent.getEstatusSlide(7);
                        if(status == 3){
                            $(this).click(function () {
                                window.parent.backPage(7);
                            });
                        }
                    break;
                    case 7:
                        status = window.parent.getEstatusSlide(8);
                        if(status == 3){
                            $(this).click(function () {
                                window.parent.backPage(8);
                            });
                        }
                    break;
                    case 8:
                        status = window.parent.getEstatusSlide(26);
                        if(status == 3){
                            $(this).click(function () {
                                window.parent.backPage(26);
                            });
                        }
                    break;
                }
                if(status == 3){
                    $(this).addClass("visto");
                }
                numSlide++;
            });




