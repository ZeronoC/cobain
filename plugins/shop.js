let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `Pilih List di Bawah
    `.trim()
    const button = {
        buttonText: 'List Harga',
        description: kontol,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'Free Fire', description: "", rowId:".viaid2"},
        {title: 'Mobile Legends', description: "", rowId:".ml2"},
        {title: 'Grup Official Store', description: "", rowId:".gcstore2"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['store']
handler.command = /^(shop)?)$/i
handler.help = ['shop']
module.exports = handler
