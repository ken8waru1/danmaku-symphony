class Bomb {
  constructor(
    game,
    x,
    y,
    color,
    r,
    shadowBlur,
    shadowColor,
    dmg = 9999
  ) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.color = color;
    this.r = r;
    this.dmg = dmg;
    this.shadowBlur = shadowBlur;
    this.shadowColor = shadowColor;
    this.active = true;
  }


  draw() {
    let ctx = this.game.ctx;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.save();
    // let grd = ctx.createRadialGradient(this.x, this.y, this.r, 1000, 1000, 1000);
    // grd.addColorStop(0, 'white');
    // grd.addColorStop(1, 'red');
    ctx.fillStyle = this.color;
    ctx.shadowBlur = this.shadowBlur;
    ctx.shadowColor = this.shadowColor;
    ctx.fill();
    ctx.restore();
  }

  update() {
    this.r += 30;
    this.checkCollision();
    this.checkInBounds();
  }

  checkInBounds() {
    if (this.r > 1000) {
      this.active = false;
      this.game.player.bombCooldown = false;
    }
  }

  checkCollision() {
    let hitBoxYTop = this.y - this.r;
    let hitBoxYBottom = this.y + this.r;
    let hitBoxXLeft = this.x - this.r;
    let hitBoxXRight = this.x + this.r;
    this.game.enemyBullets.forEach(enemyBullet => {
      let enemyBulletLeft = enemyBullet.x - enemyBullet.r;
      let enemyBulletRight = enemyBullet.x + enemyBullet.r;
      let enemyBulletTop = enemyBullet.y - enemyBullet.r;
      let enemyBulletBottom = enemyBullet.y + enemyBullet.r;
      if (enemyBulletTop <= hitBoxYBottom
        && enemyBulletBottom >= hitBoxYTop
        && enemyBulletLeft <= hitBoxXRight
        && enemyBulletRight >= hitBoxXLeft
        && enemyBullet.active) {
        enemyBullet.active = false;
      }
    })
  }
}

export default Bomb;