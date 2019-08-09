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
      `You're killing it` + (addName ? `, ${name}` : '') + `!`,
      `Each commit gets you closer by a little bit!`,
      `Keep up the great work` + (addName ? `, ${name}` : '') + `!`,
      `Getting stuck is part of the process` + (addName ? `, ${name}` : '') + ` Don't be discouraged`
    ]

    return phrases[Math.floor(Math.random() * phrases.length)]
  }

}
