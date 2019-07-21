class GameScreen {
  constructor(game) {
    this.cvs = game.cvs;
    this.ctx = game.ctx;
    this.width = this.cvs.width;
    this.height = this.cvs.height;
    this.x = this.cvs.width / 2 - this.width / 2;
    this.y = 0;
  }

  draw() {
    this.ctx.fillStyle = '#1a1a1a';
    this.ctx.fillRect(this.x, this.y, this.width, this.cvs.height);
  }

  update() {

  }
}

export default GameScreen;