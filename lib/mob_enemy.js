import Bullet from './bullet';
import Direction from './direction';
import hitSFX from '../assets/se_damage01.wav';
import deathSFX from '../assets/se_tan02.wav';
import Bomb from './bomb';

class MobEnemy {
  constructor(
    game, 
    x, 
    y, 
    r,
    color, 
    bulletColor, 
    speed, 
    angle,
    shotDelay, 
    spawnTime
  ) {
      this.health = 10 + 10 * game.difficulty;
      this.angle = angle;
      this.shotDelay = shotDelay;
      this.spawnTime = spawnTime;
      this.speed = speed;
      this.color = color;
      this.bulletColor = bulletColor;
      this.game = game;
      this.x = x;
      this.y = y;
      this.r = r;
      this.active = true;
  }

  update() {
    let vectorX = Math.cos(this.angle);
    let vectorY = Math.sin(this.angle);
    if (this.game.time >= this.spawnTime) {
      this.x += vectorX * this.speed;
      this.y += vectorY * this.speed;
      this.checkInBounds();
      this.checkCollision();
    }
  }

  checkInBounds() {
    let screenLeft = this.game.x
    let screenRight = this.game.x + this.game.width;
    let screenTop = this.game.y
    let screenBottom = this.game.y + this.game.height;
    if (this.x + this.r * 2 <= screenLeft
      || this.x - this.r * 2 >= screenRight
      || this.y + this.r * 2 <= screenTop
      || this.y - this.r >= screenBottom) {
      this.active = false;
    }
  }

  checkCollision() {
    let hitBoxYTop = this.y - this.r;
    let hitBoxYBottom = this.y + this.r;
    let hitBoxXLeft = this.x - this.r;
    let hitBoxXRight = this.x + this.r;
    this.game.playerBullets.forEach(playerBullet => {
      let playerBulletLeft = playerBullet.x - playerBullet.r;
      let playerBulletRight = playerBullet.x + playerBullet.r;
      let playerBulletTop = playerBullet.y - playerBullet.r;
      let playerBulletBottom = playerBullet.y + playerBullet.r;
      if (playerBulletTop <= hitBoxYBottom
        && playerBulletBottom >= hitBoxYTop
        && playerBulletLeft <= hitBoxXRight
        && playerBulletRight >= hitBoxXLeft
        &&playerBullet.active) {
          let hit = new Audio();
          hit.src = hitSFX;
          if (!playerBullet instanceof Bomb) {
            playerBullet.active = false;
          }
          if (this.game.frames % 5 === 0) {
            hit.play();
          }
          this.health -= playerBullet.dmg;
          if (this.health <= 0) {
            let death = new Audio();
            death.src = deathSFX;
            death.play();
            this.active = false;
            this.game.score.value += 1000;
          }
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
    if (this.spawnTime <= this.game.time 
      && this.game.frames % this.shotDelay === 0
    ) {
      let angleT = Direction.getRadians(90);
      let speed = 5;
      let shadowBlur = 5;
      let shadowColor = 'white';
      let r = 10;

      this.game.enemyBullets.push(new Bullet(
        this.game, 
        this.x, 
        this.y,
        this.bulletColor, 
        shadowBlur, 
        shadowColor, 
        speed, 
        r, 
        angleT
        )
      );
    }    
  }
}

export default MobEnemy;