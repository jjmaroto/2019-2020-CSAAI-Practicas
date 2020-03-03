console.log("Ejecutando JS...");

display = document.getElementById("display")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

//Declaramos las variables
  var num1 = 0;
  var num2 = 0;
  var opera;

//Funcion para colocar numero presionado
  function darNumero(numero){
    if(num1==0 && num1 !=='0.'){
      num1 = numero;
    }else{
      num1 = numero;
    }
    refrescar();
  }
//Función que coloca la coma al presionar
  function darComa(){
    if(num1 == 0) {
      num1 = '0.';
  } else if(num1.indexOf('.') == -1) {
      num1 += '.';
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
        num1 = parseFloat(document.getElementById("valor_numero").value);
    }
    num2 = parseFloat(num1);
    num1= 0;
    opera = valor;
}

//Funcion es igual
