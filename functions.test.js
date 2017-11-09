const fns = require('./functions');

test("returnTwo() equals 2", () => {
    expect(fns.returnTwo()).toBe(2)
})

test("greeting('James') to equal 'Hello, James.", () => {
    expect(fns.greeting("James")).toBe("Hello, James.")
})

test("greeting('Jill') to equal 'Hello, Jill.", () => {
    expect(fns.greeting("Jill")).toBe("Hello, Jill.")
})

describe("Math tests", () => {
    test("multiply", () => {
        expect(fns.multiply(2, 10)).toBe(20)
    })
    test("subtract", () => {
        expect(fns.subtract(40, 20)).toBe(20)
    })
    test('Divide', () => {
        expect(fns.divide(30, 15)).toBe(2)
    })
    test("add() should return sum of params", () => {
        expect(fns.add(1, 2)).toEqual(3)
        expect(fns.add(5, 9)).toBe(14)
    })
})


