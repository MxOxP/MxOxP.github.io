var btnAbrirPopup = document.getElementById('BotonDados'),
   overlay = document.getElementById('overlay'),
   popup = document.getElementById('popup'),
   btnCerrarPopup = document.getElementById('btn-cerrar-popup');

   btnAbrirPopup.addEventListener('click', function(){
      overlay.classList.add('active');
   });

   