const {
  zokou
} = require(__dirname + "/../framework/zokou");
const {
  format
} = require(__dirname + "/../framework/mesfonctions");
const os = require('os');
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
zokou({
  'nomCom': "menu",
  'categorie': "General"
}, async (_0x5b75f2, _0x20a3e2, _0x6cfd36) => {
  let {
    ms: _0x263d1b,
    repondre: _0x404b0a,
    prefixe: _0x416434,
    nomAuteurMessage: _0x56b263,
    mybotpic: _0x2be800
  } = _0x6cfd36;
  let {
    cm: _0x4189d3
  } = require(__dirname + "/../framework//zokou");
  var _0x52d511 = {};
  var _0x6b6f8c = "public";
  if (s.MODE.toLocaleLowerCase() != "yes") {
    _0x6b6f8c = "private";
  }
  _0x4189d3.map(async (_0x1f5df0, _0x25cadb) => {
    if (!_0x52d511[_0x1f5df0.categorie]) {
      _0x52d511[_0x1f5df0.categorie] = [];
    }
    _0x52d511[_0x1f5df0.categorie].push(_0x1f5df0.nomCom);
  });
  moment.tz.setDefault("EAT");
  const _0x2d94af = moment().format("HH:mm:ss");
  let _0xf49b98 = "\n╭══════〘 𝗕𝗔𝗥𝗔𝗞𝗔 𝗠𝗗 〙══════⊷❍\n┊❍╭════════════════════⊷❍\n┊❍┊ *User* : " + s.OWNER_NAME + "\n┊❍┊ *Mode* : " + _0x6b6f8c + "\n┊❍┊ *Commands* : " + 240 + "\n┊❍┊ *Time* : " + _0x2d94af + " \n┊❍┊ *Ram* : " + format(os.totalmem() - os.freemem()) + '/' + format(os.totalmem()) + "\n┊❍╰════════════════════⊷❍\n╰════════════════════════⊷❍ \n\n";
  let _0x452726 = " \n*╭════════════════════⊷❍*\n";
  for (const _0x321aa9 in _0x52d511) {
    _0x452726 += "*╭────❍* *" + _0x321aa9 + "* *❍*";
    for (const _0x2c4019 of _0x52d511[_0x321aa9]) {
      _0x452726 += " \n*┊❍* " + _0x2c4019;
    }
    _0x452726 += "\n*╰═════════════❍* \n";
  }
  _0x452726 += "\n *╭════════════════════════⊷❍*
*┊𝗠𝗔𝗗𝗘 𝗕𝗬 𝗕𝗔𝗥𝗔𝗞𝗔 𝗖𝗛𝗔𝗖𝗛𝗔 𝗕𝗘𝗚𝗔* 
*╰════════════════════════⊷❍*";
  var _0xf2197b = _0x2be800();
  if (_0xf2197b.match(/\.(mp4|gif)$/i)) {
    try {
      _0x20a3e2.sendMessage(_0x5b75f2, {
        'video': {
          'url': _0xf2197b
        },
        'caption': _0xf49b98 + _0x452726,
        'footer': "Je suis *Baraka-MD*, développé par Djalega++",
        'gifPlayback': true
      }, {
        'quoted': _0x263d1b
      });
    } catch (_0x4058c1) {
      console.log("🥵🥵 Menu erreur " + _0x4058c1);
      _0x404b0a("🥵🥵 Menu erreur " + _0x4058c1);
    }
  } else {
    if (_0xf2197b.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0x20a3e2.sendMessage(_0x5b75f2, {
          'image': {
            'url': _0xf2197b
          },
          'caption': _0xf49b98 + _0x452726,
          'footer': "*Baraka-Bega*"
        }, {
          'quoted': _0x263d1b
        });
      } catch (_0x223624) {
        console.log("🥵🥵 Menu erreur " + _0x223624);
        _0x404b0a("🥵🥵 Menu erreur " + _0x223624);
      }
    } else {
      _0x404b0a(_0xf49b98 + _0x452726);
    }
  }
});
