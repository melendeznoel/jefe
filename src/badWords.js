class BadWords {
  constructor (config) {
    this._config = config
  }

  findBadWords (val) {
    const result = new Set()
    const badWords = this._config.getBadWords()

    badWords.forEach(word => {
      if (val.toUpperCase().includes(word.toUpperCase())) {
        result.add(val)
      }
    })

    return result
  }

  hasBadWords (val) {
    return this.findBadWords(val).size !== 0
  }
}

module.exports = BadWords
