import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝙀𝙇𝙀𝘾𝙏𝙍𝙊-𝙈𝘿⚡', body: '𝙋𝙧𝙖𝙩𝙖𝙥', sourceUrl: `https://github.com/pratap0707/ELECTRO-MD`, thumbnail: imagen2}}})}
    
return !0 }
export default handler
