let handler = async m => m.reply(`
*HARAP DIISI JIKA INGIN MENDAFTARKAN RDP*
Nama: 
No HP: 
Pembayaran: 

Teruskan pesan ini kepada owner untuk segera di selesaikan.
NB: *Sertakan bukti transfer*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewardp']
handler.tags = ['store']
handler.command = /^(sewardp)$/i

handler.limit = false

module.exports = handler
