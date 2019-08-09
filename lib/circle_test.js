import CreateShotA1 from './create_shot_a1';
import Trig from './trig';

class CircleEnemy {
  constructor(game, x, y, r) {
    this.health = 100;
    this.game = game;
    this.x = x;
    this. y = y;
    this. r = r;
    this.active = true;
  }

  update() {

  }

  shoot() {
    let angleT = Trig.getAngleToPlayer(this, this.game.player);
    return new CreateShotA1(this.game, this.x, this.y, 20, angleT);
  }
}

export default CircleEnemy;