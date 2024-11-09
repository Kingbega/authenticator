const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "commands", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

let infoMsg =  `

╭════════════════════⊷❍
     〘 ALL COMMANDS 〙
╰════════════════════⊷❍
╭────❍ai-menu❍ 
┊❍ ai
┊❍ dit 
┊❍ itta 
┊❍ say 
┊❍ bot 
┊❍ dalle 
┊❍ gpt2 
┊❍ gpt 
┊❍ generate 
┊❍ extract 
┊❍ bing 
┊❍ bing2 
┊❍ ilama 
┊❍ beautify 
┊❍ news
╰═════════════❍
╭────❍owner-menu❍
┊❍ owner 
┊❍ dev 
┊❍ support 
┊❍ alive 
┊❍ bible 
┊❍ poll 
┊❍ enc 
┊❍ help 
┊❍ list 
┊❍ menu 
┊❍ payment 
┊❍ git 
┊❍ test 
┊❍ repo 
┊❍ sc 
┊❍ scan 
┊❍ script 
┊❍ ping 
┊❍ uptime 
┊❍ ss 
┊❍ vv
╰═════════════❍ 
╭────❍game-menu❍
┊❍ guessage 
┊❍ guesscountry 
┊❍ guessgender 
┊❍ riddle 
┊❍ chifumi 
┊❍ quizz
╰═════════════❍ 
╭────❍hentai-menu❍
┊❍ ass 
┊❍ masterbation 
┊❍ thigh 
┊❍ panty 
┊❍ hwaifu 
┊❍ trap 
┊❍ hneko 
┊❍ blowjob 
┊❍ hentaivid
╰═════════════❍
╭────❍mods-menu❍ 
┊❍ tgs 
┊❍ crew 
┊❍ left 
┊❍ join 
┊❍ jid 
┊❍ block 
┊❍ unblock 
┊❍ ban 
┊❍ bangroup 
┊❍ sudo 
┊❍ save 
┊❍ mention 
┊❍ restart 
┊❍ left 
┊❍ reboot
╰═════════════❍
╭────❍gc-menu❍
┊❍ kickall 
┊❍ onlyadmin 
┊❍ welcome 
┊❍ goodbye 
┊❍ antipromote 
┊❍ antidemote 
┊❍ tagall 
┊❍ link 
┊❍ promote 
┊❍ demote 
┊❍ remove 
┊❍ del 
┊❍ info 
┊❍ antilink 
┊❍ antibot 
┊❍ group 
┊❍ gname 
┊❍ gdesc 
┊❍ gpp 
┊❍ hidetag 
┊❍ automute 
┊❍ autounmute 
┊❍ fkick 
┊❍ nsfw 
┊❍ vcf 
┊❍ warn
╰═════════════❍
╭────❍fun-menu❍ 
┊❍ ranime 
┊❍ profile 
┊❍ quote 
┊❍ rank 
┊❍ toprank
╰═════════════❍
╭────❍search-menu❍
┊❍ google 
┊❍ imdb 
┊❍ movie 
┊❍ define 
┊❍ lyrics 
┊❍ video 
┊❍ github 
┊❍ img 
┊❍ lyrics 
┊❍ stickersearch 
┊❍ weather 
┊❍ yts
╰═════════════❍
╭────❍con-menu❍
┊❍ emomix 
┊❍ sticker 
┊❍ scrop 
┊❍ take 
┊❍ write 
┊❍ photo 
┊❍ trt 
┊❍ url
╰═════════════❍
╭────❍quote-menu❍
┊❍ fact 
┊❍ quotes
╰═════════════❍
╭────❍edit-meny❍
┊❍ shit 
┊❍ wasted 
┊❍ wanted 
┊❍ trigger 
┊❍ trash 
┊❍ rip 
┊❍ sepia 
┊❍ rainbow 
┊❍ hitler 
┊❍ invert 
┊❍ jail 
┊❍ affect 
┊❍ beautiful 
┊❍ blur 
┊❍ circle 
┊❍ facepalm 
┊❍ greyscale 
┊❍ joke
╰═════════════❍
╭────❍logo-menu❍ 
┊❍ design 
┊❍ hacker 
┊❍ dragonball 
┊❍ naruto 
┊❍ didong 
┊❍ wall 
┊❍ summer 
┊❍ neonlight 
┊❍ greenneon 
┊❍ glitch 
┊❍ devil 
┊❍ boom 
┊❍ water 
┊❍ snow 
┊❍ transformer 
┊❍ thunder 
┊❍ harrypotter 
┊❍ cat 
┊❍ whitegold 
┊❍ lightglow 
┊❍ thor 
┊❍ neon 
┊❍ purple 
┊❍ gold 
┊❍ arena 
┊❍ incandescent
╰═════════════❍
╭────❍dl-menu❍
┊❍ song 
┊❍ play 
┊❍ anime 
┊❍ gitclone 
┊❍ tiktok 
┊❍ image-dl 
┊❍ instagram 
┊❍ ig-story 
┊❍ video-dl 
┊❍ twitter 
┊❍ mediafire 
┊❍ fb 
┊❍ fb2 
┊❍ ytmp4 
┊❍ ytmp3
╰═════════════❍
╭────❍heroku-menu❍
┊❍ setvar 
┊❍ allvar 
┊❍ getvar
┊❍ bully 
┊❍ cuddle 
┊❍ cry 
┊❍ hug 
┊❍ awoo 
┊❍ kiss 
┊❍ lick 
┊❍ pat 
┊❍ smug 
┊❍ bonk 
┊❍ yeet 
┊❍ blush 
┊❍ smile 
┊❍ wave 
┊❍ highfive 
┊❍ handhold 
┊❍ nom 
┊❍ bite 
┊❍ glomp 
┊❍ slap 
┊❍ kill 
┊❍  kick 
┊❍ happy 
┊❍ wink 
┊❍ poke 
┊❍ dance 
┊❍ cringe
╰═════════════❍
╭────❍stick-cmd❍
┊❍ setcmd 
┊❍ delcmd 
┊❍ allcmd
╰═════════════❍
╭────❍weeb-menu❍
┊❍ waifu 
┊❍ neko 
┊❍ shinobu 
┊❍ megumin 
┊❍ cosplay 
┊❍ couplepp
╰════════════════════════⊷❍
`;
    
let menuMsg = `
  `;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 

