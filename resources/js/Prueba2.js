//                Tiro de Dado 
var NumTiro = 1;
var PosCasilla = 0;
function TiraDadO(turno) {
    var dado = $("#die1");
    var status = $("#status");

    var dado = document.getElementById("die1");
    var status = document.getElementById("status");

    var d1 = Math.floor(Math.random() * 6) + 1;
    Preguntas(dado, turno);
    var pos = d1 + PosCasilla;
    dado.innerHTML = d1;
    status.innerHTML = "Posicion " + pos + ".";
    tiro.innerHTML = "Turno: " + NumTiro + ".";
    NumTiro = NumTiro + 1;
    PosCasilla = pos;
    if (pos > 30) {
        alert("Has Ganado!!!");
        PosCasilla = 0;
    }

    //               Movimiento de ficha
    var posicionImagen = $("#MapaT").get(0).getBoundingClientRect();

    x = posicionImagen.left;
    y = posicionImagen.top;


    var JSON_POSICION;
    readTextFile("../../slides/PosicionFicha.json", function (text) {
        JSON_POSICION = JSON.parse(text);


        var X = JSON_POSICION[pos].x;
        var Y = JSON_POSICION[pos].y;

        var imgFicha = $("#ImaFich");
        imgFicha.css('position', 'absolute');
        imgFicha.css('left', X);
        imgFicha.css('top', Y);
    })


    //               Preguntas



    $(document).ready(function () {
        $("#jugadorUno").hide();
        $("#btnJugar").hide();


    });

    var turno = 0;
    var Jugador1 = 0;
    var arrJugadores = [];

    function Jugadores() {
        var jugador = $("select[name=jugadores]").val();

        if (jugador == 0) {
            $("#jugadorUno").hide();
            $("#jugadorDos").hide();

            alert("Selecciona un número de jugadores");
        }
        if (jugador == 2) {
            $("#jugadorUno").show();
            $("#jugadorDos").show();
            $("#btnJugar").show();
        }
    }

    function Turno(arrJugadores, Jugador1) {
        var entrar = false;
        turno++;
        var JugadoR1 = '<i JugadoR1"></i>';
        if (arrJugadores.length < turno) {
            turno = 1;
        }

        switch (turno) {
            case 1:
                var nombreJugador = '<p>Turno de ' + arrJugadores[0] + '</p>';
                $("#nombre").html(nombreJugador);
                $("#dado").click(function () {
                    if (entrar == false) {
                        entrar = true;
                        LanzarDado(turno);
                    }

                });
                break;
            case 2:
                var nombreJugador = '<p>Turno de ' + arrJugadores[1] + '</p>';
                $("#nombre").html(nombreJugador);
                $("#dado").click(function () {
                    if (entrar == false) {
                        entrar = true;
                        LanzarDado(turno);
                    }
                });
        }
        if (arrJugadores.length == 2) {
            $('#FJug1' + Jugador1).html(JugadoR1);
            $('#FJug2' + Jugador2).html(JugadoR2);
        }

    }

    function Jugar() {

        var numJugadores = $("select[name=jugadores]").val();
        var TurnO1 = $("#JueGa1").val().toUpperCase();
        var TurnO2 = $("#JueGa2").val().toUpperCase();


        if (numJugadores == 2) {
            if (TurnO1 == "" || TurnO2 == "") {
                bootbox.alert({
                    title: "¡Eyyyy!",
                    message: "Agrega mas Jugadores"
                });
            } else {
                $("#content").hide();
                $(".subtitulo").hide();
                $(".instrucciones").hide();

                arrJugadores = [TurnO1, TurnO2];
                Turno(arrJugadores, Jugador1, Jugador2);

            }
        }

    }

    function Avanzar(dado, turno) {
        switch (turno) {
            case 1:
                $("i").removeClass("JugadoR1");
                $("i").addClass("none");
                Jugador1 += dado;
                if (Jugador1 >= 44) {
                    bootbox.alert("¡HAS GANADO!")
                } else {
                    Turno(arrJugadores, Jugador1, Jugador2);
                }

                break;
            case 2:
                $("i").removeClass("JugadoR2");
                $("i").addClass("none");
                Jugador2 += dado;
                if (Jugador2 >= 44) {
                    bootbox.alert("¡HAS GANADO!")
                } else {
                    Turno(arrJugadores, Jugador1, Jugador2);
                }
        }
    }

    function Preguntas(dado, turno) {
        var indice = 0;
        var preguntas = ["¿Cuáles son los tipos de sabores primarios?",
            "¿Cuál es el lugar más frío de la tierra?",
            "¿Quién escribió La Odisea?",
            "¿Cómo se llama la capital de Mongolia?",
            "¿Cuál es el río más largo del mundo?",
            "¿Cómo se llama la Reina del Reino Unido?",
            "¿En qué continente está Ecuador?",
            "¿Dónde originaron los juegos olímpicos?",
            "¿Qué tipo de animal es la ballena?",
            "¿De qué colores es la bandera de México?",
            "¿Qué cantidad de huesos en el cuerpo humano?",
            "¿Cuándo acabó la II Guerra Mundial?",
            "¿Quién es el autor de el Quijote?",
            "¿Quién pintó “la última cena”?",
            "¿En qué país se encuentra la torre de Pisa?",
            "¿Dónde se encuentra la Sagrada Familia?",
            "¿Qué son los humanos: omnívoros, herbívoros o carnívoros?",
            "¿Cómo se denomina el resultado de la multiplicación?",
            "¿Cuál es el océano más grande?",
            "¿Qué año llegó Cristóbal Colón a América?",
            "¿Quién es el padre del psicoanálisis?",
            "¿Cuál es el disco más vendido de la historia?",
            "¿Qué producto cultiva más Guatemala?",
            "¿Quién es el famoso Rey de Rock en los Estados Unidos?",
            "¿Cómo se llama el nuevo presidente de los Estados Unidos?"];

        var respuestas = [
            ["  Dulce, amargo, ácido, salado.", "Dulce, amargo, ácido, salado y umami.", "Dulce y amargo."],
            ["  Groelandia", "Antártida", "Canadá"],
            ["  Borges", "Homero", "Neruda"],
            ["  Ulan Bator", "Podgorica", "Montenegro"],
            ["  Nilo", "Amazonas", "Bravo"],
            ["  Isabel II", "Isabel ", "Diana"],
            ["  América", "Europa", "Africa"],
            ["  Roma", "Noruega", "Grecia"],
            ["  Pes", "Mamífero", "Molusco"],
            ["  Verde, blanco y rojo", "Verde y rojo", "Verde, amarillo y rojo"],
            ["  180", "300", "206"],
            ["  1945", "1810", "1985"],
            ["  Miguel de Cervantes", "William Shakespeare", "Paulo Coelho"],
            ["  Leonardo da Vinci", "Van Gogh", "Picasso"],
            ["  Italia", "Francia", "España"],
            ["  Roma", "Barcelona.", "Paris"],
            ["  Herbívoros", "Omnívoros", "Carnívoros"],
            ["  Producto", "Resultado", "Variable"],
            ["  Océano Atlántico", "Océano Pacífico", "Océano Índico "],
            ["  1847", "1492", "1652"],
            ["  Paulo Coelho", "Sigmund Freud", "William Shakespeare"],
            ["  Saturday Night Fever", "Back in Black", "Thriller"],
            ["  Mariguana", "Aguacate", "Café"],
            ["  Michael Jackson", "Elvis Presley", "Madona"],
            ["  George H. W. Bush", "Obama", "Donald Trump."]
        ];

        indice = Math.floor(Math.random() * preguntas.length);
        var OpcionesRes = respuestas[indice];
        var txtRespuestas = ""

        for (i in OpcionesRes) {
            txtRespuestas += '</br><input type="radio" name="resp" value=' + i + '><label style="margin-left: 3%;"></br>' + OpcionesRes[i] + '</label>';
        }
        
        bootbox.alert({
            title: "Contesta Correctamente para avanzar "  + d1 + " posiciones",
            closeButton: false,
            centerVertical: true,
             
            
            

            message: preguntas  [indice] + txtRespuestas,
            callback: function () {
                var respuesta = $("input[type=radio]:checked").val();
                Comprobar(respuesta, indice, dado, turno);
            }
        });



    }

    function Comprobar(respuesta, indice, dado, turno) {
        var respuestaCorrecta = [1, 1, 1, 0, 1, 0, 0, 2, 1, 0, 2, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 2, 2, 1, 2];
        if (respuesta == respuestaCorrecta[indice]) {
            bootbox.alert("Es correcto");
            Avanzar(dado, turno);
        } else {
            bootbox.alert("Es incorrecto");
            Turno(arrJugadores, Jugador1);

        }
    }
}