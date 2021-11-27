let handler = async m => m.reply(`
*LIST HARGA FREE FIRE VIA LOGIN*
_RATE 12,2_


*Log Google Minimal 5$*
*Log Fb / vk minim 2$*
*DATA KE [ 8114 ]*
*WAJIB A2FON + KODE PEMULIHAN*
*GAK BAWA KODE? GK PROSES!!!*

100 💎   = 12.200
200 💎 = 24.400
310 💎 = 36.600
410 💎 = 48.800
520 💎 = 61.000
620 💎 = 73.200
720 💎 = 85.400
830 💎 = 97.600
930 💎 = 109.800
1060 💎 = 122.000
1370 💎  = 158.600
1580 💎 = 183.000
2180 💎 = 244.000
3010 💎 = 341.600
3240 💎 = 366.000
3760 💎 = 427.000
4360 💎 = 488.000
5600 💎 = 610.000
11.200 💎 = 1.220.000

Mm  : 24.400
Mb  : 134.200

___________________________


*LIST VILOG PUBGM*

325 UC = 61.000
650 UC = 122.000
1800 UC = 305.000
8100 UC = 1.220.000

Nomor/Email        Sandi       Kode Pemulihan

*NB = AMAN KAN AKUN SETELAH DONE BIAR GAK DRAMA*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['vlg']
handler.tags = ['store']
handler.command = /^(vlg)$/i

handler.limit = false

module.exports = handler
