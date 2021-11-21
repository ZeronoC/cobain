let handler = async m => m.reply(`
*LIST HARGA FREE FIRE VIA ID*
*_RATE 273_
💎70 ⇝ Rp 8.975
💎140 ⇝ Rp 17.750
💎150 ⇝ Rp 19.300
💎210 ⇝ Rp 26.525
💎280 ⇝ Rp 35.300
💎355 ⇝ Rp 44.075
💎425 ⇝ Rp 52.850
💎495 ⇝ Rp 61.625
💎500 ⇝ Rp 62.400
💎720 ⇝ Rp 87.950
💎860 ⇝ Rp 105.250
💎1000 ⇝ Rp 122.800
💎1075 ⇝ Rp 131.575
💎1450 ⇝ Rp 175.700
💎2180 ⇝ Rp 263.550

MM = RP 26.500
MB = RP 132.500

*PROSES 1-10 MENIT*
**SERTAKAN BUKTI TRANSFER!!*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['viaid2']
handler.tags = ['store']
handler.command = /^(viaid2)$/i

handler.limit = false

module.exports = handler
