const { MessageEmbed } = require('discord.js')
const datab = require('quick.db')
const ms = require('ms')
const moment = require("moment");
const { parseZone } = require("moment");

exports.run =  async (client, message, args) => {

   // Kayıtsız : 812217936852549632
//Erkek : 812217930829266954
//karı : 812217929927360513
//Tag rolü : 812217927251787836
//kayıt log : 812218167187210280
//Kaydın yapılacağı kanal : 812218059137220668
//Register moderatörü : 812217924118773801
//CHAT AMK : 812218083414507521
 //tag rolünü alıncaki log : 812218170675953664
    
if(!['812217924118773801'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<:no:813710968134565919> ${message.author} Bu Komutu Kullanamazsın.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
  
const tag = 'STRG'   
const kadınrol = message.guild.roles.cache.find(r => r.id === '812217929927360513') //kadın rol id
const kadınrol2 = message.guild.roles.cache.find(r => r.id === '812217929927360513')//kadın rol2 id
const kayıtsız = message.guild.roles.cache.find(r => r.id === '812217936852549632')//kayıtsız rol id
const genelchat = message.guild.channels.cache.find(c => c.id === '812218083414507521')//genel chat id
const savelog = message.guild.channels.cache.find(c => c.id === '812218167187210280')//savelog id

if(!kadınrol) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Komutlarda Sorun Oluştu Lütfen [Marfendis](https://discord.gg/WgFVmehvMH) Development Gelerek Hata Bildirimi Yapınız.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 50000}));
if(!kadınrol2) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Komutlarda Sorun Oluştu Lütfen [Marfendis](https://discord.gg/WgFVmehvMH) Development Gelerek Hata Bildirimi Yapınız.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 50000}));
if(!kayıtsız) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Komutlarda Sorun Oluştu Lütfen [Marfendis](https://discord.gg/WgFVmehvMH) Development Gelerek Hata Bildirimi Yapınız.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 50000}));

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`> <:no:813710968134565919> ${message.author} bir kullanıcı belirt.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
let name = args[1]
let age = Number(args[2])
if(!name) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`> <:no:813710968134565919> Bir isim belirtmelisin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(!age) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`> <:no:813710968134565919> Bir yaş belirtmelisin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(member.id === message.author.id) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`> <:no:813710968134565919> Kendini kayıt edemezsin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(member.id === client.user.id) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`> <:no:813710968134565919> Bot kayıt edemezsin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(member.id === message.guild.OwnerID) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`> <:no:813710968134565919> Sunucu sahibini kayıt edemezsin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`> <:no:813710968134565919> Belirtilen kullanıcı sizden üst/aynı pozisyonda işleme devam edilemiyor.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
  
  
datab.add(`yetkili.${message.author.id}.kadin`, 1)
datab.add(`yetkili.${message.author.id}.toplam`, 1)
let alldata = datab.fetch(`yetkili.${message.author.id}.toplam`)

member.setNickname(`${tag} ${name} | ${age}`)
member.roles.add(kadınrol)
member.roles.add(kadınrol2)
member.roles.remove(kayıtsız)


message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`
${member} üyesini ${message.author} kayıt etti. 

${kadınrol} Rolü Verildi.  

> Yeni İsmi \`${tag} ${name} ${age}\` `)
.setFooter(`Toplam kayıtların: ${alldata}`)               
.setColor('#000000'))
  
genelchat.send(`<a:mytra_sonsuzkalp4:779076178228412459> ${member} Mytra'ya Tekrardan Hoş Geldin! Tag \`(${tag})\` Almaya Ne Dersin?`)
  
savelog.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`
• Yetkili: ${message.author} | \`${message.author.id}\`

• Kullanıcı: ${member} | \`${member.id}\`

• Güncel İsim: \`${tag} ${name} | ${age}\`

• Roller: ${kadınrol}, ${kadınrol2} 

• Kanal: <#${message.channel.id}> | \`${message.channel.id}\`

• Kayıtlar: \`${alldata}\` `)
.setColor('#000000'))


datab.push(`isim.${message.guild.id}`, {userID: member.id, isim: name, yas: age, role: kadınrol.id})}
exports.conf = {enabled: true, guildOnly: true, aliases: ['kadın', 'k', 'girl', 'woman', 'kız'], permLevel: 0}
exports.help = {name: 'kadın', description: "Etiketlenen kişiyi kadın rolleriyle kayıt eder.", usage: '.kadın @etiket/id İsim Yaş'}