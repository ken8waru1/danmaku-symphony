import CreateShotA1 from './create_shot_a1';
import Direction from './direction';

class CircleEnemy {
  constructor(game, x, y, r, speed, angle, spawnTime) {
    this.health = 100;
    this.angle = angle;
    this.spawnTime = spawnTime;
    this.speed = speed;
    this.game = game;
    this.x = x;
    this.y = y;
    this.r = r;
    this.active = true;
  }

  update() {
    // if (this.x - this.r >= this.game.width) {
    //   this.velocity = -this.velocity;
    // } else if (this.x + this.r <= 0) {
    //   this.velocity = Math.abs(this.velocity);
    // }
    let vectorX = Math.cos(this.angle);
    if (this.game.time >= this.spawnTime) {
      this.x += vectorX * this.speed;
    }
    this.checkInBounds();
  }

  checkInBounds() {
    let screenLeft = this.game.x
    let screenRight = this.game.x + this.game.width;
    let screenTop = this.game.y
    let screenBottom = this.game.y + this.game.height;
    if (this.x + this.r * 2 <= screenLeft
      || this.x - this.r * 2 >= screenRight
      || this.y <= screenTop
      || this.y >= screenBottom) {
      this.active = false;
    }
  }

  shoot() {
    // let angleT = Direction.getAngleToPlayer(this, this.game.player);
    let angleT = Direction.getRadians(90);
    this.game.enemyBullets.push(new CreateShotA1(this.game, this.x, this.y, 5, angleT));
    // this.game.enemyBullets.push(new CreateShotA1(this.game, this.x, this.y, 5, angleT + 30 * (Math.PI / 180)));
    // this.game.enemyBullets.push(new CreateShotA1(this.game, this.x, this.y, 5, angleT - 30 * (Math.PI / 180)));
    
  }
}

export default CircleEnemy;