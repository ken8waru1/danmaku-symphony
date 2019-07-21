import Player from './player';
// import MobEnemy from './mob_enemy';
import GameScreen from './game_screen';
import { hexagon } from './enemy_system';
import MobEnemy from './mob_enemy';

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
  
  checkGameOver() {
    switch (this.currentState) {
      case END_GAME:

        break;
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
      // debugger
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

  loop() {
    this.update();
    this.draw();
    this.player.draw();
    this.frames++;
    window.requestAnimationFrame(this.loop);
  }
}

export default Game;