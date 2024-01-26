const $botonVentana = document.getElementById("ventana-button");
const $ventana = document.getElementById("ventana-inf");
const $botonCalc = document.getElementById("calc-button");
const $numeroHexa = document.getElementById("hexa-number");
const $bloqueColor = document.getElementById("principal-color");

const $matriz = document.querySelector("#container-matriz");


const obtenerNumero = () => {
  let value = $numeroHexa.value;
  return value
}

const validarNum = (val) => {
  let confirm = isNaN(val)
  return !confirm
}

const renderMatriz = ({validacion, dimension}) => {
  $matriz.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`
  $matriz.style.gridTemplateRows = `repeat(${dimension}, 1fr)`
  let dim = dimension ** 2 

  const inputMat = (iden) => {
    return `<input matrizId=${iden.toString()} class="entrada-de-matriz" type="number">`;
  } 
  const list = [];
  for(let i = 0; i < dim; i++) {
    list.push(inputMat(i+1));
  }

  $matriz.innerHTML = `${list.join(" ")}`
}

const animar = (validacion) => {
  if(validacion === true) {
    $bloqueColor.classList.add("animar-color");
  }
}

//esta es la ejecucion que se debe modificar: 
$botonCalc.addEventListener("mouseup", (event) => {
  let value = obtenerNumero()
  let validar = validarNum(value);
  renderMatriz({validar: validar, dimension: value})
  animar(validar);
})