class GameScreen {
  constructor(cvs, ctx) {
    this.cvs = cvs,
    this.ctx = ctx,
    this.width = cvs.width / 2;
    this.height = cvs.height;
  }

  draw() {
    this.ctx.fillStyle = '#000000';
    const midpoint = this.cvs.width / 2 - this.width / 2
    this.ctx.fillRect(midpoint, 0, this.width, this.cvs.height);
  }
}

export default GameScreen;