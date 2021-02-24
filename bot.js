const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`${files.length} komut yüklenecek.`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`Yüklenen komut: ${props.help.name}.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});


//-----------------------OTOROL LAN İŞTE----------------------\\     STG

client.on("guildMemberAdd", member => {
  member.roles.add('784025586942476290'); //Autorole - Inexplicable
});

//-----------------------İZİY OTOROL SJSJSJ----------------------\\     STG



//------------------------HOŞGELDİNİZ SAYIN YARRAKBAŞLARI-----------------------\\     STG

client.on("guildMemberAdd", member => {
    require("moment-duration-format")
      var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var üs = üyesayısı.match(/([0-9])/g)
      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
          return {
            '0': `<a:0Zero:813681955359031297>`,
            '1': `<a:1one:813681515011637291>`,
            '2': `<a:Two:813681553447190548>`,
            '3': `<a:3three:813681681315266590>`,
            '4': `<a:Four:813681720117297153>`,
            '5': `<a:Five:813681745768874014>`,
            '6': `<a:6Six:813681774558838785>`,
            '7': `<a:Seven:813681808519856158>`,
            '8': `<a:8Eight:813681892615782435>`,
            '9': `<a:Nine:813681923389521921>`}[d];})}
      const kanal = member.guild.channels.cache.find(r => r.id === "813666883643244548");//BURAYA ATICAN ASLAN PARÇASI
      let register = '812217924118773801'
    let user = client.users.cache.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
     const gecen = moment.duration(kurulus).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
    var kontrol;
  if (kurulus < 1296000000) kontrol = 'Hesap Durumu: **Güvenilir Değil.**'
  if (kurulus > 1296000000) kontrol = 'Hesap Durumu: **Güvenilir Gözüküyor.**'
    moment.locale("tr");
  const embed = new Discord.MessageEmbed()
  .setAuthor(`Mytra`,`https://images-ext-1.discordapp.net/external/mh9_hXjvpHnw_dGH9VfT9XAZWue9WWMW_lywe1s51mA/https/media.discordapp.net/attachments/812218091097423882/813072802512633896/himera.gif`)
  .setDescription(`
  <:mytra_tatl5:781199833322225694><:mytra_tatl6:781199813484085248>  <@`+member.id+`> Mytra'ya Hoş Geldin!
  
<a:mytra_oylama3:778140715003674655>  Kayıt Olmak İstersen **V.Confirmed** Odalarına Geçip <@&812217924118773801> Bekleyebilirsin.
  
<a:mytra_gul6:780958343715487784> Seninle birlikte `+üyesayısı+` Kişi Olmuşuz Yaşasın!

<a:loading:813043071772131339> ${kontrol} İçeriye Girelimmi?
 ` )
  //.setThumbnail(`https://images-ext-1.discordapp.net/external/uj5Xrn7l8-awnubKXXBqOoz7I4-Ls3tjqVb8XhWb-uQ/https/media.discordapp.net/attachments/812218091097423882/813066107543093258/GIF-210221_181216.gif`)
  .setImage('https://images-ext-1.discordapp.net/external/hGXN0sLALEOTRgPPyPQFm1mNpLQOd-vM-6uZWlERiPo/https/media.discordapp.net/attachments/812218091097423882/813059822903361616/GIF-210221_174839.gif')
  kanal.send(embed)
  kanal.send(`<@&812217924118773801>`)
});
//------------------------HOŞGELDİN-EMBEDLİ-----------------------\\  
//------------------------ŞÜPHELİ-HESAP-----------------------\\   

client.on("guildMemberAdd", member => {
    var moment = require("moment")
    require("moment-duration-format")
    moment.locale("tr")
     var {Permissions} = require('discord.js');
     var x = moment(member.user.createdAt).add(7, 'days').fromNow()
     var user = member.user
     x = x.replace("birkaç saniye önce", " ")
     if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
    const kytsz = member.guild.roles.cache.find(r => r.id === "812217936852549632") 
     var rol = member.guild.roles.cache.get("812217936139649035") 
     var kayıtsız = member.guild.roles.cache.get(kytsz) 
     member.roles.add(rol)
     member.roles.remove(kytsz)

  member.user.send('<a:mytra_sarlim:782059425967767614> Merhaba Dostum. Galiba Hesabın Yeni Açılmış Güvenlik Izır Zıvırları Yüzünden Seni içeriye Alamadım. Eğer Kayıt Olmak İstersen Yetkililere Ulaşabilirsin.')
  setTimeout(() => {
  
  }, 1000)
  
  
     }
          else {
  
          }
      });

