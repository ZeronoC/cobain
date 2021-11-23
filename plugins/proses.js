let handler = async m => m.reply(`
*STATUS PESANAN*

*SEDANG DALAM PROSES⏳*

*Silakan Tunggu Ya Kak*

*© Lyra*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['proses']
handler.tags = ['store']
handler.customPrefix = /^proses$/i
handler.command = new RegExp

handler.admin = true

handler.limit = false

module.exports = handler
