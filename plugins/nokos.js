let handler = async m => m.reply(`
*List nokos*

Nokos wa sms (+62) : 650p
~Nokos wa luar : 550p~
~Nokos tele : 850p~
Nokos instagram : 650p
~Nokos fecebook : 650p~
Nokos twiitter : 550p
Nokos tiktok : 650p
Nokos snack vidio : 700p
Nokos line : 650p
Nokos gojek :  550p
Nokos dana : 550p
Nokos ovo : 550p
Nokos Shopee : 650p
Nokos Bukalapak : 750p
Nokos linkaja : 700p
Nokos tokopedia : 550p
Nokos flip : 550p


- Nokos lainnya bisa tanyakan
- - Harga mumer
- Order sabar
- - Bee smart buyer
`.trim()) // Tambah sendiri kalo mau
handler.help = ['nokos']
handler.tags = ['store']
handler.command = /^(nokos)$/i

handler.limit = false

module.exports = handler
