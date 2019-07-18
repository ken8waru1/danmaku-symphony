const CONTROLS = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
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
    this.height = 30;
    this.movement = 3;
    this.focusMovement = 1;
    this.keyDown = {
      UP: false,
      DOWN: false,
      LEFT: false,
      RIGHT: false,
      SHIFT: false
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
      }
    })
  }

  update() {
    if (this.keyDown.UP) this.y -= (this.keyDown.SHIFT ? this.focusMovement : this.movement);
    if (this.keyDown.DOWN) this.y += (this.keyDown.SHIFT ? this.focusMovement : this.movement);
    if (this.keyDown.LEFT) this.x -= (this.keyDown.SHIFT ? this.focusMovement : this.movement);
    if (this.keyDown.RIGHT) this.x += (this.keyDown.SHIFT ? this.focusMovement : this.movement);
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
    this.ctx.lineTo(this.x - 15, this.y + 30);
    this.ctx.lineTo(this.x, this.y + 15);
    this.ctx.lineTo(this.x + 15, this.y + 30);
    this.ctx.closePath();
    this.ctx.fill();
  }

}

export default Player;