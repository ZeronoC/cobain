let handler = async m => conn.reply(m.chat, `
*CLOSE YA...*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['jf']
handler.tags = ['store']
handler.command = /^(jf)$/i

handler.limit = false

module.exports = handler
