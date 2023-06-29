let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
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

if (m.isGroup) {
if (!(isAdmin || isOwner)) return dfail('admin', m, conn)}
  
let id = m.chat
conn.vote = conn.vote ? conn.vote : {}
if (!(id in conn.vote)) {
return await conn.sendButton(m.chat, `${fg}𝙉𝙊 𝙑𝙊𝙏𝙀 𝙃𝘼𝙎 𝘽𝙀𝙀𝙉 𝘾𝙍𝙀𝘼𝙏𝙀𝘿 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋`, `*Si quieres crear una nueva votación usa el comando ${usedPrefix}crearvoto*\n\n*If you want to make a new vote use the command ${usedPrefix}startvoto*\n${wm}`, null, [
['𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], fkontak, m)}
  
delete conn.vote[id]
await conn.sendButton(m.chat, `${eg}𝙑𝙊𝙏𝙄𝙉𝙂 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋 𝙃𝘼𝙎 𝘽𝙀𝙀𝙉 𝙍𝙀𝙈𝙊𝙑𝙀𝘿`, `*Si quieres hacer una nueva votación usa el comando ${usedPrefix}crearvoto*\n\n*If you want to make a new vote use the command ${usedPrefix}startvoto*\n${wm}`, null, [
['𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], fkontak, m)}

handler.help = ['hapusvote']
handler.tags = ['vote']
handler.command = /^(del|delete|hapus|-)voto$/i
handler.group = true
handler.botAdmin = true
handler.admin = true

export default handler
