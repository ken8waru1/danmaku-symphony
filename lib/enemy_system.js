import CircleEnemy from './circle_enemy';

export const circle1 = (game, spawnTime) => {
  let x = 0;
  let y = game.cvs.height / 2;
  let r = 20;
  let speed = 4;
  let angle = 0;
  let shotDelay = 20;
  let color = 'red';
  let circle = new CircleEnemy(game, x, y, r, color, speed, angle, shotDelay, spawnTime)

  return circle;
}

export const circle2 = (game, spawnTime) => {
  let x = game.cvs.width + 20;
  let y = game.cvs.height / 2 + 60;
  let r = 20;
  let speed = -2;
  let angle = 0;
  let shotDelay = 20;
  let color = '#836FAA';
  let circle = new CircleEnemy(game, x, y, r, color, speed, angle, shotDelay, spawnTime)

  return circle;
}