import { shapeArea } from "./shape-areas-utils.js";

export function sumShapeAreas(shapeArr) {
  return shapeArr.reduce((totalArea, shape) => totalArea + shapeArea(shape), 0);
}
