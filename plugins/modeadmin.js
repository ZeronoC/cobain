let handler  = async (m, { conn, args }) => {
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*MODE ADMIN*\n\nBerikan keterangan on atau off !`, m)
	} else if(args[0] == 'on') {
    global.DATABASE.data.chats[m.chat].adminMode = true
		conn.reply(m.chat, `*MODE ADMIN*\n\nBot berhasil di ubah menjadi Admin Mode\n\nHanya admin yang dapat menggunakan bot di grup ini`, m)
	} else if(args[0] == 'off') {
    global.DATABASE.data.chats[m.chat].adminMode = false
		conn.reply(m.chat, `*MODE ADMIN*\n\nBerhasil menonaktifkan Admin Mode\n\nSemua anggota grup bisa menggunakan bot di grup ini`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*MODE ADMIN*\n\nBerikan keterangan on atau off !`, m)
	} 
}
handler.help = ['modeadmin *on/off*']
handler.tags = ['group']
handler.command = /^(modeadmin)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
handler.fail = null
handler.exp = 5000
module.exports = handler
