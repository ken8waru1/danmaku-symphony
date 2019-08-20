class Score {
  constructor(game) {
    this.game = game;
    this.cvs = game.cvs;
    this.ctx = game.ctx;
    this.value = 0;
  }

  draw() {
    this.ctx.lineWidth = 2;
    this.ctx.textAlign = "end";
    this.ctx.font = '300 50px Silver';
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillText(`Score: ${this.value}`, this.cvs.width - 20, 30);
    this.ctx.strokeText(`Score: ${this.value}`, this.cvs.width - 20, 30);
    
    this.ctx.lineWidth = 2;
    this.ctx.textAlign = "end";
    this.ctx.font = '300 50px Silver';
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillText(`Lives: ${this.game.player.lives}`, this.cvs.width - 20, 80);
    this.ctx.strokeText(`Lives: ${this.game.player.lives}`, this.cvs.width - 20, 80);
  }

  reset() {
    this.value = 0;
  }
}

export default Score;