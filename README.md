## Overview 

Danmaku Symphony is a vertical-scrolling shooter with a fairly simple objective: just don't get hit. Players will dodge enemy projectiles while also attempting to shoot enemies down in order to increase their score count. Players can move anywhere within the game bounds as enemies spawn from the top of the screen. The game is inspired by a sub-genre of shoot 'em ups known in Japan as "danmaku" or affectionately called "bullet hell" in the English community, given this name due to the high density of the projectiles that the enemy characters emit which makes these games especially brutal. The aim of Danmaku Symphony is to attempt to replicate this gameplay while still providing a fair player experience. The game is particularly inspired by the [Touhou](https://en.wikipedia.org/wiki/Touhou_Project) series. 

## How to play
Players must shoot down enemies while avoiding their bullets. It only takes one hit to take you down so stay alert! Players can enter focus mode in order to slow down their movement for better control, this also changes their bullet behavior and allows them to see their hitbox (shown as a blue dot).

* Arrow keys: move
* Z: fire
* Shift: hold to enter focus mode

Current enemies include blue and orange hexagons, the blue hexagon enemies will go down with a single shot but the orange enemies are more resiliant. 

Strike down your foes while avoiding being striken down
![](https://i.imgur.com/TjTYzCX.gif)

Sometimes you need a bit more precision to squeeze through gaps in enemy fire
![](https://i.imgur.com/GgBO0wz.gif)

## Technologies used
Danmaku Symphony is built entirely using pure Javascript and HTML5 Canvas. 

## Implementation Details
Enemies are created with their own respective template class. For example, this is the basic enemy class that other enemy classes inherit from.

```js 
  class MobEnemy {
  constructor(
    game, 
    x, 
    y, 
    r,
    color, 
    bulletColor, 
    speed, 
    angle,
    shotDelay, 
    spawnTime
  ) {
      this.health = 10 + 10 * game.difficulty;
      this.angle = angle;
      this.shotDelay = shotDelay;
      this.spawnTime = spawnTime;
      this.speed = speed;
      this.color = color;
      this.bulletColor = bulletColor;
      this.game = game;
      this.x = x;
      this.y = y;
      this.r = r;
      this.active = true;
  }

  //
```
And here is an enemy class that inherits from the above.
```js
class Wave02Enemy extends MobEnemy {
  constructor(
    game,
    x,
    y,
    r,
    color,
    bulletColor,
    speed,
    angle,
    shotDelay,
    spawnTime,
    startDest,
    endDest
  ) {
    super(
      game,
      x,
      y,
      r,
      color,
      bulletColor,
      speed,
      angle,
      shotDelay,
      spawnTime,
    )
    this.shotCount = 3;
    this.startDest = startDest;
    this.endDest = endDest;
    this.health = 20 + 20 * game.difficulty;
  }

  ///
```

This is a class called Direction that was created largely to hold functions needed to calculate vectors and angles of game objects. 

```js 
class Direction {
  constructor() {

  }

  static getAngle(obj, dest) {
    return Math.atan2(dest.y - obj.y, dest.x - obj.x);
  }

  static getRadians(degree) {
    return degree * (Math.PI/180);
  }

  static checkDestination(currentPos, dest) {
    return currentPos.y >= dest.y;
  }

}
```

## Future Implementation
* More enemy variants
* Stage select
