  /*Hallo semua, terima kasih telah ambil sc ini

SCRIPT GWEJ


Tq To
- Arasya*/
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
const { wikiSearch } = require('./lib/wiki.js')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { webp2mp4File } = require("./lib/webp2mp4");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const afk = JSON.parse(fs.readFileSync("./lib/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js")
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp.js')
const { ind } = require('./language')
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const reminder = require("./lib/reminder")
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
const bucinrandom = JSON.parse(fs.readFileSync('./database/bucin.json'))
//STORAGE
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
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
namabot = "-";
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
const fiturnye = JSON.parse(fs.readFileSync('./database/update.json'))
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
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isNsfw = isGroup ? nsfw.includes(from) : false
    const isOwner = ownerNumber.includes(sender)

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
      var ucapanWaktu = "Selamat Malam🌃";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat Senja🌆";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat Sore🌇";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat Siang🏜️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat Pagi🌄";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat Malam🌌";
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
    const pake = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${ucapanWaktu} ${pushname} 👋` }}
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
      //
      var premi = 'User Biasa'
			if (isOwner) {
				premi = 'Pemilik Bot Ini'
			}
			var regis = '*X*'
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
    ///STC AUTO RESPONDER :))///KASIH NAMA GUA DONG NGENTOD
    //Auto 
      for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
				  }
if (budy.startsWith("@6281319944917")){
result = fs.readFileSync(`./strg/stiker/saya.webp`)
  syaa.sendMessage(from, result, sticker, { quoted: mek })
}
/////AKHIR STC RESPON
///AUTO VN TEST
/////AUTO RESPONDER NYA YG TEKS
if (budy.startsWith("start=193929")){
  reply(`Silahkan akses, dengan cara ketik /menu

atau pencet link di bawah
https://wa.me/6288213292687?text=/menu

*INFO BOT*
Nama Bot : Jojo
Language : JavaScript
Engine : Node Js
Owner : @${dtod.split('@')[0]}
Sc : Bochil Gaming
_Note : Sc JojoBot sedang di perbaiki_

"Note : Bantu share bot ini dong:))
dengan cara kirim tautan ini sebanyak banyak nya"

https://wa.me/6288213292687?text=start=193929`)
}
//////////AKHER
    if (budy.startsWith('$')){
      if (!isOwner)return reply("Gak work memek")
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
      case 'menu':
  case 'help':
    case 'm':
      
      send = `${sender}`
      wangsaf = "0@s.whatsapp.net"
      menu2 = `*[ JOJO - BOT ]*
         
Haii @${send.split('@')[0]}
 
Nama : ${pushname}
Status : ${premi}
Jam : ${jam}
Hari : ${week}
Tanggal : ${date}
${readmore}
${c}INI FITUR SETTING${c}

*- ${prefix}setreply*
*- ${prefix}setfakeimg*
*- ${prefix}setthumb*
*- ${prefix}addrespon*
*- ${prefix}delrespon*
*- ${prefix}addfitur*
*- ${prefix}setcmd*
*- ${prefix}delcmd*
*- ${prefix}listcmd*
*- ${prefix}status*
*- ${prefix}public*
*- ${prefix}self*
*- ${prefix}donasi*
*- ${prefix}speed*
*- ${prefix}runtime*
*- ${prefix}get*
*- ${prefix}readall*
*- $*
*- >*
*- =>*

${c}INI FITUR STICKER${c}

*- ${prefix}sticker*
*- ${prefix}sticker2*
*- ${prefix}toimg*
*- ${prefix}stcmeme*
*- ${prefix}tomp4*
*- ${prefix}take*
*- ${prefix}swm*
*- ${prefix}tomp4*

${c}INI FITUR STORAGE${c}
*- ${prefix}addvn* Nama
*- ${prefix}getvn* Nama
*- ${prefix}listvn*
*- ${prefix}update*

${c}INI FITUR CONVERT${c}

*- ${prefix}tomp3*
*- ${prefix}tourl*
*- ${prefix}tovn*
*- ${prefix}memegen*
*- ${prefix}bajingan*
*- ${prefix}ttp*
*- ${prefix}attp*
*- ${prefix}tahta*

${c}INI FITUR UPLOAD STATUS${c}

*- ${prefix}spamsw*
*- ${prefix}upswteks*
*- ${prefix}upswimage*
*- ${prefix}upswvideo*
*- ${prefix}upswvoice*
*- ${prefix}upswaudio*

${c}NSFW MENU${c}

*- ${prefix}nsfw*
*- ${prefix}hentai*
*- ${prefix}ahegao*
*- ${prefix}blowjob*
*- ${prefix}cum*
*- ${prefix}neko*
*- ${prefix}ero*
*- ${prefix}masturbation*

${c}INI FITUR LAIN NYA${c}

*- ${prefix}ssweb*
*- ${prefix}translate What*
*- ${prefix}sewa*
*- ${prefix}htmldeface*
*- ${prefix}cekme*
*- ${prefix}wikipedia*
*- ${prefix}tts <code> <text>*
*- ${prefix}image <search>*
*- ${prefix}lirik*
*- ${prefix}bucin*
*- ${prefix}quotes*
*- ${prefix}quotesislami*
*- ${prefix}semoji*
*- ${prefix}fdeface*
*- ${prefix}igstalk*
*- ${prefix}brainly*
*- ${prefix}image*

${c}INI FITUR GRUP${c}

*- ${prefix}hidetag*
*- ${prefix}linkgc*
*- ${prefix}infogc*
*- ${prefix}promote*
*- ${prefix}demote*
*- ${prefix}kick*
*- ${prefix}add*
*- ${prefix}getname*
*- ${prefix}getbio*
*- ${prefix}buka*
*- ${prefix}tutup*
*- ${prefix}tutuptime*
*- ${prefix}hidetag*
*- ${prefix}bukatime*
*- ${prefix}setppgrup*
*- ${prefix}buka*
*- ${prefix}leavetime*
*- ${prefix}buka*
*- ${prefix}revoke*
*- ${prefix}inspect*

${c}INI FITUR DONGLOD${c}

*- ${prefix}igdl*
*- ${prefix}igstory*

${c}INI FITUR DOWNLOAD YT${c}

*- ${prefix}play _Lagu_*
*- ${prefix}playmp4 _Lagu_*
*- ${prefix}ytmp3 _Lagu_*
*- ${prefix}ytmp4 _Lagu_*
*- ${prefix}youtube _Lagu_*

*INFO OWNER*
Nama Owner : Arasya
Nomer : @${dtod.split('@')[0]}

*INFO BOT*
Nama Bot : ${namabot}
Engine : Node Js
Runtime : ${runtime(process.uptime())}
Language : JavaScript
Program : Masih Ukuran Beta
WhatsApp By : @${wangsaf.split('@')[0]}
◩ *© Jojo-Bot* ◩`
  sendButMessage(from, menu2, `By @sofunsyabi.id`, [
            {
              buttonId: `quote`,
              buttonText: {
                displayText: `Quotes`,
              },
              type: 1,
            },
            {
              buttonId: `sewa`,
              buttonText: {
                displayText: `Sewa Bot`,
              },
              type: 1,
            },
          ], {quoted:pake, contextInfo: { mentionedJid: [sender, wangsaf, dtod], forwardingScore: 508, isForwarded: true}})
        break;
        case 'sc':
          reply(`👇${readmore}\nhttps://github.com/GetSya/JojoRepo`)
          break
//random
case 'neko':
  if (!isGroup)return reply(mess.only.group)
  if (!isNsfw)return reply(mess.nsfw)
        let neko = await fetchJson(
          `https://arasya-chan.herokuapp.com/api/nsfw/nsfwNeko?apikey=Syaa`
        );
        gambhar = neko.result[Math.floor(Math.random() * neko.result)];
        fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(neko.result));
        buttons = [
          {
            buttonId: `${command}`,
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
          footerText: "case by @sofunsyabi.id",
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
        break;

case 'hentai':
  case 'ahegao':
    case 'blowjob':
      case 'cum':
        case 'ero':
          case 'masturbation':
  if (!isGroup)return reply(mess.only.group)
  if (!isNsfw)return reply(mess.nsfw)
        let wipu = await fetchJson(
          `https://arasya-chan.herokuapp.com/api/nsfw/${command}?apikey=Syaa`
        );
        gmbr = wipu.result[Math.floor(Math.random() * wipu.result)];
        fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipu.result));
        buttons = [
          {
            buttonId: `${command}`,
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
          footerText: "case by @sofunsyabi.id",
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
        break;
        //////////EN ES EF WE///////////
case 'nsfw':
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
        ///group
case 'kick':
        case 'out':
          case 'kik':
            case 'keluar':
              
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
        case 'grupinfo':
            case 'infogrup':
              case 'infogc':
             
        if (!isGroup) return;
        ppUrl = await syaa.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        syaa.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\`「 Group Info 」\`\`\`\n*•> *Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length} \n\n${groupDesc}`,
        });
        break;
      // Demote Admins
      case 'demote':
        
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
      case 'promote':
        case 'pm':
          
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
        case 'tagme':
			  
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					syaa.sendMessage(from, tagu, text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
        case 'add':
          
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
      case 'getbio':
        
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await syaa.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply("Status Profile Not Found");
        }
        break;
        case 'getname':
        
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          syaa.contacts[ambl] != undefined
            ? syaa.contacts[ambl].sname || syaa.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;
      case 'setdesc':
        
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        syaa.groupUpdateDescription(from, `${args.join(" ")}`);
        syaa.sendMessage(from, "Succes change description group", text, {
          quoted: mek,
        });
        break;
        case 'setppgrup':
          
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
case 'tutup':
        
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        reply(`*SUCCES CLOSE GROUP*`);
        syaa.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
      case 'revoke':
        
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        syaa.revokeInvite(from);
        reply("```Succes revoke link group```");
        break;
      case 'buka':
        
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        reply(`*SUCCES OPEN GROUP*`);
        syaa.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
        case 'inspect':
        
        
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
        case 'readall':
              totalchat.map( async ({ jid }) => {
              await syaa.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca Seluruh Chat !\`\`\``)
              console.log(totalchat.length)
              break	
        //maker
case "ssweb":
  reply("Sikirinshot")
  capti = `Sikirinshot`
       ini_url = args.join(" ")
					atetepe = await getBuffer(`https://api-jojo.herokuapp.com/api/ssweb?apikey=ZeroYT7&url=${ini_url}`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek caption: ajg })
					break
