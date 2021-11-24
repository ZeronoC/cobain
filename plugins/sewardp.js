let handler = async m => m.reply(`
*HARAP DIISI JIKA INGIN MENDAFTARKAN RDP*
Nama: 
No HP: 
Pembayaran: 

Teruskan pesan ini kepada owner untuk segera di selesaikan.
NB: *Sertakan bukti transfer*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['buyrdp']
handler.tags = ['store']
handler.command = /^(buyrdp)$/i

handler.limit = false

module.exports = handler
