// Gracias a https://github.com/BrunoSobrino

import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let img = await q.download()
let url = await uploadImage(img)
let scircle = global.API('dzx', '/api/canvas/circle', { url }) 
let stiker = await sticker(null, scircle, global.packname, global.author)
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, { asSticker: true })
} catch (e) {
m.reply(`${fg}𝙍𝙀𝙈𝙀𝙈𝘽𝙀𝙍 𝙏𝙊 𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 *${usedPrefix + command}* 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙄𝙉𝙂 𝙏𝙊 𝘼𝙉 𝙄𝙈𝘼𝙂𝙀, 𝙏𝙊 𝙈𝘼𝙆𝙀 𝘼 𝘾𝙄𝙍𝘾𝙐𝙇𝘼𝙍 𝙎𝙏𝙄𝘾𝙆𝙀𝙍`)
}}
handler.command = /^scircle|circle|círculo|circulo|scírculo|scirculo|sircle|redondo|circular$/i
export default handler
/* `https://api.dhamzxploit.my.id/api/canvas/circle?url=${url}` */
