// Write your tests here!
const {substitution} = require('../src/substitution.js')
const expect = require('chai').expect

describe('Substitution', () => {
    it('Encode, no spaces', () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        const expected = 'jrufscpw'
        expect(actual).to.equal(expected)
    })

    it ('Encode, with spaces', () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        const expected = 'elp xhm xf mbymwwmfj dne'
        expect(actual).to.equal(expected)
    })

    it ('Decode, no spaces', () => {
        const actual = substitution ("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
        const expected = 'thinkful'
        expect(actual).to.equal(expected)
    })

    it ('Encode, special characters', () => {
        const actual = substitution ("message", "$wae&zrdxtfcygvuhbijnokmpl")
        const expected = 'y&ii$r&'
        expect(actual).to.equal(expected)
    })

    it ('Decode, special characters', () => {
        const actual = substitution ("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
        const expected = 'message'
        expect(actual).to.equal(expected)
    })

    it ('Too short', () => {
        const actual = substitution("thinkful", "short")
        const expected = false
        expect(actual).to.equal(expected)
    })

    it ('Has duplicates', () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
        const expected = false
        expect(actual).to.equal(expected)
    })
})
