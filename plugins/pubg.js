let handler = async m => m.reply(`
*LIST VILOG PUBGM*
325 UC (5$) = 62.000
650 UC (10$) = 124.000
1800 UC (25$) = 310.000
8100 UC (100$) = 1.240.000

Nomor/Email        Sandi       Kode Pemulihan

*NB = AMAN KAN AKUN SETELAH DONE BIAR GAK DRAMA*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['pubg']
handler.tags = ['store']
handler.command = /^(pubg)$/i

handler.limit = false

module.exports = handler
