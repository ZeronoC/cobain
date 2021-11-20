let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Apa tag tag owner?
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@6282146176911|6289621278920/i
handler.command = new RegExp

module.exports = handler
