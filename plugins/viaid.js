let handler = async m => conn.reply(m.chat, `
*LIST HARGA FREE FIRE VIA ID*
_RATE 268_
π 5 = 804
π 20 = 2.680
π 50 = 6.432
π 70 = 8.844
π 100 = 12.864
π 140 = 17.688
π 150 = 19.296
π 210 = 26.532
π 355 = 44.220
π 425 = 53.064
π 500 = 62.712
π 720 = 88.440
π 860 = 106.128
π 1000 = 123.816
π 1075 = 132.660
π 1440 = 176.880
π 2000 = 241.200
π 4000 = 482.400
M.MINGGUAN = 26.800
M.BULANAN = 134.000
*PROSES 1-10 MENIT*
βSERTAKAN BUKTI TRANSFER
`.trim()) // Tambah sendiri kalo mau
handler.help = ['viaid']
handler.tags = ['store']
handler.command = /^(viaid|ffid)$/i

handler.limit = false

module.exports = handler
