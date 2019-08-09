'use babel'

import { CompositeDisposable } from 'atom'
import Messages from './messages'

export default {
  subscriptions: null,

  activate (state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(atom.workspace.observeTextEditors(textEditor => {
      this.subscriptions.add(textEditor.onDidSave(this.handleDidSave.bind(this)))
    }))
    this.messages = new Messages()
    // this.subscriptions.add(atom.editor.onDidSave(() => console.log('toggled')))
  },

  handleDidSave (event) {
    console.log('saved!')
    message = this.messages.getRandomMessage()
    atom.notifications.addSuccess(message, {
      icon: 'flame'
    })
  },

  deactivate () {
    this.subscriptions.dispose()
  }

}
