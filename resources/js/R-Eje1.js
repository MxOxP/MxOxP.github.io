//$("#ans1").val();
const btnCal = document.getElementById("RevRes");
const btnatras = document.getElementById("atrs");
const btnhome = document.getElementById("homs");

$(document).ready(function () {
	window.parent.setEstatusSlide(20,1);      
});



btnCal.onclick = function(){
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
	window.parent.changePage(6,5,"");
}

function sig(calificacion){
	window.parent.setEstatusSlide(6,3);
	window.parent.setCalificacionSlide(6,calificacion);
	window.parent.changePage(6,7,"");
}

function home(){
	window.parent.changePage(6,1,"");
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
	if(r4 == 1){
		correctas++;
	}
	if(r5 == 3){
		correctas++;
	}
	if(r6 == 5){
		correctas++;
	}
	if(r7 == 4){
		correctas++;
	}
	

	let resultado = (correctas/7)*10;

	console.log(resultado);

	if(resultado >= 6){
		sig(resultado);
	}else{
		bootbox.alert("¡Buen intento!")
	}

}

function alerta(){
	bootbox.confirm({
    title: "¿Deseas confirmar?",
    message: "Calificar",
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
