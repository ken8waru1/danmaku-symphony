class GameScreen {
  constructor(cvs, ctx) {
    this.cvs = cvs,
    this.ctx = ctx,
    this.width = cvs.width / 2;
    this.height = cvs.height;
    this.x = this.cvs.width / 2 - this.width / 2,
    this.y = 0;
  }

  draw() {
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(this.x, this.y, this.width, this.cvs.height);
  }
}

export default GameScreen;