const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
     // Kayıtsız : 812217936852549632
//Erkek : 812217930829266954
//karı : 812217929927360513
//Tag rolü : 812217927251787836
//kayıt log : 812218167187210280
//Kaydın yapılacağı kanal : 812218059137220668
//Register moderatörü : 812217924118773801
//CHAT AMK : 812218083414507521
 //tag rolünü alıncaki log : 812218170675953664
  
if(!["812217924118773801"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<:no:813710968134565919> ${message.author} Bu Komutu Kullanamazsın.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));


const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`> <:no:813710968134565919> Bir kullanıcı belirt.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(!member.roles.highest.position >= message.member.roles.highest.position) message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`> <:no:813710968134565919> Belirtilen kullanıcı sizden üst/aynı pozisyonda işleme devam edilemiyor.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));

  
let bilgi = db.get(`yetkili.${member.id}`);  
db.delete(`yetkili.${message.author.id}.erkek`)
db.delete(`yetkili.${message.author.id}.toplam`)  
db.delete(`yetkili.${message.author.id}.kadin`)
let toplami = db.fetch(`yetkili.${message.author.id}.toplam`)  

message.react('<a:mytra_gul6:780958343715487784>')

message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setColor("0x2f3136")
.setDescription(`${member}'ın Kayıtları <@${message.author.id}> Tarafından Sıfırlandı.`))
  

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sıfırla", "kayıt-sıfırla", "kayıtları-sıfırla", "db-sıfırla", "dbisil", "db-sil","reset-db"],
    permLevel: 0
};

exports.help = {
    name: "sıfırla"
}

