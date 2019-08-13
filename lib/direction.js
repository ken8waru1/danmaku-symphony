class Direction {
  constructor() {

  }

  static getAngleToPlayer(obj, player) {
    return Math.atan2(player.y - obj.y, player.x - obj.x);
  }

  static getRadians(degree) {
    return degree * (Math.PI/180);
  }

}

export default Direction;