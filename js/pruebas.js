function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Funcion validarNombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Funcion validarNombre no validó que el nombre sea menor a 50 caracteres',
  );

  //también hay que probar el caso positivo
  //mandarle un campo permitido y ver si da error es porque alguien rommpio la funcion
  console.assert(
    validarNombre("Dario") === "", 
    "validarNombre falló con un nombre válido",
  );
}

probarValidarNombre();

/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*/
function probarValidarCiudad(){
    console.assert(validarCiudad("") === "El campo ciudad no puede ser vacío",
    "La función validarCiudad no validó que el campo ciudad contenga algún dato",);

    //caso positivo
    console.assert(validarCiudad("Buenos Aires") === "",
    "La función validarCiudad no funcionó con un nombre de ciudad válido",
    );

}

probarValidarCiudad();

function probarValidarRegalo(){
  console.assert(validarRegalo("") === "Este campo no puede ser vacío",
  "La funcion validarRegalo no validó que el campo Regalo contenga algún dato",
  );

  //creo un string de 151 caracteres
  let campoDePruebaRegalo = "";
  for (let i=1; i<152; i++){
    campoDePruebaRegalo = campoDePruebaRegalo + "a";
  }
  console.assert(validarRegalo(campoDePruebaRegalo) === "Este campo no puede tener más de 150 caracteres",
  "La funcion validarRegalo no validó que el campo Regalo tenga menos de 150 carateres",
  );

  console.assert(validarRegalo("&%$###") === "Este campo sólo puede contener letras o números",
  "La función validarRegalo no validó que el campo Regalo sólo contenga letras o numeros",
  );

  //caso positivo
  console.assert(validarRegalo("Un regalo de 10") === "",
  "La función validarRegalo no funcionó con una descripción de regalo válida",
  );
}

probarValidarRegalo();


/*
function sumar(a, b){
    return a + b;
}

sumar(1, 2);

console.assert(sumar(1, 2) === 3, "La suma de 1 + 2 no dio 3");
*/