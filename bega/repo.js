'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': "repo",
  'alia': 'sc',
  'reaction': '📁',
  'nomFichier': __filename
}, async (_0x5d6102, _0x5af5a0, _0x5499f9) => {
  const _0x25c425 = await fetch("https://api.github.com/repos/Kingbega/BARAKA-MD");
  const _0x5e13ff = await _0x25c425.json();
  if (_0x5e13ff) {
    const _0x24f0a0 = {
      'stars': _0x5e13ff.stargazers_count,
      'forks': _0x5e13ff.forks_count,
      'update': _0x5e13ff.updated_at,
      'owner': _0x5e13ff.owner.login
    };
    const _0x318a04 = new Date(_0x5e13ff.created_at).toLocaleDateString("en-GB");
    const _0x5f0a55 = "*𝙷𝙴𝙻𝙻𝙾 👋 𝙵𝚁𝙸𝙴𝙽𝙳 𝚃𝙷𝙸𝚂 𝙸𝚂 𝙱𝙰𝚁𝙰𝙺𝙰-𝙼𝙳.*\n\n___________________________________________________\n[✨] *𝚂𝚃𝙰𝚁𝚂:* - " + _0x24f0a0.stars + "\n[🧧] *𝙵𝙾𝚁𝙺𝚂:* - " + _0x24f0a0.forks + "\n[📅] *𝚁𝙴𝙻𝙴𝙰𝚂𝙴 𝙳𝙰𝚃𝙴:* - " + _0x318a04 + "\n[👨‍💻] *𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴:* - *Baraka Chacha Bega*\n[🗼] *𝚁𝙴𝙿𝙾:* - " + _0x5e13ff.html_url + "\n___________________________________________________";
    await _0x5af5a0.sendMessage(_0x5d6102, {
      'image': {
        'url': "https://telegra.ph/file/20a04c1ef21a5977e0134.jpg"
      },
      'caption': _0x5f0a55
    });
  } else {
    console.log("Could not fetch data");
  }
});
