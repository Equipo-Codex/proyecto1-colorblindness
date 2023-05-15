document.getElementById("start-button").addEventListener("click", () => {
    const resultElement = document.getElementById("result");

    if (!window.EyeDropper) {
        resultElement.textContent =
        "Tu navegador no soporta esta extension, prueba con navegadores basados en Chromium";
        return;
    }

    const eyeDropper = new EyeDropper();
    eyeDropper
        .open()
        .then((result) => {
        resultElement.textContent = result.sRGBHex;
        resultElement.style.backgroundColor = result.sRGBHex;
        })
        .catch((e) => {
        resultElement.textContent = e;
        });

});
