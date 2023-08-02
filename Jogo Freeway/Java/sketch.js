
function setup() {
  createCanvas(500,400);
  somDaTrilha.loop();
}


function draw() {
  background(imagemDaEstrada);
  mostraCarro();
  mostraAtor();
  movimentoAtor();
  movimentaCarro();
  posicaoInicialCarros();
  verificarColisao();
  incluiPontos();
  marcaPonto();
 
}



