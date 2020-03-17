//Variables globales
var bucle;
var velocidad = 5;
var canvas = document.setElementById("canvas");
var areaW = canvas.width;
var areaH = canvas.height;
var ctx = canvas.getcontext ("2d");
var puntosJ1 = 0;
var puntosJ2 = 0;
//Clases
class Base {
  choque(obj) {
    if(this.fondo < obj.y || this.y > obj.fondo || this.derecha < this.x || this.x > this.derecha){
      return false;
    }else {
      return true;
    }
  }
}
class Bola extends Base {
  constructor(){
    super();
    this.t = 25;
    this.x = Math.floor(Math.random()* (areaW - this.t));
    this.y = Math.floor(Math.random()* (areaH- this.t));
    this.xdir = velocidad;
    this.ydir = velocidad;
  }
  choqueV(){
    if(this.y <= 0 || this.y >= (areaH - this.t){
      this.ydir = -this.ydir;
    }
  }
  choqueH(){
    if(this.x <= 0){
      this.xdir = -this.xdir;
      puntosJ2++;
    }
    if (this.x >= (areaW - this.t)){
      this.xdir = -this.xdir;
      puntosJ1++;
    }
  }
  mover(){
    this.x += this.xdir;
    this.y += this.ydir;
    this.choqueV();
    this.choqueH();
  }
  dibujar(){
    ctx.fillRect(this.x, this.y, this.t, this.t)
  }
}
//Bola y paneles
var Bola
//Funciones globales
function dibujar (){
  ctx.clearRect(0,0,areaW,areaH);
  bola.dibujar();
}
function frame(){
  bola.mover();
  bucle = requestAnimationFrame(frame);
}
function iniciar(){
  frame();
}
