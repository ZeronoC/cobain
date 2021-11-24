let handler = async m => m.reply(`
*HARAP DIISI JIKA INGIN MENDAFTARKAN MEMBER PREMIUM*
Nama: 
No HP: 
Pembayaran: 

Teruskan pesan ini kepada owner untuk segera di selesaikan.
NB: *Sertakan bukti transfer*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['buypremium']
handler.tags = ['store']
handler.command = /^(buypremium)$/i

handler.limit = false

module.exports = handler
