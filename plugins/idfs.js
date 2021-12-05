let handler = async m => m.reply(`
*fIᥲsh sᥲᥣᥱ*
*KHUSUS MUMPUNG RATE TURUN*
*ORDER SEBELUM RATE NAIK LAGI*

⌗ 💎70 ⇝ Rp 8.775
⌗ 💎140 ⇝ Rp 17.550
⌗ 💎150 ⇝ Rp 19.100
⌗ 💎210 ⇝ Rp 26.325
⌗ 💎280 ⇝ Rp 35.100
⌗ 💎355 ⇝ Rp 43.875
⌗ 💎425 ⇝ Rp 52.650
⌗ 💎495 ⇝ Rp 61.425
⌗ 💎500 ⇝ Rp 62.200
⌗ 💎720 ⇝ Rp 87.750
⌗ 💎860 ⇝ Rp 105.050
⌗ 💎1000 ⇝ Rp 122.600
⌗ 💎1075 ⇝ Rp 131.375
⌗ 💎1450 ⇝ Rp 175.500
⌗ 💎2180 ⇝ Rp 263.250

MM = RP 26.600 *OPEN*
MB = RP 133.000 *CLOSE*

BERLAKU KELIPATAN kalikan sendiri
`.trim()) // Tambah sendiri kalo mau
handler.help = ['idfs']
handler.tags = ['store']
handler.command = /^(idfs)$/i

handler.limit = false

module.exports = handler
