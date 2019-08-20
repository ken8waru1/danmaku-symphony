class Bullet {
  constructor(
    game, 
    x, 
    y, 
    color, 
    shadowBlur, 
    shadowColor, 
    speed, 
    r, 
    angle,
    dmg = 1
  ) {
      this.game = game;
      this.x = x;
      this.y = y;
      this.speed = speed + (speed * game.difficulty);
      this.r = r;
      this.angle = angle;
      this.active = true;
      this.color = color;
      this.shadowBlur = shadowBlur;
      this.shadowColor = shadowColor;
      this.dmg = dmg;
  }

  draw() {
    let ctx = this.game.ctx;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.shadowBlur = this.shadowBlur;
    ctx.shadowColor = this.shadowColor;
    ctx.fill();
    ctx.restore();
  }

  checkInBounds() {
    let screenLeft = this.game.x
    let screenRight = this.game.x + this.game.width;
    let screenTop = this.game.y
    let screenBottom = this.game.y + this.game.height;
    if (this.x + this.r <= screenLeft
      || this.x - this.r >= screenRight
      || this.y + this.r <= screenTop
      || this.y - this.r >= screenBottom) {
      this.active = false;
    }
  }

  update() {
    this.checkInBounds();
    let vectorX = Math.cos(this.angle);
    let vectorY = Math.sin(this.angle);
    this.x += vectorX * this.speed;
    this.y += vectorY * this.speed;
  }
}

export default Bullet;