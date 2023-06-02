const hexa = document.getElementById("hexa")
const rHexa = document.getElementById("result-hexa")
/**
 * Clears the value of the 'hexa' input field.
*/
function borrarTexto() {
    hexa.innerText = "";
}

if ((document.getElementById("result-hexa")) != " "){
    hexa.addEventListener("click", borrarTexto())
}