case 'nulis':
        case 'tulis':
        reply(`PILIH TIPE BUKU BERIKUT
- ${prefix}nuliskiri _Text_
- ${prefix}nuliskanan _Text_
- ${prefix}foliokiri _Text_
- ${prefix}foliokanan _Text_`)
break
        case 'nuliskiri':
        if (args.length < 1)
          return reply(
            `Usage ${prefix + command} Arasya`
          );
        var bodi = args.join(" ");
        rakz = await getBuffer(
          `https://hardianto.xyz/api/nuliskiri?text=${bodi}&apikey=hardianto`
        );
        syaa.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;
        case 'nuliskanan':
        if (args.length < 1)
          return reply(
            `Usage ${prefix + command} Arasya`
          );
        var bodi = args.join(" ");
        rakz = await getBuffer(
          `https://hardianto.xyz/api/nuliskanan?text=${bodi}&apikey=hardianto`
        );
        syaa.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;
        case 'foliokiri':
        if (args.length < 1)
          return reply(
            `Usage ${prefix + command} Arasya`
          );
        var bodi = args.join(" ");
        rakz = await getBuffer(
          `https://hardianto.xyz/api/foliokiri?text=${bodi}&apikey=hardianto`
        );
        syaa.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;
        case 'foliokanan':
        if (args.length < 1)
          return reply(
            `Usage ${prefix + command} Arasya`
          );
        var bodi = args.join(" ");
        rakz = await getBuffer(
          `https://hardianto.xyz/api/foliokanan?text=${bodi}&apikey=hardianto`
        );
        syaa.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;