//------------------------ŞÜPHELİ-HESAP-----------------------\\     


//-----------------------TAG-ROL----------------------\\     

client.on("userUpdate", async (stg, yeni) => {
  var sunucu = client.guilds.cache.get('777850744443240478'); 
  var uye = sunucu.members.cache.get(yeni.id);
  var ekipTag = "ꏪ"; //tagtagatagagaga
  var ekipRolü = "812217927251787836"; //TAGROL
  var logKanali = "812218170675953664"; //log amk

  if (!sunucu.members.cache.has(yeni.id) || yeni.bot || stg.username === yeni.username) return;
  
  if ((yeni.username).includes(ekipTag) && !uye.roles.cache.has(ekipRolü)) {
    try {
      await uye.roles.add(ekipRolü);
      await uye.send(`**<a:mytra_gul6:780958343715487784> Aramıza Hoş Geldin! Tagımızı Aldığın İçin Teşekkür Ederiz.**`);
      await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('GREEN').setDescription(`<a:mytra_tag:780701345635500083> Yehuuu Tagımız Sana Çok Yakıştı ${yeni} Lütfen Bu Ufak Ödülümüzü Kabul Et! <@&812217927251787836>`));
    } catch (err) { console.error(err) };
  };
  
  if (!(yeni.username).includes(ekipTag) && uye.roles.cache.has(ekipRolü)) {
    try {
      await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(ekipRolü).position));
      await uye.send(`<a:mytra_gul6:780958343715487784> Tagımızı Çıkarman Bizi Üzdü Eğer Tekrar Aramıza Katılmak İstersen \`(${ekipTag})\``);
      await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('RED').setDescription(`${yeni} Bunu Bize Neden Yaptınnn! <a:mytra_sarlim:782059425967767614> Aramıza Tekrar Dönmek İstersen \`(${ekipTag})\``));
    } catch(err) { console.error(err) };
  };
});

//----------------------TAG-KONTROL----------------------\\      

client.on("guildMemberAdd", member => {
  let sunucuid = "777850744443240478"; //Sncu
  let tag = "ꏪ"; //Buraya tagınızı yazın
  let rol = "812217927251787836"; //TagRolelrüeüeğğe
  let channel = client.guilds.cache.get(sunucuid).channels.cache.find(x => x.name == 'auto-tag-role'); //jbho
if(member.user.username.includes(tag)){
member.roles.add(rol)
  const tagalma = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`<a:mytra_gul6:780958343715487784> <@${member.id}> Aramıza Taglı Olarak Girdi İşte Gerçek **Mytra** Ruhu!`)
      .setTimestamp()
     client.channels.cache.get('812218170675953664').send(tagalma)
}
})

//-----------------------TAG-KONTROL----------------------\\    


//-----------------------FAKEKATIL---------------///
client.on('message', async message => {
if (message.content === '.fakekatıl') { 
  client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});
//-----------------------FAKEKATIL---------------///

 client.login(ayarlar.token)

//------OTOCEVPsjsjs------------////

client.on("message", msg => {
  if (msg.content.toLowerCase() === ".tag") {
    msg.channel.send("ꏪ").then(msg => msg.delete(60000));
    msg.react("<a:mytra_tag:780701345635500083>");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "tag") {
    msg.channel.send("ꏪ").then(msg => msg.delete(60000));
    msg.react("<a:mytra_tag:780701345635500083>");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "Tag") {
    msg.channel.send("ꏪ").then(msg => msg.delete(6000));
    msg.react("<a:mytra_tag:780701345635500083>");
  }
});

