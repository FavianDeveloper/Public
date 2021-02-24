const { MessageEmbed } = require('discord.js')
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

if(!message.member.roles.cache.some(r => ["812217924118773801"].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<:no:813710968134565919> ${message.author} Bu Komutu Kullanamazsın.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
 
 let kullanıcı = message.mentions.users.first()
    
 
if(!kullanıcı) {

let erkek = db.fetch(`yetkili.${message.author.id}.erkek`);
let kadın = db.fetch(`yetkili.${message.author.id}.kadin`);
let kayıtlar = db.fetch(`yetkili.${message.author.id}.toplam`); 
if(erkek === null) erkek = "0"  
if(erkek === undefined) erkek = "0"
if(kadın === null) kadın = "0"
if(kadın === undefined) kadın = "0"
if(kayıtlar === null) kayıtlar = "0"
if(kayıtlar === undefined) kayıtlar = "0"
  
const sorgu1 = new MessageEmbed()
.setThumbnail(message.author.avatarURL ({ dynamic: true}))
.setAuthor(message.author.username, message.author.avatarURL)
.addField(`<a:mytra_tag:780701345635500083> Toplam Kayıtların:`, `\`${kayıtlar}\``)
.addField(`<a:mytra_tag:780701345635500083> Toplam Erkek Kayıtların:`, `\`${erkek}\``)
.addField(`<a:mytra_tag:780701345635500083> Toplam Kadın Kayıtların:`, `\`${kadın}\``)
.setColor('RANDOM')
 return message.channel.send(sorgu1)
};
  
if(kullanıcı) {  
let erkek1 = db.fetch(`yetkili.${kullanıcı.id}.erkek`);
let kadın1 = db.fetch(`yetkili.${kullanıcı.id}.kadin`);
let kayıtlar1 = db.fetch(`yetkili.${kullanıcı.id}.toplam`); 
if(erkek1 === null) erkek1 = "0"  
if(erkek1 === undefined) erkek1 = "0"
if(kadın1 === null) kadın1 = "0"
if(kadın1 === undefined) kadın1 = "0"
if(kayıtlar1 === null) kayıtlar1 = "0"
if(kayıtlar1 === undefined) kayıtlar1 = "0"
  
const sorgu2 = new MessageEmbed()
.setThumbnail(kullanıcı.avatarURL ({ dynamic: true})) 
.setAuthor(`${kullanıcı.username}`)
.addField(`<a:mytra_tag:780701345635500083> Toplam Kayıtların:`, `\`${kayıtlar1}\``)
.addField(`<a:mytra_tag:780701345635500083> Toplam Erkek Kayıtların:`, `\`${erkek1}\``)
.addField(`<a:mytra_tag:780701345635500083> Toplam Kadın Kayıtların:`, `\`${kadın1}\``)
.setColor('RANDOM')
 return message.channel.send(sorgu2)
  
};
  
  };

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["stat", "kayıtlar", "kayıt-kontrol"],
    permLvl: 0,
}
  
exports.help = {  
  name: "stat"
}