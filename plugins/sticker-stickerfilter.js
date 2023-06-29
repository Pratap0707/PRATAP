import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
const effects = ['greyscale', 'invert', 'brightness', 'threshold', 'sepia', 'red', 'green', 'blue', 'blurple', 'pixelate', 'blur']

let handler = async (m, { conn, usedPrefix, command, text }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `
${mg}𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝘼𝙎 𝙁𝙊𝙇𝙇𝙊𝙒𝙎
*${usedPrefix + command} efecto*

𝙍𝙀𝙎𝙋𝙊𝙉𝘿 𝙏𝙊 𝘼𝙉 𝙄𝙈𝘼𝙂𝙀
𝙀𝙓𝘼𝙈𝙋𝙇𝙀
*${usedPrefix + command} blue*

𝘼𝙑𝘼𝙄𝙇𝘼𝘽𝙇𝙀 𝙀𝙁𝙁𝙀𝘾𝙏𝙎
${effects.map(effect => `_» ${effect}_`).join('\n')}
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `${fg}𝙉𝙊 𝙄𝙈𝘼𝙂𝙀 𝙁𝙊𝙐𝙉𝘿, 𝙍𝙀𝙈𝙀𝙈𝘽𝙀𝙍 𝙏𝙊 𝙍𝙀𝙋𝙇𝙔 𝙏𝙊 𝘼𝙉 𝙄𝙈𝘼𝙂𝙀`
if (!/image\/(jpe?g|png)/.test(mime)) throw `${ag}𝙏𝙃𝙀 𝙁𝙊𝙍𝙈𝘼𝙏 𝙈𝙐𝙎𝙏 𝘽𝙀 *jpg or jpeg*`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar: url
})
try {
let stiker = await sticker(null, apiUrl, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) {
m.reply(`${fg}𝙏𝙃𝙀 𝘾𝙊𝙉𝙑𝙀𝙍𝙎𝙄𝙊𝙉 𝘾𝙊𝙐𝙇𝘿 𝙉𝙊𝙏 𝘽𝙀 𝘿𝙊𝙉𝙀, 𝙎𝙀𝙉𝘿 𝘼𝙉 𝙄𝙈𝘼𝙂𝙀 𝙄𝙉𝙎𝙏𝙀𝘼𝘿`)
await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
}}
handler.help = ['stickfilter (caption|reply media)']
handler.tags = ['General']
handler.command = /^(stickerfilter|stikerfilter|cs2|stickerefecto|efectosticker|filtrosticker|stickerfiltro)$/i
export default handler
