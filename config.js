let fs = require('fs')
global.owner = ['6282146176911', '6289621278920', '6289653328114'] // Letakan nomor kamu disini
global.mods = [] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  vhtear: 'https://api.vhtear.com',
  lolhum: 'https://api.lolhuman.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  aqul: 'https://api.justaqul.xyz',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://dhnjing.xyz': 'f6e39bfccfa07f6ec729',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'MIMINETBOT',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'http://zekais-api.herokuapp.com': 'grqgD6pU',
  'https://api.zeks.xyz': 'chika-key',
  'https://api.vhtear.com': 'sayahafiz',
  'https://api.lolhuman.xyz.com': 'raselunyu',
  'https://fxc7-api.herokuapp.com': 'uN8rsK4g',
  'https://api.justaqul.xyz': '5kbUqdG00OXelFYx',
}

// Sticker WM
global.packname = 'Hi♥️'
global.author = 'فيرا'

global.wait = '*Tunggu sebentar ya...*'
global.eror = 'Maaf terjadi kesalahan'
global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.watermark = '${week} ${weton}, ${date}\n${time}' //change the watermark (beberapa harus manual)
global.thanks = '© Zee'
global.anu = `Thanks to:
•Allah swt
•Nurutomo
•Ariffb
•Ray (partner)
•Rasel (mybro) 
•Gw (owner
•Penyedia Layanan API
•Orang-orang yang Berdonasi
•My ortu

Jika menemukan bug atau request fitur dan join bot harap chat owner dengan cara:
*-report* [pesan].

(Bot join group NOT FREE!)
Price? type #sewa

Nb:bot ini masih terus dikembangkan.`
global.ppkosong = 'https://telegra.ph/file/22fd84e4a3244e1b17e4e.png'
global.image = 'https://i.postimg.cc/52kVpWSw/20211113-192215.png'//change the image
global.thumbfoto = 'https://i.postimg.cc/52kVpWSw/20211113-192215.png' //thumbnail foto tools
global.yamete = 'https://i.postimg.cc/52kVpWSw/20211113-192215.png' //foto first chat
global.sumberurl = 'https://instagram.com/yrdan_21'
global.deskripsiurl = 'Saya adalah Bot WhatsApp.'

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')


let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
