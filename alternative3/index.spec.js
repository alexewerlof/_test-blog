import * as publicAPI from "./index.js";

define("public API", () => {
  it("has sumShapeAreas()", () => {
    expect(publicAPI.sumShapeAreas).to.be.a("function");
  });
});
