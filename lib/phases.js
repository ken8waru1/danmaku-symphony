import { circle1, circle2 } from './enemy_system';

export const phase00 = (game) => {
  game.playerBullet = [];
  game.enemyBullets = [];
  game.entities = [];
  game.player.resetPos();
  game.frames = 0;
  game.time = 0;
}
export const phase01 = (game) => {
  let count = 0;
  let spawnTime = 100;
  while (count < 5) {
    game.entities.push(circle1(game, spawnTime));
    game.entities.push(circle2(game, spawnTime));
    count++;
    spawnTime += 100;
  }
}