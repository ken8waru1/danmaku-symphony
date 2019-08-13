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
    this.dmg = 1;
  }

  checkInBounds() {
    let screenLeft = this.game.x
    let screenRight = this.game.x + this.game.width;
    let screenTop = this.game.y
    let screenBottom = this.game.y + this.game.height;
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