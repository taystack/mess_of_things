export default class Line {
  constructor(x = undefined, y = undefined) {
    this.x = x;
    this.y = y;
  }

  slope() {}

  intersect(line) {
    const a = this.y - line.y;
    const b = this.x - line.x;
  }
}
