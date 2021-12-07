function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '62815158600891', 'Nurutomo', m)
  this.sendContact(m.chat, '6289653328114', 'Lyra', m)
}
handler.help = ['owner']
handler.tags = ['store']

handler.customPrefix = /^own$/i
handler.command = new RegExp

module.exports = handler