case 'tahta':
				sya = args.join(" ")
				asu = await getBuffer(`https://hardianto.xyz/api/harta?query=${sya}&apikey=hardianto`)
				syaa.sendMessage(from, asu, image, {quoted: mek})
				break
case 'attp'://Ini lu fix in sendiri aja
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(6)
					atetepe = await getBuffer(`https://hardianto.xyz/api/maker/attp?text=${biji}&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case 'ttp':
					if (args.length < 1) return reply('Teksnya?')
					biji = args.join(" ")
					atetepe = await getBuffer(`https://hardianto.xyz/api/maker/ttp?text=${biji}&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case 'bajingan':
   if (args.length < 1) return reply(from, `Penggunaan ${prefix}bajingan lu teks`, mek)
   bapakao = body.slice(10)
   sendStickerFromUrl(from, `https://hardianto.xyz/api/creator/memegen?bawah=${bapakao}&atas=bajingan&imgurl=https://telegra.ph/file/d608ec3cb57ff6b9ac708.jpg&apikey=hardianto`)
   break
case 'stcmeme':
  ct = body.slice(9)
              top = ct.split('|')[0]
              bottom = ct.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              
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
      
   
   
   if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
   if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
   try {
   if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY GAMBAR ATAU STICKER!!`)
   
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
////STORAGE
case 'addfitur':
                    if (!isOwner) return sticOwner(from)
				    huu = args.join(" ")
						fiturnye.push(huu)
						fs.writeFileSync('./database/update.json', JSON.stringify(bucinrandom))
						reply(`Fitur ${huu} Sudah Di Tambahkan Ke Database`)
						break
case 'delfitur':
if (!isOwner) return sticOwner(from)
if (args.length < 1) return reply( `Apa yg mau di hapus?`)
 let dbw = args.join(" ")
 fiturnye.splice(dbw)
 fs.writeFileSync('./database/bad.json', JSON.stringify(fiturnye))
 reply('Success Menghapus Fitur')
 break 
case 'listfitur':
				case 'update': 
				case 'newmenu': 
					teks = '*UPDATE FITUR :*\n\n'
					for (let awokwkwk of fiturnye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${fiturnye.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": fiturnye } })
					break
case 'addvn': 
  
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
				
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
case 'getvn': 
          
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					syaa.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
case 'htmldeface':
  if (!isOwner)return reply("Fitur Sedang Di Non Aktifkan")
  hcker = args.join(" ")
  if (args.length < 1) return reply(`Mana nama lu?contoh ${prefix + command} ${hcker}`)
  hck = `<!DOCTYPE html>
<html lang="en" >

<style>
@import url("https://fonts.googleapis.com/css?family=Amatic+SC:400,700");
body {
  font-family: 'Amatic SC', sans-serif;
  font-size: 100px;
}
.test {
  -webkit-animation: squiggly-anim 0.34s linear infinite;
          animation: squiggly-anim 0.34s linear infinite;
}
body {
  line-height: 100vh;
  background: #111;
  color: #fff;
}
.test {
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  outline: none;
  text-align: center;
  line-height: 1;
}
.small {
  font-size: 0.5em;
}
.smaller {
  font-size: 0.4em;
}
p {
  margin: 0;
}
@-webkit-keyframes squiggly-anim {
  0% {
    -webkit-filter: url("#squiggly-0");
            filter: url("#squiggly-0");
  }
  25% {
    -webkit-filter: url("#squiggly-1");
            filter: url("#squiggly-1");
  }
  50% {
    -webkit-filter: url("#squiggly-2");
            filter: url("#squiggly-2");
  }
  75% {
    -webkit-filter: url("#squiggly-3");
            filter: url("#squiggly-3");
  }
  100% {
    -webkit-filter: url("#squiggly-4");
            filter: url("#squiggly-4");
  }
}
@keyframes squiggly-anim {
  0% {
    -webkit-filter: url("#squiggly-0");
            filter: url("#squiggly-0");
  }
  25% {
    -webkit-filter: url("#squiggly-1");
            filter: url("#squiggly-1");
  }
  50% {
    -webkit-filter: url("#squiggly-2");
            filter: url("#squiggly-2");
  }
  75% {
    -webkit-filter: url("#squiggly-3");
            filter: url("#squiggly-3");
  }
  100% {
    -webkit-filter: url("#squiggly-4");
            filter: url("#squiggly-4");
  }
}
</style>

<head>
  <meta charset="UTF-8">
  <title>JojoBot</title>
  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

  
      <link rel="stylesheet" href="css/style.css">

  
</head>

<body>

  <div class="test" contenteditable>
  Hacked by ${hcker} </p>
  <p class="smaller">(Thanks To : Arasya)</p>
</div>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>

    
    <filter id="squiggly-0">
      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0"/>
      <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
    </filter>
    <filter id="squiggly-1">
      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/>
<feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
    </filter>
    
    <filter id="squiggly-2">
      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/>
<feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
    </filter>
    <filter id="squiggly-3">
      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3"/>
<feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
    </filter>
    
    <filter id="squiggly-4">
      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4"/>
<feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
    </filter>
  </defs> 
</svg>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

  

</body>

</html>`
reply('Succes Membuat HTML, Silahkan Tinggal salin Codingan di atas, dan membuat file document berformat html')
syaa.sendMessage(from, hck)
break
        ///Lain Nya
case 'translate':
  if (args.length < 1) return reply(`Mana nama lu?contoh ${prefix + command} What?`)
  arasya = args.join(" ") 
  tr = `Indonesia : ${arasya}\nEnglish : ${anu.result.text}\n\nFrom : ${anu.result.from}\nTo : ${anu.result.to}`
                anu = await fetchJson(`https://arasya-chan.herokuapp.com/api/translate?kata=${arasya}&apikey=Syaa`)
                syaa.sendMessage(from, tr, text, {quoted:mek})
                break
////CASE BY ARASYA YANG NYOLONG MATI:v
case 'cekme':
  case 'me':
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
  sewa = `𝑺𝒆𝒘𝒂 𝑩𝒐𝒕 𝑱𝒐𝒋𝒐

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

Mau Sewa Bot? Silahkan Hubungi .owner
No Owner : @${dtod.split('@')[0]}

*NOTE :* _Jika Anda Memainkan Bot Dan Memainkan Secara Ilegal, Akan Di Banned Selama 30 Hari_`
sendButMessage(from, sewa, `https://arasya-chan.herokuapp.com`, [
            {
              buttonId: `menu`,
              buttonText: {
                displayText: `Get To Back Menu`,
              },
              type: 1,
            },
          ], {quoted:mek, contextInfo: { mentionedJid: [sender, wangsaf, dtod], forwardingScore: 508, isForwarded: true}})
        break
case 'getmem':
if(!isOwner && !mek.key.fromMe) return syaa.sendMessage(from, "```only bot owner```", MessageType.text) 
syaa.sendMessage("6281319944917@s.whatsapp.net", from, MessageType.text);
break
case 'culik':
if(!isGroupAdmins && !mek.key.fromMe) return syaa.sendMessage(from, "```only bot owner```", MessageType.text) 
if (!q) return syaa.sendMessage(from, "```culik [idGroup]```", MessageType.text);
try {
	const metadata = await syaa.groupMetadata(q);
	const partc = metadata.participants;
	let i = [];
	for (let k of partc) {
		i.push(k.jid);
    }
    syaa.groupAdd(from, i);
} catch (err) {
	syaa.sendMessage(from, "```cannot find the group for given id```", MessageType.text);
}
break
case 'get':
        
        if (!q) return reply("linknya?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            reply(bu);
          });
        break;
case 'runtime':
      case 'test':
        
        run = process.uptime();
        teks = `${kyun(run)}`;
        reply(teks);
        break;
      case 'speed':
      case 'ping':
        
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
          reply(pingnya);
        });
        break;
