import Point from "./Point";
import Pythagorean from "./Pythagorean";
import Radians from "./Radians";


export default class Vector {
  static x(vector) {
    return vector.magnitude * Math.cos(Radians.fromDegrees(vector.direction));
  }

  static y(vector) {
    return vector.magnitude * Math.sin(Radians.fromDegrees(vector.direction));
  }

  // fromPoints returns a new Vector
  // pointA should be the vector origin
  // pointB should be the vector destination
  static fromPoints(point1, point2) {
    const x = point2.x - point1.x;
    const y = point2.y - point1.y;
    const magnitude = Pythagorean(x, y);
    const direction = Radians.toDegrees(Math.atan(y / x));
    return new Vector(magnitude, direction);
  }

  constructor(magnitude, direction) {
    this.direction = direction;
    this.magnitude = Math.abs(magnitude);
    this.x = Vector.x(this);
    this.y = Vector.y(this);
  }

  equals(vector) {
    return (this.magnitude === vector.magnitude) && (this.direction === vector.direction);
  }

  // add(VECTOR)
  // Returns a new Vector
  add(vector) {
    const x = this.x + vector.x;
    const y = this.y + vector.y;
    return Vector.fromPoints(new Point(0, 0), new Point(x, y));
  }

  // dot(vector) => scalar
  // The dot product of two vectors
  dot(vector) {
    return this.x * vector.x + this.y * vector.y;
  }

  // subtract(VECTOR)
  // Returns a new Vector
  subtract(vector) {
    const x = this.x - vector.x;
    const y = this.y - vector.y;
    return Vector.fromPoints(new Point(0, 0), new Point(x, y));
  }

  scalar(scalar) {
    const x = scalar * this.x;
    const y = scalar * this.y;
    return Vector.fromPoints(new Point(0, 0), new Point(x, y));
  }
}
