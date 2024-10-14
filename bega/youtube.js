const _0x35afa7 = _0x5ec4;
function _0x5ec4(_0x3f2f45, _0x711376) {
    const _0x162a38 = _0x162a();
    return _0x5ec4 = function (_0x5ec4bf, _0x1473de) {
        _0x5ec4bf = _0x5ec4bf - 0xbb;
        let _0x1ac591 = _0x162a38[_0x5ec4bf];
        return _0x1ac591;
    }, _0x5ec4(_0x3f2f45, _0x711376);
}
function _0x162a() {
    const _0x3c9882 = [
        '\x0a│⿻\x20*Quality:*\x20',
        '*BEGA-MD\x20VIDEO\x20PLAYER*\x0a\x0a╭───────────────◆\x0a│⿻\x20*Title:*\x20',
        '/api/download/ytmp4?url=',
        'Error\x20from\x20Gifted\x20API:',
        'thumbnail',
        '\x0a│⿻\x20*Artist:*\x20',
        'Please\x20insert\x20a\x20song/video\x20name.',
        '/api/download/ytmp3?url=',
        '&apikey=',
        '82qstqSF',
        'timestamp',
        'json',
        'Please\x20insert\x20a\x20song\x20name.',
        '6ckvEWe',
        '\x0a│⿻\x20*Duration:*\x20',
        '105435dpFkZE',
        '1256MGWSot',
        'An\x20error\x20occurred\x20while\x20searching\x20or\x20downloading\x20the\x20video.',
        '7976820qwKZvt',
        'length',
        'join',
        'Failed\x20to\x20download\x20audio.\x20Please\x20try\x20again\x20later.',
        '699072BifTah',
        'name',
        'An\x20error\x20occurred\x20while\x20searching\x20or\x20downloading\x20the\x20audio.',
        'type',
        'No\x20audio\x20found.',
        '*BEGA-MD\x20SONG\x20PLAYER*\x0a\x0a╭───────────────◆\x0a│⿻\x20*Title:*\x20',
        '\x0a│⿻\x20*Uploaded:*\x20',
        'result',
        'status',
        'video',
        'https://gifted-apis-third-30b2fdbb9819.herokuapp.com',
        'title',
        'download_url',
        'videos',
        '68820jSpTyU',
        '../framework/zokou',
        'views',
        'success',
        'video/mp4',
        'author',
        '735833cCGfMI',
        '5496LHHPMe',
        'url',
        'ago',
        'error',
        '\x0a╰────────────────◆\x0a⦿\x20*Direct\x20YtLink:*\x20',
        '1848qkHDFI',
        'Search',
        'No\x20videos\x20found.',
        '\x0a│⿻\x20*Viewers:*\x20',
        'sendMessage',
        'Failed\x20to\x20download\x20the\x20video.\x20Please\x20try\x20again\x20later.',
        'audio/mp4'
    ];
    _0x162a = function () {
        return _0x3c9882;
    };
    return _0x162a();
}
(function (_0x5a6050, _0xc18878) {
    const _0x1780b3 = _0x5ec4, _0x1619ee = _0x5a6050();
    while (!![]) {
        try {
            const _0x4c1463 = parseInt(_0x1780b3(0xe0)) / 0x1 * (-parseInt(_0x1780b3(0xcb)) / 0x2) + -parseInt(_0x1780b3(0xd0)) / 0x3 * (parseInt(_0x1780b3(0xe7)) / 0x4) + -parseInt(_0x1780b3(0xc4)) / 0x5 + parseInt(_0x1780b3(0xe4)) / 0x6 * (-parseInt(_0x1780b3(0xca)) / 0x7) + -parseInt(_0x1780b3(0xed)) / 0x8 + parseInt(_0x1780b3(0xe6)) / 0x9 + parseInt(_0x1780b3(0xe9)) / 0xa;
            if (_0x4c1463 === _0xc18878)
                break;
            else
                _0x1619ee['push'](_0x1619ee['shift']());
        } catch (_0x390635) {
            _0x1619ee['push'](_0x1619ee['shift']());
        }
    }
}(_0x162a, 0x2d032));
const {zokou} = require(_0x35afa7(0xc5)), yts = require('yt-search'), BaseUrl = _0x35afa7(0xc0), giftedapikey = 'giftedtechk';
zokou({
    'nomCom': 'play',
    'categorie': _0x35afa7(0xd1),
    'reaction': '💿'
}, async (_0x361dbe, _0x2bd07a, _0x2ad8a8) => {
    const _0x23917e = _0x35afa7, {
            ms: _0x2e84fa,
            repondre: _0x4f6a06,
            arg: _0x586702
        } = _0x2ad8a8;
    if (!_0x586702[0x0]) {
        _0x4f6a06('Please\x20insert\x20a\x20song\x20name.');
        return;
    }
    try {
        let _0x5be075 = _0x586702[_0x23917e(0xeb)]('\x20'), _0x2e9bc7 = [];
        const _0x4f42ba = await yts(_0x5be075);
        _0x2e9bc7 = _0x4f42ba[_0x23917e(0xc3)];
        if (_0x2e9bc7 && _0x2e9bc7[_0x23917e(0xea)] > 0x0) {
            const _0x58bbbc = _0x2e9bc7[0x0][_0x23917e(0xcc)], _0x1da293 = await fetch(BaseUrl + _0x23917e(0xde) + encodeURIComponent(_0x58bbbc) + _0x23917e(0xdf) + giftedapikey), _0x46e290 = await _0x1da293['json']();
            if (_0x46e290[_0x23917e(0xbe)] === 0xc8 && _0x46e290[_0x23917e(0xc7)]) {
                const _0x6eff1a = _0x46e290['result'][_0x23917e(0xc2)], _0x268749 = {
                        'image': { 'url': _0x2e9bc7[0x0][_0x23917e(0xdb)] },
                        'caption': _0x23917e(0xbb) + _0x46e290[_0x23917e(0xbd)][_0x23917e(0xc1)] + _0x23917e(0xd7) + _0x46e290[_0x23917e(0xbd)][_0x23917e(0xf0)] + '\x0a│⿻\x20*Duration:*\x20' + _0x2e9bc7[0x0][_0x23917e(0xe1)] + _0x23917e(0xd3) + _0x2e9bc7[0x0][_0x23917e(0xc6)] + _0x23917e(0xbc) + _0x2e9bc7[0x0][_0x23917e(0xcd)] + '\x0a│⿻\x20*Artist:*\x20' + _0x2e9bc7[0x0][_0x23917e(0xc9)][_0x23917e(0xee)] + _0x23917e(0xcf) + _0x58bbbc
                    };
                await _0x2bd07a[_0x23917e(0xd4)](_0x361dbe, _0x268749, { 'quoted': _0x2e84fa }), await _0x2bd07a[_0x23917e(0xd4)](_0x361dbe, {
                    'audio': { 'url': _0x6eff1a },
                    'mimetype': _0x23917e(0xd6)
                }, { 'quoted': _0x2e84fa });
            } else
                _0x4f6a06(_0x23917e(0xec));
        } else
            _0x4f6a06(_0x23917e(0xf1));
    } catch (_0xb56bf7) {
        console[_0x23917e(0xce)](_0x23917e(0xda), _0xb56bf7), _0x4f6a06(_0x23917e(0xef));
    }
}), zokou({
    'nomCom': 'song',
    'categorie': _0x35afa7(0xd1),
    'reaction': '💿'
}, async (_0x34f181, _0x454d79, _0x300b05) => {
    const _0x52ad0f = _0x35afa7, {
            ms: _0x23ff16,
            repondre: _0x18858e,
            arg: _0x79af40
        } = _0x300b05;
    if (!_0x79af40[0x0]) {
        _0x18858e(_0x52ad0f(0xe3));
        return;
    }
    try {
        let _0x382599 = _0x79af40[_0x52ad0f(0xeb)]('\x20'), _0xf1b004 = [];
        const _0x2cc0c6 = await yts(_0x382599);
        _0xf1b004 = _0x2cc0c6[_0x52ad0f(0xc3)];
        if (_0xf1b004 && _0xf1b004[_0x52ad0f(0xea)] > 0x0) {
            const _0x2c89bf = _0xf1b004[0x0]['url'], _0x131f58 = await fetch(BaseUrl + _0x52ad0f(0xde) + encodeURIComponent(_0x2c89bf) + '&apikey=' + giftedapikey), _0x58342a = await _0x131f58[_0x52ad0f(0xe2)]();
            if (_0x58342a[_0x52ad0f(0xbe)] === 0xc8 && _0x58342a['success']) {
                const _0x219543 = _0x58342a[_0x52ad0f(0xbd)][_0x52ad0f(0xc2)], _0x45fe93 = {
                        'image': { 'url': _0xf1b004[0x0][_0x52ad0f(0xdb)] },
                        'caption': '*BEGA-MD\x20SONG\x20PLAYER*\x0a\x0a╭───────────────◆\x0a│⿻\x20*Title:*\x20' + _0x58342a[_0x52ad0f(0xbd)][_0x52ad0f(0xc1)] + '\x0a│⿻\x20*Quality:*\x20' + _0x58342a[_0x52ad0f(0xbd)]['type'] + _0x52ad0f(0xe5) + _0xf1b004[0x0][_0x52ad0f(0xe1)] + _0x52ad0f(0xd3) + _0xf1b004[0x0][_0x52ad0f(0xc6)] + _0x52ad0f(0xbc) + _0xf1b004[0x0][_0x52ad0f(0xcd)] + _0x52ad0f(0xdc) + _0xf1b004[0x0]['author'][_0x52ad0f(0xee)] + '\x0a╰────────────────◆\x0a⦿\x20*Direct\x20YtLink:*\x20' + _0x2c89bf
                    };
                await _0x454d79[_0x52ad0f(0xd4)](_0x34f181, _0x45fe93, { 'quoted': _0x23ff16 }), await _0x454d79[_0x52ad0f(0xd4)](_0x34f181, {
                    'document': { 'url': _0x219543 },
                    'mimetype': 'audio/mp4'
                }, { 'quoted': _0x23ff16 });
            } else
                _0x18858e('Failed\x20to\x20download\x20audio.\x20Please\x20try\x20again\x20later.');
        } else
            _0x18858e(_0x52ad0f(0xf1));
    } catch (_0x24cf61) {
        console[_0x52ad0f(0xce)](_0x52ad0f(0xda), _0x24cf61), _0x18858e('An\x20error\x20occurred\x20while\x20searching\x20or\x20downloading\x20the\x20audio.');
    }
}), zokou({
    'nomCom': _0x35afa7(0xbf),
    'categorie': _0x35afa7(0xd1),
    'reaction': '🎥'
}, async (_0x3a0d04, _0x150017, _0x5ddf07) => {
    const _0x496f63 = _0x35afa7, {
            ms: _0x262286,
            repondre: _0xaccac8,
            arg: _0x583f95
        } = _0x5ddf07;
    if (!_0x583f95[0x0]) {
        _0xaccac8('Please\x20insert\x20a\x20song/video\x20name.');
        return;
    }
    try {
        let _0x576ac9 = _0x583f95['join']('\x20'), _0x4e4e52 = [];
        const _0xafee78 = await yts(_0x576ac9);
        _0x4e4e52 = _0xafee78[_0x496f63(0xc3)];
        if (_0x4e4e52 && _0x4e4e52[_0x496f63(0xea)] > 0x0) {
            const _0x14025a = _0x4e4e52[0x0]['url'], _0xe1be26 = await fetch(BaseUrl + _0x496f63(0xd9) + encodeURIComponent(_0x14025a) + '&apikey=' + giftedapikey), _0x111bee = await _0xe1be26['json']();
            if (_0x111bee[_0x496f63(0xbe)] === 0xc8 && _0x111bee[_0x496f63(0xc7)]) {
                const _0x3e8d54 = _0x111bee[_0x496f63(0xbd)][_0x496f63(0xc2)], _0x29b69e = {
                        'image': { 'url': _0x4e4e52[0x0]['thumbnail'] },
                        'caption': _0x496f63(0xd8) + _0x111bee[_0x496f63(0xbd)][_0x496f63(0xc1)] + _0x496f63(0xd7) + _0x111bee[_0x496f63(0xbd)][_0x496f63(0xf0)] + _0x496f63(0xe5) + _0x4e4e52[0x0][_0x496f63(0xe1)] + _0x496f63(0xd3) + _0x4e4e52[0x0]['views'] + '\x0a│⿻\x20*Uploaded:*\x20' + _0x4e4e52[0x0]['ago'] + _0x496f63(0xdc) + _0x4e4e52[0x0][_0x496f63(0xc9)][_0x496f63(0xee)] + _0x496f63(0xcf) + _0x14025a
                    };
                await _0x150017[_0x496f63(0xd4)](_0x3a0d04, _0x29b69e, { 'quoted': _0x262286 }), await _0x150017[_0x496f63(0xd4)](_0x3a0d04, {
                    'video': { 'url': _0x3e8d54 },
                    'mimetype': _0x496f63(0xc8)
                }, { 'quoted': _0x262286 });
            } else
                _0xaccac8('Failed\x20to\x20download\x20the\x20video.\x20Please\x20try\x20again\x20later.');
        } else
            _0xaccac8(_0x496f63(0xd2));
    } catch (_0x4ce0d2) {
        console['error']('Error\x20from\x20Gifted\x20API:', _0x4ce0d2), _0xaccac8(_0x496f63(0xe8));
    }
}), zokou({
    'nomCom': 'videodoc',
    'categorie': 'Search',
    'reaction': '🎥'
}, async (_0x1953e8, _0x463e80, _0xe21614) => {
    const _0x2c0fbc = _0x35afa7, {
            ms: _0x557ea6,
            repondre: _0x4477cd,
            arg: _0x28b069
        } = _0xe21614;
    if (!_0x28b069[0x0]) {
        _0x4477cd(_0x2c0fbc(0xdd));
        return;
    }
    try {
        let _0x120320 = _0x28b069[_0x2c0fbc(0xeb)]('\x20'), _0x26d916 = [];
        const _0x30b4f7 = await yts(_0x120320);
        _0x26d916 = _0x30b4f7[_0x2c0fbc(0xc3)];
        if (_0x26d916 && _0x26d916[_0x2c0fbc(0xea)] > 0x0) {
            const _0x2ff980 = _0x26d916[0x0][_0x2c0fbc(0xcc)], _0x9d8d3e = await fetch(BaseUrl + '/api/download/ytmp4?url=' + encodeURIComponent(_0x2ff980) + '&apikey=' + giftedapikey), _0x310393 = await _0x9d8d3e[_0x2c0fbc(0xe2)]();
            if (_0x310393[_0x2c0fbc(0xbe)] === 0xc8 && _0x310393[_0x2c0fbc(0xc7)]) {
                const _0x330029 = _0x310393[_0x2c0fbc(0xbd)][_0x2c0fbc(0xc2)], _0x3a505d = {
                        'image': { 'url': _0x26d916[0x0][_0x2c0fbc(0xdb)] },
                        'caption': _0x2c0fbc(0xd8) + _0x310393[_0x2c0fbc(0xbd)][_0x2c0fbc(0xc1)] + _0x2c0fbc(0xd7) + _0x310393['result'][_0x2c0fbc(0xf0)] + '\x0a│⿻\x20*Duration:*\x20' + _0x26d916[0x0][_0x2c0fbc(0xe1)] + '\x0a│⿻\x20*Viewers:*\x20' + _0x26d916[0x0][_0x2c0fbc(0xc6)] + _0x2c0fbc(0xbc) + _0x26d916[0x0][_0x2c0fbc(0xcd)] + '\x0a│⿻\x20*Artist:*\x20' + _0x26d916[0x0][_0x2c0fbc(0xc9)][_0x2c0fbc(0xee)] + _0x2c0fbc(0xcf) + _0x2ff980
                    };
                await _0x463e80[_0x2c0fbc(0xd4)](_0x1953e8, _0x3a505d, { 'quoted': _0x557ea6 }), await _0x463e80[_0x2c0fbc(0xd4)](_0x1953e8, {
                    'document': { 'url': _0x330029 },
                    'mimetype': _0x2c0fbc(0xc8)
                }, { 'quoted': _0x557ea6 });
            } else
                _0x4477cd(_0x2c0fbc(0xd5));
        } else
            _0x4477cd('No\x20videos\x20found.');
    } catch (_0x1f702f) {
        console['error'](_0x2c0fbc(0xda), _0x1f702f), _0x4477cd(_0x2c0fbc(0xe8));
    }
});
