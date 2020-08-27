// To keep it simple we stick with Node's assert module instead of using something more common line chai
import assert from 'assert'
import { sumShapeAreas } from '../shape-areas.js'

describe('sumShapeAreas()', () => {
    it('calculates the sum of the areas of all the shapes in the array', () => {
        assert.equal(sumShapeAreas([
            { type: 'square', a: 7 },
            { type: 'circle', r: 13 },
        ]), 49 + Math.PI * 169)
    })
})