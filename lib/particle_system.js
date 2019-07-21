import Particle from './particle';

export const playerBulletA = (player) => {
  let bullet = new Particle(player.game, 10, player.x, player.y);
  bullet.velocityX = 10;
  bullet.velocityY = 40;

  bullet.draw = () => {
    let ctx = player.game.ctx;
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.diameter / 2, 0, 2 * Math.PI);
    ctx.save();
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'blue';
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.restore();
  };

  bullet.update = () => {
    if (player.game.frames % 2 === 0) {
      bullet.x -= bullet.velocityX;
      bullet.y -= bullet.velocityY;
    }
    bullet.checkInBounds();
  };
  
  return bullet;
}

export const playerBulletB = (player) => {
  let bullet = new Particle(player.game, 10, player.x, player.y);
  bullet.velocityX = -10;
  bullet.velocityY = 40;
  bullet.draw = () => {
    let ctx = player.game.ctx;
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.diameter / 2, 0, 2 * Math.PI);
    ctx.save();
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'blue';
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.restore();
  };

  bullet.update = () => {
    if (player.game.frames % 2 === 0) {
      bullet.x -= bullet.velocityX;
      bullet.y -= bullet.velocityY;
    }
    bullet.checkInBounds();
  };
  
  return bullet;
}
export const playerBulletC = (player) => {
  let bullet = new Particle(player.game, 10, player.x, player.y);
  bullet.velocityY = 40;

  bullet.draw = () => {
    let ctx = player.game.ctx;
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.diameter / 2, 0, 2 * Math.PI);
    ctx.save();
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'blue';
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.restore();
  };

  bullet.update = () => {
    if (player.game.frames % 2 === 0) {
      bullet.y -= bullet.velocityY;
    }
    bullet.checkInBounds();
  };
  
  return bullet;
}

export const playerBulletAF = (player) => {
  let bullet = new Particle(player.game, 8, player.x - 10, player.y);
  bullet.velocityY = 15;

  bullet.draw = () => {
    let ctx = player.game.ctx;
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.diameter / 2, 0, 2 * Math.PI);
    ctx.save();
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'blue';
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.restore();
  };

  bullet.update = () => {
    if (player.game.frames % 2 === 0) {
      bullet.y -= bullet.velocityY;
    }
    bullet.checkInBounds();
  };

  return bullet;
}

export const playerBulletBF = (player) => {
  let bullet = new Particle(player.game, 8, player.x + 10, player.y);
  bullet.velocityY = 15;

  bullet.draw = () => {
    let ctx = player.game.ctx;
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.diameter / 2, 0, 2 * Math.PI);
    ctx.save();
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'blue';
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.restore();
  };

  bullet.update = () => {
    if (player.game.frames % 2 === 0) {
      bullet.y -= bullet.velocityY;
    }
    bullet.checkInBounds();
  };

  return bullet;
}

export const playerBulletCF = (player) => {
  let bullet = new Particle(player.game, 8, player.x, player.y);
  bullet.velocityY = 15;

  bullet.draw = () => {
    let ctx = player.game.ctx;
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.diameter / 2, 0, 2 * Math.PI);
    ctx.save();
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'blue';
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.restore();
  };

  bullet.update = () => {
    if (player.game.frames % 2 === 0) {
      bullet.y -= bullet.velocityY;
    }
    bullet.checkInBounds();
  };

  return bullet;
}

export const hexagonBullet = (enemy) => { 
  let hexBullet = new Particle(enemy.game, 10, enemy.x, enemy.y);
  let angle = Math.random() * 360;
  hexBullet.velocityX = Math.cos(angle / 180 * Math.PI) * 5;
  hexBullet.velocityY = Math.cos(angle / 180 * Math.PI) * 5;
  hexBullet.accelY = 0.01;
  
  hexBullet.draw = () => {
    let ctx = hexBullet.ctx;
    ctx.beginPath();
    ctx.arc(hexBullet.x, hexBullet.y, hexBullet.diameter / 2, 0, 2 * Math.PI);
    ctx.save();
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'red';
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.restore();
  }

  hexBullet.update = () => {
    // hexBullet.x += hexBullet.velocityX;
    hexBullet.y += hexBullet.velocityY;
    hexBullet.velocityY += hexBullet.accelY;
    hexBullet.checkInBounds();
  }
  
  return hexBullet;
}