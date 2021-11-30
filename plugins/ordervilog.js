let handler = async m => m.reply(`
Isi data dibawah 

WAJIB DIISI BIAR TIDAK SALAH KIRIM DMNYA

NICKNAME :
LOGIN FB / GOOGLE :
EMAIL :
PW :
KODE :
ORDER :

Nb : kirim di pc [8114]
`.trim()) // Tambah sendiri kalo mau
handler.help = ['ordervilog']
handler.tags = ['store']
handler.customPrefix = /^order vilog$/i
handler.command = new RegExp

handler.limit = false

module.exports = handler
