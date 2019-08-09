class CreateShotA1 {
  constructor(game, x, y, speed, angle, delay) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.angle = angle;
    this.delay = delay;
    this.active = true;
  }

  draw() {
    let ctx = this.game.ctx;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
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

  update() {
    this.checkInBounds();
    let vectorX = Math.cos(this.angle);
    let vectorY = Math.sin(this.angle);
    // debugger
    this.x += vectorX * this.speed;
    this.y += vectorY * this.speed;
  }
}

export default CreateShotA1;