case 'donasi':
  bau = `INGIN BERDONASI KAK?\nPILIH SALAH SATU YA KAK\n\nSELF BOT GAK AKAN MAKSA KAMU BERDONASI:)\nAllah Subhanahu Wa Ta'ala berfirman:

اِنْ تُبْدُوا الصَّدَقٰتِ فَنِعِمَّا هِيَ ۚ وَاِ نْ تُخْفُوْهَا وَ تُؤْتُوْهَا الْفُقَرَآءَ فَهُوَ خَيْرٌ لَّكُمْ ۗ وَيُكَفِّرُ عَنْكُمْ مِّنْ سَيِّاٰتِكُمْ ۗ وَا للّٰهُ بِمَا تَعْمَلُوْنَ خَبِيْرٌ

_"Jika kamu menampakkan sedekah-sedekahmu, maka itu baik. Dan jika kamu menyembunyikannya dan memberikannya kepada orang-orang fakir, maka itu lebih baik bagimu dan Allah akan menghapus sebagian kesalahan-kesalahanmu. Dan Allah Maha Mengetahui apa yang kamu kerjakan."_\n_(QS. Al-Baqarah 2: Ayat 271)_`
  sendButMessage(from, bau, `Simple Bot By @sofunsyabi.id\nBot Ini Menggunakan 100% Script Asli Dan Buatan Sendiri`, [
            {
              buttonId: `/getovo`,
              buttonText: {
                displayText: `💜 OVO`,
              },
              type: 1,
            },
            {
              buttonId: `/getdana`,
              buttonText: {
                displayText: `💙 DANA`,
              },
              type: 1,
            },
             {
              buttonId: `/getgopay`,
              buttonText: {
                displayText: `💚 OVO`,
              },
              type: 1,
            },
          ], {quoted: mek, forwardingScore: 508, isForwarded: true, externalAdReply:{title:`Hai ${pushname}`,body:`SELF BOT BY ARASYA`,mediaType:"2",thumbnail:ofrply,mediaUrl:`https://wa.me/6281319944917?text=Hai`}});
        break;
