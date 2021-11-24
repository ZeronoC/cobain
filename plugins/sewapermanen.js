let handler = async m => m.reply(`
*HARAP DIISI JIKA INGIN MENDAFTARKAN SEWA BOT PERMANEN*
Nama: 
Link Grup: 
Pembayaran: 

Teruskan pesan ini kepada owner untuk segera di selesaikan.
NB: *Sertakan bukti transfer*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewapermanen']
handler.tags = ['store']
handler.command = /^(sewapermanen)$/i

handler.limit = false

module.exports = handler
