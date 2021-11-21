let handler = async m => m.reply(`
*PRICE LIST MOBILE LEGEND*
*PAKET A :
86	    💎 Rp 19.340
172   💎 Rp 38.380
257   💎 Rp 57.420
344   💎 Rp 76.460
429   💎 Rp 95.500
514   💎 Rp 114.540
600   💎 Rp 133.580
706   💎 Rp 152.620
878   💎 Rp 190.700
963   💎 Rp 209.740
1050 💎 Rp 228.780
1.412 💎 Rp 304.940
2.195 💎 Rp 453.180
3688 💎 Rp 753.740

SL/TW  Rp. 126.300
SL PLUS Rp. 285.300


*PAKET B :* 
12💎 = 3.730
28💎 = 8.132
59💎 = 15.964
85💎 = 22.817
170💎 = 45.334
296💎 = 78.620
875💎 = 225.470

*•PROSES 1-30 MENIT, MAX 3 JAM*
*•NOMINAL LAEN KALIKAN SAJA*
*NO SS LANGSUNG CEK AJA*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['ml2']
handler.tags = ['store']
handler.command = /^(ml2)$/i

handler.limit = false

module.exports = handler
