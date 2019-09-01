'use babel'

export default class Messages {

  constructor (serializedState) {
  }

  serialize () {}

  // Tear down any state and detach
  destroy () {}

  getRandomMessage (name) {
    const addName = (name == null || name === '') ? false : true

    // The $ symbol gets replaced with the users name, if they've entered it.
    phrases = [
      `Command S? Command Yes!`,
      `You're killing it$!`,
      `Each commit gets you closer by a little bit!`,
      `Keep up the great work$!`,
      `Getting stuck is part of the process$. Don't be discouraged!`,
      `Patience is a virtue$.`,
      `Sometimes later becomes never. Do it now$.`,
      `Take a deep breath$.`,
      `Hard work breeds satisfaction$.`,
      `Focus on goals, not obstacles$.`,
      `You are awesome$!`,
      `Keep saving your way to success$.`,
      `Knowledge is still gained from failure$.`,
      `Abstraction is the solution to stagnation$.`
    ]

    let selectedIndex = Math.floor(Math.random() * phrases.length)
    // dont choose the same message twice
    while (selectedIndex == self.last_index) {
      selectedIndex = Math.floor(Math.random() * phrases.length)
    }
    self.last_index = selectedIndex

    return phrases[selectedIndex].replace('$', (addName ? `, ${name}` : ''))
  }

}
