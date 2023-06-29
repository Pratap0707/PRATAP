let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw `${mg}🙌 𝙈𝙐𝙎𝙏 𝘽𝙀 𝘼 𝙇𝙄𝙉𝙆\n😼 *Ingrese el enlace de un grupo.*\n*Enter the link of a group.*\n\n*𝙀𝙓𝘼𝙈𝙋𝙇𝙀*\n*#unete ${nn}*\n\n*#join ${nnn}*`

if ( isMods || isOwner || m.fromMe) {
m.reply(`*𝙀𝙇𝙀𝘾𝙏𝙍𝙊𝘽𝙊𝙏-𝙈𝘿*𝙎𝙐𝘾𝘾𝙀𝙎𝙎𝙁𝙐𝙇𝙇𝙔 𝙅𝙊𝙄𝙉𝙀𝘿 ✅*`)
await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)

await delay(5 * 5000)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`${iig}╭══•───────────────•══╮\n┃ 📧 *𝙂𝙍𝙊𝙐𝙋
𝙍𝙀𝙌𝙐𝙀𝙎𝙏*\n╰══•───────────────•══╯\n\n*👤  𝘼𝙋𝙋𝙇𝙄𝘾𝘼𝙉𝙏*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*🔮 𝙂𝙍𝙊𝙐𝙋 𝙇𝙄𝙉𝙆*\n ' + link, jid)

m.reply(`${ag}*✅ Your link was sent to My Owner.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *Your Group will be Evaluated and it will be up to My Owner if ${gt} joins the Group or not.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ *Your Application may be Rejected for the following Reasons:*\n*1️⃣ El The Bot is Saturated.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *The Bot was removed from the Group.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *The Group does not comply with the Regulations of ${gt}*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *The group link was restored.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ *Not added to Groups by My Owner*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n💌 *The request may take hours to be answered. Please be patient. Thank you*`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i 
handler.register = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
