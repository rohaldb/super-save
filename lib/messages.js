'use babel'

export default class Messages {

  constructor (serializedState) {
    this.phrases = [
      `Command S? Command Yes!`,
      `You're killing it!`,
      `Each commit gets you closer by a little bit!`,
      `Keep up the great work!`,
      `Getting stuck is part of the process. Don't be discouraged`
    ]
  }

  serialize () {}

  // Tear down any state and detach
  destroy () {}

  getRandomMessage () {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)]
  }

}
