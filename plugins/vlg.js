let handler = async m => m.reply(`
*CLOSE YA...*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['vlg']
handler.tags = ['store']
handler.command = /^(vlg)$/i

handler.limit = false

module.exports = handler