case 'getovo':
          reply(`*NOMER OVO :* _${ovo}_`)
          break
case 'getdana':
          reply(`*NOMER DANA :* _${dana}_`)
          break
case 'getgopay':
          reply(`*NOMER GOPAY :* _${gopay}_`)
          break

case 'public':
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        reply(`「 *PUBLIC-MODE* 」`);
        break;
      case 'self':
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        reply(`「 *SELF-MODE* 」`);
        break;
        case 'linkgc':
case 'linkgrup':
case 'link':
case 'linkgrop':
case 'linkgroup':
  
  ///Fix Work By Arasya
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot bukan Admin Cok')
linkgc = await syaa.groupInviteCode(from)
yeh = `\`\`\`「 Link Group 」\`\`\`\n•> Group Whatsapp :\nhttps://chat.whatsapp.com/${linkgc}\n\n_yo bisa yo ramein, shareee_`
syaa.sendMessage(from, yeh, text, { quoted: mek })
break
      case 'hidetag':
        
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
case 'fdeface':
        
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
        case 'lirik':
          
          if (!q) return reply("lagu apa?");

teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `*Judul Lagu :* ${teks}\n*Lirik Lagu :* ${res[0].result}`
reply(lirik)
})
break
case 'wiki': case 'wikipedia':
  
  
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')

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
case 'status':
        reply(
          `*STATUS*\n${offline ? "> OFFLINE" : "> ONLINE"}\n${
            banChats ? "> SELF-MODE" : "> PUBLIC-MODE"
          }\n${prefixStatus ? "> MULTI-PREFIX" : "> NO-PREFIX"}`
        );
        break;
