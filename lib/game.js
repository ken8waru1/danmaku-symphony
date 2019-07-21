import Player from './player';
// import MobEnemy from './mob_enemy';
import GameScreen from './game_screen';
import { hexagon } from './enemy_system';
import MobEnemy from './mob_enemy';
import Background from './background'

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

  generateEnemies() {
    if (this.frames % 200 === 0) {
      this.entities.push(hexagon(this))
    } 
  }

  draw() {
    this.ctx.fillStyle = '#866286';
    this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height);
    this.gameScreen.draw();
    this.entities.forEach((entity) => entity.draw());
    this.player.draw();
    this.playerBullets.forEach((playerBullet) => playerBullet.draw());
    this.enemyBullets.forEach((enemyBullet) => enemyBullet.draw())
  }

  update() {
    this.gameScreen.update();
    this.playerBullets.forEach((playerBullet) => playerBullet.update())
    this.enemyBullets.forEach((enemyBullet) => enemyBullet.update())
    this.checkCollision();
    this.removePlayerBullets();
    this.removeEnemyBullets();
    this.removeEntities();
    this.generateEnemies();
    this.entities.forEach((entity) => entity.update());
    this.player.update();
  }

  checkCollision() {
    this.entities.forEach((entity) => {
      if (entity instanceof MobEnemy) {
        entity.checkCollision();
      }
    })
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
    this.ctx.fillText('PRESS ANY KEY TO START', this.cvs.width / 2, this.cvs.height / 2);
    this.ctx.strokeText('PRESS ANY KEY TO START', this.cvs.width / 2, this.cvs.height / 2);
  }

  gameOver() {
    this.ctx.lineWidth = 2;
    this.ctx.textAlign = "center";
    this.ctx.font = '100px Silver';
    this.ctx.fillStyle = "#ffffff"
    this.ctx.fillText('UNFORTUNATE', this.cvs.width / 2, this.cvs.height / 2);
    this.ctx.strokeText('UNFORTUNATE', this.cvs.width / 2, this.cvs.height / 2);
  }

  loop() {
    if (this.currentState === this.RUNNING_GAME) {
      this.update();
      this.draw();
      this.frames++;
    } else if (this.currentState === this.IDLE_GAME) {
      this.gameScreen.draw();
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