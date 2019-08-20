import { 
  enemyType01, 
  enemyType02, 
  enemyType03, 
  enemyType04 
} from './enemy_system';

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
    game.entities.push(enemyType01(game, spawnTime));
    game.entities.push(enemyType02(game, spawnTime));
    count++;
    spawnTime += 100;
  }
  count = 0;
}

export const phase02 = (game) => {
  let count = 0;
  let spawnTime = 1000;

  while (count < 10) {
    game.entities.push(enemyType03(game, spawnTime));
    game.entities.push(enemyType04(game, spawnTime));
    count++;
    spawnTime += 100;
  }
  count = 0;
}