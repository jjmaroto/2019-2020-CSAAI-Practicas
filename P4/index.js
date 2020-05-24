function main(){
  console.log("Probando...")

  //-- REALIZADOR:
  realizador = document.getElementById('realizador');

  realizador.width = 250;
  realizador.height = 500;

  //-- VIDEO 1:
  video1 = document.getElementById('video1');
  video1.volume = 0.0;


  //-- Tamaño del video:
  video1.width = 250;
  video1.height = 500;

  video1.onmouseover = () => {
    console.log('Audio ON!')
    video1.volume = 0.5;
    video1.style.backgroundColor = "lightgray"
  }

  video1.onmouseout = () => {
    console.log('Audio OFF')
    video1.volume = 0.0;
    video1.style.backgroundColor = ""
  }

  play1 = document.getElementById('play1');

  play1.onclick = () => {

    console.log('Video 1')
    realizador.src = 'video1.mov'
    realizador.currentTime = video1.currentTime
  }


  //-- VIDEO 2:
  video2 = document.getElementById('video2');
  video2.volume = 0.0;

  //-- Tamaño del video:
  video2.width = 250;
  video2.height = 500;

  video2.onmouseover = () => {
    console.log('Audio ON!')
    video2.volume = 0.5;
    video2.style.backgroundColor = "lightgray"
  }

  video2.onmouseout = () => {
    console.log('Audio OFF')
    video2.volume = 0.0;
    video2.style.backgroundColor = ""
  }

  play2 = document.getElementById('play2');

  play2.onclick = () => {

    console.log('Video 2')
    realizador.src = 'video2.mp4'
  }

  //-- VIDEO 3:
  video3 = document.getElementById('video3');
  video3.volume = 0.0;

  //-- Tamaño del video:
  video3.width = 250;
  video3.height = 500;

  video3.onmouseover = () => {
    console.log('Audio ON!')
    video3.volume = 0.5;
    video3.style.backgroundColor = "lightgray"
  }

  video3.onmouseout = () => {
    console.log('Audio OFF')
    video3.volume = 0.0;
    video3.style.backgroundColor = ""
  }

  play3 = document.getElementById('play3');

  play3.onclick = () => {

    console.log('Video 3')
    realizador.src = 'video3.mov'
    realizador.volume = 0.5;
  }
}
