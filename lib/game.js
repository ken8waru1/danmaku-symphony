import Player from './player';
import GameScreen from './game_screen';
import controlprompt from '../assets/controls.png';
import { phase01 } from './phases';
import { circle1 } from './enemy_system';
import Score from './score';
const IDLE_GAME = 'IDLE_GAME';
const RUNNING_GAME = 'RUNNING_GAME';
const END_GAME = 'END_GAME';
const PHASE_01 = 'PHASE_01';
const PHASE_02 = 'PHASE_02';

class Game {
  constructor(cvs, ctx) {
    this.frames = 0;
    this.phase = PHASE_01;
    this.time = 0;
    this.cvs = cvs;
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.width = cvs.width;
    this.height = cvs.height;
    this.IDLE_GAME = IDLE_GAME;
    this.RUNNING_GAME = RUNNING_GAME;
    this.END_GAME = END_GAME;
    this.score = new Score(this);
    this.controls = new Image();
    this.controls.src = controlprompt;
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
    // this.entities.push(circle1(this, 100))
    phase01(this);
    this.loop();
  }

  generateEnemyBullet() {
    if (this.frames % 50 === 0) {
      this.entities.forEach(entity => entity.shoot());
    }
  }

  draw() {
    this.gameScreen.draw();
    this.entities.forEach((entity) => entity.draw());
    this.player.draw();
    this.playerBullets.forEach((playerBullet) => playerBullet.draw());
    this.enemyBullets.forEach((enemyBullet) => enemyBullet.draw())
    this.score.draw();
  }

  changePhase() {
    if (!this.entities.length) {
      switch(this.phase) {
        case PHASE_01: 
          this.phase = PHASE_02;
          break;
        default:
          break;
      }
    }
  }

  update() {
    this.changePhase();
    this.gameScreen.update();
    this.generateEnemyBullet();
    this.playerBullets.forEach((playerBullet) => playerBullet.update())
    this.enemyBullets.forEach((enemyBullet) => enemyBullet.update())
    this.removePlayerBullets();
    this.removeEnemyBullets();
    this.removeEntities();
    this.entities.forEach((entity) => entity.update());
    this.player.update();
    this.frames++;
    this.time++;
  }

  playGuide() {
    this.ctx.drawImage(this.controls, 0, 0, 500, 216, (this.cvs.width / 2 - this.controls.width / 2), 70, 500, 216);
  }

  removePlayerBullets() {
    this.playerBullets = this.playerBullets.filter((playerBullet) => playerBullet.active)
  }

  removeEnemyBullets() {
    this.enemyBullets = this.enemyBullets.filter((enemyBullet) => enemyBullet.active)
  }

  removeEntities() {
    this.entities = this.entities.filter((entity) => entity.active)
  }

  prompt() {
    this.ctx.lineWidth = 2;
    this.ctx.textAlign = "center";
    this.ctx.font = '100px Silver';
    this.ctx.fillStyle = "#ffffff"
    this.ctx.fillText('PRESS X TO START', this.cvs.width / 2, this.cvs.height / 2 + 30);
    this.ctx.strokeText('PRESS X TO START', this.cvs.width / 2, this.cvs.height / 2 + 30);
  }

  resetGame() {
    this.playerBullet = [];
    this.enemyBullets = [];
    this.entities = [];
    this.player.resetPos();
    this.frames = 0;
  }

  gameOver() {
    this.resetGame();
    this.ctx.lineWidth = 2;
    this.ctx.textAlign = "center";
    this.ctx.font = '100px Silver';
    this.ctx.fillStyle = "#ffffff"
    this.ctx.fillText('UNFORTUNATE', this.cvs.width / 2, this.cvs.height / 2);
    this.ctx.strokeText('UNFORTUNATE', this.cvs.width / 2, this.cvs.height / 2);
    
    this.ctx.lineWidth = 2;
    this.ctx.textAlign = "center";
    this.ctx.font = '70px Silver';
    this.ctx.fillStyle = "#ffffff"
    this.ctx.fillText(`Your Score: ${this.score.value}`, this.cvs.width / 2, this.cvs.height / 2 + 120);
    this.ctx.strokeText(`Your Score: ${this.score.value}`, this.cvs.width / 2, this.cvs.height / 2 + 120);
    
    this.ctx.lineWidth = 2;
    this.ctx.textAlign = "center";
    this.ctx.font = '50 Silver';
    this.ctx.fillStyle = "#ffffff"
    this.ctx.fillText('Press Z to restart', this.cvs.width / 2, this.cvs.height / 2 + 170);
    this.ctx.strokeText('Press Z to restart', this.cvs.width / 2, this.cvs.height / 2 + 170);
  }

  loop() {
    if (this.currentState === this.RUNNING_GAME) {
      this.update();
      this.draw();
    } else if (this.currentState === this.IDLE_GAME) {
      this.score.value = 0;
      this.gameScreen.draw();
      this.playGuide();
      this.player.draw();
      this.prompt();
    } else if (this.currentState === this.END_GAME) {
      this.gameScreen.draw();
      this.gameOver();
    }

    window.requestAnimationFrame(this.loop);
  }
}

export default Game;