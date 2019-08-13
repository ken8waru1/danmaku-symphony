import CreateShotA1 from './create_shot_a1';
import Direction from './direction';
import hitSFX from '../assets/se_damage01.wav';

class CircleEnemy {
  constructor(game, x, y, r, color, speed, angle, shotDelay, spawnTime) {
    this.health = 500;
    this.angle = angle;
    this.shotDelay = shotDelay;
    this.spawnTime = spawnTime;
    this.speed = speed;
    this.color = color;
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
    this.checkCollision();
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

  checkCollision() {
    let hitBoxYTop = this.y - this.r;
    let hitBoxYBottom = this.y + this.r;
    let hitBoxXLeft = this.x - this.r;
    let hitBoxXRight = this.x + this.r;
    this.game.playerBullets.forEach(playerBullet => {
      let playerBulletLeft = playerBullet.x - playerBullet.radius;
      let playerBulletRight = playerBullet.x + playerBullet.radius;
      let playerBulletTop = playerBullet.y - playerBullet.radius;
      let playerBulletBottom = playerBullet.y + playerBullet.radius;
      if (playerBulletTop <= hitBoxYBottom
        && playerBulletBottom >= hitBoxYTop
        && playerBulletLeft <= hitBoxXRight
        && playerBulletRight >= hitBoxXLeft) {
          let hit = new Audio();
          hit.src = hitSFX;
          hit.play();
          this.health -= playerBullet.dmg;
          if (this.health <= 0) {
            this.active = false;
          }
          playerBullet.active = false;
      }
    })
  }

  draw() {
    if (this.spawnTime <= this.game.time) {
      let ctx = this.game.ctx;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.strokeStyle = 'white';
      ctx.fill();
      ctx.stroke();
    }
  }

  shoot() {
    if (this.game.frames % this.shotDelay === 0) {
      let angleT = Direction.getRadians(90);
      let speed = 5;
      let r = 10;
      this.game.enemyBullets.push(new CreateShotA1(this.game, this.x, this.y, speed, r, angleT));
    }    
  }
}

export default CircleEnemy;