import MobEnemy from './mob_enemy';
import Wave02Enemy from './wave_02_enemy';
import Direction from './direction';
import Bullet from './bullet';

export const enemyType01 = (game, spawnTime) => {
  let x = -20;
  let y = game.cvs.height / 10;
  let r = 20;
  let speed = 4;
  let angle = 0;
  let shotDelay = 20;
  let color = 'red';
  let bulletColor = '#25fac4';
  let circle = new MobEnemy(game, x, y, r, color, bulletColor, speed, angle, shotDelay, spawnTime)

  return circle;
}

export const enemyType02 = (game, spawnTime) => {
  let x = game.cvs.width + 20;
  let y = game.cvs.height / 10 + 60;
  let r = 20;
  let speed = -2;
  let angle = 0;
  let shotDelay = 20;
  let color = '#836FAA';
  let bulletColor = '#25fac4';
  let circle = new MobEnemy(game, x, y, r, color, bulletColor, speed, angle, shotDelay, spawnTime)

  return circle;
}

export const enemyType03 = (game, spawnTime) => {
  let x = 60;
  let y = -20;
  let r = 20;
  let speed = 5;
  let shotDelay = 5;
  let color = '#836FAA';
  let bulletColor = '#ca2c92';
  let startDest = { x: 200, y: 200 };
  let endDest = { x: -40, y: 500 };
  let angle = Direction.getAngle({ x, y }, startDest);
  let circle = new Wave02Enemy(game, x, y, r, color, bulletColor, speed, angle, shotDelay, spawnTime, startDest, endDest)

  return circle;
}
export const enemyType04 = (game, spawnTime) => {
  let x = game.cvs.width - 40;
  let y = -20;
  let r = 20;
  let speed = 5;
  let shotDelay = 5;
  let color = '#836FAA';
  let bulletColor = 'white';
  let startDest = { x: game.cvs.width - 200, y: 200 };
  let endDest = { x: game.cvs.width + 40, y: 500 };
  let angle = Direction.getAngle({ x, y }, startDest);
  let circle = new Wave02Enemy(game, x, y, r, color, bulletColor, speed, angle, shotDelay, spawnTime, startDest, endDest)

  return circle;
}

export const enemyType05 = (game, spawnTime) => {
  let r = 20;
  let minSpawnRange = game.x + r;
  let maxSpawnRange = minSpawnRange + game.width - r;
  let x = Math.floor(Math.random() * (maxSpawnRange - minSpawnRange + 1)) + minSpawnRange;
  let y = -20;
  let speed = 5;
  let shotDelay = 50;
  let color = '#836FAA';
  let bulletColor = 'white';
  let angle = 90;
  let circle = new MobEnemy(game, x, y, r, color, bulletColor, speed, angle, shotDelay, spawnTime);

  circle.shoot = () => {
    if (circle.spawnTime <= circle.game.time
      && circle.game.frames % circle.shotDelay === 0
    ) {
      let angleT = Direction.getAngle(circle, circle.game.player);
      let speed = 3;
      let shadowBlur = 8;
      let shadowColor = '#FF0000';
      let r = 10;

      circle.game.enemyBullets.push(new Bullet(
        circle.game,
        circle.x,
        circle.y,
        circle.bulletColor,
        shadowBlur,
        shadowColor,
        speed,
        r,
        angleT
      )
      );
    }

    circle.update = () => {
      let vectorY = Math.sin(circle.angle);
      if (circle.game.time >= circle.spawnTime) {
        circle.y += vectorY * circle.speed;
        circle.checkInBounds();
        circle.checkCollision();
      }
    }
  }    


  return circle;
}