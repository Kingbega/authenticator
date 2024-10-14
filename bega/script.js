'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': 'script',
  'alia': 'sc',
  'reaction': '♻️',
  'nomFichier': __filename
}, async (_0x4cc953, _0x5878e8, _0x52ecf0) => {
  const _0x5ebab8 = await fetch("https://api.github.com/repos/Kingbega/BARAKA-MD");
  const _0x4b31c6 = await _0x5ebab8.json();
  if (_0x4b31c6) {
    const _0xd2b3c8 = {
      'stars': _0x4b31c6.stargazers_count,
      'forks': _0x4b31c6.forks_count,
      'update': _0x4b31c6.updated_at,
      'owner': _0x4b31c6.owner.login
    };
    const _0x2551d4 = new Date(_0x4b31c6.created_at).toLocaleDateString("en-GB");
    const _0x58df7a = "*𝙷𝙴𝙻𝙻𝙾 👋 𝙵𝚁𝙸𝙴𝙽𝙳 𝚃𝙷𝙸𝚂 𝙸𝚂 𝙱𝙰𝚁𝙰𝙺𝙰-𝙼𝙳.*\n\n___________________________________________________\n[✨] *𝚂𝚃𝙰𝚁𝚂:* - " + _0xd2b3c8.stars + "\n[🧧] *𝙵𝙾𝚁𝙺𝚂:* - " + _0xd2b3c8.forks + "\n[📅] *𝚁𝙴𝙻𝙴𝙰𝚂𝙴 𝙳𝙰𝚃𝙴:* - " + _0x2551d4 + "\n[👨‍💻] *𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴:* - *Baraka Chacha Bega*\n[🗼] *𝚁𝙴𝙿𝙾:* - " + _0x4b31c6.html_url + "\n___________________________________________________";
    await _0x5878e8.sendMessage(_0x4cc953, {
      'image': {
        'url': "https://telegra.ph/file/20a04c1ef21a5977e0134.jpg"
      },
      'caption': _0x58df7a
    });
  } else {
    console.log("Could not fetch data");
  }
});
