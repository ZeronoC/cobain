let handler = async m => m.reply(`
*LIST HARGA ZEPETO VIA USERNAME*
*_RATE 0.89_*

*ZEMS*
*7 ZEMS = 6.675
*14 ZEMS = 13.350
*29 ZEMS = 26.700
*60 ZEMS = 53.400
*125 ZEMS = 106.800
*196 ZEMS = 160.200
*770 ZEMS = 614.100
*COINS*
*4.680 COINS = 13.350
*10.200 COINS = 26.700
*21.000 COINS = 53.400
*38.900 COINS = 97.900
*62.800 COINS = 150.410
*234.000 COINS = 525.100
*PROSES 1-30 MENIT*
❗SERTAKAN BUKTI TRANSFER
`.trim()) // Tambah sendiri kalo mau
handler.help = ['zepeto']
handler.tags = ['store']
handler.command = /^(zepeto)$/i

handler.limit = false

module.exports = handler
