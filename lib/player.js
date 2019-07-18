class Player {
  constructor(cvs, ctx) {
    this.cvs = cvs,
    this.ctx = ctx
    this.x = this.cvs.width / 2;
    this.y = this.cvs.height - 180;
  }


  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = 'white';
    this.ctx.moveTo(this.x, this.y - 20);
    this.ctx.lineTo(this.x - 15, this.y + 20);
    this.ctx.lineTo(this.x, this.y);
    this.ctx.lineTo(this.x + 15, this.y + 20);
    this.ctx.closePath();
    this.ctx.fill();
  }
}

export default Player;