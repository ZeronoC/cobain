let handler = async m => m.reply(`
Genshin impact Via iD‼️
60 GS 14.000
330 GS 68.000
1090 GS 212.500
2240 GS 408.000
3880 GS 680.000
Proses 1-5menit
`.trim()) // Tambah sendiri kalo mau
handler.help = ['genshin']
handler.tags = ['store']
handler.command = /^(genshin)$/i

handler.limit = false

module.exports = handler
