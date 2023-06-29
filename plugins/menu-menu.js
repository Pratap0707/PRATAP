import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'en'
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
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

let menu = `${lenguajeGB['smsConfi2']()} *${user.genero === 0 ? '👤' : user.genero == 'Ocultado 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : username}*${(conn.user.jid == global.conn.user.jid ? '' : `\n*SOY SUB BOT DE: https://wa.me/${global.conn.user.jid.split`@`[0]}*`) || ''}

\`\`\`${week}, ${date}\`\`\`
♤ *${lenguajeGB['smsTotalUsers']()}* ◆ _${Object.keys(global.db.data.users).length}_ 
♤ *Registrados »* ${rtotalreg}/${totalreg}
♤ *${lenguajeGB['smsTime']()}* ◆ _${time}_    
♤ *${lenguajeGB['smsUptime']()}* ◆ _${uptime}_ 
♤ *${lenguajeGB['smsVersion']()}* ◆ _${vs}_
♤ *${lenguajeGB['smsMode']()} ◆* _${global.opts['self'] ? `${lenguajeGB['smsModePrivate']().charAt(0).toUpperCase() + lenguajeGB['smsModePrivate']().slice(1).toLowerCase()}` : `${lenguajeGB['smsModePublic']().charAt(0).toUpperCase() + lenguajeGB['smsModePublic']().slice(1).toLowerCase()}`}_
♤ *${lenguajeGB['smsBanChats']()}* ◆ _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_ 
♤ *${lenguajeGB['smsBanUsers']()}* ◆ _${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_

✨ *◜USER INFO ◞* ✨
☂︎✈︎ *Tipo de registro »* ${user.registered === true ? `_${user.registroC === true ? 'Registro Completo 🗂️' : 'Registro Rápido 📑'}_` : '❌ _Sin registro_'}
☂︎✈︎ *Mi estado »* ${typeof user.miestado !== 'string' ? '❌ _' + usedPrefix + 'miestado_' : '_Me siento ' + user.miestado + '_'}
☂︎✈︎ *Registrado »* ${user.registered === true ? '✅' : '❌ _' + usedPrefix + 'verificar_'}
☂︎✈︎ *${lenguajeGB['smsBotonM7']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM7']().slice(1).toLowerCase()} »* ${user.premiumTime > 0 ? '✅' : '❌ _' + usedPrefix + 'pase premium_'}
  
☂︎✈︎ *${lenguajeGB['smsBotonM5']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM5']().slice(1).toLowerCase()} »* ${role}
☂︎✈︎ *${lenguajeGB['smsBotonM6']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM6']().slice(1).toLowerCase()} »* ${emoji} || ${user.exp - min}/${xp}
☂︎✈︎ *${lenguajeGB['smsPareja']()}* ${pareja ? `\n*»* ${name} 💕 ${conn.getName(pareja)}` : `🛐 ${lenguajeGB['smsResultPareja']()}`}
☂︎✈︎ *Pasatiempo(s)* ➺ ${user.pasatiempo === 0 ? '*Sin Registro*' : user.pasatiempo + '\n'}

☂︎✈︎ *Experiencia ➟* ${exp} ⚡
☂︎✈︎ *Diamantes ➟* ${limit} 💎
☂︎✈︎ *ELECTROCoins ➟* ${money} 💸
☂︎✈︎ *Tokens ➟* ${joincount} 🪙
${readMore}
*╭━☆〔 ElectroBot Info 〕⏤͟͟͞͞★*
 ✰➪ _${usedPrefix}Electrobotaccounts |  gb_accounts
 ✰➪ _${usedPrefix}gbgroups |  groups |  groupgb_
 ✰➪ _${usedPrefix}donate |  donate_
 ✰➪ _${usedPrefix}grouplist |  grouplist_
 ✰➪ _${usedPrefix}status |  heyagata |  status_
 ✰➪ _${usedPrefix}infogata |  infobot_
 ✰➪ _${usedPrefix}installbot |  installbot_
 ✰➪ _${usedPrefix}creator |  owner_
 ✰➪ _${usedPrefix}speed |  ping_
 ✰➪ _Bot_
 ✰➪ _terms and conditions_
*╰☆━━━━━━━━━━━━⏤͟͟͞͞★*

*╭━☆〔 SUB BOT FUNCTION 〕━⏤͟͟͞͞★*
 ⏤͟͟͞͞★ *You can now convert*
 ⏤͟͟͞͞★ *Number in ElectroBot!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
 ✰➪ _${usedPrefix}serbot |  jadibot_
 ✰➪ _${usedPrefix}bots |  listjadibots_
 ✰➪ _${usedPrefix}stop |  stop_
 ✰➪ _${usedPrefix}bcbot_
 *╰☆━━━━━━━━━━━━⏤͟͟͞͞★*

 *╭━☆〔 REPORT COMMAND 〕━⏤͟͟͞͞★*
 ⏤͟͟͞͞★ *Report with this command if you have*
 ⏤͟͟͞͞★ *Failures to be able to Solve!!*
 ┃✈︎┈┈┈┈┈┈┈✈︎┈┈┈┈┈┈┈┈✈︎
 ♲︎︎︎ ➪ _${usedPrefix}report *text*_
 ♲︎︎︎ ➪ _${usedPrefix}report *text*_
 *╰☆━━━━━━━━━━━━⏤͟͟͞͞★*

 *╭━☆〔 JOIN THE GROUP 〕━⏤͟͟͞͞★*
 ⏤͟͟͞͞★ *Match GataBot in Groups!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
 ☂︎➪ _${usedPrefix}botemporal *link* *amount*_
 ☂︎➪ _${usedPrefix}addbot *link* *amount*_
 *╰☆━━━━━━━━━━━━⏤͟͟͞͞★*

 *╭━〔 PREMIUM 💎 〕━⏤͟͟͞͞★*
⏤͟͟͞͞★ *Turns into a*
⏤͟͟͞͞★ *Premium User!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
✰➪ _${usedPrefix}premium list |  listprem_
✰➪ _${usedPrefix}premium pass_
✰➪ _${usedPrefix}premium pass_
*╰━━━━━━━━━━━━⏤͟͟͞͞★*

*╭━〔 MULTI GAMES 🎮 〕━⏤͟͟͞͞★*
✰➪ _${usedPrefix}mates |  mathematics |  math_
✰➪ _${usedPrefix}cast *heads* |  *cross*
✰➪ _${usedPrefix}ppt *rock : paper : scissors*_
✰➪ _${usedPrefix}tictactoe |  ttt *room*_
✰➪ _${usedPrefix}deltictactoe |  delttt_
✰➪ _${usedPrefix}topgays_
✰➪ _${usedPrefix}topotakus_
✰➪ _${usedPrefix}toppajer@s_
✰➪ _${usedPrefix}topput@s_
✰➪ _${usedPrefix}topmembers |  topintegrante_
✰➪ _${usedPrefix}toplagrasa |  topfat_
✰➪ _${usedPrefix}toppanafrescos |  toppanafresco_
✰➪ _${usedPrefix}topshiposters |  topshippost_
✰➪ _${usedPrefix}toplindos |  tolind@s_
✰➪ _${usedPrefix}topfamous |  topfamos@s_
✰➪ _${usedPrefix}topcouples |  top5couples_
✰➪ _${usedPrefix}gay |  gay *@tag*_
✰➪ _${usedPrefix}gay2 *name : @tag*_
✰➪ _${usedPrefix}lesbian *name : @tag*_ 
✰➪ _${usedPrefix}manca *name : @tag*_
✰➪ _${usedPrefix}manco *name : @tag*_
✰➪ _${usedPrefix}pajero *name : @tag*_
✰➪ _${usedPrefix}pajera *name : @tag*_
✰➪ _${usedPrefix}fucking *name : @tag*_
✰➪ _${usedPrefix}whore *name : @tag*_
✰➪ _${usedPrefix}rat *name : @tag*_
✰➪ _${usedPrefix}love *name : @tag*_
✰➪ _${usedPrefix}dox *name : @tag*_
✰➪ _${usedPrefix}doxxeame_
✰➪ _${usedPrefix}question *text*_
✰➪ _${usedPrefix}bet |  slot *quantity*_
✰➪ _${usedPrefix}pair_
✰➪ _${usedPrefix}given_
✰➪ _${usedPrefix}true_
✰➪ _${usedPrefix}challenge_
✰➪ _${usedPrefix}multigames_
✰➪ _${usedPrefix}games_
*╰━━━━━━━━━━━━⏤͟͟͞͞★*

*╭━〔 AI 〕━⏤͟͟͞͞★*
 ⏤͟͟͞͞★ *You have the chance to*
 ⏤͟͟͞͞★ *Talk with GataBot!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
✰➪ _${usedPrefix}simi |  okgoogle *text*_
✰➪ _${usedPrefix}alexa |  siri |  cortana *text*_
✰➪ _${usedPrefix}simsimi |  bixby *text*_
 *╰━━━━━━━━━━━━⏤͟͟͞͞★*

 *╭━━━[ CHAT - SETTINGS ⚙️ ]━━━⏤͟͟͞͞★*
 ⏤͟͟͞͞★*Configure if you are Owner and/or*
 ⏤͟͟͞͞★ *Admin!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
✰➪ _${usedPrefix}on *:* off *welcome |  welcome*_
✰➪ _${usedPrefix}on *:* off *warnings |  detect*_
✰➪ _${usedPrefix}on *:* off *autolevel |  autolevelup*_
✰➪ _${usedPrefix}on *:* off *restrict |  restrict*_
✰➪ _${usedPrefix}on *:* off *antillamar |  anticall*_
✰➪ _${usedPrefix}on *:* off *public |  public*_
✰➪ _${usedPrefix}on *:* off *autoview |  autoread*_
✰➪ _${usedPrefix}on *:* off *temporary*_
✰➪ _${usedPrefix}on *:* off *stickers*_
✰➪ _${usedPrefix}on *:* off *autosticker*_
✰➪ _${usedPrefix}on *:* off *reactions |  reaction*_
✰➪ _${usedPrefix}on *:* off *audios*_
✰➪ _${usedPrefix}on *:* off *hotmode |  hornymode*_
✰➪ _${usedPrefix}on *:* off *antitoxic |  antitoxic*_
✰➪ _${usedPrefix}on *:* off *antiver |  antiviewonce*_
✰➪ _${usedPrefix}on *:* off *anti-delete |  antidelete*_
✰➪ _${usedPrefix}on *:* off *anti-international |  antifake*_
✰➪ _${usedPrefix}on *:* off *antilink |  antilink*_
✰➪ _${usedPrefix}on *:* off *antilink2 |  antilink2*_
✰➪ _${usedPrefix}on *:* off *antiktok |  antitk*_
✰➪ _${usedPrefix}on *:* off *antiyoutube |  antiyt*_
✰➪ _${usedPrefix}on *:* off *antitelegram |  antitel*_
✰➪ _${usedPrefix}on *:* off *antifacebook |  antifb*_
✰➪ _${usedPrefix}on *:* off *antinstagram |  old*_
✰➪ _${usedPrefix}on *:* off *antitwitter |  antitw*_
✰➪ _${usedPrefix}on *:* off *private only |  pconly*_
✰➪ _${usedPrefix}on *:* off *onlygroups |  gconly*_
*╰━━━━━━━━━━━━⏤͟͟͞͞★*

*╭━〔 GROUP - SUMMARY 〕━⏤͟͟͞͞★*
 ⏤͟͟͞͞★ *Now you can see the summary*
 ⏤͟͟͞͞★ *Group configuration!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
✰➪🧾➺ _${usedPrefix}settings_
✰➪🧾➺ _${usedPrefix}settings_
✰➪🧾➺ _${usedPrefix}vergroup_
 *╰━━━━━━━━━━━━⏤͟͟͞͞★*

 *╭━[  DOWNLOADS  ]━⏤͟͟͞͞★*
✰➪ _${usedPrefix}image |  image *text*_
✰➪ _${usedPrefix}pinterest |  dlpinterest *text*_
✰➪ _${usedPrefix}wallpaper|wp *text*_
✰➪ _${usedPrefix}play |  play2 *text or link*_
✰➪ _${usedPrefix}play.1 *text or link*_
✰➪ _${usedPrefix}play.2 *text or link*_
✰➪ _${usedPrefix}ytmp3 |  yta *link*_
✰➪ _${usedPrefix}ytmp4 |  ytv *link*_
✰➪ _${usedPrefix}pdocaudio |  ytadoc *link*_
✰➪ _${usedPrefix}pdocvieo |  ytvdoc *link*_
✰➪ _${usedPrefix}tw |twdl |  twitter *link*_
✰➪ _${usedPrefix}facebook |  facebook *link*_
✰➪ _${usedPrefix}instagram *link video or image*_
✰➪ _${usedPrefix}verig |  igstalk *user*_
✰➪ _${usedPrefix}ighistory |  igstory *username*_
✰➪ _${usedPrefix}tiktok *link*_
✰➪ _${usedPrefix}tiktokfoto |  tiktokphoto *username*_
✰➪ _${usedPrefix}vertiktok |  tiktokstalk *username*_
✰➪ _${usedPrefix}mediafire |  dlmediafire *link*_
✰➪ _${usedPrefix}clonarepo |  gitclone *link*_
✰➪ _${usedPrefix}weather *country city*_
✰➪ _${usedPrefix}tip_
✰➪ _${usedPrefix}morse encode *text*_
✰➪ _${usedPrefix}morse decode *morse*_
✰➪ _${usedPrefix}fraseromantica_
✰➪ _${usedPrefix}history_
 *╰━━━━━━━━━━━━⏤͟͟͞͞★*

 *╭━[ ANONYMOUS CHAT ]━⏤͟͟͞͞★*
⏤͟͟͞͞★ *Write with Someone*
⏤͟͟͞͞★ *Anonymously!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
✰➪ _${usedPrefix}chatanonym |  anonymouschat_
✰➪ _${usedPrefix}anonymoch_
✰➪_${usedPrefix}start_
✰➪ _${usedPrefix}next_
✰➪_${usedPrefix}leave_
*╰━━━━━━━━━━━━⏤͟͟͞͞★*

*╭━[ CONFIGURATION - GROUPS ]━⏤͟͟͞͞★*
⏤͟͟͞͞★ *Improve your Group with GataBot!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
✰➪ _${usedPrefix}add *number*_
✰➪ _${usedPrefix}take out |  ban |  kick *@tag*_
✰➪ _${usedPrefix}group *open : close*_
✰➪ _${usedPrefix}group *open : close*_
✰➪ _${usedPrefix}daradmin |  promote *@tag*_
✰➪ _${usedPrefix}remove |  demote *@tag*_
✰➪ _${usedPrefix}banchat_
✰➪ _${usedPrefix}unbanchat_
✰➪ _${usedPrefix}banuser *@tag*_
✰➪ _${usedPrefix}unbanuser *@tag*_
✰➪ _${usedPrefix}admins *text*_
✰➪ _${usedPrefix}call *text*_
✰➪ _${usedPrefix}tagall *text*_
✰➪ _${usedPrefix}hidetag *text*_
✰➪ _${usedPrefix}infogroup |  infogroup_
✰➪ _${usedPrefix}timegroup |  grouptime *Quantity*_
✰➪ _${usedPrefix}warning *@tag*_
✰➪ _${usedPrefix}ofwarning *@tag*_
✰➪ _${usedPrefix}delwarn *@tag*_
✰➪ _${usedPrefix}createvote |  startvote *text*_
✰➪ _${usedPrefix}sivotar |  upvote_
✰➪ _${usedPrefix}novote |  devotee_
✰➪ _${usedPrefix}vvotes |  cekvoto_
✰➪ _${usedPrefix}delvoto |  deletevote_
✰➪ _${usedPrefix}link |  link_
✰➪ _${usedPrefix}newname |  newname *text*_
✰➪ _${usedPrefix}newdesc |  description *text*_
✰➪ _${usedPrefix}setwelcome |  welcome *text*_
✰➪ _${usedPrefix}setbye |  farewell *text*_
✰➪ _${usedPrefix}newlink |  resetlink_
✰➪ _${usedPrefix}on_
✰➪ _${usedPrefix}off_
 *╰━━━━━━━━━━━━⏤͟͟͞͞★*

 *╭━━━[ COUPLES 💞 ]━━⏤͟͟͞͞★*
⏤͟͟͞͞★ *Declare to someone*
⏤͟͟͞͞★ *so that they are Couples!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
✰➪ _${usedPrefix}pairlist |  listship_
✰➪ _${usedPrefix}mypartner |  mylove_
✰➪ _${usedPrefix}couple |  couple *@tag*_
✰➪ _${usedPrefix}accept |  accept *@tag*_
✰➪ _${usedPrefix}reject |  decline *@tag*_
✰➪ _${usedPrefix}terminate |  finish *@tag*_
 *╰━━━━━━━━━━━━⏤͟͟͞͞★*

 *╭━[ VOTING IN GROUPS ]━⏤͟͟͞͞★*
⏤͟͟͞͞★ *Now you can do*
⏤͟͟͞͞★ *Voting in Groups!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
✰➪ _${usedPrefix}createvote |  startvote *text*_
✰➪ _${usedPrefix}sivotar |  upvote_
✰➪ _${usedPrefix}novote |  devotee_
✰➪ _${usedPrefix}vvotes |  cekvoto_
✰➪ _${usedPrefix}delvoto |  deletevote_
*╰━━━━━━━━━━━━⏤͟͟͞͞★*

*╭━━━[ CONTENT 🔞 ]━━⏤͟͟͞͞★*
⏤͟͟͞͞★ *Visit the Commands Menu*
⏤͟͟͞͞★ *For Adults!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
✰➪ _${usedPrefix}hornymenu_
 *╰━━━━━━━━━━━━⏤͟͟͞͞★*

 *╭━[ CONVERTERS 🛰️ ]━⏤͟͟͞͞★*
⏤͟͟͞͞★ *Convert sticker into image!!*
⏤͟͟͞͞★ *Create file link!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
✰➪ _${usedPrefix}toimg |  image |  jpg *sticker*_
✰➪ _${usedPrefix}tomp3 |  mp3 *video or voice memo*_
✰➪ _${usedPrefix}tovn |  vn *video or audio*_
✰➪ _${usedPrefix}tovideo *audio*_
✰➪ _${usedPrefix}tour *video, image*_
✰➪ _${usedPrefix}tolink *video, image or audio*_
✰➪ _${usedPrefix}tts is *text*_
 *╰━━━━━━━━━━━━⏤͟͟͞͞★*

 *╭━━━[ LOGOS 🔆 ]━━⏤͟͟͞͞★*
⏤͟͟͞͞★ *Create Logos or personalize*
⏤͟͟͞͞★ *Logo information!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
✰➪ _${usedPrefix}logos *text effect*_
✰➪ _${usedPrefix}menulogos2_
 *╰━━━━━━━━━━━━⏤͟͟͞͞★*

 *╭━━━[ EFFECTS ]━━⏤͟͟͞͞★*
✰➪ _${usedPrefix}simpcard *@tag*_
✰➪ _${usedPrefix}hornycard *@tag*_
✰➪ _${usedPrefix}lolice *@tag*_
✰➪ _${usedPrefix}ytcomment *text*_
✰➪ _${usedPrefix}itssostupid_
✰➪ _${usedPrefix}pixelate_
✰➪ _${usedPrefix}blur_
*╰━━━━━━━━━━━━⏤͟͟͞͞★*

*╭━[ RANDOM  ANIME  ]━⏤͟͟͞͞★*
✰➪ _${usedPrefix}girl_
✰➪ _${usedPrefix}boy_
✰➪ _${usedPrefix}cristianoronaldo_
✰➪ _${usedPrefix}messi_
✰➪ _${usedPrefix}meme_
✰➪ _${usedPrefix}meme2_
✰➪ _${usedPrefix}itzy_
✰➪ _${usedPrefix}blackpink_
✰➪ _${usedPrefix}kpop *blackpink : exo : bts*_
✰➪ _${usedPrefix}lolivid_
✰➪ _${usedPrefix}loli_
✰➪ _${usedPrefix}Christmas_
✰➪ _${usedPrefix}ppcouple_
✰➪ _${usedPrefix}neko_
✰➪ _${usedPrefix}waifu_
✰➪ _${usedPrefix}akira_
✰➪ _${usedPrefix}akiyama_
✰➪ _${usedPrefix}anna_
✰➪ _${usedPrefix}asuna_
✰➪ _${usedPrefix}ayuzawa_
✰➪ _${usedPrefix}boruto_
✰➪ _${usedPrefix}chiho_
✰➪ _${usedPrefix}chitoge_
✰➪ _${usedPrefix}deidara_
✰➪ _${usedPrefix}erza_
✰➪ _${usedPrefix}elaina_
✰➪ _${usedPrefix}eba_
✰➪ _${usedPrefix}emilia_
✰➪ _${usedPrefix}hestia_
✰➪ _${usedPrefix}hinata_
✰➪ _${usedPrefix}inori_
✰➪ _${usedPrefix}isuzu_
✰➪ _${usedPrefix}itachi_
✰➪ _${usedPrefix}itori_
✰➪ _${usedPrefix}kaga_
✰➪ _${usedPrefix}kagura_
✰➪ _${usedPrefix}kaori_
✰➪ _${usedPrefix}keneki_
✰➪ _${usedPrefix}kotori_
✰➪ _${usedPrefix}kurumi_
✰➪ _${usedPrefix}madara_
✰➪ _${usedPrefix}mikasa_
✰➪ _${usedPrefix}miku_
✰➪ _${usedPrefix}minato_
✰➪ _${usedPrefix}naruto_
✰➪ _${usedPrefix}nezuko_
✰➪ _${usedPrefix}sagiri_
✰➪ _${usedPrefix}sasuke_
✰➪ _${usedPrefix}sakura_
✰➪ _${usedPrefix}cosplay_
*╰━━━━━━━━━━━━⏤͟͟͞͞★*

*╭━[  MODIFY AUDIO  ]━⏤͟͟͞͞★*
⏤͟͟͞͞★ *Make Modifications*
⏤͟͟͞͞★ *to Audio or Voice Note!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
✰➪ _${usedPrefix}bass_
✰➪ _${usedPrefix}blown_
✰➪ _${usedPrefix}deep_
✰➪ _${usedPrefix}earrape_
✰➪ _${usedPrefix}fast_
✰➪ _${usedPrefix}fat_
✰➪ _${usedPrefix}nightcore_
✰➪ _${usedPrefix}reverse_
✰➪ _${usedPrefix}robot_
✰➪ _${usedPrefix}slow_
✰➪ _${usedPrefix}smooth_
✰➪ _${usedPrefix}tupai_
 *╰━━━━━━━━━━━━⏤͟͟͞͞★*

 *╭━━[ SEARCHES 🔍 ]━━⏤͟͟͞͞★*
⏤͟͟͞͞★ *Find what you want with ELECTROBot!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
✰➪ _${usedPrefix}animeinfo *text*_
✰➪ _${usedPrefix}mangainfo *text*_
✰➪ _${usedPrefix}google *text*_
✰➪ _${usedPrefix}lyrics |  lirik *text*_
✰➪ _${usedPrefix}ytsearch |  yts *text*_
✰➪ _${usedPrefix}wiki |  wikipedia *text*_
 *╰━━━━━━━━━━━━⏤͟͟͞͞★*

 *╭━━━[ AUDIOS 🔊 ]━━⬣*
⏤͟͟͞͞★ *Visit the Audio Menu!!*
⏤͟͟͞͞★ *Enjoy a Great Variety*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
✰➪ _${usedPrefix}audios_
 *╰━━━━━━━━━━━━⏤͟͟͞͞★*

 *╭━━[ TOOLS 🛠️ ]━━⏤͟͟͞͞★*
✰➪ _${usedPrefix}afk *reason*_
✰➪ _${usedPrefix}shorten *url*_
✰➪ _${usedPrefix}calc *math operation*_
✰➪ _${usedPrefix}del *reply to Bot message*_
✰➪ _${usedPrefix}qrcode *text*_
✰➪ _${usedPrefix}readmore *text1|text2*_
✰➪ _${usedPrefix}spamwa *number|text|amount*_
✰➪ _${usedPrefix}styletext *text*_
✰➪ _${usedPrefix}translate *text*_
✰➪ _${usedPrefix}morse encode *text*_
✰➪ _${usedPrefix}morse decode *morse*_
✰➪ _${usedPrefix}poll |  poll *Reason*_
✰➪ _${usedPrefix}time_
*╰━━━━━━━━━━━━⏤͟͟͞͞★*

*╭━━━[ RPG FUNCTION ]━━⏤͟͟͞͞★*
⏤͟͟͞͞★ *Buy, Acquire Resources*
⏤͟͟͞͞★ *Improve Your Level and Rank!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
✰➪ _${usedPrefix}botemporal *link* *amount*_
✰➪ _${usedPrefix}addbot *link* *amount*_
✰➪ _${usedPrefix}premium pass_
✰➪ _${usedPrefix}premium pass_
✰➪ _${usedPrefix}premium list |  listprem_
✰➪ _${usedPrefix}transfer *type amount @tag*_
✰➪ _${usedPrefix}give *type amount @tag*_
✰➪ _${usedPrefix}send *type amount @tag*_
✰➪ _${usedPrefix}balance_
✰➪ _${usedPrefix}wallet |  wallet_
✰➪ _${usedPrefix}experience |  exp_
✰➪ _${usedPrefix}top |  lb |  leaderboard_
✰➪ _${usedPrefix}level |  level |  lvl_
✰➪ _${usedPrefix}role |  range_
✰➪ _${usedPrefix}inventory |  inventory_
✰➪ _${usedPrefix}adventure |  adventure_
✰➪ _${usedPrefix}hunting |  hunt |  hunt_
✰➪ _${usedPrefix}fish |  fishing_
✰➪ _${usedPrefix}animals_
✰➪ _${usedPrefix}food_
✰➪ _${usedPrefix}heal |  heal_
✰➪ _${usedPrefix}buy_
✰➪ _${usedPrefix}sell_
✰➪ _${usedPrefix}verify |  to register_
✰➪ _${usedPrefix}profile |  profile_
✰➪ _${usedPrefix}myns_
✰➪ _${usedPrefix}unreg *serial number*_
✰➪ _${usedPrefix}mydiamonds |  minargems_
✰➪ _${usedPrefix}minargatacoins |  minarcoins_
✰➪ _${usedPrefix}mineexperience |  minarexp_
✰➪ _${usedPrefix}minar *:* minar2 *:* minar3_
✰➪ _${usedPrefix}claim |  gift |  claim_
✰➪ _${usedPrefix}every hour |  hourly_
✰➪ _${usedPrefix}everyweek |  weekly |  weekly_
✰➪ _${usedPrefix}everyday |  month |  monthly_
✰➪ _${usedPrefix}chest |  open chest |  coffer_
✰➪ _${usedPrefix}work |  work_
*╰━━━━━━━━━━━━⏤͟͟͞͞★*

*╭━━━[ TOP IN ELECTROBOT ]━━⏤͟͟͞͞★*
⏤͟͟͞͞★ *Find out which Top you are in!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✰➪ _${usedPrefix}top |  lb |  leaderboard_
 *╰━━━━━━━━━━━━⏤͟͟͞͞★*

 *╭━[ STICKERS AND FILTERS ]━⏤͟͟͞͞★*
⏤͟͟͞͞★ *Make stickers or create*
⏤͟͟͞͞★ *stickers with filters!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✰➪
✰➪ _${usedPrefix}sticker |  s *image or video*_
✰➪ _${usedPrefix}sticker |  s *url of type jpg*_
✰➪ _${usedPrefix}emojimix *😺+😆*_
✰➪ _${usedPrefix}scircle |  circle *image*_
✰➪ _${usedPrefix}semoji |  emoji *type emoji*_
✰➪ _${usedPrefix}attp *text*_
✰➪ _${usedPrefix}attp2 *text*_
✰➪ _${usedPrefix}ttp *text*_
✰➪ _${usedPrefix}ttp2 *text*_
✰➪ _${usedPrefix}ttp3 *text*_
✰➪ _${usedPrefix}ttp4 *text*_
✰➪ _${usedPrefix}ttp5 *text*_
✰➪ _${usedPrefix}ttp6 *text*_
✰➪ _${usedPrefix}given_
✰➪ _${usedPrefix}stickermarker *effect : respond to image*_
✰➪ _${usedPrefix}stickerfilter *effect : respond to image*_
✰➪ _${usedPrefix}cs *:* cs2_
 *╰━━━━━━━━━━━━⏤͟͟͞͞★*

 *╭━[ MODIFY STICKERS ]━⏤͟͟͞͞★*
⏤͟͟͞͞★ *Customize the information of the Sticker!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
✰➪ _${usedPrefix}wm *packname|author*_
✰➪ _${usedPrefix}wm *text1|text2*_
 *╰━━━━━━━━━━━━⏤͟͟͞͞★*

 *╭━[ DYNAMIC STICKERS ]━⏤͟͟͞͞★*
⏤͟͟͞͞★ *Perform actions with Stickers*
⏤͟͟͞͞★ *Tagging someone!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
✰➪ _${usedPrefix}pats |  pat *@tag*_
✰➪ _${usedPrefix}slap |  slap *@tag*_
✰➪ _${usedPrefix}hit *@tag*_
✰➪ _${usedPrefix}kiss |  kiss *@tag*_
✰➪ _${usedPrefix}feed |  food *@tag*_
 *╰━━━━━━━━━━━━⏤͟͟͞͞★*

 *╭━[ OWNER MENU ]━⏤͟͟͞͞★*
⏤͟͟͞͞★ *Commands only for Owner!!*
 ┃✈︎┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈‧₊˚✩彡
✰➪ _${usedPrefix}join *link*_
✰➪ _${usedPrefix}join *link*_
✰➪ _${usedPrefix}givediamonds *amount*_
✰➪ _${usedPrefix}darxp *amount*_
✰➪ _${usedPrefix}dargatacoins *amount*_
✰➪ _${usedPrefix}addprem |  userpremium *@tag* *amount*_
✰➪ _${usedPrefix}addprem2 |  userpremium2 *@tag* *amount*_
✰➪ _${usedPrefix}addprem3 |  userpremium3 *@tag* *amount*_
✰➪ _${usedPrefix}addprem4 |  userpremium4 *@tag* *amount*_
✰➪ _${usedPrefix}language |  language_
✰➪ _${usedPrefix}safe_
✰➪ _${usedPrefix}communicate |  broadcastall |  bc *text*_
✰➪ _${usedPrefix}broadcastchats |  bcc *text*_
✰➪ _${usedPrefix}communicatepv *text*_
✰➪ _${usedPrefix}broadcastgc *text*_
✰➪ _${usedPrefix}communicategroups *text*_
✰➪ _${usedPrefix}deletemp |  cleartmp_
✰➪ _${usedPrefix}delexp *@tag*_
✰➪ _${usedPrefix}delgatacoins *@tag*_
✰➪ _${usedPrefix}ofdiamonds *@tag*_
✰➪ _${usedPrefix}reset |  restart_
✰➪ _${usedPrefix}update |  update_
✰➪ _${usedPrefix}addprem |  +press *@tag*_
✰➪ _${usedPrefix}delprem |  -prem *@tag*_
✰➪ _${usedPrefix}premium list |  listprem_
✰➪ _${usedPrefix}adddiamonds *@tag amount*_
✰➪ _${usedPrefix}addxp *@tag quantity*_
✰➪ _${usedPrefix}addgatacoins *@tag amount*_
 *╰ꨄ︎━━━━━━━━━━━━⏤͟͟͞͞★*`.trim()
await conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fkontak ,m)
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'en' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|.|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  