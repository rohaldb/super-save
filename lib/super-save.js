'use babel'

import { CompositeDisposable } from 'atom'
import Messages from './messages'

export default {
  config: {
    yourName: {
      type: 'string',
      default: '',
      maximum: 20
    }
  },

  subscriptions: null,
  name: '',

  activate (state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(atom.workspace.observeTextEditors(textEditor => {
      this.subscriptions.add(textEditor.onDidSave(this.handleDidSave.bind(this)))
    }))
    this.subscriptions.add(atom.config.observe('super-save.yourName', (newName) => {
      this.name = newName && newName[0].toUpperCase() + newName.slice(1)
    }))

    this.messages = new Messages()
    this.lastmessage = 0
  },

  handleDidSave (event) {
    // only display max one per 5 seconds
    const currentTime = new Date()
    if (currentTime - this.lastmessage >= 5000) {
      message = this.messages.getRandomMessage(this.name)
      atom.notifications.addSuccess(message, {
        icon: 'flame'
      })
      this.lastmessage = currentTime
    }
  },

  deactivate () {
    this.subscriptions.dispose()
  }

}
