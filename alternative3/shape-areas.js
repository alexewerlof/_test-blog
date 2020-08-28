function squareArea(a) {
  return a * a;
}

function circleArea(r) {
  // πr2
  return Math.PI * r ** 2;
}

function shapeArea(shape) {
  switch (shape.type) {
    case "square":
      return squareArea(shape.a);
    case "circle":
      return circleArea(shape.r);
    default:
      throw new TypeError(`Unsupported shape: ${shape}`);
  }
}

export function sumShapeAreas(shapeArr) {
  return shapeArr.reduce((totalArea, shape) => totalArea + shapeArea(shape), 0);
}

// Notice that all "private" functions are exported here for testing
export const _test = { squareArea, circleArea, shapeArea };
