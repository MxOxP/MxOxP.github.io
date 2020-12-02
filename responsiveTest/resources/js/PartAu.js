$(document).ready(function () {
    window.parent.setEstatusSlide(20,1);  
    $("#schanges").click(function(){
        alerta();
    });  
    $("#atrs").click(function(){
        atras();
    }); 
    $("#homs").click(function(){
        home();
    });   
});

//_---------------------------------------------------
function atras(){
	window.parent.changePage(27,26,"");
}

function sig(calificacion){
	window.parent.setEstatusSlide(27,3);
	window.parent.setCalificacionSlide(27,calificacion);
	window.parent.changePage(27,5,"");
}

function home(){
	window.parent.setEstatusSlide(27,3);
	window.parent.changePage(27,5,"");
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
	if(r4 == 8){
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
	

	let resultado = (correctas/8)*10;

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
