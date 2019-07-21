import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const cvs = document.getElementById('danmaku-symphony');
  const ctx = cvs.getContext('2d');
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;
  const game = new Game(cvs, ctx);
  window.game = game;
  game.setupGame();
})


