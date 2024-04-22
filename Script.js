// Crea un elemento script
var script = document.createElement('script');

// Asigna la URL de la librería SweetAlert
script.src = 'https://unpkg.com/sweetalert/dist/sweetalert.min.js';

// Cuando el script se cargue, ejecuta tu código que depende de SweetAlert
script.onload = function() {
    // Tu código aquí que depende de SweetAlert

    // Ejemplo de alerta personalizada
    swal("¡Alerta personalizada!", "Este es un mensaje de alerta personalizada", "warning");
};


var enlaces = document.querySelectorAll('a[href="#"]');


enlaces.forEach(function(enlace) {
  enlace.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el enlace se comporte como un enlace normal

    alert('La página se encuentra en mantenimiento. Disculpe las molestias.'+'¡Estamos trabajando para mejorar tu experiencia!');
  });
});

document.getElementById('enviar').addEventListener('click', function() {
  swal('¡Aviso!','Actualmente nos encontramos en mantenimiento. Disculpe las molestias.¡Estamos trabajando para mejorar tu experiencia!','error');
});