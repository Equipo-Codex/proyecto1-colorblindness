// Define una variable para controlar el estado de visibilidad de la página
let isPageVisible = true;

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

        // Función para mostrar u ocultar la página
        const togglePageVisibility = () => {
            if (isPageVisible) {
                document.body.style.display = "none"; // Ocultar la página
            } else {
                document.body.style.display = ""; // Mostrar la página
            }
            isPageVisible = !isPageVisible; // Invertir el estado de visibilidad
        };
        //Inicia
        setTimeout(() => {
        // Abrir la herramienta EyeDropper y esperar a que el usuario seleccione un color
        eyeDropper
            .open()
            .then((result) => {
                // Obtener el nombre del color seleccionado y mostrarlo en pantalla
                const n_match = ntc.name(result.sRGBHex);
                const n_rgb = n_match[0]; // This is the RGB value of the closest matching color
                const n_name = n_match[1]; // This is the text string for the name of the match

                document.getElementById('result').innerText = n_name;

                const hexa = document.getElementById('hexa');

                if (hexa.checked) {
                    document.getElementById('result-hexa').innerText = result.sRGBHex;;

                    hexa.addEventListener("change", () => {
                        document.getElementById('result-hexa').innerText = "";
                    });
                }

                // Mostrar u ocultar la página al finalizar la selección de color
                togglePageVisibility();
            })
            .catch((e) => {
                // Si ocurre un error durante el proceso de selección de color, vuelve a ser el mensaje del inicio
                resultElement.textContent = "...";

                // Mostrar u ocultar la página en caso de error
                togglePageVisibility();
            });
        }, 150);
        
    // Mostrar u ocultar la página al hacer clic en el botón
        togglePageVisibility();
    //Hace la captura despues de que se oculte
        activateAndCapture();
});
