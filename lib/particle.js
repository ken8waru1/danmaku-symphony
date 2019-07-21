class Particle {
  constructor(game, diameter, x, y) {
    this.game = game;
    this.diameter = diameter;
    this.radius = this.diameter / 2;
    this.cvs = game.cvs;
    this.ctx = game.ctx;
    this.active = true;
    this.x = x;
    this.y = y;
  }

  checkInBounds() {
    let screenLeft = this.game.gameScreen.x
    let screenRight = this.game.gameScreen.x + this.game.gameScreen.width;
    let screenTop = this.game.gameScreen.y
    let screenBottom = this.game.gameScreen.y + this.game.gameScreen.height;
    if (this.x <= screenLeft
      || this.x >= screenRight
      || this.y <= screenTop
      || this.y >= screenBottom) {
        this.active = false;
    }
  }

  draw() {

  }

  update() {

  }
}

export default Particle;