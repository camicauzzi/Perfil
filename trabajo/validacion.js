document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        var nombre = document.getElementById("nombre").value;
        var correo = document.getElementById("correo").value;
        var mensaje = document.getElementById("mensaje").value;

        if (nombre === "" || correo === "" || mensaje === "") {
            alert("Todos los campos son obligatorios.");
            event.preventDefault();
        } else if (!validateEmail(correo)) {
            alert("Por favor, introduce un correo electrónico válido.");
            event.preventDefault();
        } else {
            alert("Formulario enviado correctamente.");
        }
    });

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
