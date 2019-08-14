'use babel'

export default class Messages {

  constructor (serializedState) {
  }

  serialize () {}

  // Tear down any state and detach
  destroy () {}

  getRandomMessage (name) {
    const addName = (name == null || name === '') ? false : true

    phrases = [
      `Command S? Command Yes!`,
      `You're killing it$!`
      `Each commit gets you closer by a little bit!`,
      `Keep up the great work$!`,
      `Getting stuck is part of the process$. Don't be discouraged!`,
      `Patience is a virtue$.`,
      `"What you get by achieving your goals is not as important as what you become by achieving your goals" - Zig Ziglar`,
      `Sometimes later becomes never. Do it now$.`,
      `Take a deep breath$.`
      `The harder you work for something, the greater you’ll feel when you achieve it.`,
      `Wake up with determination. Go to bed with satisfaction.`,
      `The key to success is to focus on goals, not obstacles.`,
      ``
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
