//$("#ans1").val();
const btnres = document.getElementById("schanges");
const btnatras = document.getElementById("atrs");
const btnhome = document.getElementById("homs");

$(document).ready(function () {
	window.parent.setEstatusSlide(20,1);      
});



btnres.onclick = function(){
	let confirm = alerta();
}

btnatras.onclick = function(){
	atras();
}

btnhome.onclick = function(){
	home();
}
//_---------------------------------------------------
function atras(){
	window.parent.changePage(20,19,"");
}

function sig(calificacion){
	window.parent.setEstatusSlide(20,3);
	window.parent.setCalificacionSlide(20,calificacion);
	window.parent.changePage(20,21,"");
}

function home(){
	window.parent.changePage(20,5,"");
}

//-----------------------------------------------------

function revision(){
	//document.getElementById("ans1");
	let r1 = $("select[id='ans1']").val();
	let r2 = $("select[id='ans2']").val();
	let r3 = $("select[id='ans3']").val();
	let r4 = $("select[id='ans4']").val();
	let r5 = $("select[id='ans5']").val();
	let r6 = $("select[id='ans6']").val();
	let r7 = $("select[id='ans7']").val();
	let r8 = $("select[id='ans8']").val();
	let r9 = $("select[id='ans9']").val();

	let correctas = 0;
	if(r1 == 2){
		correctas++;
	}
	if(r2 == 6){
		correctas++;
	}
	if(r3 == 7){
		correctas++;
	}
	if(r4 == 9){
		correctas++;
	}
	if(r5 == 1){
		correctas++;
	}
	if(r6 == 3){
		correctas++;
	}
	if(r7 == 5){
		correctas++;
	}
	if(r8 == 4){
		correctas++;
	}
	if(r9 == 8){
		correctas++;
	}

	let resultado = (correctas/9)*10;

	console.log(resultado);

	if(resultado >= 6){
		sig(resultado);
	}else{
		bootbox.alert("¡Ups, no has logrado aprobar!")
	}

}

function alerta(){
	bootbox.confirm({
    title: "¿Terminaste?",
    message: "Una vez aceptado tus resultados seran registrados.",
    buttons: {
        cancel: {
            label: '<i class="fa fa-times"></i> Cancelar'
        },
        confirm: {
            label: '<i class="fa fa-check"></i> Confirmar'
        }
    },
    callback: function (result) {
        console.log('This was logged in the callback: ' + result);
        if(result == true){
        	revision();
        }
    }
});

}
