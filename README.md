## Overview 

Danmaku Symphony is a verticl-scrolling shooter with a fairly simple objective: just don't get hit. Players will dodge enemy projectiles while also attempting to shoot enemies down in order to increase their score count. Players can move anywhere within the game bounds as enemies spawn from the top of the screen. The game is inspired by a sub-genre of shoot 'em ups known in Japan as "danmaku" or lovingly called "bullet hell" in the English community, given this name due to the high density of the projectiles that the enemy characters emit which makes these games especially brutal. The aim of Danmaku Symphony is to attempt to replicate this gameplay while still providing a fair player experience. The game is particularly inspired by the [Touhou](https://en.wikipedia.org/wiki/Touhou_Project) series. 

## How to play
Players must shoot down enemies while avoiding their bullets. It only takes one hit to take you down so stay alert! Players can enter focus mode in order to slow down their movement for better control, this also changes their bullet behavior and allows them to see their hitbox (shown as a blue dot).

* Arrow keys: move
* Z: fire
* Shift: hold to enter focus mode

Current enemies include blue and orange hexagons, the blue hexagon enemies will go down with a single shot but the orange enemies are more resiliant. 

## Technologies used
Danmaku Symphony is built entirely using pure Javascript and HTML5 Canvas. 

## Implementation Details
Enemies and projectiles are created with their own respective generic class. For example, this is the particle class which all bullets will share. 

```js 
class Particle {
  constructor(game, diameter, x, y) {
    this.game = game;
    this.diameter = diameter;
    this.radius = this.diameter / 2;
    this.cvs = game.cvs;
    this.ctx = game.ctx;
    this.active = true;
    this.x = x;
    this.y = y;
  }

  checkInBounds() {
    let screenLeft = this.game.x
    let screenRight = this.game.x + this.game.width;
    let screenTop = this.game.y
    let screenBottom = this.game.y + this.game.height;
    if (this.x <= screenLeft
      || this.x >= screenRight
      || this.y <= screenTop
      || this.y >= screenBottom) {
        this.active = false;
    }
  }
```

And here is a bullet being created using that class as a template, the following bullet calculates the vector between itself and the player the moment the bullet is created, and guides itself towards that position.

```js
export const hexagonBullet2 = (enemy) => { 
  let hexBullet = new Particle(enemy.game, 50, enemy.x, enemy.y);
  let vectorX = enemy.game.player.x - hexBullet.x;
  let vectorY = enemy.game.player.y + hexBullet.y;
  let vectorLength = Math.sqrt(Math.pow(vectorX, 2) + Math.pow(vectorY, 2));
  hexBullet.velocityX = vectorX / vectorLength;
  hexBullet.velocityY = vectorY / vectorLength;

  hexBullet.draw = () => {enemy.game.player.x >= hexBullet.x ? 0.05 : -0.05; 
    let ctx = hexBullet.ctx;
    ctx.beginPath();
    ctx.arc(hexBullet.x, hexBullet.y, hexBullet.diameter / 2, 0, 2 * Math.PI);
    ctx.save();
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'purple';
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.restore();
  }

  hexBullet.update = () => {
    hexBullet.x += hexBullet.velocityX;
    hexBullet.y += hexBullet.velocityY;
    hexBullet.checkInBounds();
  }
```

## Future Implementation
* More enemy variants
* Stage select