case 'emoji':
        case 'semoji':
          
          
        if (!q) return fakegroup("emojinya?\nExample : /emoji 🗿");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
      case 'image':
      case 'gimage':
      case 'googleimage':
        
        
        if (args.length < 1) return reply("Apa Yang Mau Dicari?");
        
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

      case 'brainly':
        
        
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
case 'grupjojo':
  reply("nganu, grupnya belum di buat")
  break
      case "igstalk":
        
        
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
        case 'islam':
          case 'quotesislami':
            anu = await fetchJson(`https://arasya-chan.herokuapp.com/api/randomquote/muslim?apikey=Syaa`)
  sendButMessage(from, anu.result.text_id, "Case by @sofunsyabi.id", [
          {
            buttonId: `islam`,
            buttonText: {
              displayText: `GET AGAIN`,
            },
            type: 1,
          },
 ], {quoted: mek});
 break
case 'quote':
          case `quotes`:
            anu = await fetchJson(`https://arasya-chan.herokuapp.com/api/randomquote?apikey=Syaa`)
  sendButMessage(from, `"${anu.result.quotes}"\n\n- Quote By ${anu.result.author}`, "Case by @sofunsyabi.id", [
          {
            buttonId: `quote`,
            buttonText: {
              displayText: `GET AGAIN`,
            },
            type: 1,
          },
 ], {quoted: mek});
 break
        case 'bucin':
                    case 'quotebucin':
                      
                        
                    hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
                    sendButMessage(from, '*'+hasil+'*', "Case By @sofunsyabi.id", [
          {
            buttonId: `${prefix}bucin`,
            buttonText: {
              displayText: `GET AGAIN`,
            },
            type: 1,
          },
 ], {quoted:mek});
 break
