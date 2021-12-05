let handler = async m => m.reply(`
*SOLD YA SAYANG, LAIN KALI FAST RESPON☺️*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gcstore']
handler.tags = ['store']
handler.customPrefix = /^gs sold$/i
handler.command = new RegExp

handler.limit = false

module.exports = handler
