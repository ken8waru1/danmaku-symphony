import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const cvs = document.getElementById('danmaku-symphony');
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;
  const ctx = cvs.getContext('2d');
  const game = new Game(cvs, ctx);
  game.loop();
})
