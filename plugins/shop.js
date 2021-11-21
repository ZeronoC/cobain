let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `*SEWA BOT*

*Free User:* 
  Unlimited Limit: ❎
  JadiBot: ❎
  Masukin Bot ke Grup: ❎
 
*Premium User:*
  Unlimited Limit: ✅
  JadiBot: ✅
  Masukin Bot ke Grup: ✅
---------------------------------------------------------
*JASA RUN BOT RDP*
 
  Bot On 24Jam✅
  EXP 30D🔋
  SPECS RDP: 8GB RAM/2vCPU🖥️
---------------------------------------------------------
*Pembayaran:*

https://saweria.co/mrzee78
Dana: 082146176911
OVO: 082146176911
---------------------------------------------------------
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
