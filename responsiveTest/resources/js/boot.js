function primerEjercicio(respuestas){
    var secuencia = [7, 2, 6, 1, 5, 3, 4];
    var errores = [];
    for(var i = 0; i<7; i++){
        if(respuestas[i]==secuencia[i]){
            errores[i] = true;
        }else{
            errores[i] = false;
        }
    }
    return errores;
}