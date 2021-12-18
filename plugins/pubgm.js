let handler = async m => conn.reply(m.chat, `
*LIST HARGA PUBG VIA ID*
*_RATE 0.89_*

50+2 UC = 8.900
60+2 UC = 10.680
120+2 UC = 21.360
150+6 UC = 26.700
180+6 UC = 32.040
250+13 UC = 44.500
500+25 UC = 89.000
1250+125 = 222.500
2500+375 = 445.000


*PROSES 1-30 MENIT*
*SERTAKAN BUKTI TRANSFER!*
`,false) // Tambah sendiri kalo mau
handler.help = ['pubgm']
handler.tags = ['store']
handler.command = /^(pubgm)$/i

handler.limit = false

module.exports = handler

