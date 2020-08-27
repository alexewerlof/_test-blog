// To keep it simple we stick with Node's assert module instead of using something more common line chai
import assert from 'assert'
import { squareArea, circleArea, shapeArea } from '../shape-areas-utils.js'

describe('squareArea()', () => {
    it('calculates the area ofa square', () => {
        // We re not going to test all the edge cases, to keep the demo short
        assert.equal(squareArea(3), 9)
    })
})

describe('circleArea()', () => {
    it('calculates the area of a circle', () => {
        assert.equal(circleArea(3), Math.PI * 9)
    })
})

describe('shapeArea()', () => {
    it('calculates the area of a shape object', () => {
        assert.equal(shapeArea({ type: 'square', a: 4 }), 16)
        assert.equal(shapeArea({ type: 'circle', r: 5 }), Math.PI * 25)
    })
})
