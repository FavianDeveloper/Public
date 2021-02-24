const { MessageEmbed } = require("discord.js")
const db = require('quick.db');
module.exports.run = async (client, message, users, args) => {

if(!message.member.roles.cache.some(r => ['812217924118773801'].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<:no:813710968134565919> ${message.author} Bu Komutu Kullanamazsın.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
          
  // Kayıtsız : 812217936852549632
//Erkek : 812217930829266954
//karı : 812217929927360513
//Tag rolü : 812217927251787836
//kayıt log : 812218167187210280
//Kaydın yapılacağı kanal : 812218059137220668
//Register moderatörü : 812217924118773801
//CHAT AMK : 812218083414507521
 //tag rolünü alıncaki log : 812218170675953664  
  
//------------------------------------------------KAYITLAR-----------------------------------------------\\  

let user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let isim = message.mentions.members.first() || message.guild.members.get(args[0]);
var sayi = 1 
let data = db.get(`isim.${message.guild.id}`)
let rol = db.fetch(`rol.${message.guild.id}`)
if(!data) return message.channel.send(new MessageEmbed()
    .setColor("#a22a2a") 
    .setThumbnail(user.user.avatarURL ({ dynamic: true}))      
    .setDescription(`${isim} Adlı Kullanıcı Daha Önce Kayıt Olmamış.`))
let isimler = data.filter(x => x.userID === isim.id).map(x => `${sayi++}- \`• ${x.isim} | ${x.yas}\`  (<@&${x.role}>)\n`).join("\n")
if(isimler === null) isimler = "Kullanıcı Kayıt'a Sahip Değil"
if(isimler === undefined) isimler = "Kullanıcı Kayıt'a Sahip Değil"
//------------------------------------------------KAYITLAR-----------------------------------------------\\      


const embed = new MessageEmbed()
        .setThumbnail(user.user.avatarURL ({ dynamic: true}))     
    .setAuthor(`Bu Kullanıcı ${sayi-1} Kere Kayıt Olmuş`) 
    .setDescription(` Kullanıcının Eski İsimleri:
    ${isimler}
    `)
    .setColor("#e6c47e")
message.channel.send(embed)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['isimler', 'eski-isim','kontrol'],
  permLevel: 0,
}

exports.help = {
      name: "isimler"
  
}