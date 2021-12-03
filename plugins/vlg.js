let handler = async m => m.reply(`
*LIST HARGA FREE FIRE VIA LOGIN*
_RATE 11,5_


*Log Google Minimal 5$*
*Log Fb / vk minim 2$*
*DATA KE 8114*
*WAJIB A2FON + KODE PEMULIHAN*
*GAK BAWA KODE? GK PROSES!!!*

100 💎   = 11.500
200 💎 = 23.000
310 💎 = 34.500
410 💎 = 46.000
520 💎 = 57.500
620 💎 = 69.000
720 💎 = 80.500
830 💎 = 92.000
930 💎 = 103.500
1060 💎 = 115.000
1370 💎  = 149.500
1580 💎 = 172.500
2180 💎 = 230.000
3010 💎 = 322.000
5600 💎 = 575.000
11.200 💎 = 1.150.000

Mm  : 23.000
Mb  : 126.500

___________________________


*LIST VILOG PUBGM*

325 UC = 37.500
650 UC = 115.000
1800 UC = 287.500
8100 UC = 1.150.000

Nomor/Email        Sandi       Kode Pemulihan

*NB = AMAN KAN AKUN SETELAH DONE BIAR GAK DRAMA*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['vlg']
handler.tags = ['store']
handler.command = /^(vlg)$/i

handler.limit = false

module.exports = handler
