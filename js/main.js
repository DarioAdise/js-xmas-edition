//toma el nombre del formulario por el id
const $formulario = document.querySelector("#carta-a-santa");

//toma los nombres de los tags por el atributo name
const nombre = $formulario.nombre.value;
const ciudad = $formulario.ciudad.value;
const comportamiento = $formulario.comportamiento.value;

const regalo = $formulario['descripcion-regalo'].innerText;

console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(regalo);

function validarNombre(nombre){
  if (nombre.length === 0){
    return "El campo nombre debe tener al menos 1 caracter";
  }
  if (nombre.length >= 50){
    return "El campo nombre debe tener menos de 50 caracteres";
  }
  return "";
}

/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*/

function validarCiudad(ciudad){
  if (ciudad.length === 0){
    return "El campo ciudad no puede ser vacío";
  }
  return "";
}

function validarRegalo(regalo){
  if (regalo.length === 0){
    return "El campo regalo no puede ser vacío";
  }
  if (regalo.length > 150){
    return "El campo regalo no puede tener más de 150 caracteres";
  }
  if (!RegExp('^[Az0-9 ]+$').test(regalo)){
    return "El campo regalo sólo puede contener letras o números";
  }
  return ""
}