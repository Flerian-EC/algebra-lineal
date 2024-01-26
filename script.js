const $botonVentana = document.getElementById("ventana-button");
const $ventana = document.getElementById("ventana-inf");
const $botonCalc = document.getElementById("calc-button");
const $numeroHexa = document.getElementById("hexa-number");
const $bloqueColor = document.getElementById("principal-color");

const obtenerNumero = () => {
  let value = $numeroHexa.value;
  return value
}
let x = "1"
const animar = (validacion) => {
  if(validacion === true) {
    $bloqueColor.classList.add("animar-color");
  }
}

//esta es la ejecucion que se debe modificar: 
$botonCalc.addEventListener("mouseup", (event) => {
  let value = obtenerNumero()
  let validar = validarHexa(value);
  cambio({validacion: validar, valor: value});
  animar(validar);
})