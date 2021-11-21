let handler = async m => m.reply(`
*PRICE LIST MOBILE LEGEND*
PAKET A :

86	    💎 Rp 19.040
172   💎 Rp 38.080
257   💎 Rp 57.120
344   💎 Rp 76.160
429   💎 Rp 95.200
514   💎 Rp 114.240
600   💎 Rp 133.280
706   💎 Rp 152.320
878   💎 Rp 190.400
963   💎 Rp 209.440
1050 💎 Rp 228.480
1.412 💎 Rp 304.640
2.195 💎 Rp 452.880
3688 💎 Rp 753.440

SL/TW  Rp. 126.200
SL PLUS Rp. 285.200


*PAKET B :* 

12💎 = 3.430
28💎 = 7.832
59💎 = 15.664
85💎 = 22.517
170💎 = 45.034
296💎 = 78.320
875💎 = 225.170

*•PROSES 1-30 MENIT, MAX 3 JAM*
*•NOMINAL LAEN KALIKAN SAJA*
*NO SS KAA CEK AJA*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['ml']
handler.tags = ['store']
handler.command = /^(ml)$/i

handler.limit = false

module.exports = handler
