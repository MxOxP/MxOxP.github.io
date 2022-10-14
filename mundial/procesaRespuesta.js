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

    //let h1 = document.getElementsByTagName('h1')[0];
    bootbox.alert("Respuestas correctas: " + conteoBuenas + " Tiempo: " + h1.textContent);
});