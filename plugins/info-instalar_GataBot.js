let handler  = async (m, { conn, usedPrefix, command }) => {
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

let picture = './media/menus/Menu1.jpg'
let gata = `𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝘾𝙄𝙊𝙉 𝘿𝙀 𝙀𝙇𝙀𝘾𝙏𝙍𝙊𝘽𝙊𝙏 ⚡

*━━━━━━━━━━━━━⬣*
✅ 𝙃𝙊𝙎𝙏 𝙊𝙉 𝗕𝗢𝗫𝗠𝗜𝗡𝗘
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*𝙀𝙇𝙀𝘾𝙏𝙍𝙊-𝙈𝘿 : 𝘽𝙤𝙭𝙈𝙞𝙣𝙚*
*_https://youtu.be/Ko019wvu2Tc_*
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
_Pagina Oficial_ 
_https://boxmineworld.com_
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
_Tutorial - Crea una cuenta en la Dashboard_
_https://www.youtube.com/watch?v=ZAwBLuNmIlI_
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
_Dashboard_
_https://dash.boxmineworld.com_
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
_Panel_
_https://panel.boxmineworld.com_
*━━━━━━━━━━━━━⬣*

*━━━━━━━━━━━━━⬣*
✅ 𝐈𝐍𝐒𝐓𝐀𝐋𝐋 𝐎𝐍 𝙏𝙀𝙍𝙈𝙐𝙓
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
termux-setup-storage
apt update
pkg upgrade
pkg install nodejs -y
pkg install ffmpeg -y
pkg install imagemagick -y
git clone https://github.com/Pratap0707/ELECTRO-MD
cd ELECTRO-MD
npm install
npm update
npm start
*━━━━━━━━━━━━━⬣*

*━━━━━━━━━━━━━⬣*
✅ 𝙃𝙊𝙎𝙏 𝙊𝙉 𝙃𝙀𝙍𝙊𝙆𝙐
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*_https://heroku.com/deploy?template=https://github.com/pratap0707/ELECTRO-MD_*
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*Añada lo siguente al Buildpack:*
_https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git_
_https://github.com/clhuang/heroku-buildpack-webp-binaries.git_
*━━━━━━━━━━━━━⬣*`
await conn.sendFile(m.chat, picture, 'gata.mp4', gata, fkontak)}
/*conn.sendButton(m.chat, gata, `Comunícate con Mí Creadora si necesitas ayuda con la Instalación.\n\nContact My Creator if you need help with the Installation.\n\n${ig}\n${wm}`, picture, [
['𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar']], fkontak, m)}*/
handler.command = /^(instalarbot|instalargatabot|instalargata|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
export default handler