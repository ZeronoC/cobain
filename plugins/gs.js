let handler = async m => conn.reply(m.chat, `
*TANYAKAN STOK!!*
*HARGA RANDOM*


*˖˚𖠧 33 GS 8.600 - 9.000*
* *˖˚𖠧 66 GS 17.000 - 18.000*
*˖˚𖠧 165 GS 43.000 - 45.000*
* *˖˚𖠧 330 GS 86.000 - 90.000*

*❥• PROSES FAST 1-10 MENIT*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gs']
handler.tags = ['store']
handler.command = /^(gs)$/i

handler.limit = false

module.exports = handler
