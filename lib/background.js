import backgroundImg from '../assets/background.png';

class Background {
  constructor(game) {
    this.cvs = game.cvs;
    this.ctx = game.ctx;
    this.bg = new Image();
    this.bg.src = backgroundImg;
    this.sX = 0;
    this.xY = 0;
    this.w = 512;
    this.h = 128;
    this.x = 0;
    this.y = 0;
    this.dx = 2;
  }

  draw() {
    this.ctx.drawImage(this.bg, this.sX, this.sY, this.w, this.h, this.x, this.y, this.cvs.width, this.cvs.height);
  }

  update() {
    this.y = (this.y - this.dx) % this.h;
  }
}

export default Background;