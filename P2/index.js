console.log("Ejecutando JS...");

//Declaramos las variables
  var num1 = 0;
  var num2 = 0;
  var opera;

//Funcion para colocar numero presionado
  function darNumero(numero){
    if(num1==0 && num1 !=='0.'){
      num1 = numero;
    }else{
      num1 += numero;
    }
    refrescar();
  }
//Función que coloca la coma al presionar
  function darComa(){
    if(num1 == 0) {
      num1 = '0.';
  } else if(num1.indexOf('.') == -1) {
      num1+= '.';
  }
  refrescar();
}

//Funcion volver al cero
  function darC(){
    num1 = 0;
    num2 = 0;
    refrescar();
}

//Funcion para realizar operaciones
  function operar(valor){
    if (num1 == 0){
        num1 = parseFloat(document.getElementById("display").value);
    }
    num2 = parseFloat(num1);
    num1= 0;
    opera = valor;
}

//Funcion es igual
/*
	suma = 1
	resta = 2
	multiplicacion = 3
	division = 4
	potencia = 5
*/

  function esIgual(){
      num1 = parseFloat(num1);
      switch (opera){
          case 1:
              num1 += num2;
          break;
          case 2:
              num1 = num2 - num1;
          break;
          case 3:
              num1 *= num2;
          break;
          case 4:
              num1 = num2 / num1;
          break;
          case 5:
              num1 = Math.pow(num2, num1);
          break;
      }
      refrescar();
      num2 = parseFloat(num1);
      num1 = 0;
  }

//Funcion refrescar
function refrescar(){
            document.getElementById("display").value = num1;
            //document.getElementById("display").value = opera;
            //document.getElementById("display").value = num2;
        }
