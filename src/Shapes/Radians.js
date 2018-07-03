export default class Radians {
  static toDegrees(radians) {
    return radians * 180 / Math.PI;
  }

  static fromDegrees(degrees) {
    return degrees / 180 * Math.PI;
  }
}
