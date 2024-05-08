/* global describe it beforeEach */
const { strictEqual } = require('assert')
const Config = require('./config')

describe('Config', () => {
  let config
  beforeEach(() => {
    config = new Config()
    config.setBadWords([])
  })

  describe('setBadWords', () => {
    it('should add bad words', () => {
      config.setBadWords(['crap', 'poop'])
      strictEqual(config.getBadWords().size, 2)
    })

    it('should clear bad words', () => {
      config.setBadWords([])
      strictEqual(config.getBadWords().size, 0)
    })
  })

  describe('getBadWords', () => {
    it('should return an empty list if bad words were not set', () => {
      strictEqual(config.getBadWords().size, 0)
    })

    it('should return a list of bad words previously set', () => {
      config.setBadWords(['crap', 'poop'])
      strictEqual(config.getBadWords().size, 2)
    })
  })
})
