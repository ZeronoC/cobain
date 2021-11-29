let handler = async m => m.reply(`
*CLOSE YA...*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['idfs']
handler.tags = ['store']
handler.command = /^(idfs)$/i

handler.limit = false

module.exports = handler
