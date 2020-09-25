var x = 1;
var y = 0;
function TiraDadO() {
    var die1 = document.getElementById("die1");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var pos = d1 + y;
    die1.innerHTML = d1;
    status.innerHTML = "Tu posicion " + pos + ".";
    tiro.innerHTML = "Turno " + x + ".";
    x = x + 1;
    y = pos;
    if (pos > 30) {
        alert("Has Ganado!!!");
        y = 0;

    }
   else{
    var X = posicionImagen.x + JSON_POSICION[pos].x;
    var Y = posicionImagen.y + JSON_POSICION[pos].y;
    $('#ImaFich').offset({ top: +X, left: +Y});
         alert(X);

    
    //var imagen = $('#MapaT');
   // var posicionImagen = imagen.getBoundingClientRect();
    //var Ficha1 = document.getElementById('Ficha1');
    //alert(posicionImagen.top);


    var JSON_POSICION;
    readTextFile("../../slides/PosicionFicha.json", function (text) {
        JSON_POSICION = JSON.parse(text);
    })

 

    //funcion para posicionar imgFicha

   // $('#ImaFich').offset({ top: 50, left: 80 });
  // var imgFicha = $('#IdImgFicha'); 
   // imgFicha.css('position', 'absolute');
    //imgFicha.css('left', 80); //Posicion X nueva
    //imgFicha.css('top', 350); //Posición Y nueva
    
   }

}

    $("#BPrueba").click(function () {
        alert("funciona");
        $('#ImaFich').offset({ top: 150, left: 180 });
    });





///                      original        ///////////////


var x = 1;
var y = 0;
function TiraDadO() {
    var die1 = document.getElementById("die1");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var pos = d1 + y;
    die1.innerHTML = d1;
    status.innerHTML = "Tu posicion " + pos + ".";
    tiro.innerHTML = "Tu numero de tiro es " + x + ".";
    x = x + 1;
    y = pos;
    if (pos > 30) {
        alert("Has Ganado!!!");
        y = 0;

    }

              /* inicia  funcion movimiento de*/


    var imagen = document.getElementById('MapaT');
    var posicionImagen = imagen.getBoundingClientRect();
     //alert(posicionImagen.top);


    var JSON_POSICION;
    readTextFile("../../complement.json", function (text) {
        JSON_POSICION = JSON.parse(text);
    })

    var X = posicionImagen.x + JSON_POSICION[pos].x;
     var Y = posicionImagen.y + JSON_POSICION[pos].y;
     alert(posicionImagen.x);
    //funcion para posicionar imgFicha

    var imgFicha = $('#ImaFich');
    imgFicha.css('position', 'absolute');
    imgFicha.css('left', X); //Posicion X nueva
    imgFicha.css('top', Y); //Posición Y nueva

}



//----------------- js correcto 23092020-----------------//




var NumTiro = 1;
var PosCasilla = 0;
function TiraDadO() {
   var die1 = $("#die1");
    var status = $("#status");



    var die1 = document.getElementById("die1");
   var status = document.getElementById("status");

    var d1 = Math.floor(Math.random() * 6) + 1;
    var pos = d1 + PosCasilla;
    die1.innerHTML = d1;
    status.innerHTML = "Posicion " + pos + ".";
    tiro.innerHTML = "Turno: " + NumTiro + ".";
    NumTiro = NumTiro + 1;
    PosCasilla = pos;
    if (pos > 30) {
        alert("Has Ganado!!!");
        PosCasilla = 0;
    }



    /* inicia  funcion movimiento de*/
    //var imagen = $("#MapaT");
    ///var imagen = document.getElementById("MapaT");
    var posicionImagen = $("#MapaT").get(0).getBoundingClientRect();
    // alert(posicionImagen.left);
    //------ alert ("Left: " + posicionImagen.left + ", Top: " + posicionImagen.top);

    // cumple con formato
    // var div = document.getElementById("MapaT");
    // var rect = div.getBoundingClientRect();

    //muestra px de la imagen
    x = posicionImagen.left;
    y = posicionImagen.top;
    //-- alert ("Left guardado en x: " + x + ", Top guardado en y: " + y);




    var JSON_POSICION;
    readTextFile("../../slides/PosicionFicha.json", function (text) {
        JSON_POSICION = JSON.parse(text);
        //alert(JSON_POSICION);


    ///alert ("Left: " + x + ", Top: " + y);
    // alert ("Left json: " +   );
    //console.log(posicionImagen.x + JSON_POSICION[pos].x);
   

    var X = JSON_POSICION[pos].x;
    var Y = JSON_POSICION[pos].y;
    //alert ("Left: " + X + ", Top: " + Y);
    //funcion para posicionar imgFicha

    var imgFicha = $("#ImaFich");
    imgFicha.css('position', 'absolute');
    imgFicha.css('left', X); //Posicion X nueva
    imgFicha.css('top', Y); //Posición Y nueva
    })
    

}