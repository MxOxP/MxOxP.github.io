//

$(".envia").click(()=>{
    
    let conteoBuenas = 0;
    $("#formulario .pregunta").each((i,e) => {

        //Buscar la respuesta marcada
        let input = e.getElementsByTagName("input");
        let tamano = e.getElementsByTagName("input").length;

        for(let s = 0; s < tamano ; s++){

            if ( input[s].value == "0" && input[s].checked) {
                conteoBuenas++;
            }
        }
    
    });

    console.log($(".modal-body").text("Respuestas correctas: " + conteoBuenas + " Tiempo: " + h1.textContent));
    $('#myModal').modal('show');
});

$("#elreseteo").click(()=>{

    $("#formulario .pregunta").each((i,e) => {
        let input = e.getElementsByTagName("input");
        for(let s = 0; s < 4 ; s++){
            input[s].checked = false;
        }   
    });

    $('#myModal').modal('hide');
    magia();
    reset();
});