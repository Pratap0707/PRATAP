let handler = async (m, { conn, text, usedPrefix, command, args }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
	
let template = (args[0] || '').toLowerCase() 
if (/comprar|prem1/i.test(command)) {
var tiempoPremium = 5 * text //tiempo total 
var tiempoDecretado = 5 * 1 //tiempo decretado 
const gata = 15
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tiempoDecretado} MIMUTOS*\n*✤ ${gata} ${rpgshop.emoticon('kyubi')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.kyubi < gata) return conn.reply(m.chat, `${ag}𝘿𝙊𝙀𝙎𝙉𝙏 𝙃𝘼𝙑𝙀 𝙀𝙉𝙊𝙐𝙂𝙃 *${rpgshop.emoticon('kyubi')}* 𝙏𝙊 𝙂𝙀𝙏 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️ 𝘽𝙐𝙔${rpgshopp.emoticon('kyubi')} 𝙎𝙏𝙊𝙍𝙀 𝙐𝙎𝙀𝙄𝙉𝙂 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 *${usedPrefix}buy* 𝙐 𝘾𝘼𝙉 𝙎𝙀𝙇𝙇 𝙏𝙃𝙀 𝙋𝙍𝙊𝙁𝙄𝙏 𝙒𝙄𝙏𝙃 𝘾𝙊𝙈𝙈𝘼𝙉𝘿*${usedPrefix}sell*`, fkontak, m)
user.kyubi -= 𝙴𝙻𝙴𝙲𝚃𝚁𝙾 * text

var tiempo = 300000 * text //180000 3min | 300000 5 min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];
//let imgpre = 'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg' 

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙍 𝙉𝙊𝙒 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍 !!!*
*┃*
*┃✨ 𝙐𝙎𝙀𝙍*
*┃» ${user.name}*
*┃💰 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙃𝘼𝘿 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙀𝙁𝙏 𝙃𝙄𝙈 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙈𝙀 » ${tiempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐔𝐒𝐄𝐑𝐒🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝐌𝐎𝐑𝐄 𝐓𝐇𝐀𝐍 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝐄𝐍𝐉𝐎𝐘 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

if (/prem2/i.test(command)) {
var tiempoPremium = 15 * text //tiempo total 
var tiempoDecretado = 15 * 1 //tiempo decretado 
const gata = 35
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tiempoDecretado} MIMUTOS*\n*✤ ${gata} ${rpgshop.emoticon('kyubi')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.kyubi < gata) return conn.reply(m.chat, `${ag}𝘿𝙊𝙀𝙎𝙉𝙏 𝙃𝘼𝙑𝙀 𝙀𝙉𝙊𝙐𝙂𝙃 *${rpgshop.emoticon('kyubi')}* 𝙏𝙊 𝙂𝙀𝙏 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️ 𝘽𝙐𝙔${rpgshopp.emoticon('kyubi')} 𝙎𝙏𝙊𝙍𝙀 𝙐𝙎𝙀𝙄𝙉𝙂 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 *${usedPrefix}buy* 𝙐 𝘾𝘼𝙉 𝙎𝙀𝙇𝙇 𝙏𝙃𝙀 𝙋𝙍𝙊𝙁𝙄𝙏 𝙒𝙄𝙏𝙃 𝘾𝙊𝙈𝙈𝘼𝙉𝘿*${usedPrefix}sell*`, fkontak, m)
user.kyubi -= 𝙴𝙻𝙴𝙲𝚃𝚁𝙾 * text
    
var tiempo = 900000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙍 𝙉𝙊𝙒 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍 !!!*
*┃*
*┃✨ 𝙐𝙎𝙀𝙍*
*┃» ${user.name}*
*┃💰 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙃𝘼𝘿 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙀𝙁𝙏 𝙃𝙄𝙈 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙈𝙀 » ${tiempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐔𝐒𝐄𝐑𝐒🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝐌𝐎𝐑𝐄 𝐓𝐇𝐀𝐍 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝐄𝐍𝐉𝐎𝐘 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem3/i.test(command)) {
var tiempoPremium = 30 * text //tiempo total 
var tiempoDecretado = 30 * 1 //tiempo decretado 
const gata = 25
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tiempoDecretado} MIMUTOS*\n*✤ ${gata} ${rpgshop.emoticon('kyubi')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.kyubi < gata) return conn.reply(m.chat, `${ag}𝘿𝙊𝙀𝙎𝙉𝙏 𝙃𝘼𝙑𝙀 𝙀𝙉𝙊𝙐𝙂𝙃 *${rpgshop.emoticon('kyubi')}* 𝙏𝙊 𝙂𝙀𝙏 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️ 𝘽𝙐𝙔${rpgshopp.emoticon('kyubi')} 𝙎𝙏𝙊𝙍𝙀 𝙐𝙎𝙀𝙄𝙉𝙂 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 *${usedPrefix}buy* 𝙐 𝘾𝘼𝙉 𝙎𝙀𝙇𝙇 𝙏𝙃𝙀 𝙋𝙍𝙊𝙁𝙄𝙏 𝙒𝙄𝙏𝙃 𝘾𝙊𝙈𝙈𝘼𝙉𝘿*${usedPrefix}sell*`, fkontak, m)
user.kyubi -= 𝙴𝙻𝙴𝙲𝚃𝚁𝙾 * text
    
var tiempo = 1800000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙍 𝙉𝙊𝙒 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍 !!!*
*┃*
*┃✨ 𝙐𝙎𝙀𝙍*
*┃» ${user.name}*
*┃💰 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙃𝘼𝘿 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙀𝙁𝙏 𝙃𝙄𝙈 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙈𝙀 » ${tiempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐔𝐒𝐄𝐑𝐒🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝐌𝐎𝐑𝐄 𝐓𝐇𝐀𝐍 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝐄𝐍𝐉𝐎𝐘 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem4/i.test(command)) {
var tiempoPremium = 1 * text //tiempo total 
var tiempoDecretado = 1 * 1 //tiempo decretado 
const gata = 50
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tiempoDecretado} MIMUTOS*\n*✤ ${gata} ${rpgshop.emoticon('kyubi')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.kyubi < gata) return conn.reply(m.chat, `${ag}𝘿𝙊𝙀𝙎𝙉𝙏 𝙃𝘼𝙑𝙀 𝙀𝙉𝙊𝙐𝙂𝙃 *${rpgshop.emoticon('kyubi')}* 𝙏𝙊 𝙂𝙀𝙏 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️ 𝘽𝙐𝙔${rpgshopp.emoticon('kyubi')} 𝙎𝙏𝙊𝙍𝙀 𝙐𝙎𝙀𝙄𝙉𝙂 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 *${usedPrefix}buy* 𝙐 𝘾𝘼𝙉 𝙎𝙀𝙇𝙇 𝙏𝙃𝙀 𝙋𝙍𝙊𝙁𝙄𝙏 𝙒𝙄𝙏𝙃 𝘾𝙊𝙈𝙈𝘼𝙉𝘿*${usedPrefix}sell*`, fkontak, m)
user.kyubi -= 𝙴𝙻𝙴𝙲𝚃𝚁𝙾 * text
    
var tiempo = 3600000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙍 𝙉𝙊𝙒 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍 !!!*
*┃*
*┃✨ 𝙐𝙎𝙀𝙍*
*┃» ${user.name}*
*┃💰 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙃𝘼𝘿 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙀𝙁𝙏 𝙃𝙄𝙈 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙈𝙀 » ${tiempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐔𝐒𝐄𝐑𝐒🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝐌𝐎𝐑𝐄 𝐓𝐇𝐀𝐍 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝐄𝐍𝐉𝐎𝐘 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem5/i.test(command)) {
var tiempoPremium = 3 * text //tiempo total 
var tiempoDecretado = 3 * 1 //tiempo decretado 
const gata = 40
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tiempoDecretado} MIMUTOS*\n*✤ ${gata} ${rpgshop.emoticon('kyubi')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.kyubi < gata) return conn.reply(m.chat, `${ag}𝘿𝙊𝙀𝙎𝙉𝙏 𝙃𝘼𝙑𝙀 𝙀𝙉𝙊𝙐𝙂𝙃 *${rpgshop.emoticon('kyubi')}* 𝙏𝙊 𝙂𝙀𝙏 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️ 𝘽𝙐𝙔${rpgshopp.emoticon('kyubi')} 𝙎𝙏𝙊𝙍𝙀 𝙐𝙎𝙀𝙄𝙉𝙂 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 *${usedPrefix}buy* 𝙐 𝘾𝘼𝙉 𝙎𝙀𝙇𝙇 𝙏𝙃𝙀 𝙋𝙍𝙊𝙁𝙄𝙏 𝙒𝙄𝙏𝙃 𝘾𝙊𝙈𝙈𝘼𝙉𝘿*${usedPrefix}sell*`, fkontak, m)
user.kyubi -= 𝙴𝙻𝙴𝙲𝚃𝚁𝙾 * text
    
var tiempo = 10800000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙍 𝙉𝙊𝙒 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍 !!!*
*┃*
*┃✨ 𝙐𝙎𝙀𝙍*
*┃» ${user.name}*
*┃💰 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙃𝘼𝘿 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙀𝙁𝙏 𝙃𝙄𝙈 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙈𝙀 » ${tiempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐔𝐒𝐄𝐑𝐒🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝐌𝐎𝐑𝐄 𝐓𝐇𝐀𝐍 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝐄𝐍𝐉𝐎𝐘 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem6/i.test(command)) {
var tiempoPremium = 7 * text //tiempo total 
var tiempoDecretado = 7 * 1 //tiempo decretado 
const gata = 70
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tiempoDecretado} MIMUTOS*\n*✤ ${gata} ${rpgshop.emoticon('kyubi')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.kyubi < gata) return conn.reply(m.chat, `${ag}𝘿𝙊𝙀𝙎𝙉𝙏 𝙃𝘼𝙑𝙀 𝙀𝙉𝙊𝙐𝙂𝙃 *${rpgshop.emoticon('kyubi')}* 𝙏𝙊 𝙂𝙀𝙏 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️ 𝘽𝙐𝙔${rpgshopp.emoticon('kyubi')} 𝙎𝙏𝙊𝙍𝙀 𝙐𝙎𝙀𝙄𝙉𝙂 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 *${usedPrefix}buy* 𝙐 𝘾𝘼𝙉 𝙎𝙀𝙇𝙇 𝙏𝙃𝙀 𝙋𝙍𝙊𝙁𝙄𝙏 𝙒𝙄𝙏𝙃 𝘾𝙊𝙈𝙈𝘼𝙉𝘿*${usedPrefix}sell*`, fkontak, m)
user.kyubi -= 𝙴𝙻𝙴𝙲𝚃𝚁𝙾 * text
    
var tiempo = 25200000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙍 𝙉𝙊𝙒 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍 !!!*
*┃*
*┃✨ 𝙐𝙎𝙀𝙍*
*┃» ${user.name}*
*┃💰 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙃𝘼𝘿 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙀𝙁𝙏 𝙃𝙄𝙈 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙈𝙀 » ${tiempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐔𝐒𝐄𝐑𝐒🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝐌𝐎𝐑𝐄 𝐓𝐇𝐀𝐍 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝐄𝐍𝐉𝐎𝐘 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem7/i.test(command)) {
var tiempoPremium = 24 * text //tiempo total 
var tiempoDecretado = 24 * 1 //tiempo decretado 
const gata = 65
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tiempoDecretado} MIMUTOS*\n*✤ ${gata} ${rpgshop.emoticon('kyubi')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.kyubi < gata) return conn.reply(m.chat, `${ag}𝘿𝙊𝙀𝙎𝙉𝙏 𝙃𝘼𝙑𝙀 𝙀𝙉𝙊𝙐𝙂𝙃 *${rpgshop.emoticon('kyubi')}* 𝙏𝙊 𝙂𝙀𝙏 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️ 𝘽𝙐𝙔${rpgshopp.emoticon('kyubi')} 𝙎𝙏𝙊𝙍𝙀 𝙐𝙎𝙀𝙄𝙉𝙂 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 *${usedPrefix}buy* 𝙐 𝘾𝘼𝙉 𝙎𝙀𝙇𝙇 𝙏𝙃𝙀 𝙋𝙍𝙊𝙁𝙄𝙏 𝙒𝙄𝙏𝙃 𝘾𝙊𝙈𝙈𝘼𝙉𝘿*${usedPrefix}sell*`, fkontak, m)
user.kyubi -= 𝙴𝙻𝙴𝙲𝚃𝚁𝙾 * text
    
var tiempo = 86400000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙍 𝙉𝙊𝙒 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍 !!!*
*┃*
*┃✨ 𝙐𝙎𝙀𝙍*
*┃» ${user.name}*
*┃💰 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙃𝘼𝘿 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙀𝙁𝙏 𝙃𝙄𝙈 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙈𝙀 » ${tiempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐔𝐒𝐄𝐑𝐒🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝐌𝐎𝐑𝐄 𝐓𝐇𝐀𝐍 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝐄𝐍𝐉𝐎𝐘 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (/prem8/i.test(command)) {
var tiempoPremium = 3 * text //tiempo total 
var tiempoDecretado = 3 * 1 //tiempo decretado 
const gata = 80
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}*𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tiempoDecretado} MIMUTOS*\n*✤ ${gata} ${rpgshop.emoticon('kyubi')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.kyubi < gata) return conn.reply(m.chat, `${ag}𝘿𝙊𝙀𝙎𝙉𝙏 𝙃𝘼𝙑𝙀 𝙀𝙉𝙊𝙐𝙂𝙃 *${rpgshop.emoticon('kyubi')}* 𝙏𝙊 𝙂𝙀𝙏 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️ 𝘽𝙐𝙔${rpgshopp.emoticon('kyubi')} 𝙎𝙏𝙊𝙍𝙀 𝙐𝙎𝙀𝙄𝙉𝙂 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 *${usedPrefix}buy* 𝙐 𝘾𝘼𝙉 𝙎𝙀𝙇𝙇 𝙏𝙃𝙀 𝙋𝙍𝙊𝙁𝙄𝙏 𝙒𝙄𝙏𝙃 𝘾𝙊𝙈𝙈𝘼𝙉𝘿*${usedPrefix}sell*`, fkontak, m)
user.kyubi -= 𝙴𝙻𝙴𝙲𝚃𝚁𝙾 * text
    
var tiempo = 259200000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙍 𝙉𝙊𝙒 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍 !!!*
*┃*
*┃✨ 𝙐𝙎𝙀𝙍*
*┃» ${user.name}*
*┃💰 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙃𝘼𝘿 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙀𝙁𝙏 𝙃𝙄𝙈 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙈𝙀 » ${tiempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐔𝐒𝐄𝐑𝐒🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝐌𝐎𝐑𝐄 𝐓𝐇𝐀𝐍 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝐄𝐍𝐉𝐎𝐘 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 😽`, `${usedPrefix}allmenu`]], fkontak, m)}
	
//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
	
if (command) {
switch (template) {		
case 'premium':
case 'vip':
case 'prem':
case 'pass':
case 'pase':
const sections = [{
title: comienzo + ' 🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 🎟️ ' + fin,
rows: [
{title: "💎 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓵ : 𝗣𝗔𝗦𝗦 ⓵", rowId: `${usedPrefix}prem1 1`, description: `✪ 𝗕𝗮𝘀𝗶𝗰 𝗣𝗮𝘀𝘀\n✪ 15 ${rpgshop.emoticon('limit')} ➟ 5 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "🌀 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓶ : 𝗣𝗔𝗦𝗦 ⓶", rowId: `${usedPrefix}prem2 1`, description: `✪ 𝗖𝗵𝗮𝗿𝗺 𝗣𝗮𝘀𝘀\n✪ 35 ${rpgshop.emoticon('kyubi')} ➟ 15 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "💚 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓷ : 𝗣𝗔𝗦𝗦 ⓷", rowId: `${usedPrefix}prem3 1`, description: `✪ 𝗚𝗿𝗲𝗲𝗻𝗶𝘀𝗵 𝗣𝗮𝘀𝘀\n✪ 25 ${rpgshop.emoticon('emerald')} ➟ 30 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "🗑 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓸ : 𝗣𝗔𝗦𝗦 ⓸", rowId: `${usedPrefix}prem4 1`, description: `✪ 𝗘𝗖𝗢 𝗪𝗮𝘀𝘁𝗲 𝗣𝗮𝘀𝘀\n✪ 50 ${rpgshop.emoticon('trash')} ➟ 1 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "♦️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓹ : 𝗣𝗔𝗦𝗦 ⓹", rowId: `${usedPrefix}prem5 1`, description: `✪ 𝗕𝗿𝗶𝗹𝗹𝗶𝗮𝗻𝘁 𝗛𝘂𝗻𝘁 𝗣𝗮𝘀𝘀\n✪ 40 ${rpgshop.emoticon('berlian')} ➟ 3 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "🪙 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓺ : 𝗣𝗔𝗦𝗦 ⓺", rowId: `${usedPrefix}prem6 1`, description: `✪ 𝗖𝗿𝘆𝗽𝘁𝗼 𝗠𝗮𝘀𝘁𝗲𝗿 𝗣𝗮𝘀𝘀\n✪ 70 ${rpgshop.emoticon('joincount')} ➟ 7 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "💎+ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓻ : 𝗣𝗔𝗦𝗦 ⓻", rowId: `${usedPrefix}prem7 1`, description: `✪ 𝗚𝗲𝗺 𝗣𝗹𝘂𝘀 𝗣𝗮𝘀𝘀\n✪ 65 ${rpgshop.emoticon('diamond')} ➟ 24 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "👑 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓼ : 𝗣𝗔𝗦𝗦 ⓼", rowId: `${usedPrefix}prem8 1`, description: `✪ 𝗚𝗼𝗹𝗱𝗲𝗻 𝗧𝗶𝗺𝗲 𝗣𝗮𝘀𝘀\n✪ 80 ${rpgshop.emoticon('gold')} ➟ 3 d 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`}
]},{
title: comienzo + ' 🌟 𝙄𝙉𝙁𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🌟 ' + fin,
rows: [
{title: "🎟️ 𝐏 𝐑 𝐄 𝐌 𝐈 𝐔 𝐌    𝐔 𝐒 𝐄𝐑 𝐒 ", rowId: usedPrefix + 'listprem'},
{title: "🏆 𝐓 𝐎 𝐏   𝐖 𝐎 𝐑 𝐋 𝐃 ", rowId: usedPrefix + 'top'},
{title: "🚀 𝐄 𝐍 𝐉 𝐎 𝐘   𝗣 𝗥𝗘 𝗠 𝗜 𝗨 𝗠", rowId: usedPrefix + 'allmenu'}
	
]}]

const listMessage = {
  text: `🌟 𝗕𝗨𝗬 𝗔 𝗧𝗬𝗣𝗘 𝗢𝗙 𝗣𝗔𝗦𝗦 𝗧𝗢 𝗕𝗘𝗖𝗢𝗠𝗘 𝗔 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗨𝗦𝗘𝗥!!!`,
  footer: global.wm,
  title: `${htki} *🎟️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🎟️* ${htka}`,
  buttonText: `🎟️ 𝗦𝗘𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`,
  sections
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
break	
		
}}}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = /^(comprar|prem1|prem2|prem3|prem4|prem5|prem6|prem7|prem8|premium|vip|prem|pass|pase)$/i

export default handler
