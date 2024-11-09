const goat = require("api-dylux");
const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': "instastalk",
  'aliases': ["igstalk"],
  'reaction': '🤳',
  'categorie': "Search"
}, async (_0x39d96f, _0x3dc214, _0x3e1d7b) => {
  const {
    repondre: _0x3eda38,
    prefixe: _0xb911c6,
    arg: _0x9157b5,
    ms: _0x206271
  } = _0x3e1d7b;
  const _0x369d65 = _0x9157b5.join(" ");
  if (!_0x369d65) {
    return _0x3eda38("Give me a valid Instagram username like: " + _0xb911c6 + "instastalk Baraka Bega");
  }
  try {
    let _0x2f4aa5 = await fetch("https://www.noobs-api.000.pe/dipto/instainfo?username=" + encodeURIComponent(_0x369d65));
    let _0x50e6bd = await _0x2f4aa5.json();
    if (!_0x50e6bd.data || !_0x50e6bd.data.user_info) {
      return _0x3eda38("Couldn't fetch the data for username: " + _0x369d65 + ". Please check the username and try again.");
    }
    let _0x3a652b = _0x50e6bd.data.user_info;
    let _0x1ad052 = "\n┌──「 *BARAKA-MD INSTAGRAM STALK* \n▢ *🔖Name:* " + (_0x3a652b.full_name || "Unknown") + "\n▢ *🔖Username:* " + (_0x3a652b.username || "Unknown") + "\n▢ *👥Followers:* " + (_0x3a652b.followers || "Unknown") + "\n▢ *🫂Following:* " + (_0x3a652b.following || "Unknown") + "\n▢ *📌Bio:* " + (_0x3a652b.biography || "No Bio") + "\n▢ *🔗 External Link:* " + (_0x3a652b.external_url || "No Link") + "\n\n▢ *🔗 Profile Link:* https://instagram.com/" + (_0x3a652b.username || "unknown") + "\n└────────────";
    await _0x3dc214.sendMessage(_0x39d96f, {
      'image': {
        'url': _0x3a652b.profile_pic_url
      },
      'caption': _0x1ad052
    }, {
      'quoted': _0x206271
    });
  } catch (_0x415655) {
    return _0x3eda38("Error: " + _0x415655.toString());
  }
});
zokou({
  'nomCom': "github",
  'reaction': '🤳',
  'categorie': "Search"
}, async (_0x5f1865, _0x2d15f7, _0x52c6af) => {
  const {
    repondre: _0x556625,
    prefixe: _0x2de72c,
    arg: _0x4ed2a3,
    ms: _0x278dd6
  } = _0x52c6af;
  const _0x297543 = _0x4ed2a3.join(" ");
  if (!_0x297543) {
    return _0x556625("Give me a valid GitHub username like: " + _0x2de72c + "github Kingbega");
  }
  try {
    const _0x59781d = await fetch("https://api.github.com/users/" + _0x297543);
    if (!_0x59781d.ok) {
      throw new Error("Network response was not ok.");
    }
    const _0x5cd2e1 = await _0x59781d.json();
    if (_0x5cd2e1.message === "Not Found") {
      return _0x556625("I did not find that user, try again.");
    }
    const _0x52697a = "https://github.com/" + _0x5cd2e1.login + ".png";
    const _0x4e07c9 = ("*°BARAKA-MD GITHUB STALKER°*\n\n♦️ Name: " + (_0x5cd2e1.name || "N/A") + "\n🔖 Username: " + _0x5cd2e1.login + "\n✨ Bio: " + (_0x5cd2e1.bio || "N/A") + "\n🏢 Company: " + (_0x5cd2e1.company || "N/A") + "\n📍 Location: " + (_0x5cd2e1.location || "N/A") + "\n📧 Email: " + (_0x5cd2e1.email || "N/A") + "\n📰 Blog: " + (_0x5cd2e1.blog || "N/A") + "\n🔓 Public Repo: " + _0x5cd2e1.public_repos + "\n👪 Followers: " + _0x5cd2e1.followers + "\n🫶 Following: " + _0x5cd2e1.following + "\n ").trim();
    await _0x2d15f7.sendMessage(_0x5f1865, {
      'image': {
        'url': _0x52697a
      },
      'caption': _0x4e07c9
    }, {
      'quoted': _0x278dd6
    });
  } catch (_0x1bedf3) {
    console.error("Error fetching GitHub user information:", _0x1bedf3.message);
    await _0x556625("Failed to fetch GitHub user information. Please try again later.");
  }
});
zokou({
  'nomCom': "ipstalk",
  'reaction': '🤳',
  'categorie': "Search"
}, async (_0x45558e, _0x29a8a1, _0xae1f3c) => {
  const {
    repondre: _0x4b0dcc,
    prefixe: _0xaa08a0,
    arg: _0x3c656c,
    ms: _0x2c467e
  } = _0xae1f3c;
  const _0x3fa6cc = _0x3c656c.join(" ");
  if (!_0x3fa6cc) {
    return _0x4b0dcc("Give me a valid IP address like: " + _0xaa08a0 + "ip 8.8.8.8");
  }
  try {
    const _0x276aa9 = await fetch("https://api.maher-zubair.tech/stalk/ip?q=" + _0x3fa6cc);
    if (!_0x276aa9.ok) {
      throw new Error("Network error!!");
    }
    const _0x36dbc4 = await _0x276aa9.json();
    if (!_0x36dbc4.result || _0x36dbc4.result.status !== "success") {
      throw new Error("Failed to fetch IP details. Please try again.");
    }
    const {
      continent: _0x1432ed,
      country: _0x2fed67,
      regionName: _0x16a4ef,
      city: _0x2d0080,
      zip: _0x47d145,
      lat: _0x25fa02,
      lon: _0x42154c,
      timezone: _0x2b08f9,
      currency: _0x2ba77b,
      isp: _0xdc2125,
      org: _0x46c363,
      as: _0x323455,
      reverse: _0x100950,
      mobile: _0x170da8,
      proxy: _0x2b6308,
      hosting: _0x5de70f,
      ip: _0xcf1114
    } = _0x36dbc4.result;
    await _0x4b0dcc("*°BARAKA-MD IP ADDRESS STALKER°*\n \n▢ *Continent:* " + _0x1432ed + "\n▢ *Country:* " + _0x2fed67 + " \n▢ *Region:* " + _0x16a4ef + "\n▢ *City:* " + _0x2d0080 + "\n▢ *ZIP:* " + _0x47d145 + "\n▢ *Latitude:* " + _0x25fa02 + "\n▢ *Longitude:* " + _0x42154c + "\n▢ *Timezone:* " + _0x2b08f9 + "\n▢ *Currency:* " + _0x2ba77b + "\n▢ *ISP:* " + _0xdc2125 + "\n▢ *Organization:* " + _0x46c363 + "\n▢ *AS:* " + _0x323455 + "\n▢ *Reverse DNS:* " + _0x100950 + "\n▢ *Mobile:* " + _0x170da8 + "\n▢ *Proxy:* " + _0x2b6308 + "\n▢ *Hosting:* " + _0x5de70f + "\n▢ *IP Address:* " + _0xcf1114 + "\n└────────────>\n\n> *©Powered by ©Baraka Bega*");
  } catch (_0x2a91fd) {
    console.error("Error:", _0x2a91fd.message);
    await _0x4b0dcc("Error: " + _0x2a91fd.message);
  }
});
zokou({
  'nomCom': "tikstalk",
  'reaction': '🤳',
  'categorie': "Search"
}, async (_0x583626, _0x230c93, _0x41ff73) => {
  const {
    repondre: _0x22ae57,
    prefixe: _0x326d70,
    arg: _0x2d9033,
    ms: _0x2cc74f
  } = _0x41ff73;
  const _0x57aa2f = _0x2d9033.join(" ");
  if (!_0x57aa2f) {
    return _0x22ae57("Give me a valid TikTok username like: " + _0x326d70 + "tikstalk Baraka Bega");
  }
  try {
    let _0x1ea75b = await goat.ttStalk(_0x57aa2f);
    let _0x57ca9d = "\n┌──「 *TIKTOK STALK* \n▢ *🔖Name:* " + (_0x1ea75b.name || "Unknown") + "\n▢ *🔖Username:* " + (_0x1ea75b.username || "Unknown") + "\n▢ *👥Followers:* " + (_0x1ea75b.followers || "Unknown") + "\n▢ *🫂Following:* " + (_0x1ea75b.following || "Unknown") + "\n▢ *📌Desc:* " + (_0x1ea75b.desc || "No Description") + "\n\n▢ *🔗 Link:* https://tiktok.com/" + (_0x1ea75b.username || "unknown") + "\n└────────────";
    await _0x230c93.sendMessage(_0x583626, {
      'image': {
        'url': _0x1ea75b.profile
      },
      'caption': _0x57ca9d
    }, {
      'quoted': _0x2cc74f
    });
  } catch (_0x58b405) {
    return _0x22ae57("Error: " + _0x58b405.toString());
  }
});
