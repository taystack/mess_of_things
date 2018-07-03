export default class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area () {
    return Math.PI * (this.radius * this.radius);
  }

  circumference() {
    return this.radius * 2 * Math.PI;
  }
}
