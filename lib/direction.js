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

export default Direction;