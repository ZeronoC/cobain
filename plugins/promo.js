let handler = async m => m.reply(`
*FF ID PROMO*
710 DM 65.000
1420 DM 130.000
2130 DM 195.000
3550 DM 325.000
5680 DM 520.000
DAN SETERUSNYA KALIKAN SENDIRI !!!


*DM ML VIA ID*
338 DM 65.000
676 DM 130.000
1014 DM 195.000
1690 DM 325.000
DST KALIKAN SENDIRI
`.trim()) // Tambah sendiri kalo mau
handler.help = ['promo']
handler.tags = ['store']
handler.customPrefix = /^promo$/i
handler.command = new RegExp

handler.limit = false

module.exports = handler
