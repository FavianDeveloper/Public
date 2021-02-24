const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports.run = async(client, message, args) => {
  
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
return message.channel.send(new MessageEmbed().setDescription(`<:no:813710968134565919> Bu Komutu Kullanamazsın.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor('#c42828')).then(x => x.delete({timeout: 5000}));    
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!member) return message.channel.send(new MessageEmbed().setDescription(`<:no:813710968134565919> Bir Kullanıcı Belirtmelisin.`).setColor("RANDOM")).then(msg => msg.delete({timeout: 5000}))
if(message.member.roles.highest.position <= member.roles.highest.position) return 
if(member.manageable)  member.setNickname(member.user.username).catch();
let digerroller = [];
member.roles.cache.filter(r => r.id).map(r => {digerroller.push(r.id)})
member.roles.remove(digerroller)
await member.roles.add('812217936852549632')//kayıtsız rol id yaz
message.channel.send(new MessageEmbed().setDescription(`${member} ${message.author} Tarafından Kayıtsız'a Atıldı.`)).then(msg => msg.delete({timeout: 4000}))}
exports.conf = { enabled: true, guildOnly: true , aliases: ["kayıtsız", "unregsiter","fake"]}
exports.help = { name: "kayıtsız"}