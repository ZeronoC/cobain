let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonImg(m.chat, await (await fetch('https://telegra.ph/file/665046853bce1de9d2d5d.jpg')).buffer(), `
*P α y m e n t*

❀ GOPAY : scan qr a/n Y S H

❀ DANA : 089653328114 an indra 

❀ SHOPEEPAY : 089653328114 

❀ OVO : 082119829712 AN LYRAA

❀ BANK? BRI ( tnya admin ) 

❀ ALFAMART / INDOMART ( Minim Trx 20k ) 

*Sertακαn Bυκti SS!!*
*Salah TF No reff!*
*Nb : Kurang lengkapi, Lebih anggap sedekah:v*

*HARAP BACA SALAH TF JANGAN SALAHIN ADMIN!!*


`.trim())

handler.help = ['pay']
handler.tags = ['store']
handler.customPrefix = /^pay$/i
handler.command = new RegExp

module.exports = handler
