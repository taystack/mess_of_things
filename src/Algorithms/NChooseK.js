import Factorial from "./Factorial";


export class NChooseKArgumentError extends Error {}

export default class NChooseK {
  constructor(n, k) {
    if (n < k) throw new NChooseKArgumentError();
    this.n = n;
    this.k = k;
    this.combos = this.compute();
  }

  get combinations() {
    // n! / ((n - k)! * k!); n >= k > 0
    if (this.k === 0) return 1;
    const nf = Factorial(this.n);
    const kf = Factorial(this.k);
    return (nf / (Factorial(this.n - this.k) * kf));
  }

  compute() {
    if (this.k === 0) return [new Array(this.n).fill("*")];
    const vals = new Array(this.n).fill("*");
    return [[]];
  }

  draw() {
    const r = document.getElementById("root");
    this.combos.forEach((combo) => {
      const el = document.createElement("div");
      console.log(combo);
      el.innerText = combo.join(" ");
      r.appendChild(el);
    });
  }
}
