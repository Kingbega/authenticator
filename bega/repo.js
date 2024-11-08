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
}, async (_0x57adf4, _0x3a25e2, _0x4f5e14) => {
  const _0x520544 = await fetch("https://api.github.com/repos/Kingbega/BARAKA-MD");
  const _0x59f7c8 = await _0x520544.json();
  if (_0x59f7c8) {
    const _0xaf376b = {
      'stars': _0x59f7c8.stargazers_count,
      'forks': _0x59f7c8.forks_count,
      'update': _0x59f7c8.updated_at,
      'owner': _0x59f7c8.owner.login
    };
    const _0x5596ac = new Date(_0x59f7c8.created_at).toLocaleDateString("en-GB");
    const _0x5bf0ef = "**\n╭══════════════════════════════⊷❍\n┊*sᴛᴀʀs:* - " + _0xaf376b.stars + "\n┊*ғᴏʀᴋs:* - " + _0xaf376b.forks + "\n┊*ʀᴇʟᴇᴀsᴇ ᴅᴀᴛᴇ:* - " + _0x5596ac + "\n┊*ᴏᴡɴᴇʀ ɴᴀᴍᴇ:* - *ʙᴀʀᴀᴋᴀ ᴄʜᴀᴄʜᴀ ʙᴇɢᴀ*\n┊*ʙᴇɢᴀ:* - " + _0x59f7c8.html_url + "\n╰══════════════════════════════⊷❍";
    await _0x3a25e2.sendMessage(_0x57adf4, {
      'image': {
        'url': 'https://telegra.ph/file/20a04c1ef21a5977e0134.jpg'
      },
      'caption': _0x5bf0ef
    });
  } else {
    console.log("Could not fetch data");
  }
});
