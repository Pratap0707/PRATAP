import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

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
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
//let name = await conn.getName(m.sender)
let pp = './media/menus/Menu1.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false

let Terminos = `
*_All the information mentioned here does not exclude the Owner of the Bot, and Creditor Owners to the use of ELECTRO-MD_*
 *_We are not responsible for the lack of knowledge that you have about this information._*


 *PRIVACY TERMS*
 _- We are aware of the constant use that you can give to the Bot, and we also guarantee that the information such as (images, videos, links, location, Audios, Stickers, Gif, Contacts that you Provide around Official Number(s) ) They are not and will not be shared with anyone, nor will said Data be used outside the BOT environment._

 _- What I did with the BOT is only up to you since in Official Number(s) The Chat is Deleted every 24 Hours, according to the time of WhatsApp Temporary Messages._

 _- It is possible that in Official Number(s) the Bot is not Activated 24 Hours a day, 7 days a week, that does not imply that it is not or that NON-OFFICIAL Owners can do it._

 _- The anonymous chat of the #start command, worth the redundancy, will not show any data of the Users by ElectroBot.  This does not imply that people who make use of this function can disclose their data.  in Official Number(s)._

 _- The Data Obtained by GataBot in Official Accounts of Users, Groups and Settings thereof can be Restarted, Modified, and/or Rectified in order for the Bot to be in Optimal Conditions for Use. (Users ) They can Request Compensation Through Instagram or through the #Report command. You must present evidence)._

 _- We are NOT responsible if there are alterations to this Bot that are not Official Number(s) and use a GitHub Repository that does not correspond to the Official one, or that Third-Party Users implement integrations that compromise Users (as) when using Unofficial Versions._

 _- The Sub Bot function Guarantees the security of your Data applied to Official Accounts._


 *TERMS OF USE*
 _- The information that is in this Bot and the user who makes use of the same will assume to know the Terms and Conditions in such a way that there will be no inconveniences when making a Particular use of the Bot Functions._

 _- The Bot contains Material that can only be visible to people over 18 years of age, we are NOT responsible if you do not meet the minimum age to use the Material for Adults._

 _- The images, Videos and Audios that this Bot has are for Public use, but it will be considered Lack of Respect when making Edits in the already existing Material that carries the Bot's Name or relevant information._

 _- When making use of a request for group membership with An Official Account, it is recommended that the group does not have Hate issues, viruses, inappropriate content, discrimination issues or baseless campaigns._

 _- If you have received an Official Communication being an Official Number(s) Maintain Respect in the same way if you receive a Message without having used a Maintain Respect Command since in the latter case it can be a Real Person._

 _- Official ElectroBot Accounts are not responsible for the Use you make with the "Sub Bot" function._


*TERMS OF USE*
 _- DO NOT make or try to Call or make a Video Call to the Bot with Official Number(s) as it hinders the operation of the BOT._

 _- DO NOT use the Bot as Official Number(s) to carry out any hostile action that may compromise the Functioning of the BOT._

 _- DO NOT use the SPAM command repeatedly, since it will Cause a Malfunction in the BOT, neither send the BOT messages that could compromise its Operation._

 _- When making use of certain commands that aim to undermine discomfort, restlessness, annoyance or another blunt term, the respective sanctions or alert calls will be taken to prevail the integrity of the Users and the operation of ELECTROBot. _


*THIS IS THE OFFICIAL REPOSITORY*
*https://github.com/pratap0707/ELECTRO-MD*


*OFFICIAL ATTENDANCE ACCOUNT - INSTAGRAM*
 ~ _Only in this Account I answer if you have Doubts, Questions or Need Help about ELECTROBot, You can also Communicate in Case of Collaboration Issues_
*https://www.instagram.com/pratapp_2714*


*DONATE TO THE CREATOR IN THIS OFFICIAL ACCOUNT*
 ~ _If you like and value the work I have done, you can help me by donating so that I can continue in this project_
*https://paypal.me*


*~ Thank you very much for taking the time to learn about ELECTROBot*` 
conn.sendButton(m.chat, Terminos, `${wm}\nEstamos de acuerdo en Hacer Colaboraciones con Personas Comprometidas, manteniendo el Respeto Puedes Contactar si ese es el caso a esta Cuenta Oficial\nhttps://www.instagram.com/pratapp_2714`, pp, [
['𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 💫', '.allmenu'],
['𝙈𝙚𝙣𝙪 𝙇𝙞𝙨𝙩 🌟', '/menulista'],
['𝙈𝙖𝙞𝙣 𝙢𝙚𝙣𝙪 �', '#menu']
], m)
/*.trim()
conn.sendHydrated(m.chat, Terminos,  `${wm}\nEstamos de acuerdo en Hacer Colaboraciones con Personas Comprometidas, manteniendo el Respeto Puedes Contactar si ese es el caso a esta Cuenta Oficial | https://www.instagram.com/gata_dios`, pp, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 💫', '.allmenu'],
['𝙈𝙚𝙣𝙪 𝙙𝙚𝙨𝙥𝙡𝙚𝙜𝙖𝙗𝙡𝙚 | 𝙈𝙚𝙣𝙪 𝙇𝙞𝙨𝙩 🌟', '/menulista'],
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 | 𝙈𝙖𝙞𝙣 𝙢𝙚𝙣𝙪 �?', '#menu']
], m,)*/
}

handler.customPrefix = /terminos|términos|términos, condiciones y privacidad|terminos, condiciones y privacidad|términos y condiciones y privacidad|terminosycondicionesyprivacidad|terminosycondiciones|terminos y condiciones y privacidad|terminos y condiciones|terminos y condiciones|terminos de uso|Terminos de uso|Terminó se uso|términos de uso|Términos de uso|Términos y condiciones/i
handler.command = new RegExp
//handler.register = true
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
