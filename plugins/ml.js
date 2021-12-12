let handler = async m => m.reply(`
*PRICE LIST MOBILE LEGEND*
PAKET A :

86💎 Rp 18.900
172💎 Rp 37.800
257💎 Rp 56.700
344💎 Rp 75.600
429💎 Rp 94.500 
514💎 Rp 113.400 
600💎 Rp 132.300 
706💎 Rp 151.200
878💎 Rp 189.000 
963💎 Rp 207.900 
1050💎 Rp 226.800
1220💎 Rp 264.600 
1412💎 Rp 302.400 
2194💎 Rp 449.550
3688💎 Rp 747.900 
4032💎 Rp 823.500 
5532💎 Rp 1.123.200 
6238💎 Rp 1.274.400 
9288💎 Rp 1.871.100 

*SL/TW* Rp124.750 
*SL PLUS*	 Rp283.500

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
*SS? MINTA AE*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['ml']
handler.tags = ['store']
handler.command = /^(ml)$/i

handler.limit = false

module.exports = handler
