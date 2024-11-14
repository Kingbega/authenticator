'use strict';

var __createBinding = this && this.__createBinding || (Object.create ? function (_0x2f6f73, _0x2f1b1c, _0x3fdc32, _0x56ae47) {
  if (_0x56ae47 === undefined) {
    _0x56ae47 = _0x3fdc32;
  }
  var _0x3d7f88 = Object.getOwnPropertyDescriptor(_0x2f1b1c, _0x3fdc32);
  if (!_0x3d7f88 || ('get' in _0x3d7f88 ? !_0x2f1b1c.__esModule : _0x3d7f88.writable || _0x3d7f88.configurable)) {
    _0x3d7f88 = {
      'enumerable': true,
      'get': function () {
        return _0x2f1b1c[_0x3fdc32];
      }
    };
  }
  Object.defineProperty(_0x2f6f73, _0x56ae47, _0x3d7f88);
} : function (_0x29f954, _0x469b93, _0x453dc7, _0x1fddb6) {
  if (_0x1fddb6 === undefined) {
    _0x1fddb6 = _0x453dc7;
  }
  _0x29f954[_0x1fddb6] = _0x469b93[_0x453dc7];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (_0x5b6a71, _0x3ab784) {
  Object.defineProperty(_0x5b6a71, 'default', {
    'enumerable': true,
    'value': _0x3ab784
  });
} : function (_0x4e40d2, _0x4785d7) {
  _0x4e40d2["default"] = _0x4785d7;
});
var __importStar = this && this.__importStar || function (_0x14cc2) {
  if (_0x14cc2 && _0x14cc2.__esModule) {
    return _0x14cc2;
  }
  var _0x664fbf = {};
  if (_0x14cc2 != null) {
    for (var _0x1bdcd5 in _0x14cc2) if (_0x1bdcd5 !== "default" && Object.prototype.hasOwnProperty.call(_0x14cc2, _0x1bdcd5)) {
      __createBinding(_0x664fbf, _0x14cc2, _0x1bdcd5);
    }
  }
  __setModuleDefault(_0x664fbf, _0x14cc2);
  return _0x664fbf;
};
var __importDefault = this && this.__importDefault || function (_0xb4db37) {
  return _0xb4db37 && _0xb4db37.__esModule ? _0xb4db37 : {
    'default': _0xb4db37
  };
};
Object.defineProperty(exports, '__esModule', {
  'value': true
});
const baileys_1 = __importStar(require('@whiskeysockets/baileys'));
const logger_1 = __importDefault(require("@whiskeysockets/baileys/lib/Utils/logger"));
const logger = logger_1["default"].child({});
logger.level = 'silent';
const pino = require("pino");
const boom_1 = require("@hapi/boom");
const conf = require("./config");
let fs = require("fs-extra");
let path = require("path");
const FileType = require('file-type');
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  verifierEtatJid,
  recupererActionJid
} = require("./lib/antilien");
let evt = require(__dirname + "/framework/zokou");
const {
  isUserBanned,
  addUserToBanList,
  removeUserFromBanList
} = require("./lib/banUser");
const {
  addGroupToBanList,
  isGroupBanned,
  removeGroupFromBanList
} = require("./lib/banGroup");
const {
  isGroupOnlyAdmin,
  addGroupToOnlyAdminList,
  removeGroupFromOnlyAdminList
} = require('./lib/onlyAdmin');
let {
  reagir
} = require(__dirname + "/bdd/app");
var session = conf.session.replace(/baraka;;;/g, '');
const prefixe = conf.PREFIXE;
require("dotenv").config({
  'path': "./config.env"
});
let restartTimeout;
function start() {
  console.log("baraka md connected 🍀");
  setTimeout(() => {
    console.log("bega online 🍀");
    _0x2afdad();
  }, 0x1388);
  function _0x2afdad() {
    console.log("Bot intimating 🪄");
    if (restartTimeout) {
      clearTimeout(restartTimeout);
    }
    restartTimeout = setTimeout(() => {
      start();
    }, 0x3e8);
  }
}
start();
async function authentification() {
  try {
    if (!fs.existsSync(__dirname + '/Session/creds.json')) {
      console.log("connexion en cour ...");
      await fs.writeFileSync(__dirname + "/Session/creds.json", atob(session), "utf8");
    } else if (fs.existsSync(__dirname + '/Session/creds.json') && session != "zokk") {
      await fs.writeFileSync(__dirname + '/Session/creds.json', atob(session), "utf8");
    }
  } catch (_0x2cdfd5) {
    console.log("Session Invalid " + _0x2cdfd5);
    return;
  }
}
authentification();
0x0;
const store = baileys_1.makeInMemoryStore({
  'logger': pino().child({
    'level': "silent",
    'stream': "store"
  })
});
setTimeout(() => {
  async function _0x905c7e() {
    0x0;
    const {
      version: _0x4daa3b,
      isLatest: _0x144220
    } = await baileys_1.fetchLatestBaileysVersion();
    0x0;
    const {
      state: _0x24c199,
      saveCreds: _0x112149
    } = await baileys_1.useMultiFileAuthState(__dirname + '/auth');
    0x0;
    const _0x1f2c92 = {
      'version': _0x4daa3b,
      'logger': pino({
        'level': "silent"
      }),
      'browser': ['Baraka-MD', "safari", "1.0.0"],
      'printQRInTerminal': true,
      'fireInitQueries': false,
      'shouldSyncHistoryMessage': true,
      'downloadHistory': true,
      'syncFullHistory': true,
      'generateHighQualityLinkPreview': true,
      'markOnlineOnConnect': false,
      'keepAliveIntervalMs': 0x7530,
      'auth': {
        'creds': _0x24c199.creds,
        'keys': baileys_1.makeCacheableSignalKeyStore(_0x24c199.keys, logger)
      },
      'getMessage': async _0x1413ce => {
        if (store) {
          const _0x1a33e4 = await store.loadMessage(_0x1413ce.remoteJid, _0x1413ce.id, undefined);
          return _0x1a33e4.message || undefined;
        }
        return {
          'conversation': "An Error Occurred, Repeat Command!"
        };
      }
    };
    0x0;
    const _0x277f56 = baileys_1["default"](_0x1f2c92);
    store.bind(_0x277f56.ev);
    function _0x279c2d() {
      const _0x4d910b = {
        'timeZone': "Africa/Tanzania",
        'year': "numeric",
        'month': "2-digit",
        'day': "2-digit",
        'hour': "2-digit",
        'minute': "2-digit",
        'second': "2-digit",
        'hour12': false
      };
      const _0x29a205 = new Intl.DateTimeFormat("en-KE", _0x4d910b).format(new Date());
      return _0x29a205;
    }
    setInterval(async () => {
      if (conf.AUTO_BIO === "yes") {
        const _0x29fb48 = _0x279c2d();
        const _0x7d3d17 = "baraka md is online! 🍀\n" + _0x29fb48;
        await _0x277f56.updateProfileStatus(_0x7d3d17);
        console.log("Updated Bio: " + _0x7d3d17);
      }
    }, 0xea60);
    _0x277f56.ev.on('call', async _0x22eae4 => {
      if (conf.ANTICALL === "yes") {
        const _0x32619d = _0x22eae4[0x0].id;
        const _0x44296f = _0x22eae4[0x0].from;
        await _0x277f56.rejectCall(_0x32619d, _0x44296f);
        await _0x277f56.sendMessage(_0x44296f, {
          'text': "⚠️ I'm baraka md, My owner is unavailable try again later"
        });
      }
    });
    const _0x35cb06 = _0x179e4f => new Promise(_0x320fa5 => setTimeout(_0x320fa5, _0x179e4f));
    let _0x134807 = 0x0;
    const _0x173a60 = ['🚗', '🚕', '🚙', '🚌', '🚎', "🏎️", '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '❤️', '💛', '💚', '💙', '💜', '🧡', '🖤', '💖', '💗', '💘', '💝', '💞', '💕', '💓', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '🍕', '🍔', '🍟', '🌭', '🍿', '🥤', '🍩', '🍪', '🍫', '🍦', '🍰', '🍾', '🍷', '🍺', '🥂', '🌹', '🌷', '🌸', '🌺', '🌻', '🌼', '🌞', '🌝', '🌜', '🌙', '🌟', '🌈', '✨', '💫', '🐱', '🐶', '🐭', '🐹', '🐰', '🐻', '🐼', '🐨', '🐯', '🦁', '🐸', '🐒', '🐔', '🐧', '⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🥇', '🥈', '🥉', '🏆', '🎮', '🎲'];
    if (conf.AUTO_REACT_STATUS === "yes") {
      console.log("AUTO_REACT_STATUS is enabled. Listening for status updates...");
      _0x277f56.ev.on('messages.upsert', async _0x3272d1 => {
        const {
          messages: _0x3e154d
        } = _0x3272d1;
        for (const _0xe5e0b1 of _0x3e154d) {
          if (_0xe5e0b1.key && _0xe5e0b1.key.remoteJid === "status@broadcast") {
            console.log("Detected status update from:", _0xe5e0b1.key.remoteJid);
            const _0x59387d = Date.now();
            if (_0x59387d - _0x134807 < 0x1388) {
              console.log("Throttling reactions to prevent overflow.");
              continue;
            }
            const _0x117f7f = _0x277f56.user && _0x277f56.user.id ? _0x277f56.user.id.split(':')[0x0] + "@s.whatsapp.net" : null;
            if (!_0x117f7f) {
              console.log("Bot's user ID not available. Skipping reaction.");
              continue;
            }
            const _0x59ce14 = _0x173a60[Math.floor(Math.random() * _0x173a60.length)];
            await _0x277f56.sendMessage(_0xe5e0b1.key.remoteJid, {
              'react': {
                'key': _0xe5e0b1.key,
                'text': _0x59ce14
              }
            }, {
              'statusJidList': [_0xe5e0b1.key.participant, _0x117f7f]
            });
            _0x134807 = Date.now();
            console.log("Successfully reacted with '" + _0x59ce14 + "' to status update by " + _0xe5e0b1.key.remoteJid);
            await _0x35cb06(0x7d0);
          }
        }
      });
    }
    if (conf.AUTO_REACT === "yes") {
      console.log("AUTO_REACT is enabled. Listening for regular messages...");
      _0x277f56.ev.on("messages.upsert", async _0x191c6c => {
        const {
          messages: _0x14e196
        } = _0x191c6c;
        for (const _0x2c71b0 of _0x14e196) {
          if (_0x2c71b0.key && _0x2c71b0.key.remoteJid) {
            const _0x524c33 = Date.now();
            if (_0x524c33 - _0x134807 < 0x1388) {
              console.log("Throttling reactions to prevent overflow.");
              continue;
            }
            const _0x5c8dc5 = _0x173a60[Math.floor(Math.random() * _0x173a60.length)];
            await _0x277f56.sendMessage(_0x2c71b0.key.remoteJid, {
              'react': {
                'text': _0x5c8dc5,
                'key': _0x2c71b0.key
              }
            }).then(() => {
              _0x134807 = Date.now();
              console.log("Successfully reacted with '" + _0x5c8dc5 + "' to message by " + _0x2c71b0.key.remoteJid);
            })["catch"](_0x11e7ec => {
              console.error("Failed to send reaction:", _0x11e7ec);
            });
            await _0x35cb06(0x7d0);
          }
        }
      });
    }
    async function _0xc9cbe6(_0x3c7237, _0x1314a1) {
      try {
        const _0x3b8365 = _0x3c7237.split('@')[0x0];
        let _0x1a3238 = 0x1;
        let _0x471c73 = _0x1314a1 + " " + _0x1a3238;
        while (Object.values(store.contacts).some(_0xde0a6a => _0xde0a6a.name === _0x471c73)) {
          _0x1a3238++;
          _0x471c73 = _0x1314a1 + " " + _0x1a3238;
        }
        const _0x2a7289 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x471c73 + "\nTEL;type=CELL;type=VOICE;waid=" + _0x3b8365 + ':+' + _0x3b8365 + "\nEND:VCARD\n";
        const _0x28fd6c = './' + _0x471c73 + ".vcf";
        fs.writeFileSync(_0x28fd6c, _0x2a7289);
        await _0x277f56.sendMessage(conf.NUMERO_OWNER + '@s.whatsapp.net', {
          'document': {
            'url': _0x28fd6c
          },
          'mimetype': "text/vcard",
          'fileName': _0x471c73 + ".vcf",
          'caption': "Contact saved as " + _0x471c73 + ". Please import this vCard to add the number to your contacts.\n\n🚀 baraka md by baraka bega"
        });
        console.log("vCard created and sent for: " + _0x471c73 + " (" + _0x3c7237 + ')');
        fs.unlinkSync(_0x28fd6c);
        return _0x471c73;
      } catch (_0x2d701b) {
        console.error("Error creating or sending vCard for " + name + ':', _0x2d701b.message);
      }
    }
    _0x277f56.ev.on("messages.upsert", async _0x305f52 => {
      if (conf.AUTO_SAVE_CONTACTS !== "yes") {
        return;
      }
      const {
        messages: _0x4a7cb1
      } = _0x305f52;
      const _0x4fbe30 = _0x4a7cb1[0x0];
      if (!_0x4fbe30.message) {
        return;
      }
      const _0xf27021 = _0x4fbe30.key.remoteJid;
      if (_0xf27021.endsWith("@s.whatsapp.net") && (!store.contacts[_0xf27021] || !store.contacts[_0xf27021].name)) {
        const _0x299fa5 = await _0xc9cbe6(_0xf27021, "🚀 baraka md");
        store.contacts[_0xf27021] = {
          'name': _0x299fa5
        };
        await _0x277f56.sendMessage(_0xf27021, {
          'text': "Hello! Your name has been saved as \"" + _0x299fa5 + "\" in our system.\n\n🚀 baraka md by baraka bega"
        });
        console.log("Contact " + _0x299fa5 + " has been saved and notified.");
      }
    });
    let _0x4cb4aa = "Hello, I am baraka md. My owner is currently unavailable. Please leave a message, and he will get back to you as soon as possible.";
    let _0x1438b4 = new Set();
    _0x277f56.ev.on("messages.upsert", async _0x373a5a => {
      const {
        messages: _0x2d52fb
      } = _0x373a5a;
      const _0x1ffbe7 = _0x2d52fb[0x0];
      if (!_0x1ffbe7.message) {
        return;
      }
      const _0x10e159 = _0x1ffbe7.message.conversation || _0x1ffbe7.message.extendedTextMessage?.['text'];
      const _0x56267a = _0x1ffbe7.key.remoteJid;
      if (_0x10e159 && _0x10e159.match(/^[^\w\s]/) && _0x1ffbe7.key.fromMe) {
        const _0x4fdbf7 = _0x10e159[0x0];
        const _0x395a97 = _0x10e159.slice(0x1).split(" ")[0x0];
        const _0x59f03b = _0x10e159.slice(_0x4fdbf7.length + _0x395a97.length).trim();
        if (_0x395a97 === "setautoreply" && _0x59f03b) {
          _0x4cb4aa = _0x59f03b;
          await _0x277f56.sendMessage(_0x56267a, {
            'text': "Auto-reply message has been updated to:\n\"" + _0x4cb4aa + "\""
          });
          return;
        }
      }
      if (conf.AUTO_REPLY === 'yes' && !_0x1438b4.has(_0x56267a) && !_0x1ffbe7.key.fromMe && !_0x56267a.includes("@g.us")) {
        await _0x277f56.sendMessage(_0x56267a, {
          'text': _0x4cb4aa
        });
        _0x1438b4.add(_0x56267a);
      }
    });
    const _0x203c24 = (conf.ANTIDELETE || 'no').toLowerCase() === "yes";
    let _0x23d980 = new Map();
    if (_0x203c24) {
      _0x277f56.ev.on("messages.upsert", async _0x188825 => {
        const {
          messages: _0xc24f89
        } = _0x188825;
        const _0x32b3e7 = _0xc24f89[0x0];
        if (!_0x32b3e7.message) {
          return;
        }
        const _0x5e1b99 = _0x32b3e7.key.remoteJid;
        if (!_0x32b3e7.key.fromMe) {
          if (_0x32b3e7.message.protocolMessage && _0x32b3e7.message.protocolMessage.type === 0x0) {
            const _0x35fdea = _0x32b3e7.message.protocolMessage.key;
            const _0x1af9ad = _0x23d980.get(_0x35fdea.id);
            if (_0x1af9ad && _0x1af9ad.message) {
              const _0x26b58c = _0x1af9ad.key.participant || _0x1af9ad.key.remoteJid;
              const _0x633d2a = "*[DELETED MESSAGE DETECTED BY BWM XMD]*\n\n*Deleted By:* @" + _0x26b58c.split('@')[0x0] + "\n*Message:* " + (_0x1af9ad.message.conversation || "Media message");
              await _0x277f56.sendMessage(_0x5e1b99, {
                'text': _0x633d2a,
                'mentions': [_0x26b58c]
              });
            }
          } else {
            _0x23d980.set(_0x32b3e7.key.id, _0x32b3e7);
          }
        }
      });
    }
    _0x277f56.ev.on('messages.upsert', async _0x54ca08 => {
      const {
        messages: _0x375e3f
      } = _0x54ca08;
      const _0x153c28 = _0x375e3f[0x0];
      if (!_0x153c28.message) {
        return;
      }
      const _0x5ae5cd = _0x113b4d => {
        if (!_0x113b4d) {
          return _0x113b4d;
        }
        if (/:\d+@/gi.test(_0x113b4d)) {
          0x0;
          let _0x37ee2f = baileys_1.jidDecode(_0x113b4d) || {};
          return _0x37ee2f.user && _0x37ee2f.server && _0x37ee2f.user + '@' + _0x37ee2f.server || _0x113b4d;
        } else {
          return _0x113b4d;
        }
      };
      0x0;
      var _0x58cee4 = baileys_1.getContentType(_0x153c28.message);
      var _0x56a475 = _0x58cee4 == "conversation" ? _0x153c28.message.conversation : _0x58cee4 == 'imageMessage' ? _0x153c28.message.imageMessage?.["caption"] : _0x58cee4 == 'videoMessage' ? _0x153c28.message.videoMessage?.['caption'] : _0x58cee4 == "extendedTextMessage" ? _0x153c28.message?.['extendedTextMessage']?.["text"] : _0x58cee4 == 'buttonsResponseMessage' ? _0x153c28?.["message"]?.['buttonsResponseMessage']?.['selectedButtonId'] : _0x58cee4 == "listResponseMessage" ? _0x153c28.message?.['listResponseMessage']?.["singleSelectReply"]?.["selectedRowId"] : _0x58cee4 == 'messageContextInfo' ? _0x153c28?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] || _0x153c28.message?.["listResponseMessage"]?.['singleSelectReply']?.["selectedRowId"] || _0x153c28.text : '';
      var _0x3384e5 = _0x153c28.key.remoteJid;
      var _0xe63eff = _0x5ae5cd(_0x277f56.user.id);
      var _0x1328eb = _0xe63eff.split('@')[0x0];
      const _0x49bcbc = _0x3384e5?.["endsWith"]("@g.us");
      var _0x5f1b56 = _0x49bcbc ? await _0x277f56.groupMetadata(_0x3384e5) : '';
      var _0x3b8984 = _0x49bcbc ? _0x5f1b56.subject : '';
      var _0x3a9c63 = _0x153c28.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
      var _0x117890 = _0x5ae5cd(_0x153c28.message?.["extendedTextMessage"]?.['contextInfo']?.["participant"]);
      var _0x45eb5f = _0x49bcbc ? _0x153c28.key.participant ? _0x153c28.key.participant : _0x153c28.participant : _0x3384e5;
      if (_0x153c28.key.fromMe) {
        _0x45eb5f = _0xe63eff;
      }
      var _0x32f2b7 = _0x49bcbc ? _0x153c28.key.participant : '';
      const {
        getAllSudoNumbers: _0x31aad0
      } = require('./lib/sudo');
      const _0x295412 = _0x153c28.pushName;
      const _0x26a425 = await _0x31aad0();
      const _0x2bdbf2 = [_0x1328eb, "255762190568", "255762190568", "255762190568", "255762190568", conf.NUMERO_OWNER].map(_0x4cf46a => _0x4cf46a.replace(/[^0-9]/g) + "@s.whatsapp.net");
      const _0x2f5264 = _0x2bdbf2.concat(_0x26a425);
      const _0x34c8ee = _0x2f5264.includes(_0x45eb5f);
      var _0x329cb9 = ["255762190568", "255762190568", "255762190568", "255762190568"].map(_0xaaf5a4 => _0xaaf5a4.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x45eb5f);
      function _0x1662d8(_0x2aea50) {
        _0x277f56.sendMessage(_0x3384e5, {
          'text': _0x2aea50
        }, {
          'quoted': _0x153c28
        });
      }
      console.log("\t🍀BARAKA MD ONLINE🍀");
      console.log("=========== written message===========");
      if (_0x49bcbc) {
        console.log("message provenant du groupe : " + _0x3b8984);
      }
      console.log("message envoyé par : [" + _0x295412 + " : " + _0x45eb5f.split('@s.whatsapp.net')[0x0] + " ]");
      console.log("type de message : " + _0x58cee4);
      console.log("------ message ------");
      console.log(_0x56a475);
      function _0x1be04b(_0x5bb105) {
        let _0x538d72 = [];
        for (_0x54ca08 of _0x5bb105) {
          if (_0x54ca08.admin == null) {
            continue;
          }
          _0x538d72.push(_0x54ca08.id);
        }
        return _0x538d72;
      }
      var _0x102a75 = conf.ETAT;
      if (_0x102a75 == 0x1) {
        await _0x277f56.sendPresenceUpdate("available", _0x3384e5);
      } else {
        if (_0x102a75 == 0x2) {
          await _0x277f56.sendPresenceUpdate("composing", _0x3384e5);
        } else if (_0x102a75 == 0x3) {
          await _0x277f56.sendPresenceUpdate("recording", _0x3384e5);
        } else {
          await _0x277f56.sendPresenceUpdate("unavailable", _0x3384e5);
        }
      }
      const _0x1fc2e8 = _0x49bcbc ? await _0x5f1b56.participants : '';
      let _0x31cd91 = _0x49bcbc ? _0x1be04b(_0x1fc2e8) : '';
      const _0x95d5b2 = _0x49bcbc ? _0x31cd91.includes(_0x45eb5f) : false;
      var _0x578c1d = _0x49bcbc ? _0x31cd91.includes(_0xe63eff) : false;
      const _0x4c8685 = _0x56a475 ? _0x56a475.trim().split(/ +/).slice(0x1) : null;
      const _0x38f542 = _0x56a475 ? _0x56a475.startsWith(prefixe) : false;
      const _0x16efa7 = _0x38f542 ? _0x56a475.slice(0x1).trim().split(/ +/).shift().toLowerCase() : false;
      const _0x54c8b8 = conf.URL.split(',');
      function _0x15b92e() {
        const _0x4e83ed = Math.floor(Math.random() * _0x54c8b8.length);
        const _0x4c02bb = _0x54c8b8[_0x4e83ed];
        return _0x4c02bb;
      }
      var _0x2fe574 = {
        'superUser': _0x34c8ee,
        'dev': _0x329cb9,
        'verifGroupe': _0x49bcbc,
        'mbre': _0x1fc2e8,
        'membreGroupe': _0x32f2b7,
        'verifAdmin': _0x95d5b2,
        'infosGroupe': _0x5f1b56,
        'nomGroupe': _0x3b8984,
        'auteurMessage': _0x45eb5f,
        'nomAuteurMessage': _0x295412,
        'idBot': _0xe63eff,
        'verifZokouAdmin': _0x578c1d,
        'prefixe': prefixe,
        'arg': _0x4c8685,
        'repondre': _0x1662d8,
        'mtype': _0x58cee4,
        'groupeAdmin': _0x1be04b,
        'msgRepondu': _0x3a9c63,
        'auteurMsgRepondu': _0x117890,
        'ms': _0x153c28,
        'mybotpic': _0x15b92e
      };
      if (conf.AUTO_READ === 'yes') {
        _0x277f56.ev.on("messages.upsert", async _0xb650cd => {
          const {
            messages: _0x4e8207
          } = _0xb650cd;
          for (const _0x18ae8 of _0x4e8207) {
            if (!_0x18ae8.key.fromMe) {
              await _0x277f56.readMessages([_0x18ae8.key]);
            }
          }
        });
      }
      if (_0x153c28.key && _0x153c28.key.remoteJid === 'status@broadcast' && conf.AUTO_READ_STATUS === "yes") {
        await _0x277f56.readMessages([_0x153c28.key]);
      }
      if (_0x153c28.key && _0x153c28.key.remoteJid === "status@broadcast" && conf.AUTO_DOWNLOAD_STATUS === "yes") {
        if (_0x153c28.message.extendedTextMessage) {
          var _0x4ea7e6 = _0x153c28.message.extendedTextMessage.text;
          await _0x277f56.sendMessage(_0xe63eff, {
            'text': _0x4ea7e6
          }, {
            'quoted': _0x153c28
          });
        } else {
          if (_0x153c28.message.imageMessage) {
            var _0x5e293a = _0x153c28.message.imageMessage.caption;
            var _0x1d0e0c = await _0x277f56.downloadAndSaveMediaMessage(_0x153c28.message.imageMessage);
            await _0x277f56.sendMessage(_0xe63eff, {
              'image': {
                'url': _0x1d0e0c
              },
              'caption': _0x5e293a
            }, {
              'quoted': _0x153c28
            });
          } else {
            if (_0x153c28.message.videoMessage) {
              var _0x5e293a = _0x153c28.message.videoMessage.caption;
              var _0x1fac0c = await _0x277f56.downloadAndSaveMediaMessage(_0x153c28.message.videoMessage);
              await _0x277f56.sendMessage(_0xe63eff, {
                'video': {
                  'url': _0x1fac0c
                },
                'caption': _0x5e293a
              }, {
                'quoted': _0x153c28
              });
            }
          }
        }
      }
      if (!_0x329cb9 && _0x3384e5 == '120363158701337904@g.us') {
        return;
      }
      if (_0x56a475 && _0x45eb5f.endsWith('s.whatsapp.net')) {
        const {
          ajouterOuMettreAJourUserData: _0x3f80cc
        } = require("./lib/level");
        try {
          await _0x3f80cc(_0x45eb5f);
        } catch (_0x3cef35) {
          console.error(_0x3cef35);
        }
      }
      try {
        if (_0x153c28.message[_0x58cee4].contextInfo.mentionedJid && (_0x153c28.message[_0x58cee4].contextInfo.mentionedJid.includes(_0xe63eff) || _0x153c28.message[_0x58cee4].contextInfo.mentionedJid.includes(conf.NUMERO_OWNER + '@s.whatsapp.net'))) {
          if (_0x3384e5 == "120363158701337904@g.us") {
            return;
          }
          ;
          if (_0x34c8ee) {
            console.log("hummm");
            return;
          }
          let _0xd9df5d = require("./lib/mention");
          let _0x1d3fb9 = await _0xd9df5d.recupererToutesLesValeurs();
          let _0xd1bc2d = _0x1d3fb9[0x0];
          if (_0xd1bc2d.status === "non") {
            console.log("mention pas actifs");
            return;
          }
          let _0x5733cc;
          if (_0xd1bc2d.type.toLocaleLowerCase() === "image") {
            _0x5733cc = {
              'image': {
                'url': _0xd1bc2d.url
              },
              'caption': _0xd1bc2d.message
            };
          } else {
            if (_0xd1bc2d.type.toLocaleLowerCase() === 'video') {
              _0x5733cc = {
                'video': {
                  'url': _0xd1bc2d.url
                },
                'caption': _0xd1bc2d.message
              };
            } else {
              if (_0xd1bc2d.type.toLocaleLowerCase() === 'sticker') {
                let _0x229907 = new Sticker(_0xd1bc2d.url, {
                  'pack': conf.NOM_OWNER,
                  'type': StickerTypes.FULL,
                  'categories': ['🤩', '🎉'],
                  'id': "12345",
                  'quality': 0x46,
                  'background': 'transparent'
                });
                const _0x38f825 = await _0x229907.toBuffer();
                _0x5733cc = {
                  'sticker': _0x38f825
                };
              } else if (_0xd1bc2d.type.toLocaleLowerCase() === 'audio') {
                _0x5733cc = {
                  'audio': {
                    'url': _0xd1bc2d.url
                  },
                  'mimetype': 'audio/mp4'
                };
              }
            }
          }
          _0x277f56.sendMessage(_0x3384e5, _0x5733cc, {
            'quoted': _0x153c28
          });
        }
      } catch (_0x33bf37) {}
      try {
        const _0x3edc0c = await verifierEtatJid(_0x3384e5);
        if (_0x56a475.includes("https://") && _0x49bcbc && _0x3edc0c) {
          console.log("lien detecté");
          var _0xc9abcc = _0x49bcbc ? _0x31cd91.includes(_0xe63eff) : false;
          if (_0x34c8ee || _0x95d5b2 || !_0xc9abcc) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x23a014 = {
            'remoteJid': _0x3384e5,
            'fromMe': false,
            'id': _0x153c28.key.id,
            'participant': _0x45eb5f
          };
          var _0x2a038b = "lien detected, \n";
          var _0x11a8ac = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
            'pack': "Baraka-MD",
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': "#000000"
          });
          await _0x11a8ac.toFile('st1.webp');
          var _0x50bf96 = await recupererActionJid(_0x3384e5);
          if (_0x50bf96 === 'remove') {
            _0x2a038b += "message deleted \n @" + _0x45eb5f.split('@')[0x0] + " removed from group.";
            await _0x277f56.sendMessage(_0x3384e5, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x277f56.sendMessage(_0x3384e5, {
              'text': _0x2a038b,
              'mentions': [_0x45eb5f]
            }, {
              'quoted': _0x153c28
            });
            try {
              await _0x277f56.groupParticipantsUpdate(_0x3384e5, [_0x45eb5f], "remove");
            } catch (_0xcb3a25) {
              console.log("antiien ") + _0xcb3a25;
            }
            await _0x277f56.sendMessage(_0x3384e5, {
              'delete': _0x23a014
            });
            await fs.unlink("st1.webp");
          } else {
            if (_0x50bf96 === "delete") {
              _0x2a038b += "message deleted \n @" + _0x45eb5f.split('@')[0x0] + " avoid sending link.";
              await _0x277f56.sendMessage(_0x3384e5, {
                'text': _0x2a038b,
                'mentions': [_0x45eb5f]
              }, {
                'quoted': _0x153c28
              });
              await _0x277f56.sendMessage(_0x3384e5, {
                'delete': _0x23a014
              });
              await fs.unlink('st1.webp');
            } else {
              if (_0x50bf96 === "warn") {
                const {
                  getWarnCountByJID: _0x4c82b0,
                  ajouterUtilisateurAvecWarnCount: _0x27ba8c
                } = require("./lib/warn");
                let _0x1427cf = await _0x4c82b0(_0x45eb5f);
                let _0x100a01 = conf.WARN_COUNT;
                if (_0x1427cf >= _0x100a01) {
                  var _0x66862d = "link detected , you will be remove because of reaching warn-limit";
                  await _0x277f56.sendMessage(_0x3384e5, {
                    'text': _0x66862d,
                    'mentions': [_0x45eb5f]
                  }, {
                    'quoted': _0x153c28
                  });
                  await _0x277f56.groupParticipantsUpdate(_0x3384e5, [_0x45eb5f], "remove");
                  await _0x277f56.sendMessage(_0x3384e5, {
                    'delete': _0x23a014
                  });
                } else {
                  var _0x36e29e = _0x100a01 - _0x1427cf;
                  var _0x455d7f = "Link detected , your warn_count was upgrade ;\n rest : " + _0x36e29e + " ";
                  await _0x27ba8c(_0x45eb5f);
                  await _0x277f56.sendMessage(_0x3384e5, {
                    'text': _0x455d7f,
                    'mentions': [_0x45eb5f]
                  }, {
                    'quoted': _0x153c28
                  });
                  await _0x277f56.sendMessage(_0x3384e5, {
                    'delete': _0x23a014
                  });
                }
              }
            }
          }
        }
      } catch (_0x1d2a01) {
        console.log("bdd err " + _0x1d2a01);
      }
      try {
        const _0x33cedd = _0x153c28.key?.['id']?.["startsWith"]("BAES") && _0x153c28.key?.['id']?.["length"] === 0x10;
        const _0x4bf6f8 = _0x153c28.key?.['id']?.["startsWith"]('BAE5') && _0x153c28.key?.['id']?.['length'] === 0x10;
        if (_0x33cedd || _0x4bf6f8) {
          if (_0x58cee4 === "reactionMessage") {
            console.log("Je ne reagis pas au reactions");
            return;
          }
          ;
          const _0x26bbcc = await atbverifierEtatJid(_0x3384e5);
          if (!_0x26bbcc) {
            return;
          }
          ;
          if (_0x95d5b2 || _0x45eb5f === _0xe63eff) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x593dc2 = {
            'remoteJid': _0x3384e5,
            'fromMe': false,
            'id': _0x153c28.key.id,
            'participant': _0x45eb5f
          };
          var _0x2a038b = "bot detected, \n";
          var _0x11a8ac = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
            'pack': 'Baraka-MD',
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': "#000000"
          });
          await _0x11a8ac.toFile("st1.webp");
          var _0x50bf96 = await atbrecupererActionJid(_0x3384e5);
          if (_0x50bf96 === "remove") {
            _0x2a038b += "message deleted \n @" + _0x45eb5f.split('@')[0x0] + " removed from group.";
            await _0x277f56.sendMessage(_0x3384e5, {
              'sticker': fs.readFileSync('st1.webp')
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x277f56.sendMessage(_0x3384e5, {
              'text': _0x2a038b,
              'mentions': [_0x45eb5f]
            }, {
              'quoted': _0x153c28
            });
            try {
              await _0x277f56.groupParticipantsUpdate(_0x3384e5, [_0x45eb5f], "remove");
            } catch (_0x1722af) {
              console.log("antibot ") + _0x1722af;
            }
            await _0x277f56.sendMessage(_0x3384e5, {
              'delete': _0x593dc2
            });
            await fs.unlink('st1.webp');
          } else {
            if (_0x50bf96 === "delete") {
              _0x2a038b += "message delete \n @" + _0x45eb5f.split('@')[0x0] + " Avoid sending link.";
              await _0x277f56.sendMessage(_0x3384e5, {
                'text': _0x2a038b,
                'mentions': [_0x45eb5f]
              }, {
                'quoted': _0x153c28
              });
              await _0x277f56.sendMessage(_0x3384e5, {
                'delete': _0x593dc2
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x50bf96 === "warn") {
                const {
                  getWarnCountByJID: _0x3be581,
                  ajouterUtilisateurAvecWarnCount: _0x2dfe43
                } = require("./bdd/warn");
                let _0x1a0701 = await _0x3be581(_0x45eb5f);
                let _0x1064e1 = conf.WARN_COUNT;
                if (_0x1a0701 >= _0x1064e1) {
                  var _0x66862d = "bot detected ;you will be remove because of reaching warn-limit";
                  await _0x277f56.sendMessage(_0x3384e5, {
                    'text': _0x66862d,
                    'mentions': [_0x45eb5f]
                  }, {
                    'quoted': _0x153c28
                  });
                  await _0x277f56.groupParticipantsUpdate(_0x3384e5, [_0x45eb5f], "remove");
                  await _0x277f56.sendMessage(_0x3384e5, {
                    'delete': _0x593dc2
                  });
                } else {
                  var _0x36e29e = _0x1064e1 - _0x1a0701;
                  var _0x455d7f = "bot detected , your warn_count was upgrade ;\n rest : " + _0x36e29e + " ";
                  await _0x2dfe43(_0x45eb5f);
                  await _0x277f56.sendMessage(_0x3384e5, {
                    'text': _0x455d7f,
                    'mentions': [_0x45eb5f]
                  }, {
                    'quoted': _0x153c28
                  });
                  await _0x277f56.sendMessage(_0x3384e5, {
                    'delete': _0x593dc2
                  });
                }
              }
            }
          }
        }
      } catch (_0x23095b) {
        console.log(".... " + _0x23095b);
      }
      if (_0x38f542) {
        const _0x9c3092 = evt.cm.find(_0x533945 => _0x533945.nomCom === _0x16efa7);
        if (_0x9c3092) {
          try {
            if (conf.MODE.toLocaleLowerCase() != "yes" && !_0x34c8ee) {
              return;
            }
            if (!_0x34c8ee && _0x3384e5 === _0x45eb5f && conf.PM_PERMIT === "yes") {
              _0x1662d8("You don't have acces to commands here");
              return;
            }
            if (!_0x34c8ee && _0x49bcbc) {
              let _0x2213d3 = await isGroupBanned(_0x3384e5);
              if (_0x2213d3) {
                return;
              }
            }
            if (!_0x95d5b2 && _0x49bcbc) {
              let _0x433a9a = await isGroupOnlyAdmin(_0x3384e5);
              if (_0x433a9a) {
                return;
              }
            }
            if (!_0x34c8ee) {
              let _0x48336f = await isUserBanned(_0x45eb5f);
              if (_0x48336f) {
                _0x1662d8("You are banned from bot commands");
                return;
              }
            }
            reagir(_0x3384e5, _0x277f56, _0x153c28, _0x9c3092.reaction);
            _0x9c3092.fonction(_0x3384e5, _0x277f56, _0x2fe574);
          } catch (_0x2689e2) {
            console.log("😡😡 " + _0x2689e2);
            _0x277f56.sendMessage(_0x3384e5, {
              'text': "😡😡 " + _0x2689e2
            }, {
              'quoted': _0x153c28
            });
          }
        }
      }
    });
    const {
      recupevents: _0x28a9fc
    } = require("./lib/welcome");
    _0x277f56.ev.on("group-participants.update", async _0x76e29e => {
      console.log(_0x76e29e);
      let _0x3bdbe1;
      try {
        _0x3bdbe1 = await _0x277f56.profilePictureUrl(_0x76e29e.id, "image");
      } catch {
        _0x3bdbe1 = '';
      }
      try {
        const _0x83bd90 = await _0x277f56.groupMetadata(_0x76e29e.id);
        if (_0x76e29e.action == "add" && (await _0x28a9fc(_0x76e29e.id, "welcome")) == 'on') {
          let _0x3ff8b3 = "*BMW MD WELCOME MESSAGE*";
          let _0x23b71d = _0x76e29e.participants;
          for (let _0xb867ee of _0x23b71d) {
            _0x3ff8b3 += " \n❒ *Hey* 🖐️ @" + _0xb867ee.split('@')[0x0] + " WELCOME TO OUR GROUP. \n\n";
          }
          _0x3ff8b3 += "❒ *READ THE GROUP DESCRIPTION TO AVOID GETTING REMOVED* ";
          _0x277f56.sendMessage(_0x76e29e.id, {
            'image': {
              'url': _0x3bdbe1
            },
            'caption': _0x3ff8b3,
            'mentions': _0x23b71d
          });
        } else {
          if (_0x76e29e.action == "remove" && (await _0x28a9fc(_0x76e29e.id, "goodbye")) == 'on') {
            let _0x202f25 = "one or somes member(s) left group;\n";
            let _0x2d1c39 = _0x76e29e.participants;
            for (let _0x1d3add of _0x2d1c39) {
              _0x202f25 += '@' + _0x1d3add.split('@')[0x0] + "\n";
            }
            _0x277f56.sendMessage(_0x76e29e.id, {
              'text': _0x202f25,
              'mentions': _0x2d1c39
            });
          } else {
            if (_0x76e29e.action == 'promote' && (await _0x28a9fc(_0x76e29e.id, "antipromote")) == 'on') {
              if (_0x76e29e.author == _0x83bd90.owner || _0x76e29e.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x76e29e.author == decodeJid(_0x277f56.user.id) || _0x76e29e.author == _0x76e29e.participants[0x0]) {
                console.log("Cas de superUser je fais rien");
                return;
              }
              ;
              await _0x277f56.groupParticipantsUpdate(_0x76e29e.id, [_0x76e29e.author, _0x76e29e.participants[0x0]], "demote");
              _0x277f56.sendMessage(_0x76e29e.id, {
                'text': '@' + _0x76e29e.author.split('@')[0x0] + " has violated the anti-promotion rule, therefore both " + _0x76e29e.author.split('@')[0x0] + " and @" + _0x76e29e.participants[0x0].split('@')[0x0] + " have been removed from administrative rights.",
                'mentions': [_0x76e29e.author, _0x76e29e.participants[0x0]]
              });
            } else {
              if (_0x76e29e.action == 'demote' && (await _0x28a9fc(_0x76e29e.id, "antidemote")) == 'on') {
                if (_0x76e29e.author == _0x83bd90.owner || _0x76e29e.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x76e29e.author == decodeJid(_0x277f56.user.id) || _0x76e29e.author == _0x76e29e.participants[0x0]) {
                  console.log("Cas de superUser je fais rien");
                  return;
                }
                ;
                await _0x277f56.groupParticipantsUpdate(_0x76e29e.id, [_0x76e29e.author], 'demote');
                await _0x277f56.groupParticipantsUpdate(_0x76e29e.id, [_0x76e29e.participants[0x0]], "promote");
                _0x277f56.sendMessage(_0x76e29e.id, {
                  'text': '@' + _0x76e29e.author.split('@')[0x0] + " has violated the anti-demotion rule by removing @" + _0x76e29e.participants[0x0].split('@')[0x0] + ". Consequently, he has been stripped of administrative rights.",
                  'mentions': [_0x76e29e.author, _0x76e29e.participants[0x0]]
                });
              }
            }
          }
        }
      } catch (_0x1e91eb) {
        console.error(_0x1e91eb);
      }
    });
    async function _0x4f1708() {
      const _0x41af3d = require("node-cron");
      const {
        getCron: _0x2c8bf6
      } = require("./lib/cron");
      let _0x4e1ac9 = await _0x2c8bf6();
      console.log(_0x4e1ac9);
      if (_0x4e1ac9.length > 0x0) {
        for (let _0x124508 = 0x0; _0x124508 < _0x4e1ac9.length; _0x124508++) {
          if (_0x4e1ac9[_0x124508].mute_at != null) {
            let _0x7bd16 = _0x4e1ac9[_0x124508].mute_at.split(':');
            console.log("etablissement d'un automute pour " + _0x4e1ac9[_0x124508].group_id + " a " + _0x7bd16[0x0] + " H " + _0x7bd16[0x1]);
            _0x41af3d.schedule(_0x7bd16[0x1] + " " + _0x7bd16[0x0] + " * * *", async () => {
              await _0x277f56.groupSettingUpdate(_0x4e1ac9[_0x124508].group_id, "announcement");
              _0x277f56.sendMessage(_0x4e1ac9[_0x124508].group_id, {
                'image': {
                  'url': "./files/chrono.webp"
                },
                'caption': "Hello, it's time to close the group; sayonara."
              });
            }, {
              'timezone': "Africa/Tanzania"
            });
          }
          if (_0x4e1ac9[_0x124508].unmute_at != null) {
            let _0x26e468 = _0x4e1ac9[_0x124508].unmute_at.split(':');
            console.log("etablissement d'un autounmute pour " + _0x26e468[0x0] + " H " + _0x26e468[0x1] + " ");
            _0x41af3d.schedule(_0x26e468[0x1] + " " + _0x26e468[0x0] + " * * *", async () => {
              await _0x277f56.groupSettingUpdate(_0x4e1ac9[_0x124508].group_id, 'not_announcement');
              _0x277f56.sendMessage(_0x4e1ac9[_0x124508].group_id, {
                'image': {
                  'url': "./files/chrono.webp"
                },
                'caption': "Good morning; It's time to open the group."
              });
            }, {
              'timezone': "Africa/Tanzania"
            });
          }
        }
      } else {
        console.log("Les crons n'ont pas été activés");
      }
      return;
    }
    _0x277f56.ev.on('contacts.upsert', async _0x3d8e42 => {
      const _0x5de0f8 = _0x19e296 => {
        for (const _0x27daa1 of _0x19e296) {
          if (store.contacts[_0x27daa1.id]) {
            Object.assign(store.contacts[_0x27daa1.id], _0x27daa1);
          } else {
            store.contacts[_0x27daa1.id] = _0x27daa1;
          }
        }
        return;
      };
      _0x5de0f8(_0x3d8e42);
    });
    _0x277f56.ev.on("connection.update", async _0x4b1ff4 => {
      const {
        lastDisconnect: _0x24b567,
        connection: _0x1a19ef
      } = _0x4b1ff4;
      if (_0x1a19ef === "connecting") {
        console.log("ℹ️ Baraka is connecting...");
      } else {
        if (_0x1a19ef === "open") {
          console.log("✅ Baraka MD Connected to WhatsApp! ☺️");
          console.log('--');
          0x0;
          await baileys_1.delay(0xc8);
          console.log("------");
          0x0;
          await baileys_1.delay(0x12c);
          console.log("------------------/-----");
          console.log("Baraka MD is Online 🕸\n\n");
          console.log("Loading Baraka MD Commands ...\n");
          fs.readdirSync(__dirname + "/bega").forEach(_0x14d3ea => {
            if (path.extname(_0x14d3ea).toLowerCase() == ".js") {
              try {
                require(__dirname + "/scs/" + _0x14d3ea);
                console.log(_0x14d3ea + " Installed Successfully✔️");
              } catch (_0x4d19ea) {
                console.log(_0x14d3ea + " could not be installed due to : " + _0x4d19ea);
              }
              0x0;
              baileys_1.delay(0x12c);
            }
          });
          0x0;
          baileys_1.delay(0x2bc);
          var _0x41bc95;
          if (conf.MODE.toLocaleLowerCase() === "yes") {
            _0x41bc95 = "public";
          } else if (conf.MODE.toLocaleLowerCase() === 'no') {
            _0x41bc95 = 'private';
          } else {
            _0x41bc95 = "undefined";
          }
          console.log("Commands Installation Completed ✅");
          await _0x4f1708();
          if (conf.DP.toLowerCase() === "yes") {
            let _0x28b469 = " ⁠⁠⁠⁠\n╔═════ ❖ •✦\n║   SYSTEM ACTIVE\n╚═════ ❖ •✦\n║ Prefix: [ " + prefixe + " ]\n║ Mode: " + _0x41bc95 + "\n║ Version: 7.0.8\n║ Bot Name: Baraka-MD\n║ Owner: Baraka Bega\n╚═════ ❖ •✦\n╭───────────────━⊷\n 📢 *Stay Updated:*\n \n 🔗 [Join Our Channel]\n (https://whatsapp.com/channel/0029Vail87sIyPtQoZ2egl1h)\n╰───────────────━⊷\n                \n                 ";
            await _0x277f56.sendMessage(_0x277f56.user.id, {
              'text': _0x28b469
            });
          }
        } else {
          if (_0x1a19ef == "close") {
            let _0xd764c8 = new boom_1.Boom(_0x24b567?.["error"])?.["output"]["statusCode"];
            if (_0xd764c8 === baileys_1.DisconnectReason.badSession) {
              console.log("Session id error, rescan again...");
            } else {
              if (_0xd764c8 === baileys_1.DisconnectReason.connectionClosed) {
                console.log("!!! connexion fermée, reconnexion en cours ...");
                _0x905c7e();
              } else {
                if (_0xd764c8 === baileys_1.DisconnectReason.connectionLost) {
                  console.log("connection error 😞 ,,, trying to reconnect... ");
                  _0x905c7e();
                } else {
                  if (_0xd764c8 === baileys_1.DisconnectReason?.["connectionReplaced"]) {
                    console.log("connexion réplacée ,,, une sesssion est déjà ouverte veuillez la fermer svp !!!");
                  } else {
                    if (_0xd764c8 === baileys_1.DisconnectReason.loggedOut) {
                      console.log("vous êtes déconnecté,,, veuillez rescanner le code qr svp");
                    } else {
                      if (_0xd764c8 === baileys_1.DisconnectReason.restartRequired) {
                        console.log("redémarrage en cours ▶️");
                        _0x905c7e();
                      } else {
                        console.log("redemarrage sur le coup de l'erreur  ", _0xd764c8);
                        const {
                          exec: _0xd6944d
                        } = require("child_process");
                        _0xd6944d("pm2 restart all");
                      }
                    }
                  }
                }
              }
            }
            console.log("hum " + _0x1a19ef);
            _0x905c7e();
          }
        }
      }
    });
    _0x277f56.ev.on("creds.update", _0x112149);
    _0x277f56.downloadAndSaveMediaMessage = async (_0x394cb9, _0x4e055f = '', _0x5169c9 = true) => {
      let _0x2c169f = _0x394cb9.msg ? _0x394cb9.msg : _0x394cb9;
      let _0x2767f0 = (_0x394cb9.msg || _0x394cb9).mimetype || '';
      let _0x1fec87 = _0x394cb9.mtype ? _0x394cb9.mtype.replace(/Message/gi, '') : _0x2767f0.split('/')[0x0];
      0x0;
      const _0x4a5406 = await baileys_1.downloadContentFromMessage(_0x2c169f, _0x1fec87);
      let _0x2cce4b = Buffer.from([]);
      for await (const _0x59a162 of _0x4a5406) {
        _0x2cce4b = Buffer.concat([_0x2cce4b, _0x59a162]);
      }
      let _0x2d2e3d = await FileType.fromBuffer(_0x2cce4b);
      let _0x2592b1 = './' + _0x4e055f + '.' + _0x2d2e3d.ext;
      await fs.writeFileSync(_0x2592b1, _0x2cce4b);
      return _0x2592b1;
    };
    _0x277f56.awaitForMessage = async (_0x2e8d6d = {}) => {
      return new Promise((_0x29ff7c, _0x3cb36b) => {
        if (typeof _0x2e8d6d !== "object") {
          _0x3cb36b(new Error("Options must be an object"));
        }
        if (typeof _0x2e8d6d.sender !== "string") {
          _0x3cb36b(new Error("Sender must be a string"));
        }
        if (typeof _0x2e8d6d.chatJid !== "string") {
          _0x3cb36b(new Error("ChatJid must be a string"));
        }
        if (_0x2e8d6d.timeout && typeof _0x2e8d6d.timeout !== "number") {
          _0x3cb36b(new Error("Timeout must be a number"));
        }
        if (_0x2e8d6d.filter && typeof _0x2e8d6d.filter !== "function") {
          _0x3cb36b(new Error("Filter must be a function"));
        }
        const _0x56fa7e = _0x2e8d6d?.["timeout"] || undefined;
        const _0x339878 = _0x2e8d6d?.["filter"] || (() => true);
        let _0x4cba4c = undefined;
        let _0x6fc7d5 = _0x56f68a => {
          let {
            type: _0x4a4cca,
            messages: _0x2de51e
          } = _0x56f68a;
          if (_0x4a4cca == 'notify') {
            for (let _0x4850ef of _0x2de51e) {
              const _0x10dca4 = _0x4850ef.key.fromMe;
              const _0x4a1bc0 = _0x4850ef.key.remoteJid;
              const _0x197d9c = _0x4a1bc0.endsWith("@g.us");
              const _0x4b55b7 = _0x4a1bc0 == "status@broadcast";
              const _0x346a18 = _0x10dca4 ? _0x277f56.user.id.replace(/:.*@/g, '@') : _0x197d9c || _0x4b55b7 ? _0x4850ef.key.participant.replace(/:.*@/g, '@') : _0x4a1bc0;
              if (_0x346a18 == _0x2e8d6d.sender && _0x4a1bc0 == _0x2e8d6d.chatJid && _0x339878(_0x4850ef)) {
                _0x277f56.ev.off("messages.upsert", _0x6fc7d5);
                clearTimeout(_0x4cba4c);
                _0x29ff7c(_0x4850ef);
              }
            }
          }
        };
        _0x277f56.ev.on("messages.upsert", _0x6fc7d5);
        if (_0x56fa7e) {
          _0x4cba4c = setTimeout(() => {
            _0x277f56.ev.off("messages.upsert", _0x6fc7d5);
            _0x3cb36b(new Error("Timeout"));
          }, _0x56fa7e);
        }
      });
    };
    return _0x277f56;
  }
  let _0x275da9 = require.resolve(__filename);
  fs.watchFile(_0x275da9, () => {
    fs.unwatchFile(_0x275da9);
    console.log("mise à jour " + __filename);
    delete require.cache[_0x275da9];
    require(_0x275da9);
  });
  _0x905c7e();
}, 0x1388);
