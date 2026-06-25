document.getElementById('userForm').addEventListener('submit', function(event) {
    // Evita que la página se recargue por defecto al enviar el formulario
    event.preventDefault();

    // Captura los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const apellidoPaterno = document.getElementById('apellidoPaterno').value.trim();
    const apellidoMaterno = document.getElementById('apellidoMaterno').value.trim();
    const correo = document.getElementById('correo').value.trim();

    // Ejemplo de validación o procesamiento con los datos
    if(nombre && apellidoPaterno && apellidoMaterno && correo) {
        // Muestra un mensaje de éxito simulado (puedes cambiarlo para enviarlo a una API)
        alert(`¡Reporte/Registro recibido con éxito!\n\nUsuario: ${nombre} ${apellidoPaterno} ${apellidoMaterno}\nCorreo: ${correo}`);
        
        // Limpia el formulario después de enviar
        document.getElementById('userForm').reset();
    } else {
        alert('Por favor, rellena todos los campos correctamente.');
    }
});