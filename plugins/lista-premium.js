let handler = async (m, { conn, isOwner }) => {
let vip = global.db.data.users[m.sender].premium
let prem = Object.entries(global.db.data.users).filter(user => user[1].premium)
let caption = `🎟️  𝐕𝐈𝐏 𝐔𝐒𝐄𝐑`
*╭•·–––––––––––––––––––·•*
│ *Total : ${prem.length} Usuarios* ${prem ? '\n' + prem.map(([jid], i) => `
│ *${i + 1}.* ${conn.getName(jid) == undefined ? 'Sin Usuarios' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*`
await conn.sendButton(m.chat, caption, `🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${vip ? '✅' : '❌'}\n${wm}`, null, [ 
[`${vip ? '✦ 𝐁𝐔𝐘 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐏𝐀𝐒𝐒 ✦'}`, `${vip ? '.allmenu': '.pase premium'}`]], m, { mentions: await conn.parseMention(caption) })
}
handler.command = /^(listapremium)$/i

export default handler
