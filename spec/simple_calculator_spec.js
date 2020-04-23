const{add, multiply} = require("../src/simple_calculator.js")

describe('Perform Calculations', function () {
    it('Should add two numbers', function () {
        expect(add(5, 5)).toBe(10)
    })
    it('Should add more than two numbers', function () {
        expect(add(1,2,3,5)).toBe(11)
    })
    it('Should multiply two numbers', function () {
        expect(multiply(5, 5)).toBe(25)
    })
    it('Should multiply more than two numbers', function () {
        expect(multiply(1,2,6)).toBe(12)
    })
})