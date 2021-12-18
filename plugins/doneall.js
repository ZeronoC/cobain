let handler = async m => conn.reply(m.chat, `
*STATUS PESANAN*

*DONE ALL✅*

*TERIMAKASIH ATAS KUNJUNGANNYA*

*© Lyra*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['doneall']
handler.tags = ['store']
handler.customPrefix = /^doneall$/i
handler.command = new RegExp

handler.limit = false

module.exports = handler
