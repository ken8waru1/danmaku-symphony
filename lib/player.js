import { 
  playerBulletA, 
  playerBulletB, 
  playerBulletC, 
  playerBulletAF, 
  playerBulletBF, 
  playerBulletCF
} from './particle_system';

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
    this.cvs = game.cvs,
    this.ctx = game.ctx,
    this.x = this.cvs.width / 2;
    this.y = this.cvs.height - 170;
    this.width = 30;
    this.height = 40;
    this.radius = 7.5;
    this.movement = 5;
    this.focusMovement = 2;
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
      this.game.currentState = this.game.RUNNING_GAME
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
  }

  checkInBounds() {
    let screenLeft = this.game.gameScreen.x + this.width / 2;
    let screenRight = this.game.gameScreen.x + this.game.gameScreen.width + this.width / 2;
    let screenTop = this.game.gameScreen.y;
    let screenBottom = this.game.gameScreen.y + this.game.gameScreen.height;

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

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = 'white';
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x - 15, this.y + 40);
    this.ctx.lineTo(this.x, this.y + 20);
    this.ctx.lineTo(this.x + 15, this.y + 40);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();

    if (this.keyDown.SHIFT) {
      let center = { x: this.x, y: this.y + this.height / 2 }
      this.ctx.beginPath();
      this.ctx.arc(center.x, center.y, this.radius, 0, 2 * Math.PI);
      this.ctx.save();
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = 'red';
      this.ctx.fillStyle = 'white';
      this.ctx.fill();
      this.ctx.restore();
    }
  }

}

export default Player;