let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `${mg}𝙏𝘼𝙂 𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙔𝙊𝙐 𝙒𝙄𝙇𝙇 𝙍𝙀𝙈𝙊𝙑𝙀 𝙁𝙍𝙊𝙈 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍𝙎 😿\n\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} @tag*`
if (!global.prems.includes(who.split`@`[0])) throw `${iig}𝙏𝙃𝙀 𝙐𝙎𝙀𝙍 𝙄𝙎 𝙉𝙊𝙏 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🥺`
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
conn.reply(m.chat, `${eg}@${who.split`@`[0]} @${who.split`@`[0]} 𝙉𝙊𝙒 𝙔𝙊𝙐 𝘼𝙍𝙀 𝙉𝙊 𝙇𝙊𝙉𝙂𝙀𝙍 𝘼 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍. 𝙃𝘼𝙑𝙀 𝙇𝙄𝙈𝙄𝙏𝙎 😰`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(remove|-|del)prem$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.rowner = true
export default handler
