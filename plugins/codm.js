let handler = async m => m.reply(`
*LIST HARGA CODM VIA ID*
*_RATE 273_

53 CP = 9.009
112 CP = 18.018
165 CP = 27.027
224 CP = 36.036
278 CP = 45.045
331 CP = 63.063
390 CP = 90.090
581 CP = 90.090 
859 CP = 135.135
1268 CP = 180.180
1901 CP = 270.270

CALL OF DUTY MOBILE
PAKET B

31 CP : 4.450
62 CP : 8.900
127 CP : 17.800
317 CP : 44.500
634 CP : 89.000
1373 CP : 178.000
2059 CP : 267.000
3564 CP : 445.000
`.trim()) // Tambah sendiri kalo mau
handler.help = ['codm']
handler.tags = ['store']
handler.command = /^(codm)$/i

handler.limit = false

module.exports = handler
