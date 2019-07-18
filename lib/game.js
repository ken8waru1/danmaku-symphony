import Player from './player';
import GameScreen from './game_screen'
import { join } from 'path';

const IDLE_GAME = 'IDLE_GAME';
const RUNNING_GAME = 'RUNNING_GAME';
const END_GAME = 'END_GAME';

class Game {
  constructor(cvs, ctx) {
    this.frames = 0;
    this.cvs = cvs;
    this.ctx = ctx;
    this.gameScreen = new GameScreen(this.cvs, this.ctx);
    this.player = {};
    this.IDLE_GAME = IDLE_GAME;
    this.RUNNING_GAME = RUNNING_GAME;
    this.END_GAME = END_GAME;
    this.currentState = IDLE_GAME;
    this.loop = this.loop.bind(this);
    this.player = new Player(this);

  }

  setupGame() {
    this.player.trackMovements();
    
    this.loop();
  }

  draw() {
    this.ctx.fillStyle = '#866286';
    this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height);
    this.gameScreen.draw();
  }

  update() {
    this.player.update();
  }

  loop() {
    this.draw();
    this.update();
    // this.setGameState();
    this.player.draw();
    this.frames++;
    window.requestAnimationFrame(this.loop);
  }
}

export default Game;