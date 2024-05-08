/* global describe it beforeEach afterEach */
const { ok, strictEqual } = require('assert')
const BadWord = require('./badWords')
const Config = require('./config')

describe('BadWords', () => {
  describe('hasBadWords', () => {
    let config
    let badWord
    beforeEach(() => {
      config = new Config()
      badWord = new BadWord(config)
      config.setBadWords(['crap'])
    })

    afterEach(() => {
      config.setBadWords([])
    })

    it('should return true when a string does not have bad words', () => {
      const result = badWord.hasBadWords('Thats crap said the brown bird')
      ok(result)
    })

    it('should return false when a string contains bad words', () => {
      strictEqual(badWord.hasBadWords('The One With The Unagi'), false, 'badWords should be false')
    })
  })
})
