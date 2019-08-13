class CreateShotA1 {
  constructor(game, x, y, color, speed, r, angle) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.r = r;
    this.angle = angle;
    this.active = true;
    this.color = color;
  }

  draw() {
    let ctx = this.game.ctx;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.save();
    ctx.fillStyle = '#255bfa';
    ctx.shadowBlur = 5;
    ctx.shadowColor = 'white';
    ctx.fill();
    ctx.restore();
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