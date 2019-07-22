import backgroundImage from '../assets/bg.png'

class GameScreen {
  constructor(game) {
    this.cvs = game.cvs;
    this.ctx = game.ctx;
    this.width = this.cvs.width;
    this.height = this.cvs.height;
    this.x = 0;
    this.y = 0;
    this.dy = 4;
  }

  draw() {
    const background = new Image();
    background.src = backgroundImage;
    this.ctx.drawImage(background, 0, 0, 512, 128, this.x, this.y, this.cvs.width, this.cvs.height)
    this.ctx.drawImage(background, 0, 0, 512, 128, this.x, this.y - this.cvs.height, this.cvs.width, this.cvs.height)
  }

  update() {
    this.y = (this.y + this.dy) % (this.height)
  }
}

export default GameScreen;