let handler = async m => conn.reply(m.chat, `
*STATUS PESANAN*

*BERHASIL ✅*

*Jangan Lupa Order Kembali Ya🤗*

*© Lyra*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['done']
handler.tags = ['store']
handler.customPrefix = /^done$/i
handler.command = new RegExp

handler.admin = true

handler.limit = false

module.exports = handler