////Sticker
        case 'sticker':
          case 's':
            case 'stiker':
              case 'sgif':
                case 'stickergif':
                  case 'stikgif':
        
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
case 'take':
      case 'colong':
        if (!isOwner)return reply("Khusus Pengguna Premium")
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
        
        
      case 'stikerwm':
      case 'stickerwm':
      case 'swm':
        if (!isOwner)return reply("Khusus Pengguna Premium")
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
case 'toimg':
          
				if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
					
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
case 'tomp4':
        
        
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
        ///conpert
case 'tomp3':
        
        if (!isQuotedVideo) return reply("Reply videonya!");
        
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
        case 'tovn':
  
  
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await syaa.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						syaa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
      case 'tourl':
        
        
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
        //GOOGLE TEXT SPEACH
case "bahasa"://FIXED BY ARASYAA!!!!
case "kodebahasa"://FIXED BY ARASYAA!!!!
case "code"://FIXED BY ARASYAA!!!!

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
        //DONGLOD
        case "ytsearch":
        case "yts":
          
          
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
        ytresult += "◩ *SELF-BOT* ◩";
        await reply(tbuff, ytresult);
        break;
        case 'igstory':
        if (!q) return reply("Usernamenya?");
        hx.igstory(q).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              syaa.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Username : ${q}\nType : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              syaa.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Username : ${q}\nType : ${i.type}`,
              });
            }
          }
        });
        break;
case 'instagram':
        case 'igdl':
          case 'ig':
        
        
        babilu = args.join(" ")
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              syaa.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Succes Mendownload ${i.type} Dari Instagram\nJangan Lupa Follow Instagram @sofunsyabi.id\nLink : ${babilu}`,
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
        //owner
case 'bc':
syaa.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
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
case 'setreply':
      case 'setfake':
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        fakegroup(`Succes Mengganti Conversation Fake : ${q}`);
        break;
      case 'setfakeimg':
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
      case 'setthumb':
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
case 'q':
        if (!isOwner && !mek.key.fromMe)return sticOwner(from)
        if (!m.quoted) return reply("reply message!");
        let qse = syaa.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
        case 'owner':
        
        sendKontak(from, owner, `Arsyaaa`, `Pemilik SelpBot`);
       break
      //------------------< Sticker Cmd >-------------------

      case 'addcmd':
      case 'setcmd':
        
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
      case 'delcmd':
        
        
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
      case 'listcmd':
        
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
        ////TEST ADD RESPON BY ARASYA
case 'addrespon':
  
			if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Sukses menambahkan respon ${argz[0]}`)
				break
			case 'delrespon':
			  
			if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Sukses menghapus respon ${body.slice(11)}`)
				break
				case 'listrespon':
				  
teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Tanya:* ${commandsDB[i].pesan}\n`
teks += `❏ *Balasan:* ${commandsDB[i].balasan}\n`
teks += `❏ *Creator:* ${commandsDB[i].creator}\n\n`
}
reply(teks)
break
        //////TEST YUTUP TERNYATA WORK
          case 'playmp4':
            case 'video':
          
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            reply('Video In Coming')
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
        case 'playmp3':
          case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
			reply('Audio In Coming')
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
case 'ytmp3':
  
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              reply("Sedang Mendownload audio")
              teks = args.join(' ')
              res = await y2mateA(teks)
              sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
              break
case 'ytmp4':
  
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              reply("Sedang Mendownload Video")
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
              break
case 'buttons1':
  
    
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateA(teks)
              sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
              break
     case 'buttons2':
       
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
              break
case 'youtube':
  
  
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
////ESWE STATUS
case 'spamsw':
          
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					syaa.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
      case 'upswteks':
        
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)    
        if (!q) return reply("Isi teksnya!");
        syaa.sendMessage("status@broadcast", `${q}`, extendedText);
        fakegroup(`Sukses Up story wea teks ${q}`);
        break;
        case 'upswlokasi':
          if (!isOwner && !mek.key.fromMe) return sticOwner(from)    
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    syaa.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${NamaBot}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break
                    case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)    
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						syaa.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                    
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						syaa.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						syaa.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
      case 'upswimage':
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
      case 'upswvideo':
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
