const { Config, BadWords, State } = require('./src')

const config = new Config()
const badWords = new BadWords(config)

module.exports = {
  FindBadWords: badWords.findBadWords,
  HasBadWords: badWords.hasBadWords,
  AddBadWords: config.setBadWords,
  State
}
