import  fetch from 'node-fetch'
let handler = async(m, { conn, args, usedPrefix }) => {
if (args.length == 0) return conn.reply(m.chat, `Usar ${usedPrefix}kpop\nPor favor escribe: ${usedPrefix}kpop [buscar]\nEjemplo:: ${usedPrefix}kpop bts\n\nBusquedas disponibles:\nblackpink, exo, bts`, m)
if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
.then(res => res.text())
.then(body => {
let randomkpop = body.split('\n')
let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
conn.sendFile(m.chat, randomkpopx, '', 'Dasar Kpopers', m)
})
.catch(() => {
conn.reply(m.chat, 'An error occurred, try again, if the fault continues to notify my creator', m)
})
} else {
conn.reply(m.chat, `Lo sentimos, la busqueda no está disponible. Por favor escribe ${usedPrefix}kpop para ver la lista de busquedas disponibles`, m)
}}
handler.help = ['kpop'].map(v => v + ' <query>')
handler.tags = ['image']
handler.command = /^(kpop)$/i
export default handler 
