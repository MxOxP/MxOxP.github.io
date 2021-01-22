var dialogRotation;
function func_ShowRotation() {dialogRotation.modal('show');}
function func_HideRotation() {dialogRotation.modal('hide');}
//$(".modal-backdrop").hide();


$(document).ready(function() {
	
    dialogRotation = bootbox.dialog({
						title: "<span class='parpadea' id='jsinject'>ALERTA</span><script>$('#jsinject').parent().parent().parent().parent().parent().css('z-index','1051');</script>",
						message: "<p>Para tener una mejor experiencia coloca tu dispositivo en una posición horizontal.</p><div><img src='../resources/img/girar_dispositivo.gif' alt='rotacion' id='rotacion' class='img-fluid'></div>",
						size: 'sm',
						closeButton: false,
						show: false
					});
    
    if(RotationEnabled){
		if(isMobile()){startOrientation();}
	}
    
});

window.onorientationchange = function(event) { 
    if(RotationEnabled) {
		var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
		if(isMobile())
		{
			if(is_firefox) {mozilaRotation(event.target.screen.orientation.angle);}
			else {allbrowserOrientation();}
		}
	}
};



function iOSRotation()
{
	 var mql = window.matchMedia("(orientation: portrait)");
     //IF = potrait iOS | ELSE = Landscape iOS
     if(mql.matches) { func_ShowRotation(); } 
     else {func_HideRotation();}
     return;
}

function startOrientation() {
	var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
	
	try {	
	    switch(orientation)
		{
			case "portrait-primary":
				func_ShowRotation();
				break;
			case "landscape-primary":
				func_HideRotation();
			break;
			default:
				allbrowserOrientation();
			break
		}
		return;
    } 
    catch(o1){ alert(o1); }
};

function mozilaRotation(orientacion)
{
    try
	{
		
		if (isMobile()) {
            if (orientacion === 0) {
            // Landscape
            try {
                func_HideRotation();
            } catch (err) {
                alert(err + 'rot 1');
            }
        } if(orientacion === 90) {
            // Portrait
            func_ShowRotation();
        }
        if(orientacion === 270) {
            // Portrait 2
            func_ShowRotation();
        }      
     }
		
	}
	catch(o)
	{alert(o);}
};



function allbrowserOrientation()
{
	if (Math.abs(window.orientation) === 90) {
		// Landscape
		try {func_HideRotation();} catch (err) {}
        return;
		//
	}
    if (Math.abs(window.orientation) === 270) {
		// Landscape
		try {func_HideRotation();} catch (err) {}
        return;
		//
	}
    else {
		// Portrait
        func_ShowRotation();
        return;
	}
}






function isMobile() {
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        //(navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/IEMobile/i)) ||
        (navigator.userAgent.match(/Opera Mini/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
    );
}
function avanceBarra(slide){
  var total = (100/39)*slide;
  $(".progressBar").css("width",total+"%");
}
function someFunction(output) {
    output = output.replace(/\s/g, ""); 
   return output;
}