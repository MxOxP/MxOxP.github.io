var dialogRotation;
let backdrop;
function func_ShowRotation() {
	dialogRotation = new bootbox.dialog({
		title: "<span id='tituloRotacion' class='parpadea'>ALERTA</span>",
		message: "<p>Para tener una mejor experiencia coloca tu dispositivo en una posición horizontal.</p><div><img src='../resources/img/girar_dispositivo.gif' alt='rotacion' id='rotacion' class='img-fluid'></div>",
		size: 'sm',
		closeButton: false,
		show: false
	});
	dialogRotation.modal('show');
	$("#tituloRotacion").parent("h5").parent("div").parent("div").parent("div").parent("div").addClass("modal_rotacion");
	backdrop =document.getElementsByClassName("modal-backdrop")[0];
	backdrop.classList.add("backdrop_rotacion");
}
	
function func_HideRotation() {
	//$("#tituloRotacion").parent("h5").parent("div").parent("div").parent("div").parent("div").remove();
	$(".modal_rotacion").remove();
	$(".backdrop_rotacion").remove();
	console.log("EXISTE MODAL AUN: "+$('.modal-backdrop').length);
	if ($('.modal-backdrop').length <= 0) {
        $("body").removeClass("modal-open");
	}
}

$(document).ready(function() {
    if(RotationEnabled){
		$("head").append("<style>.modal_rotacion{z-index: 1500 !important;}.backdrop_rotacion{z-index: 1499 !important;}</style>");
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
    catch(o1){ 
	// alert(o1); 
	}
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
				return;
            } catch (err) {
               // alert(err + 'rot 1');
            }
        } if(orientacion === 90) {
            // Portrait
            func_ShowRotation();
			return;
        }
        if(orientacion === 270) {
            // Portrait 2
            func_ShowRotation();
			return;
        }      
     }
		
	}
	catch(o)
	{
		 // alert(o);
		}
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
};

function isMobile() {
	/*La línea 124 es la que identifica iPADS*/
	if (navigator.maxTouchPoints > 1) {return true;}
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

function avanceBarra(slide){
  var total = (100/39)*slide;
  $(".progressBar").css("width",total+"%");
}

function someFunction(output) {
    output = output.replace(/\s/g, ""); 
   return output;
}