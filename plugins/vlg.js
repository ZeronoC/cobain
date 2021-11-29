let handler = async m => m.reply(`
*LIST HARGA FREE FIRE VIA LOGIN*
_RATE 11,7_


*Log Google Minimal 5$*
*Log Fb / vk minim 2$*
*DATA KE 8114*
*WAJIB A2FON + KODE PEMULIHAN*
*GAK BAWA KODE? GK PROSES!!!*


200 💎 (2$) = 23.400
310 💎 (3$) = 35.100
410 💎 (4$) = 46.800
520 💎 (5$) = 58.500
620 💎 (6$) = 70.200
720 💎 (7$) = 81.900
830 💎 (8$) = 93.600
930 💎 (9$) = 105.300
1060 💎 (10$) = 117.000
1370 💎 (13$) = 152.100
1580 💎 (15$) = 175.500
2180 💎 (20$) = 234.000
3010 💎 (28$) = 327.600
3240 💎 (30$) = 351.000
5600 💎 (50$) = 585.000
11.200 💎 (100$) = 1.170.000

Mm (2$) : 23.400
Mb (8$)  : 128.700

Nomor/Email        Sandi       Kode Pemulihan

*NB = AMAN KAN AKUN SETELAH DONE BIAR GAK DRAMA*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['vlg']
handler.tags = ['store']
handler.command = /^(vlg)$/i

handler.limit = false

module.exports = handler
