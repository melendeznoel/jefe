/* global describe beforeEach test expect */
const { ElementVisibilityState } = require('./state')

describe('ElementVisibilityState', () => {
  let rootHtmlStub
  beforeEach(() => {
    rootHtmlStub = document.createElement('div')
    rootHtmlStub.innerHTML = '<div class="lang-grid" id="language">This is a sample</div>'
    document.body.appendChild(rootHtmlStub)
  })

  test('should not show element', () => {
    ElementVisibilityState(rootHtmlStub.children[0], false)
    expect(rootHtmlStub.children[0].classList.contains('hidden'))
  })

  test('should show element', () => {
    ElementVisibilityState(rootHtmlStub.children[0], true)

    const result = rootHtmlStub.children[0].classList.contains('hidden')

    expect(result).toBe(false)
  })
})
