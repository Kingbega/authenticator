require("dotenv").config();
const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
const BaseUrl = process.env.GITHUB_GIT;
const giftedapikey = process.env.BOT_OWNER;
function validateConfig() {
  if (!BaseUrl || !giftedapikey) {
    throw new Error("Configuration error: Missing BaseUrl or API key.");
  }
}
validateConfig();
zokou({
  'nomCom': "video",
  'categorie': "Download",
  'reaction': '🎥'
}, async (_0x564cb3, _0xd60aca, _0x5bfbdd) => {
  const {
    ms: _0x2845c4,
    repondre: _0x94547f,
    arg: _0x382a12
  } = _0x5bfbdd;
  if (!_0x382a12[0]) {
    return _0x94547f("Please insert a song/video name.");
  }
  try {
    const _0x221cc7 = await yts(_0x382a12.join(" "));
    const _0x249cad = _0x221cc7.videos;
    if (_0x249cad.length === 0) {
      return _0x94547f("No videos found.");
    }
    const _0x479d7b = _0x249cad[0].url;
    const _0x5643f7 = await fetch(BaseUrl + "/api/download/ytmp4?url=" + encodeURIComponent(_0x479d7b) + "&apikey=" + giftedapikey);
    const _0x23a48c = await _0x5643f7.json();
    if (_0x23a48c.status === 200 && _0x23a48c.success) {
      const _0x27e6bf = _0x23a48c.result.download_url;
      await _0xd60aca.sendMessage(_0x564cb3, {
        'image': {
          'url': _0x249cad[0].thumbnail
        },
        'caption': "╭─────═━┈┈━═──━┈⊷\n┇ 『 *DOWNLOADED* 』\n┇ *BY* \n┇ *BARAKA-MD* \n╰─────═━┈┈━═──━┈⊷"
      }, {
        'quoted': _0x2845c4
      });
      await _0xd60aca.sendMessage(_0x564cb3, {
        'video': {
          'url': _0x27e6bf
        },
        'mimetype': "video/mp4"
      }, {
        'quoted': _0x2845c4
      });
      _0x94547f("Downloaded Successfully by Baraka-MD");
    } else {
      _0x94547f("Failed to download the video.");
    }
  } catch (_0x3791b9) {
    console.error("Error:", _0x3791b9);
    _0x94547f("An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "play",
  'categorie': "Download",
  'reaction': '🎸'
}, async (_0x29f382, _0x217f63, _0x3f9ad9) => {
  const {
    ms: _0x280cf1,
    repondre: _0x4e87d2,
    arg: _0x4d0f4f
  } = _0x3f9ad9;
  if (!_0x4d0f4f[0]) {
    return _0x4e87d2("Please insert a song name.");
  }
  try {
    const _0x3d3904 = await yts(_0x4d0f4f.join(" "));
    const _0x5d34b7 = _0x3d3904.videos;
    if (_0x5d34b7.length === 0) {
      return _0x4e87d2("No audio found.");
    }
    const _0x30d4ed = _0x5d34b7[0].url;
    const _0x5a4256 = await fetch(BaseUrl + "/api/download/ytmp3?url=" + encodeURIComponent(_0x30d4ed) + "&apikey=" + giftedapikey);
    const _0x29c10c = await _0x5a4256.json();
    if (_0x29c10c.status === 200 && _0x29c10c.success) {
      const _0x5e4bbe = _0x29c10c.result.download_url;
      await _0x217f63.sendMessage(_0x29f382, {
        'image': {
          'url': _0x5d34b7[0].thumbnail
        },
        'caption': "╭─────═━┈┈━═──━┈⊷\n┇ 『 *DOWNLOADED* 』\n┇ *BY* \n┇ *BARAKA-MD* \n╰─────═━┈┈━═──━┈⊷"
      }, {
        'quoted': _0x280cf1
      });
      await _0x217f63.sendMessage(_0x29f382, {
        'audio': {
          'url': _0x5e4bbe
        },
        'mimetype': "audio/mp4"
      }, {
        'quoted': _0x280cf1
      });
      _0x4e87d2("Downloaded Successfully by Baraka-MD");
    } else {
      _0x4e87d2("Failed to download audio. Try again later.");
    }
  } catch (_0x4a4562) {
    console.error("Error:", _0x4a4562);
    _0x4e87d2("An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Download",
  'reaction': '🎸'
}, async (_0x29937c, _0xeb0280, _0x526cbf) => {
  const {
    ms: _0x3bee1c,
    repondre: _0x9de6b4,
    arg: _0x237db6
  } = _0x526cbf;
  if (!_0x237db6[0]) {
    return _0x9de6b4("Please insert a song name.");
  }
  try {
    const _0x4ddf1f = await yts(_0x237db6.join(" "));
    const _0xab1198 = _0x4ddf1f.videos;
    if (_0xab1198.length === 0) {
      return _0x9de6b4("No audio found.");
    }
    const _0x2c5d34 = _0xab1198[0].url;
    const _0x27d61f = await fetch(BaseUrl + "/api/download/ytmp3?url=" + encodeURIComponent(_0x2c5d34) + "&apikey=" + giftedapikey);
    const _0x56c7dd = await _0x27d61f.json();
    if (_0x56c7dd.status === 200 && _0x56c7dd.success) {
      const _0x125e79 = _0x56c7dd.result.download_url;
      await _0xeb0280.sendMessage(_0x29937c, {
        'image': {
          'url': _0xab1198[0].thumbnail
        },
        'caption': "╭─────═━┈┈━═──━┈⊷\n┇ 『 *DOWNLOADED* 』\n┇ *BY* \n┇ *BARAKA-MD* \n╰─────═━┈┈━═──━┈⊷"
      }, {
        'quoted': _0x3bee1c
      });
      await _0xeb0280.sendMessage(_0x29937c, {
        'audio': {
          'url': _0x125e79
        },
        'mimetype': "audio/mp4"
      }, {
        'quoted': _0x3bee1c
      });
      _0x9de6b4("Downloaded Successfully by Baraka-MD");
    } else {
      _0x9de6b4("Failed to download audio. Try again later.");
    }
  } catch (_0x298c7d) {
    console.error("Error:", _0x298c7d);
    _0x9de6b4("An error occurred while processing your request.");
  }
});
