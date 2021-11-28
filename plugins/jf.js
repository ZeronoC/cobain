let handler = async m => m.reply(`
*CLOSE YA...*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['jf']
handler.tags = ['store']
handler.command = /^(jf)$/i

handler.limit = false

module.exports = handler
