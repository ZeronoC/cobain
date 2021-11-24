let handler = async m => m.reply(`
*HARAP DIISI JIKA INGIN MENDAFTARKAN SEWA BOT 1 MINGGU*
Nama: 
Link Grup: 
Pembayaran: 

Teruskan pesan ini kepada owner untuk segera di selesaikan.
NB: *Sertakan bukti transfer*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewaseminggu']
handler.tags = ['store']
handler.command = /^(sewaseminggu)$/i

handler.limit = false

module.exports = handler
