class MobEnemy {
  constructor(game, width, height, velocityX, velocityY, minSpawnRange, maxSpawnRange) {
    this.game = game;
    this.cvs = game.cvs;
    this.ctx = game.ctx;
    this.width = width;
    this.height = height;
    this.health = 1;
    this.radius = this.width / 2;
    this.minSpawnRange = minSpawnRange;
    this.maxSpawnRange= maxSpawnRange;
    this.x = Math.floor(Math.random() * (this.maxSpawnRange - this.minSpawnRange + 1)) + this.minSpawnRange;
    this.y = 0;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.active = true;
  }

  checkInBounds() {

  }

  changeDirection() {

  }

  update() {

  }
}

export default MobEnemy;