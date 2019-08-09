class Trig {
  constructor() {

  }

  static getAngleToPlayer(obj, player) {
    return Math.atan2(player.y - obj.y, player.x - obj.x);
  }
}

export default Trig;