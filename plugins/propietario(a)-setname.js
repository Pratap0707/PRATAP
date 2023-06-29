let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `THE TEXT?`
  try {
    await conn.updateProfileName(text)
    m.reply('READY!')
  } catch (e) {
    console.log(e)
    throw `Error`
  }
}
handler.help = ['setbotname <teks>']
handler.tags = ['owner']
handler.command = /^(setbotname)$/i

handler.owner = true

export default handler