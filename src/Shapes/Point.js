export default class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(point) {
    this.x = this.x + point.x;
    this.y = this.y + point.y;
    return this;
  }

  subtract(point) {
    this.x = this.x - point.x;
    this.y = this.y - point.y;
    return this;
  }
}
