import CircleEnemy from './circle_enemy';

export const circle1 = (game, spawnTime) => {
  let circle = new CircleEnemy(game, 0, game.cvs.height / 2, 30, 2, 0, spawnTime)

  circle.draw = () => {
    if (circle.spawnTime <= game.time) {
      let ctx = game.ctx;
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
      ctx.fillStyle = '#836FAA';
      ctx.strokeStyle = 'white';
      ctx.fill();
      ctx.stroke();
    }
  }

  return circle;
}

export const circle2 = (game, spawnTime) => {
  let circle = new CircleEnemy(game, game.cvs.width + 30, game.cvs.height / 2, 30, -2, 0, spawnTime)

  circle.draw = () => {
    if (circle.spawnTime <= game.time) {
      let ctx = game.ctx;
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
      ctx.fillStyle = '#836FAA';
      ctx.strokeStyle = 'white';
      ctx.fill();
      ctx.stroke();
    }
  }

  return circle;
}