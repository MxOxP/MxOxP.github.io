var contadorLi = 1;
var JSON_SLIDES;
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function setTypeInput(type) {
    switch (type) {
        case "checkbox":
        case "radio":
            $(".contenrespose > input:" + type).click(function () {
                switch (type) {
                    case "checkbox":
                        $(this)
                            .siblings("input:" + type)
                            .prop("checked", false);
                        $(this)
                            .siblings("input:" + type)
                            .attr("data-respose", false);
                        if ($(this).is(":checked")) {
                            $(this).attr("data-respose", true);
                        } else {
                            $(this).attr("data-respose", false);
                        }
                        break;
                    case "radio":
                        $(this)
                            .siblings("input:" + type)
                            .attr("data-respose", false);
                        $(this).attr("data-respose", true);
                        break;
                }
            });
            break;
        case "li":
            $(type).click(function () {
                if ($(this).hasClass("opSelect")) {
                    var numero = $(this).find("span").html();
                    var aux = 1;
                    $(".opSelect").each(function () {
                        if ($(this).find("span").html() > numero) {
                            var valor = $(this).find("span").html().substr(0, 1);
                            $(this).find("span").html("");
                            $(this).find("span").html(parseInt(valor) - 1);
                        }
                    });
                    $(this).removeClass("opSelect");
                    $(this).find("span").html("");
                    var html = $(this).text();
                    $(this).html("");
                    $(this).html(html);
                    contadorLi--;
                } else {
                    $(this).addClass("opSelect");
                    $(this).html("<span>" + contadorLi + "</span>  " + $(this).html());
                    contadorLi++;
                }
            });
            break;
    }
}

function calificar(type, questions, slide, callback) {
    var arrayUserRespose = new Array();
    var score = 0;
    var arrayRevision = new Array();
    switch (type) {
        case "checkbox":
        case "radio":
            $("#contenQuestion input:" + type).each(function (i, e) {
                if ($(e).attr("data-respose") == "true") {
                    arrayUserRespose[arrayUserRespose.length] = i;
                }
            });
            break;
        case "li":
            $("#contenQuestion li").each(function (i, e) {
                if ($(this).children("span").length > 0) {
                    arrayUserRespose[arrayUserRespose.length] = parseInt($(this).children("span").html());
                }
            });
            break;
    }
    if (arrayUserRespose.length === questions) {
        readTextFile("../../complement.json", function (text) {
            JSON_SLIDES = JSON.parse(text);
            var ELEMENT = "SLIDE"+slide;
            if (Object.keys(JSON_SLIDES[ELEMENT]).length > 0) {
                var index = 0;
                $.each(JSON_SLIDES[ELEMENT], function (i, item) {
                    if (item === arrayUserRespose[index]) {
                        score++;
                        arrayRevision[index] = true;
                    } else {
                        arrayRevision[index] = false;
                    }
                    index++;
                });
                score = (10 / questions) * score;
                callback(score, arrayRevision);
            } else {
                alert("NO FUE POSIBLE OBTENER RESPUESTA DE VALIDACION DEL SERVIDOR INTENTE NUEVAMENTE.");
            }
        });
    } else {
        alert("ES NECESARIO RESPONDER TODO EL CUESTIONARIO.");
    }
}