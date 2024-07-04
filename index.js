//express
const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.get("/", (req, res) => {
  res.send("Nqr Up Ya Kosomak")
})

//[0]

app.use('/ping', (req, res) => {
  res.send(new Date());
});

//Main Source
const { Client, intents, MessageEmbed , Collection , MessageActionRow , MessageButton , MessageSelectMenu } = require('discord.js');
const db = require("pro.db")
var { inviteTracker } = require("discord-inviter")
const config = require('./config.json')
const prefix = config.prefix;

//Client Defining

const client = new Client({
  intents: 32767
});
client.setMaxListeners(0);

//Handler Code

module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
require("./handler")(client);

//

//error fixer
 process.on("unhandledRejection", error => {
  return console.log(error)
}); 
 process.on("unhandledRejection", error => {
  return 
}); 
 process.on("unhandledRejection", error => {
  return 
}); 

client.on('guildCreate' , async(guild) => {
   if(guild.members.cache.size > 100) return;
  guild.leave();
  let owner = client.users.cache.get(guild.ownerId)
  owner.send(`> **Hello Iam Sorry You Cant Add The Bot In A Server Less Than 100 Members Untill The Bot Verification Is Done  Thanks**
> **اهلا انا اسف لا يمكنك ادخال البوت في سيرفر اقل من 100 عضو حتي يتم عمليه توثيق البوت , شكرا لتفهمك**
`)
})
//welcome
client.on('guildMemberAdd' , async(member) => {
     let channel = db.get(`welcome_${member.guild.id}`)
  if(channel == null) return;
    let line = db.get(`Line_${member.guild.id}`)
  let color = db.get(`color_${member.guild.id}`)
  let welcomefukenembed = new MessageEmbed()
  .setAuthor({name: member.user.username , iconURL : member.user.displayAvatarURL({dynamic: true})})
  .setFooter({ text : member.user.username , iconURL: member.user.displayAvatarURL({dynamic: true})})
  .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
  .setTimestamp()
  .setDescription(`**
> Hey ${member.user.username} <a:Yred:1006717434880872578>

> Welcome To __${member.guild.name}__ <a:TODOROKI34:1006717431672209450>

> Member Id  \`${member.id}\` <a:TODOROK57:1006717435296100514>

> Enjoy <3 <a:emoji_95:1006717444213190736>

> You Are Member Number \`${member.guild.memberCount}\` <a:Wa_rose:1006717489759146065>
**`) 
  .setImage(line ? line : "https://cdn.discordapp.com/attachments/991842908338667621/991846066834133052/Line-25.gif")
  .setColor(color ? color : "CYAN")
  member.guild.channels.cache.get(channel).send({ content: `<@!${member.user.id}>` , embeds: [welcomefukenembed]})
})
//autoline
client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
   let channel = db.get(`Auto_Line_${message.guild.id}`)
  if(channel == null) return;
  if(!channel.includes(message.channel.id)) return;
  let line = db.get(`Line_${message.guild.id}`)
  let color = db.get(`color_${message.guild.id}`)
  message.reply({embeds: [
    new MessageEmbed()
    .setImage(line ? line : "https://cdn.discordapp.com/attachments/991842908338667621/991846066834133052/Line-25.gif")
    .setColor(color ? color : "CYAN")
  ]})
})
//feedbck
client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
   let channel = db.get(`Fed_${message.guild.id}`)
  if(channel == null) return;
  if(message.channel.id != channel) return;
  let line = db.get(`Line_${message.guild.id}`)
  let color = db.get(`color_${message.guild.id}`)
  message.reply({embeds: [
    new MessageEmbed()
    .setTimestamp()
    .setAuthor({name : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setFooter({text : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`
**
> Thanks For Giving Us Feedback <a:Yred:1006717434880872578> 

> We Hope You Visit Us Again <a:emoji_95:1006717444213190736> 
**
`)
    .setImage(line ? line : "https://cdn.discordapp.com/attachments/991842908338667621/991846066834133052/Line-25.gif")
    .setColor(color ? color : "CYAN")
  ]})
})
//invites
  tracker = new inviteTracker(client);
tracker.on('guildMemberAdd', async (member, inviter, invite, error) => {
  
    let x = db.get(`inv_${member.guild.id}`)
  if(x == null) return;
    let channel = member.guild.channels.cache.get(x),
    Msg = `<@${member.id}> Joined Server. <a:TODOROKI34:1006717431672209450>
He/she was invited by <@${inviter.id}> who now has ${invite.count} invites <a:emoji_95:1006717444213190736> `;
  channel.send(Msg)
})
//sug
client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
   let channel = db.get(`Sug_${message.guild.id}`)
  if(channel == null) return;
  if(message.channel.id != channel) return;
  let line = db.get(`Line_${message.guild.id}`)
  let color = db.get(`color_${message.guild.id}`)
  message.channel.send({embeds: [
    new MessageEmbed()
    .setTimestamp()
    .setAuthor({name : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setFooter({text : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`
**
${message.content}
**
`)
    .setImage(line ? line : "https://cdn.discordapp.com/attachments/991842908338667621/991846066834133052/Line-25.gif")
    .setColor(color ? color : "CYAN")
  ]}).then(async(m) => {
    m.react("<a:aCat_:1006717459073609859> ")
    m.react("<a:aCat_:1006717457731420280>")
  })
  message.delete()
})
//tax
client.on("messageCreate", async(message) => {
  let taxx = await db.fetch(`Tax_${message.guild.id}`)
    if(taxx == null) return;
    let args = message.content
      .split(" ")
      .slice(0)
      .join(" "); if (message.author.bot) return;
      if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
  else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
  else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
  else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
  else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
    if (!message.guild) return;
    if (message.channel.id != taxx) return;  
      let args2 = parseInt(args)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      if (!args2) return message.reply(`
> ** Error It Must Be A Number ⚠⚠ **`);
      if (isNaN(args2)) return message.reply(`
> ** Error It Must Be A Number ⚠⚠ **`);
      if (args2 < 1) return message.reply(`
> ** Error It Must Be Larger Than 1 ⚠⚠ **`);
        let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`first_embed`)
        .setLabel("Mediator")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
      let row2 = new MessageActionRow()
			.addComponents(
        new MessageButton()
        .setCustomId(`2_embed`)
        .setLabel("Back")
        .setEmoji("↩️")
        .setStyle('DANGER')
);
        let m = await message.reply({ content: `
> ** <a:ss_4:1006717474819035166> Your Tax Is : __${tax}__**`, components: [row] });
        let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000 ,max: 2 })
        collector.on('collect', async i => {
          if (i.customId === 'first_embed') {
                  m.edit({ content: `
> ** <a:ss_4:1006717474819035166> Your Tax Is : __${tax4}__**`, components: [row2] })
                  row
                  i.deferUpdate()
          }
          if (i.customId === '2_embed') {
          m.edit({ content: `
> ** <a:ss_4:1006717474819035166> Your Tax Is : __${tax}__**`, components: [row] })
            
                  i.deferUpdate()
          } else {
            return;
          }
      });


})
//list
client.on('channelCreate', message => {

  let channel = db.get(`ordercategory_${message.guild.id}`)
  if(channel == null) return;
  let line = db.get(`Line_${message.guild.id}`)
  let color = db.get(`color_${message.guild.id}`)
  if(message.parentId !== channel) return;
  const pricelistembed = new MessageEmbed()
    .setImage(line ? line : "https://cdn.discordapp.com/attachments/991842908338667621/991846066834133052/Line-25.gif")
    .setColor(color ? color : "CYAN")
        .setTimestamp()
 .setDescription(`\`#\` <a:emoji_48:1006747687846166658> Hello User Pls Select Your Order

\`#\`  <a:emoji_48:1006747687846166658> مرحبا.. رجاء اختيار الطلب الخاص بك

==================

>  \`-\` <:63890:1006747703566417971> **netflix**



>  \`-\` <:insta:1006732620450762882> **insta**



>  \`-\` <a:Nitrog:1008059317364199454> **nitro**



>  \`-\` <:81603:1006747700143865958> **visa**



>  \`-\` <:BOTS:1008059550877896705> **bot**



>  \`-\` <a:aeagle_vote:1008059713151316079> **vote**



>  \`-\` <:ss_6:1006732541904036012> **uc**



>  \`-\` <:BOOST:1007272868322742322> **boost**



>  \`-\` <:mega_spotfay:1006732596467736628> **spotify**



>  \`-\` <:dragon_shahd:1006747695056171029> **shahid**



>  \`-\` <a:Money:1006732597818294382> **credit**



>  \`-\` <:TikTok3265:1008060910511861860> **tiktok**
`)
          const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('Select prices here')
                    .addOptions([
                        {
                            label: 'netflix',
                            description: 'netflix prices',
 
 emoji: '<:63890:1006747703566417971>',

                            value: 'netflix',
                        },
                        {
                            label: 'insta',

description: 'insta prices',
    emoji : '<:insta:1006732620450762882>',
                            value: 'insta',
                        },{
                            label: 'nitro', 
                          description: 'nitro prices',
      emoji : '<a:Nitrog:1008059317364199454>',
                            value: 'nitro',
                        },{
                            label: 'visa',
    emoji : "<:81603:1006747700143865958>",
                            description: 'visa prices',
                          
                            value: 'visa',
                        },{
                            label: 'bot',

      emoji : "<:BOTS:1008059550877896705>", 
                            description: 'bot prices',
                            value: 'bot',
                        },{
                            label: 'vote',
                            description: 'votes prices',
        emoji : "<a:aeagle_vote:1008059713151316079>",
                            value: 'vote',
                        },{
                            label: 'uc',
                            description: 'uc prices',
        emoji : "<:ss_6:1006732541904036012>",
                            value: 'uc',
                        },{
                            label: 'boost',
                            description: 'boost prices',
        emoji : "<:BOOST:1007272868322742322>",
                            value: 'boost',
                        },{
                            label: 'spotify',
                            description: 'spotify prices',
        emoji : "<:mega_spotfay:1006732596467736628>",
                            value: 'spotify',
                        },{
                            label: 'shahid',
                            description: 'shahid prices',
        emoji : "<:dragon_shahd:1006747695056171029>",
                            value: 'shahid',
                        },{
                            label: 'credit',
                            description: 'credit prices',
        emoji : "<a:Money:1006732597818294382>",
                            value: 'credit',
                        },{
                            label: 'tiktok',
                            description: 'tiktok prices',
        emoji : "<:TikTok3265:1008060910511861860>",
                            value: 'tiktok',
                        }
                      
                    ]),
            );
     setTimeout(() => {
message.send({ embeds: [pricelistembed], components: [row] })
      }, 2000);    
})
//
client.on("interactionCreate" , (interaction) => {
  if(!interaction.isSelectMenu()) return;

  if(interaction.values == "netflix") {
    const netflixembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
         .setTitle(`\`\#\`\ Netflix Prices In ${interaction.guild.name}`)
    .setDescription(` Here Is All Netflix Prices 

===========

**<a:emoji_137:1006747647345950810> - Netflix User 1 month : 80K <:63890:1006747703566417971> **

**<a:emoji_137:1006747647345950810> - Netflix Acc 1 week : 40K <:63890:1006747703566417971> **

**<a:emoji_137:1006747647345950810> - Netflix Acc 1 month : 150K <:63890:1006747703566417971>**

==============

- **__You Can Mention The Seller Click The Button__**
`)
    .setImage(`https://aramobi.com/wp-content/uploads/2021/08/Netflix-768x432.jpg`)
     .setColor("RANDOM")

           let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`netbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
    interaction.reply({content : `<@${interaction.user.id}>`, embeds: [netflixembed] , components: [row]})
  }
  if(interaction.values == "insta") {
    const instaembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
         .setTitle(`\`\#\`\ InstaGram Prices In ${interaction.guild.id}`)
    .setDescription(` Here Is All Instagram Prices 

===========

**__Followers__**

- **👀 - 100 Follower : 10K <:insta:1006732620450762882> **

- **👀 - 500 Follower : 50K <:insta:1006732620450762882> **

- **👀 - 1k Follower : 100K <:insta:1006732620450762882> **


**__Likes__**


- **👀 - 100 Like : 10K <:insta:1006732620450762882> **

- **👀 500 Like : 50K <:insta:1006732620450762882> **

- **👀 1k Like : 100K <:insta:1006732620450762882> **


==============


- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://img.freepik.com/free-vector/social-media-instagram-banner_228198-596.jpg")

               let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`insbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
    
        interaction.reply({content : `<@${interaction.user.id}>`, embeds: [instaembedembed] , components: [row]})
  }
    if(interaction.values == "visa") {
    const visaembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
     .setTitle(`\`\#\`\ Visa Prices In ${interaction.guild.name}`) 
     .setDescription(`Here Is All Visa Prices

============


**<:81603:1006747700143865958> Visa (Only Nitro Activation) : 15K <a:Money:1006732597818294382>**


=============

- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://media.discordapp.net/attachments/967015425990852648/968612061846310972/images.png")
      
               let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`visbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
    
        interaction.reply({content : `<@${interaction.user.id}>`, embeds: [visaembedembed] , components: [row]})
  }
     if(interaction.values == "nitro") {
    const nitroembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
     .setTitle(`\`\#\`\ Nitro Prices In ${interaction.guild.name}`)
    .setDescription(`Here Is All Nitro Prices

============

**<a:Nitrog:1008059317364199454> Ntiro Gaming 1 Month : 1M <a:Money:1006732597818294382>  **


**<a:Nitrog:1008059317364199454> Nitro Gaming 3 Month : 30K <a:Money:1006732597818294382>  **


**<a:nitroclassic:1008097825944518687> Nitro Classic 1 Month : 650K <a:Money:1006732597818294382>  **



===========


- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://media.discordapp.net/attachments/967015425990852648/968537296498483210/EGS_Discord_Nitro_2560x1440_withlogo_2560x1440-944994658df3b04d0c4940be832da19e.png")
      
               let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`nitbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
    
        interaction.reply({content : `<@${interaction.user.id}>`, embeds: [nitroembedembed] , components: [row]})
  }
       if(interaction.values == "bot") {
    const botembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
          .setTitle(`\`\#\`\ Bot Prices In ${interaction.guild.name}`) 
    .setDescription(`Here Is All Bot Prices

==============

- <:BOTS:1008059550877896705> Full System Vip Shop Bot : 800K <a:Money:1006732597818294382> 


- <:BOTS:1008059550877896705> Full System Bot : 500K <a:Money:1006732597818294382> 


- <:BOTS:1008059550877896705> System Bot : 200K <a:Money:1006732597818294382> 


- <:BOTS:1008059550877896705> Brodcast Bot : 150K <a:Money:1006732597818294382> 


- <:BOTS:1008059550877896705> Avatar Bot : 100K <a:Money:1006732597818294382>


- <:BOTS:1008059550877896705> Auto Line & React : 80K <a:Money:1006732597818294382> 


- <:BOTS:1008059550877896705> Tax (In Specific Room) : 60K <a:Money:1006732597818294382> 


- <:BOTS:1008059550877896705> Tax : 40K <a:Money:1006732597818294382> 


- <:BOTS:1008059550877896705> Auto Line With Embed Bot : 40K <a:Money:1006732597818294382> 


- <:BOTS:1008059550877896705> Auto Line Withot embed : 20K <a:Money:1006732597818294382> 


- <:BOTS:1008059550877896705> Auto React Bot : 15K <a:Money:1006732597818294382>


- <:BOTS:1008059550877896705> Roubux Bot : 400K <a:Money:1006732597818294382> 


=======================

- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://media.discordapp.net/attachments/967015425990852648/968613515873099806/images_4.jpeg")

                        let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`botbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
    
                 interaction.reply({content : `<@${interaction.user.id}>`, embeds: [botembedembed] , components: [row]})
       }
         if(interaction.values == "vote") {
    const botembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
     .setTitle(`\`\#\`\ Vote Prices In ${interaction.guild.name}`) 
    .setDescription(`Here Is All Vote Prices

================

**<a:aeagle_vote:1008059713151316079> 1 vote : 2k <a:Money:1006732597818294382> **

=================

- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://media.discordapp.net/attachments/967015425990852648/968613946653302926/download.jpeg")

                        let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`votbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
    
                 interaction.reply({content : `<@${interaction.user.id}>`, embeds: [botembedembed] , components: [row]})
         }
           if(interaction.values == "uc") {
    const botembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
         .setTitle(`\`\#\`\ Uc Prices In ${interaction.guild.name}`) 
    .setDescription(`Here Is All Uc Prices
================ Global ================


> <:ss_6:1006732541904036012>  60uc : 20 LE <:ss_2:1008099103999279214> 


> <:ss_6:1006732541904036012>  180uc : 55 LE <:ss_2:1008099103999279214> 


> <:ss_6:1006732541904036012>  325uc : 80 LE <:ss_2:1008099103999279214>


> <:ss_6:1006732541904036012>  660uc : 150 LE <:ss_2:1008099103999279214>


> <:ss_6:1006732541904036012>  985uc : 225 LE <:ss_2:1008099103999279214>


> <:ss_6:1006732541904036012>  1800uc : 375 LE <:ss_2:1008099103999279214>


> <:ss_6:1006732541904036012>  3850uc : 725 LE <:ss_2:1008099103999279214>   


================ Korean ================


> <:ss_6:1006732541904036012>  190uc : 60 LE <:ss_2:1008099103999279214> 


> <:ss_6:1006732541904036012>  660uc : 160 LE <:ss_2:1008099103999279214> 


> <:ss_6:1006732541904036012>  1800uc : 430 LE <:ss_2:1008099103999279214>


> <:ss_6:1006732541904036012>  3850uc : 840 LE <:ss_2:1008099103999279214>


> <:ss_6:1006732541904036012>  8000uc : 1660 LE <:ss_2:1008099103999279214>  


=================

- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://media.discordapp.net/attachments/967015425990852648/968620259592515664/images_5.jpeg")

   let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`ucbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
                    interaction.reply({content : `<@${interaction.user.id}>`, embeds: [botembedembed] , components: [row]})
           }
             if(interaction.values == "boost") {
    const botembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
         .setTitle(`\`\#\`\ Boost Prices In ${interaction.guild.name}`) 
    .setDescription(`Here Is All Boost Prices

================

- <:BOOST:1007272868322742322> 1 Boost 1 Week : 10K <a:Money:1006732597818294382>  


- <:BOOST:1007272868322742322> 1 Boost 1 Month : 25K <a:Money:1006732597818294382>  


- <:BOOST:1007272868322742322> 1 Boost 3 Month : 35K <a:Money:1006732597818294382>  


=================

- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://media.discordapp.net/attachments/967015425990852648/968816001149984778/images_6.jpeg")

   let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`bosbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
                    interaction.reply({content : `<@${interaction.user.id}>`, embeds: [botembedembed] , components: [row]})
        
    }
               if(interaction.values == "spotify") {
    const botembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
    .setTitle(`\`\#\`\ Spotify Prices In ${interaction.guild.name}`) 
    .setDescription(`Here Is All Spotify Prices

================

> <:mega_spotfay:1006732596467736628> Solo 1 Month : 30K  

> <:mega_spotfay:1006732596467736628> Duo 1 Month : 40K  

> <:mega_spotfay:1006732596467736628> Family 1 Month : 45K  

> <:mega_spotfay:1006732596467736628> Solo 3 Month : 60K  

=================

- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://media.discordapp.net/attachments/967015425990852648/968819184979025930/images_1.png")

   let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`spotbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
                    interaction.reply({content : `<@${interaction.user.id}>`, embeds: [botembedembed] , components: [row]})
        
    }
               if(interaction.values == "shahid") {
    const botembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
    .setTitle(`\`\#\`\ Shahid Prices In ${interaction.guild.name}`) 
    .setDescription(`Here Is All Shahid Prices

=================

- <:dragon_shahd:1006747695056171029>  Shahid User 1 Month : 80K

=================

- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://media.discordapp.net/attachments/967015425990852648/968820015392514078/images_2.png")

   let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`shabutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
                    interaction.reply({content : `<@${interaction.user.id}>`, embeds: [botembedembed] , components: [row]})
        
    }
               if(interaction.values == "credit") {
    const botembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
    .setTitle(`\`\#\`\ Credit Prices In ${interaction.guild.name}`) 
    .setDescription(`Here Is All Credit Prices

================

- <a:Money:1006732597818294382> 100K : 10 EGP <:ss_2:1008099103999279214> 

- <a:Money:1006732597818294382> 500K : 40 EGP <:ss_2:1008099103999279214> 

- <a:Money:1006732597818294382> 1M : 90 EGP <:ss_2:1008099103999279214>  

=================

- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://media.discordapp.net/attachments/967015425990852648/968820942522429510/images_7.jpeg")

   let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`crebutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
                    interaction.reply({content : `<@${interaction.user.id}>`, embeds: [botembedembed] , components: [row]})
        
    }
               if(interaction.values == "tiktok") {
    const botembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
    .setTitle(`\`\#\`\ Tiktok Prices In ${interaction.guild.name}`) 
    .setDescription(`Here Is All Tiktok Prices

=================

**__Followers__**

- <:TikTok3265:1008060910511861860> 1K(بدون ضمان) = 600k <a:Money:1006732597818294382>

- <:TikTok3265:1008060910511861860> 1k(ضمان شهر) = 900k <a:Money:1006732597818294382>

=================

**__Likes__**

- <:TikTok3265:1008060910511861860> 1k(ضمان شهر) = 300k <a:Money:1006732597818294382>

=================

**__Views__**

- <:TikTok3265:1008060910511861860> 1k(ضمان وصول) = 5k <a:Money:1006732597818294382>

=================

- **__You Can Mention The Seller Click The Button__**`)
    .setImage(`https://cdn.smehost.net/dailyrindblogcom-orchardprod/wp-content/uploads/2021/07/TikTok_Banner-1.jpg`)

   let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`tikbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
                    interaction.reply({content : `<@${interaction.user.id}>`, embeds: [botembedembed] , components: [row]})
        
    }
  }) 
  client.on("interactionCreate" , interaction => {
  if(!interaction.isButton()) return;
 let teamrole = db.set(`team_role_${interaction.guild.id}`)
    let t = teamrole ? teamrole : "@everyone"
  
  if(interaction.customId == "netbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${t} ||`})
  }
      if(interaction.customId == "insbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${t} ||`})
  }
      if(interaction.customId == "visbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${t} ||`})
  }
      if(interaction.customId == "nitbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${t} ||`})
  }
      if(interaction.customId == "botbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${t} ||`})
  }
      if(interaction.customId == "votbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${t} ||`})
  }
      if(interaction.customId == "ucbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${t} ||`})
  }
          if(interaction.customId == "bosbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${t} ||`})
  }
          if(interaction.customId == "spotbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${t} ||`})
  }
          if(interaction.customId == "shabutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${t} ||`})
  }
          if(interaction.customId == "crebutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${t} ||`})
  }
          if(interaction.customId == "tikbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${t} ||`})
  }
})
//antibots
  tracker = new inviteTracker(client);
tracker.on('guildMemberAdd', async (member, inviter, invite, error) => {
  
  let dbb = db.get(`antibots_${member.guild.id}` , "True")
  if(dbb == null) return;
  let prime = db.get(`prime_${member.guild.id}`)
  if(prime == null) return;
  if(member.user.bot) {
  await member.kick().catch(err => {console.log(err)});
  let invvv = client.users.cache.get(inviter.id)
    invvv.send({ embeds: [
      new MessageEmbed()
      .setTitle("⚠ You Have Warned ⚠")
      .setDescription(`** Adding Bots **`)
    .setTimestamp()
    .setAuthor({name : member.guild.name , iconURL : member.guild.iconURL({ dynamic: true })})
    .setFooter({text : member.guild.name , iconURL : member.guild.iconURL({ dynamic: true })})
    .setThumbnail(member.guild.iconURL({dynamic: true}))
    .setColor("RED")
    ]})
  }
})
//antilinks
client.on('messageCreate' , async(message) => {
  let dbb = db.get(`antilinks_${message.guild.id}` , "True")
  if(dbb == null) return;
  let prime = db.get(`prime_${message.guild.id}`)
  if(prime == null) return;
  if(message.content.includes("https://") || message.content.includes("http://") || message.content.includes("Https://") || message.content.includes("Http://") || message.content.includes("discord.gg/") || message.content.includes(".com")) {
    await message.delete()
    message.channel.send(`${message.author} **AntiLinks This Server Is Opened ** ⚠`)
    message.author.send({ embeds: [
      new MessageEmbed()
      .setTitle("⚠ You Have Warned ⚠")
      .setDescription("** Putting Links **")
    .setTimestamp()
    .setAuthor({name : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setFooter({text : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setColor("RED")
    ]})
  }
})
//antimention
client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  let dbb = db.get(`antimention_${message.guild.id}`)
  if(dbb == null) return;
  let prime = db.get(`prime_${message.guild.id}`)
  if(prime == null) return;
  let user = message.mentions.users.first();
  if(message.author.bot) return;
  if(!dbb.includes(user.id)) return;
    await message.delete()
    message.channel.send(`${message.author} **AntiMention ${user} Is Opened ** ⚠`)
    message.author.send({ embeds: [
      new MessageEmbed()
      .setTitle("⚠ You Have Warned ⚠")
      .setDescription("** Mentions **")
    .setTimestamp()
    .setAuthor({name : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setFooter({text : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setColor("RED")
    ]})
  
})
//ads category
client.on('channelCreate', message => {
     let prime = db.get(`prime_${message.guild.id}`)
  if(prime == null) return;
  let channel = db.get(`adscategory_${message.guild.id}`)
  if(channel == null) return;
  let line = db.get(`Line_${message.guild.id}`)
  let color = db.get(`color_${message.guild.id}`)
  if(message.parentId !== channel) return;

    const pricelistembed = new MessageEmbed()
    .setImage(line ? line : "https://cdn.discordapp.com/attachments/991842908338667621/991846066834133052/Line-25.gif")
    .setColor(color ? color : "CYAN")
        .setTimestamp()
     .setDescription(`**
> اهلا بك في تكت الخاصه بلاعلانات في ${message.guild.name} <a:Flying_Hearts_Red:1006732609935655013>
> Welcome In The Ticket Of Ads In ${message.guild.name} <a:F16_33G:1006732604554346627>

> برجاء ملء الاستماره و الانتظار حتي وصول اي شخص من الاونرز <a:emoji_137:1006747647345950810>

> \`1\` برجاء وضع نوع الاعلان الذي تريده <a:emoji_35:1006747636369461319>
> \`2\` برجاء كتابه اسم سيرفرك و ارسال الاعلان في خاص اي شخص من الاونرز <a:emoji_48:1006747687846166658>
> \`3\` برجاء عدم التحويل لاي شخص غير الاونر ومن الافضل انتظار رد من الادمن قبل التحويل <a:mazen:1006732622292074560>


> Please fill out the form and wait for any honoree to arrive <a:emoji_137:1006747647345950810>

> \`1\` Please put the type of ad you want <a:emoji_35:1006747636369461319>
> \`2\` Please write the name of your server and send the announcement in private to any honoree <a:emoji_48:1006747687846166658>
> \`3\` Please do not transfer to anyone other than UNRWA, and it is better to wait for a response from the admin before transferring <a:mazen:1006732622292074560>**`)

       setTimeout(() => {
message.send({ embeds: [pricelistembed] })
      }, 2000);    
})
//applyteamcategory
client.on('channelCreate', message => {
  let prime = db.get(`prime_${message.guild.id}`)
  if(prime == null) return;
  let channel = db.get(`applyteamcategory_${message.guild.id}`)
  if(channel == null) return;
  let line = db.get(`Line_${message.guild.id}`)
  let color = db.get(`color_${message.guild.id}`)
  if(message.parentId !== channel) return;
    const pricelistembed = new MessageEmbed()
    .setImage(line ? line : "https://cdn.discordapp.com/attachments/991842908338667621/991846066834133052/Line-25.gif")
    .setColor(color ? color : "CYAN")
        .setTimestamp()

        .setDescription(` 
<a:emoji_48:1006747687846166658> **__English__** <a:emoji_48:1006747687846166658>


        > \`1\` ** Please write your Name ** **:**

        > \`2\` **Please Write your Age** **:**

        > \`3\` **Please Write The Number Of Servers You Are Working in**

        > \`4\` **Please Send Feedbacks , Number : __25__**

        > \`5\` **Please Write The Names Of Servers You Are Working in**

        > \`6\` **Write down the names of the roles you are applying for**




<a:emoji_48:1006747687846166658> **__arabic__** <a:emoji_48:1006747687846166658>


> \`1\` **اسمك**

> \`2\` **سنك**

> \`3\` **عدد سرفرات الشغال فيها**

> \`4\` **قم بارسال 25 فيد باك من سرفرات مختلفه**

> \`5\` **اسماء السرفرات** 

> \`6\` **اسماء الرولات الهتقدم عليها**

           `)    
     setTimeout(() => {
message.send({ embeds: [pricelistembed] })
      }, 2000);    
})
//partnercategory
client.on('channelCreate', message => {
    let prime = db.get(`prime_${message.guild.id}`)
  if(prime == null) return;
  let channel = db.get(`partnercategory_${message.guild.id}`)
  if(channel == null) return;
  let line = db.get(`Line_${message.guild.id}`)
  let color = db.get(`color_${message.guild.id}`)
  if(message.parentId !== channel) return;
    const pricelistembed = new MessageEmbed()
    .setImage(line ? line : "https://cdn.discordapp.com/attachments/991842908338667621/991846066834133052/Line-25.gif")
    .setColor(color ? color : "CYAN")
        .setTimestamp()

        .setDescription(` **
> اهلا بك في تكت الخاصه بلبارتنر في ${message.guild.name} <a:Flying_Hearts_Red:1006732609935655013>
> Welcome In The Ticket Of Partner In ${message.guild.name} <a:F16_33G:1006732604554346627>

> برجاء ملء الاستماره و الانتظار حتي وصول اي شخص من الاونرز <a:emoji_137:1006747647345950810>


> \`1\` اسم السيرفر و اختصارو <a:Yred:1006717462403891291>

> \`2\` اختصاص السيرفر مثال (متجر , طاقم , الخ) <a:emoji_48:1006747687846166658>

> \`3\` عدد اعضاء السيرفر <a:F16_33G:1006732604554346627>


> Please fill out the form and wait for any honoree to arrive <a:emoji_137:1006747647345950810>


> \`1\` server name and abbreviation <a:Yred:1006717462403891291>

> \`2\` Server Specialization Example (shop, clan , etc.) <a:emoji_48:1006747687846166658>

> \`3\` Number of server members <a:F16_33G:1006732604554346627>

**
           `)    
     setTimeout(() => {
message.send({ embeds: [pricelistembed] })
      }, 2000);    
})
//rewardcategory
client.on('channelCreate', message => {
    let prime = db.get(`prime_${message.guild.id}`)
  if(prime == null) return;
  let channel = db.get(`rewardcategory_${message.guild.id}`)
  if(channel == null) return;
  let line = db.get(`Line_${message.guild.id}`)
  let color = db.get(`color_${message.guild.id}`)
  if(message.parentId !== channel) return;  
     setTimeout(() => {
message.send({ content: `
> اهلا بك في تكت الريوارد <a:F16_33G:1006732604554346627>
> Welcome In Reward Ticket <a:F16_33G:1006732604554346627> 

> برجاء تنفيذ شروط الريوارد و انتظار شخص من الاونرز للتسليم <a:TODOROK37:1006717442908758218>
> Please Make The Reward Roles , And Wail One From Owners To Give You <a:TODOROK37:1006717442908758218>
` })
      }, 2000);    
})
//prime prefix commands
client.on("messageCreate", async message => {
    if (!message.content.startsWith(prefix) || message.author.message) return;
  const argss = message.content.slice(prefix.length).trim().split(/ +/);
  const command = argss.shift().toLowerCase();

      let prime = db.get(`prime_${message.guild.id}`)
  if(prime == null) return;

  
   if(command === "profile") {
     let Canvas = require('canvas')
      let user = message.mentions.users.first() || message.author
     
        var cashmoney = db.fetch(`feedback_${user.id}`)
        if(cashmoney == null) cashmoney = 0

        var bankmoney = db.fetch(`offers_${user.id}`)
        if(bankmoney == null) bankmoney = 0

        var totalcash = db.fetch(`warns_${user.id}`)
        if(totalcash == null) totalcash = 0

        const canvasp = Canvas.createCanvas(524, 524); 
        const ctx = canvasp.getContext('2d') 
        
        const background = await Canvas.loadImage('./20220728_152726.png'); // هنا الخلفيه تحط فيها المسار بتاع الصوره 
        ctx.drawImage(background, 0, 0, canvasp.width, canvasp.height); // هنا ةمقاسات الخلفيه سيبها زي مهي
        const cutie = await Canvas.loadImage('./20220728_152726.png'); // هنا مسار الصوره
        ctx.drawImage(cutie, 25, 25, 0, 0); 

     
             ctx.font = "33px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(user.tag , 229 , 1);

     
        ctx.fillStyle = '#FFFFFF';
        ctx.font = "30px Arial"
        ctx.fillStyle = "white";
        ctx.fillText(cashmoney, 24, 280);

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(bankmoney, 24, 390);

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(totalcash, 24, 490);
  


        ctx.beginPath();
        ctx.arc(100, 75, 90, 0, 4 * Math.PI);
        ctx.closePath();
        ctx.clip();
        let lllcc = await Canvas.loadImage(user.displayAvatarURL().replace("webp" , "png"));
        ctx.drawImage(lllcc , 23 , 2 , 155 , 155)

    
    message.reply({ files: [canvasp.toBuffer()]});

   }
  if(command === "fb") {
       let feedbackroom = db.get(`Fed_${message.guild.id}`)
  if(feedbackroom == null) return;
    let mention = message.mentions.users.first()
    if(!mention) return message.reply("pls mention client")

    message.reply(`

 <a:Wa_rose:1006717489759146065> شكرا لاختيارك ${message.guild.name} <a:Wa_rose:1006717489759146065>

 <a:Wa_rose:1006717489759146065> Thanks For Choosing ${message.guild.name} <a:Wa_rose:1006717489759146065>


رايك يهمنا , نتمني ان تعطي فيدباك و تذكر بلمنشن ${message.author}

Your opinion matters , Please give feedback and mention the name of the person ${message.author}

----------------------------------------------


Here :
 <#${feedbackroom}>
 <#${feedbackroom}>
 `)
  }
  if(command === "warn") {
    if(!message.member.permissions.has('ADMINSTRATOR')) return message.reply(`** 😕 You don't have permissions **`);
    let user = message.mentions.users.first()
    if(!user) return message.reply("pls mention seller")
    let reason = message.content.split(" ").slice(2).join(" ")
    if(!reason) return message.reply("Pls Put Reason")

    let warns = db.fetch(`warns_${user.id}`)
    if(warns == null) return db.set(`warns_${user.id}`,0)
    db.add(`warns_${user.id}` , 1)
    message.reply(`**
> Done Gived Warn To ${user}

> The Warn Is From Admin ${message.author}

> Reason \`${reason}\`

> This Warn Is Number \`${db.fetch(`warns_${user.id}`)}\` **`)
  }

})
client.on('messageCreate' , async(message) => {
        let prime = db.get(`prime_${message.guild.id}`)
  if(prime == null) return;
  if(message.content === "re") {
    if(!message.channel.name.startsWith("ticket")) return;
    message.channel.setName(`by-${message.author.username}`)
  }
})
client.on('messageCreate' , async(message) => {
        let prime = db.get(`prime_${message.guild.id}`)
  if(prime == null) return;
  if(message.content === "re") {
    if(!message.channel.name.startsWith("need")) return;
    message.channel.setName(`by-${message.author.username}`)
  }
})
//giving rep points
client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.channel.id != db.get(`Fed_${message.guild.id}`)) return;
  let user = message.mentions.users.first();
  if(!user) return;
  let repp = await db.fetch(`rep_${user.id}`) 
  if(repp == null) { db.set(`rep_${user.id}` , 0) }
  db.add(`rep_${user.id}` , 1)
})
//giving offer points
client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  let offersRoom = db.get(`offersroom_${message.guild.id}`)
  if(message.channel.id != offersRoom) return;
  let repp = await db.fetch(`offer_${message.author.id}`) 
  if(repp == null) { db.set(`offer_${message.author.id}` , 0) }
  db.add(`offer_${message.author.id}` , 1)
})



client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  db.add(`level_${message.author.id}` , 1)
})


client.on('messageCreate' , async(message) => {
  let user = db.get(`level_${message.author.id}`)
  let chh = db.get(`levelchannel_${message.guild.id}`)
  let ch = message.guild.channels.cache.get(chh)
  if(ch == null) return;
      if(user == 10) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`1\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 25) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`2\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 50) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`3\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 80) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`4\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 100) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`5\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 150) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`6\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 210) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`7\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 270) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`8\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 330) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`9\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 395) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`10\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 440) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`11\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 490) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`12\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 550) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`13\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 620) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`14\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 700) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`15\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 780)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`16\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 820) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`17\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 870) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`18\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 920) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`19\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 970) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`20\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 1020) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`21\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 1080) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`22\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 1120) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`23\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 1200) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`24\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 1280) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`25\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 1350) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`26\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 1400)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`27\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 1420) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`28\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 1500) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`29\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 1700) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`30\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 1900) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`31\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 2100) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`32\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 2300) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`33\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 2500) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`34\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 3100) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`35\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 3300) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`36\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 3500) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`37\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 3700) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`38\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 4000) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`39\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 4500) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`40\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 5000) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`41\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 5500) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`42\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 6000) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`43\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 6500) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`44\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 7000) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`45\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 7500) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`46\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 8000) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`47\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 8500) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`48\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 9000) ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`49\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 9800)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`50\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 10400)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`51\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 11000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`52\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 11800)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`53\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 12400)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`54\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 13000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`55\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 14400)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`56\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 15000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`57\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 15800)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`58\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 17000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`59\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 18000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`60\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 20000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`61\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 22000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`62\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 24000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`63\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 26000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`64\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 28000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`65\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 30000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`66\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 32000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`67\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 34000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`68\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 36000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`69\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 40000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`70\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 45000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`71\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 50000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`72\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 55000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`73\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 60000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`74\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 65000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`75\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 70000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`76\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 75000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`77\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 80000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`78\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 85000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`79\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 90000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`80\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 100000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`81\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 110000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`82\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 120000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`83\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 130000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`84\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 140000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`85\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 150000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`86\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 160000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`87\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 170000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`88\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 180000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`89\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 200000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`90\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 250000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`91\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 300000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`92\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 350000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`93\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 400000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`94\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 450000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`95\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 500000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`96\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 550000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`97\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 600000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`98\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 700000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`99\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
    if(user == 750000)  ch.send({ content : ` > ** Congratulations ${message.author} , You Have Reached Level \`100\` <a:power293:1006732554600206386> <a:F16_33G:1006732604554346627> **`})
})


client.login(process.env.token);