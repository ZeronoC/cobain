let handler = async m => m.reply(`
*LIST HARGA FREE FIRE VIA ID*
_RATE 273_
💎 5 = 819
💎 20 = 2.730
💎 50 = 6.552
💎 70 = 9.009
💎 100 = 13.104
💎 140 = 18.018
💎 150 = 19.656
💎 210 = 27.027
💎 355 = 45.045
💎 425 = 54.054
💎 500 = 63.882
💎 720 = 90.090
💎 860 = 108.108
💎 1000 = 126.126
💎 1075 = 135.135
💎 1440 = 180.180
💎 2000 = 245.700
M.MINGGUAN = 27.300
M.BULANAN = 136.500
*PROSES 1-10 MENIT*
❗SERTAKAN BUKTI TRANSFER
`.trim()) // Tambah sendiri kalo mau
handler.help = ['viaid']
handler.tags = ['shop']
handler.command = /^(viaid|ffid)$/i

handler.limit = false

module.exports = handler
