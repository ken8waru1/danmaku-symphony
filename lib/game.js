import Player from './player';
import GameScreen from './game_screen';

const IDLE_GAME = 'IDLE_GAME';
const RUNNING_GAME = 'RUNNING_GAME';
const END_GAME = 'END_GAME';

class Game {
  constructor(cvs, ctx) {
    this.frames = 0;
    this.cvs = cvs;
    this.ctx = ctx;
    this.IDLE_GAME = IDLE_GAME;
    this.RUNNING_GAME = RUNNING_GAME;
    this.END_GAME = END_GAME;
    this.currentState = IDLE_GAME;
    this.gameScreen = new GameScreen(this);
    this.player = new Player(this);
    this.loop = this.loop.bind(this);
    this.entities = [];
    this.playerBullets = [];
    this.enemyBullets = [];
  }

  setupGame() {
    this.player.trackMovements();
    this.loop();
  }

  draw() {
    this.ctx.fillStyle = '#866286';
    this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height);
    this.gameScreen.draw();
    this.player.draw();
    this.playerBullets.forEach((playerBullet) => playerBullet.draw())
    // this.entities.forEach((entity) => entity.draw())
  }

  update() {
    this.player.update();
    this.gameScreen.update();
    this.playerBullets.forEach((playerBullet) => playerBullet.update())
    // this.entities.forEach((entity) => entity.update())
  }

  loop() {
    this.update();
    this.draw();
    this.player.draw();
    this.frames++;
    window.requestAnimationFrame(this.loop);
  }
}

export default Game;