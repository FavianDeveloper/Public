const dc = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, member) => {
  
         // Kayıtsız : 812217936852549632
//Erkek : 812217930829266954
//karı : 812217929927360513
//Tag rolü : 812217927251787836
//kayıt log : 812218167187210280
//Kaydın yapılacağı kanal : 812218059137220668
//Register moderatörü : 812217924118773801
//CHAT AMK : 812218083414507521
 //tag rolünü alıncaki log : 812218170675953664
  
  
if(!message.member.roles.cache.some(r => ['812217924118773801'].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))
return message.channel.send(new dc.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`<:no:813710968134565919> ${message.author} Bu Komutu Kullanamazsın.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
  
  let uye = message.mentions.users.first() || message.author;
let bilgi = db.get(`yetkili.${uye.id}.toplam`);
let yazı = "Yetkili Teyit Listesi"
  
let top = message.guild.members.cache.filter(uye => db.get(`yetkili.${uye.id}.toplam`)).array().sort((uye1, uye2) => Number(db.get(`yetkili.${uye2.id}.toplam`))-Number(db.get(`yetkili.${uye1.id}.toplam`))).slice(0, 15).map((uye, index) => (index+1)+" • <@"+ uye +"> | \`" + db.get(`yetkili.${uye.id}.toplam`) +"\` Kayıta Sahip. <a:mytra_tag:780701345635500083> ").join('\n');
message.channel.send(new dc.MessageEmbed().setAuthor(yazı, message.guild.iconURL({dynamic: true})).setTimestamp().setColor("#38ff3d").setFooter(message.member.displayName+" tarafından istendi!", message.author.avatarURL).setDescription(top));
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["topteyit", "top", "teyit", "top-teyit",'registerlist'],
    permLevel: 0
};

exports.help = {
    name: "topteyit"
}