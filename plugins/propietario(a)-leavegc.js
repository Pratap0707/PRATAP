let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, '*ELECTROBOT LEAVES THE GROUP IT WAS A PLEASURE HE IS HERE SEE YOU SOO N👋*') 
await conn.groupLeave(id)}
handler.command = /^(salir|leavegc|salirdelgrupo|leave)$/i
handler.group = true
handler.rowner = true
export default handler
