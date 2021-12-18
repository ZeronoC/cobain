let handler = async m => conn.reply(m.chat, '
https://chat.whatsapp.com/C0QvHiJp5hsHvoN5qcYGnJ
')
handler.help = ['gcstore']
handler.tags = ['store']
handler.customPrefix = /^gcstore$/i
handler.command = new RegExp

handler.limit = false

module.exports = handler
