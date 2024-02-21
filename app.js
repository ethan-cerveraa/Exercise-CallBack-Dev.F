/*Muestra un mensaje en consola mediante un callback. 
La función que escribas debe poder mostrar el mensaje como 
console.warn, console.log, console.info, o cualquier método
 para pintar en consola del objeto console.*/
//ejercicio1


/*let botonCreado = false
let botonCreado2 = false

function showMessage(message, callback) {
    callback(message);

}

function showWarnig(message) {
    console.warn(message);

}

function showInfo(message) {
    console.info(message);
}

function showLog(message) {
    console.log(message);
}


document.getElementById("inicio").addEventListener("click", function () {
    showMessage("Iniciando analisis de Muestra", showInfo);

    setTimeout(function () {
        showMessage("Procesando Muestra", showLog);

        setTimeout(function () {
            showMessage("ADVERTENCIA: Muestra Peligrosa", showWarnig)


            if (!botonCreado) {
                const newBoton = document.createElement('button');
                newBoton.textContent = " Informacion de la Muestra";
                document.body.appendChild(newBoton);
                botonCreado = true;


                newBoton.addEventListener("click", function () {
                    showMessage("Procesando Informacion...", showInfo);


                    setTimeout(function () {
                        showMessage("... El Analisis detecta multiples cadenas de ARN de un agente  biologico conocido como virus T...adceder a las opciones de Protocolo", showWarnig);


                        if (!botonCreado2) {
                            const newBoton2 = document.createElement('button');
                            newBoton2.textContent = " Protocolo";
                            document.body.appendChild(newBoton2);
                            botonCreado2 = true;


                            newBoton2.addEventListener("click", function(){
                                showMessage('...Iniciando Protocolo de Contencion!', showLog);

                                let tiempoRestante =10;

                                function actualizarContador (){
                                    if(tiempoRestante <= 0){
                                        clearInterval(interval);
                                        showMessage('EXPLOSION!!!!', showWarnig);
                                    }else{
                                        showWarnig(`
                                        ;tiempo restante ${tiempoRestante} segundos`, showWarnig);
                                        tiempoRestante--;

                                    }
                                }

                                let interval = setInterval(actualizarContador,1000)
                            })
                        }
                    }, 2000)

                })
            }

        }, 3000);

    }, 2000);
});*/

/*Crear una función que reciba como argumento una variable de cualquier tipo y un callback.
 La función debe retornar como resultado, mediante el callback, 
 cual es el tipo de dato de la variable ingresada e imprimir su contenido. typeof*/

//ejercicio 2

  /*function poderyTransformacion(variable, callback) {
    let tipo = typeof variable;
    callback(tipo, variable);

    let poder = 0;
    let  transformacion = "base";
  


    for(let i =0; i<30; i++){
      poder += 1500;
      if (poder >= 3000){
        transformacion = "super Saiyajin";
      }
      if(poder >= 4500){
          transformacion = "super Saiyajin 2";
      }
      if(poder >= 6000){
        transformacion = "super Saiyajin 3";
      }  
      if(poder >= 10500){
        transformacion = "Super Saiyajin God";
      }
      if (poder >= 15000){
        transformacion = " Super Saiyajin God SS"
      }
      if( poder >= 21000){
        transformacion = "Ultra Instinto Sing";
      
      }
      if(poder >= 45000){
        transformacion = "Ultra Instinto Dominado"
      }

        callback("Transformacion", transformacion);
      }

  }

  function miCallback(tipo, contenido){
    console.log(`tipo de variable ${tipo}`);
    console.warn(`contenido de la variable: ${contenido}`);
  }
  
let miVariable = "Goku";
poderyTransformacion(miVariable, miCallback);*/



/*Crear una función que reciba como argumentos, dos números y un callback.
 Según el callback que se pase a la función, se devuelve la suma de los dos números,
  la resta de los dos números, la multiplicación de los dos números o división.*/
//ejercicio3


/*function Operaciones(numero1, numero2 ,callback) {
   return callback( numero1, numero2);

}

function suma(a,b){
  return a+b;

}

function resta(a,b){
  return a -b ;
}

function multiplicación(a,b){
  return a*b;
}

function division(a,b){
  return a/b;
}



let numero1 =10;
let numero2=5;

console.log("Suma", Operaciones(numero1, numero2, suma));
console.log("Resta", Operaciones(numero1, numero2, resta));
console.log("Multiplicacion", Operaciones(numero1, numero2, multiplicación));
console.log("Division", Operaciones(numero1, numero2, division));*/



/*Escribe una función que reciba una cadena de caracteres y debe devolver, mediante un callback,
 la cadena de caracteres en mayúsculas o en minúsculas.
ordenSuperior("PejeLagarto", minus); 
-> pejelagarto ordenSuperior("PejeLagarto", mayus); -> PEJELAGARTO*/
//Ejercicio4

/*function cadenadePalabras(cadena,callback) {
   return callback( cadena);

}

function minusculas(cadena){
   return cadena.toLowerCase();
}

function mayusculas(cadena){
  return cadena.toUpperCase();
};


let cadena1 = "PejeLagarto";
let cadena2 = "Tormenta Nebular!!!"

console.log("Texto en minusculas:" ,cadenadePalabras(cadena1,minusculas));
console.log("Texto en MAYUSCULAS:" ,cadenadePalabras(cadena1,mayusculas));
console.log("Texto en minusculas:" ,cadenadePalabras(cadena2,minusculas));
console.log("Texto en MAYUSCULAS:" ,cadenadePalabras(cadena2,mayusculas));*/



/*Hacer un arreglo de 4 cantidades de tiempo (en minutos) EJEMPLO [120, 80, 200, 100] y 
tomar solo las cantidades mayores a dos horas (hacer la comparación en horas) 
regresar el nuevo array mediante un callback.*/

//Ejercicio4

function MayorA2Horas(tiempo, callback) {
  const cantidadeMayor = tiempo.filter(minutos => minutos > 120);
  callback(cantidadeMayor);
}

function miCallback(nuevoArray) {
  console.log("Cantidades mayores a 2 horas (en minutos):", nuevoArray);
}

const Minutos = [120, 80, 200, 100, 180, 240];
MayorA2Horas(Minutos, miCallback);

