import { 
  playerBulletA, 
  playerBulletB, 
  playerBulletC, 
  playerBulletAF, 
  playerBulletBF, 
  playerBulletCF
} from './particle_system';

import gameover from '../assets/game_over.wav'

const CONTROLS = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  Z: 90,
  SHIFT: 16
}

class Player {
  constructor(game) {
    this.game = game;
    this.cvs = game.cvs;
    this.ctx = game.ctx;
    this.x = this.cvs.width / 2;
    this.y = this.cvs.height - 170;
    this.width = 30;
    this.height = 40;
    this.radius = 4;
    this.movement = 6;
    this.focusMovement = 3;
    this.keyDown = {
      UP: false,
      DOWN: false,
      LEFT: false,
      RIGHT: false,
      SHIFT: false,
      Z: false
    }
  }

  trackMovements() {
    document.addEventListener('keydown', (e) => {
      if (this.game.currentState === this.game.IDLE_GAME && e.keyCode === 88 ) {
        this.game.currentState = this.game.RUNNING_GAME;

      } else if (this.game.currentState === this.game.END_GAME && e.keyCode === CONTROLS.Z) {
        this.game.currentState = this.game.IDLE_GAME;
      }

      switch (e.keyCode) {
        case CONTROLS.UP: 
          this.keyDown.UP = true;
          break;
        case CONTROLS.DOWN: 
          this.keyDown.DOWN = true;
          break;
        case CONTROLS.LEFT:
          this.keyDown.LEFT = true;
          break;
        case CONTROLS.RIGHT:
          this.keyDown.RIGHT = true;
          break;
        case CONTROLS.SHIFT:
          this.keyDown.SHIFT = true;
          break;
        case CONTROLS.Z:
          this.keyDown.Z = true;
          break;
      }
    });

    document.addEventListener('keyup', (e) => {
      switch (e.keyCode) {
        case CONTROLS.UP:
          this.keyDown.UP = false;
          break;
        case CONTROLS.DOWN:
          this.keyDown.DOWN = false;
          break;
        case CONTROLS.LEFT:
          this.keyDown.LEFT = false;
          break;
        case CONTROLS.RIGHT:
          this.keyDown.RIGHT = false;
          break;
        case CONTROLS.SHIFT:
          this.keyDown.SHIFT = false;
        case CONTROLS.Z:
          this.keyDown.Z = false;
      }
    })
  }

  update() {

    if (this.keyDown.UP) this.y -= (this.keyDown.SHIFT ? this.focusMovement : this.movement);
    if (this.keyDown.DOWN) this.y += (this.keyDown.SHIFT ? this.focusMovement : this.movement);
    if (this.keyDown.LEFT) this.x -= (this.keyDown.SHIFT ? this.focusMovement : this.movement);
    if (this.keyDown.RIGHT) this.x += (this.keyDown.SHIFT ? this.focusMovement : this.movement);
    if (this.keyDown.Z && !this.keyDown.SHIFT) { 
      this.game.playerBullets.push(playerBulletA(this));
      this.game.playerBullets.push(playerBulletB(this));
      this.game.playerBullets.push(playerBulletC(this));
    }
    if (this.keyDown.Z && this.keyDown.SHIFT) { 
      this.game.playerBullets.push(playerBulletAF(this));
      this.game.playerBullets.push(playerBulletBF(this));
      this.game.playerBullets.push(playerBulletCF(this));
    }
    this.checkInBounds();
    this.checkCollision();
  }

  checkInBounds() {
    let screenLeft = this.game.x + this.width / 2;
    let screenRight = this.game.x + this.game.width + this.width / 2;
    let screenTop = this.game.y;
    let screenBottom = this.game.y + this.game.height;

    if (this.x <= screenLeft) {
      this.x = screenLeft
    }

    if (this.x + this.width >= screenRight) {
      this.x = screenRight - this.width;
    } 
    
    if (this.y <= screenTop) {
      this.y = screenTop;
    } 

    if (this.y + this.height >= screenBottom) {
      this.y = screenBottom - this.height;
    }
  }

  checkCollision() {
    let hitBoxYTop = this.y + 16;
    let hitBoxYBottom = hitBoxYTop + 8;
    let hitBoxXLeft = this.x - 4;
    let hitBoxXRight = this.x + 4;
    this.game.enemyBullets.forEach((enemyBullet) => {
      let enemyBulletLeft = enemyBullet.x - enemyBullet.radius;
      let enemyBulletRight = enemyBullet.x + enemyBullet.radius;
      let enemyBulletTop = enemyBullet.y - enemyBullet.radius;
      let enemyBulletBottom = enemyBullet.y + enemyBullet.radius;
      if (enemyBulletTop <= hitBoxYBottom
        && enemyBulletBottom >= hitBoxYTop
        && enemyBulletLeft <= hitBoxXRight
        && enemyBulletRight >= hitBoxXLeft) {
          let gameOverSFX = new Audio();
          gameOverSFX.src = gameover;
          gameOverSFX.play();
          this.game.currentState = this.game.END_GAME;
      }
    })
  }

  resetPos() {
    this.x = this.cvs.width / 2;
    this.y = this.cvs.height - 170;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = 'white';
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x - 15, this.y + 40);
    this.ctx.lineTo(this.x, this.y + 20);
    this.ctx.lineTo(this.x + 15, this.y + 40);
    this.ctx.closePath();
    this.ctx.fill();

    if (this.keyDown.SHIFT) {
      let center = { x: this.x, y: this.y + this.height / 2 }
      this.ctx.beginPath();
      this.ctx.arc(center.x, center.y, this.radius, 0, 2 * Math.PI);
      this.ctx.save();
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = 'white';
      this.ctx.fillStyle = '#98b6fa';
      this.ctx.fill();
      this.ctx.restore();
    }
  }

}

export default Player;