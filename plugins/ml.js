let handler = async m => conn.reply(m.chat, `
*PRICE LIST MOBILE LEGEND*
PAKET A :

86π Rp 18.900
172π Rp 37.800
257π Rp 56.700
344π Rp 75.600
429π Rp 94.500 
514π Rp 113.400 
600π Rp 132.300 
706π Rp 151.200
878π Rp 189.000 
963π Rp 207.900 
1050π Rp 226.800
1220π Rp 264.600 
1412π Rp 302.400 
2194π Rp 449.550
3688π Rp 747.900 
4032π Rp 823.500 
5532π Rp 1.123.200 
6238π Rp 1.274.400 
9288π Rp 1.871.100 

*SL/TW* Rp124.750 
*SL PLUS*	 Rp283.500

*PAKET B :* 

12π = 3.430
28π = 7.832
59π = 15.664
85π = 22.517
170π = 45.034
296π = 78.320
875π = 225.170

*β’PROSES 1-30 MENIT, MAX 3 JAM*
*β’NOMINAL LAEN KALIKAN SAJA*
*SS? MINTA AE*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['ml']
handler.tags = ['store']
handler.command = /^(ml)$/i

handler.limit = false

module.exports = handler
