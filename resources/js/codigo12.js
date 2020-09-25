function Lanzar(x, y) { 
      
   function Cretable() {
       
      /*
       body = document.getElementById("tabla");
     
       tabla   = document.createElement("table");
    */
       for (var f = 0; f < 1; f++) {
        
         filas = document.createElement("tr");
    
       for (var c = 0; c < 6; c++) {
             table = [];
             x = Math.floor(Math.random()*(5+1)+1);
             y = Math.floor(Math.random()*(5+1)+1);
             sum = x + y
             table.push(sum);
         
         celda = document.createElement("td");
         textcel = document.createTextNode(table);
         celda.appendChild(textcel);
         filas.appendChild(celda);
               
         if ( table == 12) {
           celda.style.background = "blue";
   } else if ( table == 2) {
           celda.style.background = "red";
   }
       }
   
       tabla.appendChild(filas);
     }
    
       document.getElementById("dice1").innerHTML= x;
       document.getElementById("dice2").innerHTML= y;
       document.getElementById("sum").innerHTML= sum;
     body.appendChild(tabla);
     tabla.setAttribute("border", "2");
   }
   
   Cretable();
   } 
   