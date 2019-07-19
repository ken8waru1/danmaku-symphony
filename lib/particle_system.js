import Particle from './particle';

export const playerBulletA = (player) => {
  let bullet = new Particle(player.game);
  bullet.x = player.x;
  bullet.y = player.y;
  bullet.velocity = 2;
  
  bullet.draw = () => {
    let ctx = player.game.ctx;
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, 4, 0, 2 * Math.PI);
    ctx.save();
    ctx.shadowBlur = 2;
    ctx.shadowColor = 'yellow';
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.restore();
  };

  bullet.update = () => {
    bullet.y -= bullet.velocity;
  };
  
  return bullet;
}