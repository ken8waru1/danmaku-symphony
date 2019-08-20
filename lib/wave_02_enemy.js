import MobEnemy from './mob_enemy';
import Direction from './direction';
import Bullet from './bullet';

class Wave02Enemy extends MobEnemy {
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
    spawnTime,
    startDest,
    endDest
  ) {
    super(
      game,
      x,
      y,
      r,
      color,
      bulletColor,
      speed,
      angle,
      shotDelay,
      spawnTime,
    )
    this.shotCount = 3;
    this.startDest = startDest;
    this.endDest = endDest;
    this.health = 20 + 20 * game.difficulty;
  }

  determineTrajectory() {
    if (Direction.checkDestination({ x: this.x, y: this.y }, this.startDest)) {
      this.angle = Direction.getAngle(this.startDest, this.endDest);
    }
  }

  update() {
    this.determineTrajectory();
    let vectorX = Math.cos(this.angle);
    let vectorY = Math.sin(this.angle);
    if (this.game.time >= this.spawnTime) {
      this.x += vectorX * this.speed;
      this.y += vectorY * this.speed;
    }
    this.checkInBounds();
    this.checkCollision();
  }

  shoot() {
    if (Direction.checkDestination(this, this.startDest)) {
      let angleT = Direction.getAngle(this, this.game.player);
      let speed = 5;
      let shadowBlur = 5;
      let shadowColor = 'red';
      let r = 10;
      let offset = 0;
      while (this.shotCount > 0) {
        switch(this.shotCount) {
          case (2): 
            offset = 6;
            break;
          case (1):
            offset = -6;
        }
        this.game.enemyBullets.push(new Bullet(
            this.game, 
            this.x, 
            this.y, 
            this.bulletColor,
            shadowBlur,
            shadowColor,
            speed,
            r,
            angleT + offset * (Math.PI / 180)
          )
        );
        this.shotCount -= 1;
      }



      // this.game.enemyBullets.push(new Bullet(this.game, this.x, this.y, 5, angleT + 30 * (Math.PI / 180)));
      // this.game.enemyBullets.push(new Bullet(this.game, this.x, this.y, 5, angleT - 30 * (Math.PI / 180)));
    }
  }
}

export default Wave02Enemy;