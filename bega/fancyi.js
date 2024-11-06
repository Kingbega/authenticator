const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0x3643ec, _0x1895de, _0x4b749f) => {
  const {
    ms: _0x34f844,
    repondre: _0x12e5f8,
    arg: _0x151977
  } = _0x4b749f;
  if (!_0x151977[0]) {
    _0x12e5f8("Please insert a song/video name.");
    return;
  }
  try {
    let _0x3e8be9 = _0x151977.join(" ");
    let _0x52a93a = [];
    const _0xc3a63f = await yts(_0x3e8be9);
    _0x52a93a = _0xc3a63f.videos;
    if (_0x52a93a && _0x52a93a.length > 0) {
      const _0x3a755b = await _0x2bc96f.json();
      if (_0x3a755b.status === 200 && _0x3a755b.success) {
        const _0x49df33 = _0x3a755b.result.download_url;
        const _0x53fc88 = {
          'image': {
            'url': _0x52a93a[0].thumbnail
          },
          'caption': "YOUTUBE SEARCH\n\n ©Baraka Bega"
        };
        await _0x1895de.sendMessage(_0x3643ec, _0x53fc88, {
          'quoted': _0x34f844
        });
        await _0x1895de.sendMessage(_0x3643ec, {
          'video': {
            'url': _0x49df33
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x34f844
        });
        _0x12e5f8("Downloded Successfully ✅");
      } else {
        _0x12e5f8("Searching...⏳");
      }
    } else {
      _0x12e5f8("No videos found.");
    }
  } catch (_0x314c47) {
    console.error("Error from API:", _0x314c47);
    _0x12e5f8("Searching...⏳");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Download",
  'reaction': '🎸'
}, async (_0x271a33, _0x6707e5, _0x520fff) => {
  const {
    ms: _0x1e2f77,
    repondre: _0x300732,
    arg: _0x53d21a
  } = _0x520fff;
  if (!_0x53d21a[0]) {
    _0x300732("Please insert a song name.");
    return;
  }
  try {
    let _0x226ad0 = _0x53d21a.join(" ");
    let _0x994c29 = [];
    const _0x9d0929 = await yts(_0x226ad0);
    _0x994c29 = _0x9d0929.videos;
    if (_0x994c29 && _0x994c29.length > 0) {
      const _0x20c972 = await _0x4983e8.json();
      if (_0x20c972.status === 200 && _0x20c972.success) {
        const _0x30773c = _0x20c972.result.download_url;
        const _0x139808 = {
          'image': {
            'url': _0x994c29[0].thumbnail
          },
          'caption': "YOUTUBE SEARCH\n\n ©Baraka Bega"
        };
        await _0x6707e5.sendMessage(_0x271a33, _0x139808, {
          'quoted': _0x1e2f77
        });
        await _0x6707e5.sendMessage(_0x271a33, {
          'audio': {
            'url': _0x30773c
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x1e2f77
        });
        _0x300732("*Downloded Successfully ✅*");
      } else {
        _0x300732("Failed to download audio. Please try again later.");
      }
    } else {
      _0x300732("No audio found.");
    }
  } catch (_0x2144bd) {
    console.error("Error from API:", _0x2144bd);
    _0x300732("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "play",
  'categorie': "Download",
  'reaction': '🎸'
}, async (_0x80c678, _0x1dc8a0, _0x27d06f) => {
  const {
    ms: _0xfb7714,
    repondre: _0x19492f,
    arg: _0x50635c
  } = _0x27d06f;
  if (!_0x50635c[0]) {
    _0x19492f("Please insert a song name.");
    return;
  }
  try {
    let _0x3e9ef3 = _0x50635c.join(" ");
    let _0x43a4ee = [];
    const _0x4a30bb = await yts(_0x3e9ef3);
    _0x43a4ee = _0x4a30bb.videos;
    if (_0x43a4ee && _0x43a4ee.length > 0) {
      const _0x4b00b3 = _0x43a4ee[0].url;
      const _0x2a1daf = await fetch("https://apis.ibrahimadams.us.kg/api/download/ytmp3?url=" + encodeURIComponent(_0x4b00b3) + "&apikey=" + "abutech");
      const _0x475016 = await _0x2a1daf.json();
      if (_0x475016.status === 200 && _0x475016.success) {
        const _0x26f57c = _0x475016.result.download_url;
        const _0x232b70 = {
          'image': {
            'url': _0x43a4ee[0].thumbnail
          },
          'caption': "YOUTUBE SEARCH\n\n ©Baraka Bega"
        };
        await _0x1dc8a0.sendMessage(_0x80c678, _0x232b70, {
          'quoted': _0xfb7714
        });
        await _0x1dc8a0.sendMessage(_0x80c678, {
          'audio': {
            'url': _0x26f57c
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0xfb7714
        });
        _0x19492f("*Downloded Successfully ✅*");
      } else {
        _0x19492f("Failed to download audio. Please try again later.");
      }
    } else {
      _0x19492f("No audio found.");
    }
  } catch (_0x45d554) {
    console.error("Error from API:", _0x45d554);
    _0x19492f("An error occurred while searching or downloading the audio.");
  }
});
