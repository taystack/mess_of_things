import { TriangleError } from "./errors/TriangleError";


export default class Triangle {
  constructor(angleA, angleB, angleC) {
    const sumOfAngles = angleA + angleB + angleC;
    if (sumOfAngles !== 180) {
      throw new TriangleError(`Triangle error: the sum of a triangle's angles should be 180. Recieved ${sumOfAngles}`);
    }
    this.angles = [angleA, angleB, angleC];
  }

  isEquilateral() {
    return this.angles[0] === this.angles[1] && this.angles[0] === this.angles[2];
  }

  isIsosceles() {
    return (
      this.angles[0] === this.angles[1] ||
      this.angles[0] === this.angles[2] ||
      this.angles[1] === this.angles[2]
    );
  }

  isScalene() {
    return (
      this.angles[0] !== this.angles[1] &&
      this.angles[0] !== this.angles[2] &&
      this.angles[1] !== this.angles[2]
    )
  }

  isRight() {
    return this.angles.indexOf(90) >= 0;
  }

  isAccute() {
    const angles = [];
    this.angles.forEach((angle) => {
      if (angle < 90) {
        angles.push(angle);
      }
    });
    return angles.length === 3;
  }

  isObtuse() {
    const angles = [];
    this.angles.forEach((angle) => {
      if (angle > 90) {
        angles.push(angle);
      }
    });
    return angles.length === 1;
  }
}
