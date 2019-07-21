import MobEnemy from './mob_enemy';
import { hexagonBullet, hexagonBullet2 } from './particle_system';
import hit from '../assets/hit.wav'


export const hexagon = (game) => {
  let minSpawnRange = game.gameScreen.x + 10;
  let maxSpawnRange = minSpawnRange + game.gameScreen.width - 15;
  let hex = new MobEnemy(game, 30, 30, 3, 1, minSpawnRange, maxSpawnRange)
  hex.hitSFX = new Audio();
  hex.hitSFX.src = hit;
  hex.draw = () => {
    hex.ctx.beginPath();
    hex.ctx.moveTo(hex.x, hex.y);
    hex.ctx.lineTo(hex.x - 10, hex.y + 10);
    hex.ctx.lineTo(hex.x - 10, hex.y + 20);
    hex.ctx.lineTo(hex.x, hex.y + 30);
    hex.ctx.lineTo(hex.x + 10, hex.y + 30);
    hex.ctx.lineTo(hex.x + 20, hex.y + 20);
    hex.ctx.lineTo(hex.x + 20, hex.y + 10);
    hex.ctx.lineTo(hex.x + 10, hex.y);
    hex.ctx.closePath();
    hex.ctx.fillStyle = '#788feb';
    hex.ctx.fill();
    hex.ctx.strokeStyle = 'white';
    hex.ctx.stroke();
  }

  hex.changeDirection = () => {
    let screenRight = hex.game.gameScreen.x + hex.game.gameScreen.width + 10;
    let screenLeft = hex.game.gameScreen.x + 10;
    if (hex.x + hex.width >= screenRight) hex.velocityX = -hex.velocityX;
    if (hex.x <= screenLeft) hex.velocityX = -hex.velocityX;
  }

  hex.checkInBounds = () => {
    let screenTop = hex.game.gameScreen.y
    let screenBottom = hex.game.gameScreen.y + hex.game.gameScreen.height;
    if (hex.y <= screenTop || hex.y - 10 >= screenBottom) {
      hex.active = false;
    }
  }

  hex.update = () => {
    // hex.x += hex.velocityX;
    hex.y += hex.velocityY;
    hex.checkInBounds();
    hex.changeDirection();
    if (hex.game.frames % 70 === 0) {
      hex.game.enemyBullets.push(hexagonBullet(hex));
    }
  }

  hex.checkCollision = () => {
    hex.game.playerBullets.forEach((playerBullet) => {
      if (playerBullet.y - playerBullet.radius <= hex.y + 30 
        && playerBullet.x + playerBullet.radius >= hex.x - 10
        && playerBullet.x - playerBullet.radius <= hex.x + 20
        && playerBullet.y + playerBullet.radius >= hex.y
        ) {
        hex.hitSFX.play();
        hex.health -= 1;
        playerBullet.active = false;
        if (hex.health <= 0) {
          hex.active = false;
          hex.game.score.value += 1000;
        }
      }
    })
  }

  return hex;
}

export const hexagon2 = (game) => {
  let minSpawnRange = game.gameScreen.x + 10;
  let maxSpawnRange = minSpawnRange + game.gameScreen.width - 15;
  let hex = new MobEnemy(game, 30, 30, 3, 1, minSpawnRange, maxSpawnRange)
  hex.hitSFX = new Audio();
  hex.hitSFX.src = hit;
  hex.draw = () => {
    hex.ctx.beginPath();
    hex.ctx.moveTo(hex.x, hex.y);
    hex.ctx.lineTo(hex.x - 10, hex.y + 10);
    hex.ctx.lineTo(hex.x - 10, hex.y + 20);
    hex.ctx.lineTo(hex.x, hex.y + 30);
    hex.ctx.lineTo(hex.x + 10, hex.y + 30);
    hex.ctx.lineTo(hex.x + 20, hex.y + 20);
    hex.ctx.lineTo(hex.x + 20, hex.y + 10);
    hex.ctx.lineTo(hex.x + 10, hex.y);
    hex.ctx.closePath();
    hex.ctx.fillStyle = '#ff8c3b';
    hex.ctx.fill();
    hex.ctx.strokeStyle = 'white';
    hex.ctx.stroke();
  }

  hex.changeDirection = () => {
    let screenRight = hex.game.gameScreen.x + hex.game.gameScreen.width + 10;
    let screenLeft = hex.game.gameScreen.x + 10;
    if (hex.x + hex.width >= screenRight) hex.velocityX = -hex.velocityX;
    if (hex.x <= screenLeft) hex.velocityX = -hex.velocityX;
  }

  hex.checkInBounds = () => {
    let screenTop = hex.game.gameScreen.y
    let screenBottom = hex.game.gameScreen.y + hex.game.gameScreen.height;
    if (hex.y <= screenTop || hex.y - 10 >= screenBottom) {
      hex.active = false;
    }
  }

  hex.update = () => {
    hex.x += hex.velocityX;
    hex.y += hex.velocityY;
    hex.checkInBounds();
    hex.changeDirection();
    if (hex.game.frames % 50 === 0) {
      hex.game.enemyBullets.push(hexagonBullet2(hex));
    }
  }

  hex.checkCollision = () => {
    hex.game.playerBullets.forEach((playerBullet) => {
      if (playerBullet.y - playerBullet.radius <= hex.y + 30 
        && playerBullet.x + playerBullet.radius >= hex.x - 10
        && playerBullet.x - playerBullet.radius <= hex.x + 20
        && playerBullet.y + playerBullet.radius >= hex.y
        ) {
        hex.hitSFX.play();
        hex.health -= 1;
        playerBullet.active = false;
        if (hex.health <= 0) {
          hex.active = false;
          hex.game.score.value += 1000;
        }
      }
    })
  }

  return hex;
}