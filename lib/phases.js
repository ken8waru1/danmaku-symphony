import { circle1, circle2 } from './enemy_system';

export const phase01 = (game) => {
  // debugger
  let count = 0;
  let spawnTime = 100;
  while (count < 5) {
    // debugger
    game.entities.push(circle1(game, spawnTime));
    game.entities.push(circle2(game, spawnTime));
    count++;
    spawnTime += 100;
  }
}