const {
  zokou
} = require("../framework/zokou");
const {
  getBuffer
} = require("../framework/dl/Function");
const speed = require("performance-now");
const runtime = function (_0x29cd91) {
  _0x29cd91 = Number(_0x29cd91);
  var _0x1224fd = Math.floor(_0x29cd91 / 86400);
  var _0x4f39e0 = Math.floor(_0x29cd91 % 86400 / 3600);
  var _0x34ed0d = Math.floor(_0x29cd91 % 3600 / 60);
  var _0xb1c0f8 = Math.floor(_0x29cd91 % 60);
  var _0x1a2589 = _0x1224fd > 0 ? _0x1224fd + (_0x1224fd == 1 ? " day, " : " d, ") : '';
  var _0x5779fd = _0x4f39e0 > 0 ? _0x4f39e0 + (_0x4f39e0 == 1 ? " hour, " : " h, ") : '';
  var _0x417825 = _0x34ed0d > 0 ? _0x34ed0d + (_0x34ed0d == 1 ? " minute, " : " m, ") : '';
  var _0x4f5452 = _0xb1c0f8 > 0 ? _0xb1c0f8 + (_0xb1c0f8 == 1 ? " second" : " s") : '';
  return _0x1a2589 + _0x5779fd + _0x417825 + _0x4f5452;
};
let timestamp = speed();
let flashspeed = (speed() - timestamp).toFixed(4);
zokou({
  'nomCom': "ping",
  'desc': "To check ping",
  'Categorie': "General",
  'reaction': '❄️',
  'fromMe': "true"
}, async (_0x400e74, _0x54466c, _0xf8d3b4) => {
  const {
    ms: _0x5b83ba,
    arg: _0x314c3c,
    repondre: _0x32786e
  } = _0xf8d3b4;
  await _0x32786e("ʙᴀʀᴀᴋᴀ-ᴍᴅ sᴘᴇᴇᴅ ɪs: " + flashspeed + "ᴍs");
});
zokou({
  'nomCom': "uptime",
  'desc': "To check runtime",
  'Categorie': "General",
  'reaction': '❄️',
  'fromMe': "true"
}, async (_0x4ba4f4, _0x56a372, _0x3a0684) => {
  const {
    ms: _0x55e9df,
    arg: _0x126139,
    repondre: _0x73a750
  } = _0x3a0684;
  await _0x73a750("ᴜᴘᴛɪᴍᴇ ᴏғ ʙᴀʀᴀᴋᴀ-ᴍᴅ ɪs: " + runtime(process.uptime()) + '');
});
zokou({
  'nomCom': 'ss',
  'desc': "screenshots website",
  'Categorie': "General",
  'reaction': '🎥',
  'fromMe': "true"
}, async (_0x57cc1b, _0x319138, _0x30178d) => {
  const {
    ms: _0x3041f2,
    arg: _0x47b1fd,
    repondre: _0x42c8ad
  } = _0x30178d;
  if (!_0x47b1fd || _0x47b1fd.length === 0) {
    return _0x42c8ad("provide a link...");
  }
  const _0x48a146 = _0x47b1fd.join(" ");
  let _0x4efc8b = "https://api.maher-zubair.tech/misc/sstab?url=" + _0x48a146 + "&dimension=720x720";
  let _0x1a40e4 = await getBuffer(_0x4efc8b);
  await _0x319138.sendMessage(_0x57cc1b, {
    'image': _0x1a40e4
  }, {
    'caption': "*Powered by Baraka-MD*"
  }, {
    'quoted': _0x3041f2
  });
});
