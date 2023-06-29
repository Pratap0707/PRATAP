import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝐄𝐍𝐓𝐄𝐑 𝐀 𝐑𝐄𝐐𝐔𝐄𝐒𝐓 𝐎𝐑 𝐀 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐓𝐎 𝐔𝐒𝐄 𝐓𝐇𝐄 𝐂𝐇𝐀𝐓𝐆𝐏𝐓 𝐅𝐔𝐍𝐂𝐓𝐈𝐎𝐍\n\n❏ 𝐒𝐀𝐌𝐏𝐋𝐄 𝐑𝐄𝐐𝐔𝐄𝐒𝐓 𝐀𝐍𝐃 𝐎𝐑𝐃𝐄𝐑𝐒\n❏ ${usedPrefix + command} Recommend a top 10 action movie\n❏ ${usedPrefix + command} JS code for a card game`
try {
await conn.sendPresenceUpdate('composing', m.chat)
let IA2 = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`)  
let IAR2 = await IA2.json()
m.reply(`${IAR2.response}`.trim())    
} catch {
try {   
let rrEes = await fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let jjJson = await rrEes.json()
m.reply(jjJson.data.data.trim())    
} catch {      
try {    
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=BrunoSobrino&text=${text}&user=${m.sender}`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())   
} catch {        
throw `${lenguajeGB['smsAvisoFG']()}𝐄𝐑𝐑𝐎𝐑, 𝐓𝐑𝐘 𝐀𝐆𝐀𝐈𝐍`*`
}}}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
export default handler
