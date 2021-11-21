let handler = async m => m.reply(`
https://chat.whatsapp.com/C0QvHiJp5hsHvoN5qcYGnJ
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gcstore']
handler.tags = ['store']
handler.command = /^(gcstore)$/i

handler.limit = false

module.exports = handler
