import Player from './player';
import GameScreen from './game_screen'

class Game {
  constructor(cvs, ctx) {
    this.cvs = cvs;
    this.ctx = ctx;
    this.gameScreen = new GameScreen(this.cvs, this.ctx);
    this.player = new Player(this.cvs, this.ctx)
  }

  draw() {
    this.ctx.fillStyle = '#866286';
    this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height);
  }

  loop() {
    this.draw();
    this.gameScreen.draw();
    this.player.draw();
    window.requestAnimationFrame(loop);
  }
}

export default Game;