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
        {title: 'Run Bot RDP', description: "Rp20.000\nJasa Run Bot via RDP.", rowId:".sewardp"},
        {title: 'Premium', description: "Rp20.000\nDapatkan fitur Premium Permanent.", rowId:".sewapremium"},
        {title: '1 Bulan', description: "Rp15.000\nSewa bot selama 1 bulan.", rowId:".sewasebulan"},
        {title: '1 Minggu', description: "Rp10.000\nSewa bot selama 1 minggu.", rowId:".sewaseminggu"},
        {title: 'Owner? ', description: "Chat owner nya jika ingin order.", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['shop']
handler.command = /^(sewa(bot)?)$/i
handler.help = ['sewa']
module.exports = handler
