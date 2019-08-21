import Game from './game';
//python -m SimpleHTTPServer
document.addEventListener('DOMContentLoaded', () => {
  const cvs = document.getElementById('danmaku-symphony');
  const ctx = cvs.getContext('2d');
  cvs.width = 600;
  cvs.height = 900;
  const game = new Game(cvs, ctx);
  window.game = game;
  game.setupGame();
})


