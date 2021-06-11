// Write your tests here!
const {polybius} = require('../src/polybius.js')
const expect = require('chai').expect

describe('Polybius', () => {
    it('encode', () => {
        const actual = polybius("thinkful")
        const expected = '4432423352125413'
        expect(actual).to.equal(expected)
    })

    it ('Encode, with spaces', () => {
        const actual = polybius("Hello world")
        const expected = '3251131343 2543241341'
        expect(actual).to.equal(expected)
    })

    it ('Decode, spaces', () => {
        const actual = polybius ("3251131343 2543241341", false)
        const expected = 'hello world'
        expect(actual).to.equal(expected)
    })

    it ('Decode using i/j', () => {
        const actual = polybius ("4432423352125413", false)
        const expected = 'th(i/j)nkful'
        expect(actual).to.equal(expected)
    })

    it ('Decode, odd number', () => {
        const actual = polybius ("44324233521254134", false)
        const expected = false
        expect(actual).to.equal(expected)
    })
})
