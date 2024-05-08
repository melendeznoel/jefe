/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isLex = function (words, order) {
  // Initialize a hashmap to record the relations between each letter and its ranking in order.
  const mp = {}

  for (let i = 0; i < order.length; i++) {
    mp[order.charCodeAt(i) - 'a'.charCodeAt(0)] = i
  }

  // Iterate over words and compare each pair of adjacent words
  for (let i = 0; i < words.length - 1; i++) {
    // Iterate over each letter to find the first different letter between words[i] and words[i + 1].
    for (let j = 0; j < words[i].length; j++) {
      const currWordCharCode = words[i].charCodeAt(j) - 'a'.charCodeAt(0)
      const nextWordCharCode = words[i + 1].charCodeAt(j) - 'a'.charCodeAt(0)

      // If we do not find a mismatch letter between words[i] and words[i + 1],
      // we need to examine the case when words are like ("addition", "add").
      if (j >= words[i + 1].length) return false

      const currWordFirstLetter = words[i][j]
      const nextWordFirstLetter = words[i + 1][j]

      if (currWordFirstLetter !== nextWordFirstLetter) {
        // If we find the first different letter and
        // the two words are in the wrong order,
        // then we can safely return false.
        if (mp[currWordCharCode] > mp[nextWordCharCode]) {
          return false
          // If we find the first different letter and
          // the two words are in the correct order,
          // then we can exit from the current iteration
          // and proceed to the next pair of words.
        } else {
          break
        }
      }
    }
  }

  // If we reach this point, it means that
  // we have examined all pairs of adjacent words
  // and that they are all sorted. Therefore we can return true.
  return true
}

module.exports = {
  IsLex: isLex
}
