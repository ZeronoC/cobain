let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `Silahkan Pilih Dibawah
    `.trim()
    const button = {
        buttonText: 'List Harga',
        description: kontol,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'Free Fire Via ID', description: "", rowId:".viaid"},
        {title: 'Free Fire Flash Sale', description: "", rowId:".idfs"},
        {title: 'Game Via Login', description: "", rowId:".vlg"},
        {title: 'Mobile Legends', description: "", rowId:".ml"},
        {title: 'PUBGM', description: "", rowId:".pubgm"},
        {title: 'Genshin Impact', description: "", rowId:".genshin"},
        {title: 'CODM', description: "", rowId:".codm"},
        {title: 'Zepeto', description: "", rowId:".zepeto"},
        {title: 'Garena Shell', description: "", rowId:".gs"},
        {title: 'Jasa Followers', description: "", rowId:".jf"},
        {title: 'Gift Stars FB', description: "", rowId:".starsfb"},
        {title: 'Grup Official Store', description: "", rowId:".gcstore"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['shop']
handler.help = ['store']
handler.customPrefix = /^LYRA$/i
handler.command = new RegExp
module.exports = handler 
