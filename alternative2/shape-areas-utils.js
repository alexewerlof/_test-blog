export function squareArea(a) {
  return a * a;
}

export function circleArea(r) {
  // πr2
  return Math.PI * r ** 2;
}

export function shapeArea(shape) {
  switch (shape.type) {
    case "square":
      return squareArea(shape.a);
    case "circle":
      return circleArea(shape.r);
    default:
      throw new TypeError(`Unsupported shape: ${shape}`);
  }
}
