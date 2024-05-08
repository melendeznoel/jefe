class Config {
  constructor () {
    this._badWords = new Set()
    this.setBadWords([])
  }

  setBadWords (val) {
    if (val.length === 0) {
      this._badWords = new Set()
    } else {
      val.forEach(word => this._badWords.add(word))
    }
  }

  getBadWords () {
    return this._badWords
  }
}

module.exports = Config
