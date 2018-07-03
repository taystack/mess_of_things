// import Point from "./Point";
// import Vector from "./Vector";
// import Triangle from "./Triangle";
// import BSTNode from "./Trees/BinarySearchNode";
// import makeQuerySelector from "./QuerySelector";
import NChooseK from "./Algorithms/NChooseK";
import Factorial from "./Algorithms/Factorial";


(() => {
  // makeBST();
  // testQuerySelector();
  testNChooseK();
  // console.log(Factorial(3));
})();

function testNChooseK() {
  const thing = new NChooseK(5, 3);
  thing.draw();
  console.log(thing.combinations);
}

// function testQuerySelector() {
//   makeQuerySelector();
//   console.log(document.querySelector("#something"));
//   console.log(document.querySelector(".foo #something"));
// }

// function tryInsert(head, arr) {
//   let inserted = false;
//   while (!inserted) {
//     const rand = Math.floor((Math.random() * 1000) - 500);
//     inserted = head.insert(rand);
//     if (inserted) arr.push(rand);
//   }
// }

// function makeBST() {
//   const head = new BSTNode(0);
//   console.log("Binary Search Tree:\n-------------------\n\n");
//   console.log("head is a BSTNode", head.toString());
//   const arr = [0];
//   for (var i = 0; i < 100; i++) {
//     tryInsert(head, arr);
//   }
//   console.log("head.length:", head.length);
//   console.log("head.min", head.min);
//   console.log("head.max", head.max);
//   console.log("head.toArray()", head.toArray());
// }
