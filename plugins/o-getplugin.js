let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)

let handler = async (m, { conn, isROwner, command, text }) => {
    if (!isROwner) return
    if (global.conn.user.jid != conn.user.jid) return
    m.reply('Executing...')
    let o
    try {
        o = await exec('cd plugins/' + text + '.js')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
    }
}
handler.help = ['getplugin'].map(v => v + ' <text>')
handler.tags = ['owner']
handler.command = /^(getplugin)$/i

module.exports = handler
