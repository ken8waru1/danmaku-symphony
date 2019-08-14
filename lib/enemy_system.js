import MobEnemy from './mob_enemy';
import Wave02Enemy from './wave_02_enemy';
import Direction from './direction';

export const enemyType01 = (game, spawnTime) => {
  let x = -20;
  let y = game.cvs.height / 10;
  let r = 20;
  let speed = 4;
  let angle = 0;
  let shotDelay = 20;
  let color = 'red';
  let bulletColor = '#255bfa';
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
  let bulletColor = '#255bfa';
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
  let bulletColor = '#255bfa';
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
