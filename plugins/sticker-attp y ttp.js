let handler = async(m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `${mg}𝙒𝙍𝙄𝙏𝙀 𝙎𝙊 𝙏𝙃𝙀 𝙏𝙀𝙓𝙏 𝘽𝙀𝘾𝙊𝙈𝙀𝙎 𝘼 𝙎𝙏𝙄𝘾𝙆𝙀𝙍\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command}* New Sticker*`
let teks = encodeURI(text)

if (command == 'attp') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    
if (command == 'attp2') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp2?apikey=9b817532fadff8fc7cb86862&text=${teks}`, 'sticker.webp', '', m)}

if (command == 'ttp5') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp6?apikey=9b817532fadff8fc7cb86862&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    
if (command == 'ttp4') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp5?apikey=9b817532fadff8fc7cb86862&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    
if (command == 'ttp3') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp3?apikey=9b817532fadff8fc7cb86862&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    
if (command == 'ttp2') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp2?apikey=9b817532fadff8fc7cb86862&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    
if (command == 'ttp') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp?apikey=9b817532fadff8fc7cb86862&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    
}
handler.command = handler.help = ['ttp', 'ttp2', 'ttp3', 'ttp4', 'ttp5', 'attp', 'attp2']
handler.tags = ['sticker']
export default handler
