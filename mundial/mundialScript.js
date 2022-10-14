//Comparar el 0, siempre debe tener la respuesta correcta

/*
let aleatorizador = [0,1,2,3];
pool.sort( () => { return Math.random() - 0.5 });
poolBasico.sort( () => { return Math.random() - 0.5 });
*/

function magia(){
    let aleatorizador = [0,1,2,3];
    pool.sort( () => { return Math.random() - 0.5 });
    poolBasico.sort( () => { return Math.random() - 0.5 });

    $("#formulario .pregunta").each((i,e) => {

    aleatorizador.sort( () => { return Math.random() - 0.5 });
    let input = e.getElementsByTagName("input");
    let objeto = e.getElementsByTagName("label");
    let tamano = e.getElementsByTagName("label").length;

        if( i == 9 ){
        e.getElementsByTagName("p")[0].innerHTML = poolBasico[0].preg;
        for(let s = 0; s < tamano ; s++){
            input[s].value = aleatorizador[s];
            objeto[s].textContent = poolBasico[0].res[aleatorizador[s]];
        }
        } else {
        e.getElementsByTagName("p")[0].innerHTML = pool[i].preg;
        let input = e.getElementsByTagName("input");
        let objeto = e.getElementsByTagName("label");
        let tamano = e.getElementsByTagName("label").length;
        for(let s = 0; s < tamano ; s++){
                input[s].value = aleatorizador[s];
                objeto[s].textContent = pool[i].res[aleatorizador[s]];
        } 
        }

    });

}

$( document ).ready(function() {

    magia();
    console.log(pool.length);
    /*
   $("#formulario .pregunta").each((i,e) => {

    aleatorizador.sort( () => { return Math.random() - 0.5 });
    let input = e.getElementsByTagName("input");
    let objeto = e.getElementsByTagName("label");
    let tamano = e.getElementsByTagName("label").length;

       if( i == 9 ){
        e.getElementsByTagName("p")[0].innerHTML = poolBasico[0].preg;
        for(let s = 0; s < tamano ; s++){
            input[s].value = aleatorizador[s];
            objeto[s].textContent = poolBasico[0].res[aleatorizador[s]];
        }
       } else {
        e.getElementsByTagName("p")[0].innerHTML = pool[i].preg;
        let input = e.getElementsByTagName("input");
        let objeto = e.getElementsByTagName("label");
        let tamano = e.getElementsByTagName("label").length;
        for(let s = 0; s < tamano ; s++){
             input[s].value = aleatorizador[s];
             objeto[s].textContent = pool[i].res[aleatorizador[s]];
        } 
       }

   });
   */

});

//---------------------------------------------------------------------------
//let h1 = document.getElementsByTagName('h1')[0];

//timer();