// Obtener el elemento con el ID "start-button" y agregar un event listener para el evento "click"
document.getElementById("start-button").addEventListener("click", () => {
    // Obtener el elemento con el ID "result"
    const resultElement = document.getElementById("result");

    // Verificar si la propiedad "EyeDropper" está disponible en el objeto global "window"
    if (!window.EyeDropper) {
        // Si no está disponible, mostrar un mensaje de error en el elemento "result"
        resultElement.textContent = "Tu navegador no soporta esta extensión, prueba con navegadores basados en Chromium";
        return;
    }

    // Crear una instancia de EyeDropper
    const eyeDropper = new EyeDropper();

    // Abrir la herramienta EyeDropper y esperar a que el usuario seleccione un color
    eyeDropper
        .open()
        .then((result) => {
            // Cuando se selecciona un color, actualizar el contenido del elemento "result" con el valor del color en formato sRGB hexadecimal
            resultElement.textContent = result.sRGBHex;

            // Establecer el color de fondo del elemento "result" con el valor del color en formato sRGB hexadecimal
            resultElement.style.backgroundColor = result.sRGBHex;
        })
        .catch((e) => {
            // Si ocurre un error durante el proceso de selección de color, mostrar el error en el elemento "result"
            resultElement.textContent = e;
        });
});
