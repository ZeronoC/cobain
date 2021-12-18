let handler = async m => conn.reply(m.chat, `
https://chat.whatsapp.com/C0QvHiJp5hsHvoN5qcYGnJ
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gcstore']
handler.tags = ['store']
handler.command = /^(gcstore)$/i

handler.limit = false

module.exports = handler
