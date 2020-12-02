var dialog;
function readDeviceOrientation() {
    if (isMobile()) {
        if (Math.abs(window.orientation) === 90) {
            // Landscape
            try{
                dialog.modal('hide');
            }catch(ex){

            }
        } else {
            // Portrait
            dialog = bootbox.dialog({
                title: "<span class='parpadea'>ALERTA</span>",
                message: "<p>Para tener una mejor experiencia coloca tu dispositivo en una posición horizontal.</p><div><img src='../resources/img/girar_dispositivo.gif' alt='rotacion' id='rotacion' class='img-fluid'></div>",
                size: 'sm',
                closeButton: false,
                show: false
            });
            dialog.modal('show');
        }
    }
}

function isMobile() {
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/IEMobile/i)) ||
        (navigator.userAgent.match(/Opera Mini/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
    );
}