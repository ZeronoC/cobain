let handler = async m => m.reply(`
*PRICE LIST MOBILE LEGEND*
*PAKET A :
86	    π Rp 19.340
172   π Rp 38.380
257   π Rp 57.420
344   π Rp 76.460
429   π Rp 95.500
514   π Rp 114.540
600   π Rp 133.580
706   π Rp 152.620
878   π Rp 190.700
963   π Rp 209.740
1050 π Rp 228.780
1.412 π Rp 304.940
2.195 π Rp 453.180
3688 π Rp 753.740

SL/TW  Rp. 126.300
SL PLUS Rp. 285.300


*PAKET B :* 
12π = 3.730
28π = 8.132
59π = 15.964
85π = 22.817
170π = 45.334
296π = 78.620
875π = 225.470

*β’PROSES 1-30 MENIT, MAX 3 JAM*
*β’NOMINAL LAEN KALIKAN SAJA*
*NO SS LANGSUNG CEK AJA*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['ml2']
handler.tags = ['store']
handler.command = /^(ml2)$/i

handler.limit = false

module.exports = handler
