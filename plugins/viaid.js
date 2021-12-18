let handler = async m => conn.reply(m.chat, `
*LIST HARGA FREE FIRE VIA ID*
_RATE 268_
💎 5 = 804
💎 20 = 2.680
💎 50 = 6.432
💎 70 = 8.844
💎 100 = 12.864
💎 140 = 17.688
💎 150 = 19.296
💎 210 = 26.532
💎 355 = 44.220
💎 425 = 53.064
💎 500 = 62.712
💎 720 = 88.440
💎 860 = 106.128
💎 1000 = 123.816
💎 1075 = 132.660
💎 1440 = 176.880
💎 2000 = 241.200
💎 4000 = 482.400
M.MINGGUAN = 26.800
M.BULANAN = 134.000
*PROSES 1-10 MENIT*
❗SERTAKAN BUKTI TRANSFER
`.trim()) // Tambah sendiri kalo mau
handler.help = ['viaid']
handler.tags = ['store']
handler.command = /^(viaid|ffid)$/i

handler.limit = false

module.exports = handler
