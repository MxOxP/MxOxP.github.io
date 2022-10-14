<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--<script src="Todo/jquery-3.5.1.min.js"></script>-->

    <title>Maraton</title>
    <script>
        var alto = $(window).height();
        $(document).ready(function(){
            $(".body-full").css("height", alto+"px");
        });
    </script>
</head>
<body>
    <div class="container-fluid d-flex flex-column  body-full">
        <header class="row contentTitulo">
            <div class="col-12">
                <div class="row titulo d-flex justify-content-center">
                    <h2>Maratón</h2>
                </div>
                <div class="row subtitulo">
                    <!-- <h3>subtitulo</h3> -->
                </div>
            </div>
        </header>
        <div class="row ">
            <div class="col-12 ">
                <div class="row instrucciones">
                    <!-- <h4> aqui la seccion de instrucciones de algo</h4> -->
                </div>
                <div class="row content-body d-flex justify-content-around">
                    <!-- <p>Aqui va todo el contenido de el Curso</p> -->
                    <div id="tablero">
                        <img src="Todo/unnamed.jpg" width="550px" height="550px" />
                        <div id="player"></div>
                        <div id="player2"></div>
                        <div id="player3"></div>
                        <div id="player4"></div>
                        <div id="player5"></div>
                        <div id="player6"></div>
                    </div>
                    <div id="tira">
                        <div id="dado">
                            <!-- <img src="../resources/img/dice.png" /> -->
                        </div>
                        <button type="button" id="tiro" class="btn btn-success">Tirar!</button>
                </div>
            </div>
        </div>
        <!--<div class="row footer d-flex  justify-content-md-around mt-auto ">
            <div class=" offset-1 col-3  col-md-2  col-lg-2">
                <div class="button">
                    <i class="fas fa-home "></i>
                </div>
            </div>
            <div class="d-flex justify-content-center col-4 offset-md-4 col-md-2 offset-lg-5 col-lg-2"> <img
                    src="../resources/img/atras.png" alt="Atras"></div>
            <div class="d-flex justify-content-center col-4 col-md-3 col-lg-2"><img src="../resources/img/adelante.png"
                    alt="Adelante"></div>
        </div> -->
    </div>
</body>

</html>