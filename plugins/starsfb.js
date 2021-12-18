let handler = async m => conn.reply(m.chat, `
*GIFT STARS FB*
*_RATE 12,4_
18 STARS (1$) = 12.400
25 STARS (1$) = 12.400
55 STARS (1$) = 12.400
85 STARS (2$) = 24.800
174 STARS (3$) = 37.200
350 STARS ( 6$) = 74.400
590 STARS (10$) = 124.000
1200 STARS (20$) = 248.000


*NB : KIRIM LINK LIVE STREAMING*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['starsfb']
handler.tags = ['store']
handler.command = /^(starsfb)$/i

handler.limit = false

module.exports = handler
