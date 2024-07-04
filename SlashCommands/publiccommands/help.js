const { MessageEmbed , Discord , MessageActionRow , MessageButton , MessageSelectMenu } = require('discord.js');
module.exports = {
  name:"help",
  description:"command info",

  run: async(client, interaction, args) => {
    try {
   let invite = await interaction.guild.invites.create(interaction.channel.id);
     let m = await interaction.editReply({
    embeds: [
  new MessageEmbed()
    .setAuthor({ name: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setFooter({ text: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`  
** 
<a:ss_4:1006717474819035166> Please Choose Lang

<a:ss_4:1006717474819035166> برجاء اختيار اللغه
**
  `)
  .setImage("https://media.discordapp.net/attachments/1002637763855777932/1012788899585724476/ultrabotup_16D78B2.gif")
    ] , components: [new MessageActionRow()
    .addComponents(
      new MessageButton()
      		.setCustomId('ar')
					.setLabel('Ar')
          .setEmoji("🇪🇬")
					.setStyle('PRIMARY'),
            new MessageButton()
      		.setCustomId('en')
					.setLabel('En')
          .setEmoji("🇺🇸")
					.setStyle('PRIMARY'),
    )]
});

client.on('interactionCreate', async(message) => {
  if(message.customId == "en") {
    m.edit({
    embeds: [
  new MessageEmbed()
    .setAuthor({ name: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setFooter({ text: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`  
** 
<a:ss_4:1006717474819035166> Bot Name : UltraBot

<a:ss_4:1006717474819035166> Bot Vertion : 4.1.8

<a:ss_4:1006717474819035166> Djs Vertion : 13 , SlashHandler

<a:ss_4:1006717474819035166> Server Count : ${client.guilds.cache.size}

<a:ss_4:1006717474819035166> Users Count : ${client.guilds.cache
.reduce((a, b) => a + b.memberCount, 0)
.toLocaleString()}

<a:ss_4:1006717474819035166> Ping : ${client.ws.ping}

<a:ss_4:1006717474819035166> Command Count : 86
**
  `)
  .setImage("https://media.discordapp.net/attachments/1002637763855777932/1012788899585724476/ultrabotup_16D78B2.gif")
    ] , components: [new MessageActionRow()
            .addComponents(
              new MessageSelectMenu()
              .setCustomId('select')
					.setPlaceholder('Command Categorys')
					.addOptions(
						{
							label: 'Public Commands',
							description: 'Public Commands All Mmebers Can Use It',
							value: 'enpublic',
						},
            {
							label: 'Enocomy Commands',
							description: 'Enocomy Commands Money Commands',
							value: 'enenecomy',
						},
						{
							label: 'Admin Commands',
							description: 'Admin Commands Only Admins Can Use It',
							value: 'enadmin',
						},
            {
							label: 'Setting Commands',
							description: 'Setting Commands Admin Use It To Setup Servers',
							value: 'ensettings',
						},
            {
							label: 'Scrims Commands',
							description: 'Scrim Organization Commands',
							value: 'enscrims',
						},
            {
							label: 'Prime Commands',
							description: 'Prime Commands For Only Subscribers',
							value: 'enprime',
						},
					),
            )]
});
    message.deferUpdate()

    client.on('interactionCreate' , async(i) => {
      if(!i.isSelectMenu) return;
      if(i.values == "enpublic") {
        m.edit({embeds: [
  new MessageEmbed()
    .setAuthor({ name: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setFooter({ text: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`  
** 

<a:ss_4:1006717474819035166> /avatar => To See Someones Avatar

<a:ss_4:1006717474819035166> /avatar-server => To View Server Avatar

<a:ss_4:1006717474819035166> /banner => To View Someones Banner

<a:ss_4:1006717474819035166> /bot => To View Bot Information

<a:ss_4:1006717474819035166> /help => To View Help Menu

<a:ss_4:1006717474819035166> /inrole => To Get Information About A Role

<a:ss_4:1006717474819035166> /invites => To Get Invites Count

<a:ss_4:1006717474819035166> /top-inv => to see the top 10 have invites

<a:ss_4:1006717474819035166> /ping => To Get Api Latency Of Bot

<a:ss_4:1006717474819035166> /profile => To Get Profile Of Someone

<a:ss_4:1006717474819035166> /rep => To Give Someone Rep

<a:ss_4:1006717474819035166> /say => To Say Something With Bot

<a:ss_4:1006717474819035166> /say-embed => To Say Something With Bot In Embed

<a:ss_4:1006717474819035166> /server => To Get Server Info

<a:ss_4:1006717474819035166> /server-owner => to get the owner of the server

<a:ss_4:1006717474819035166> /tax => to get the probot tax's 

<a:ss_4:1006717474819035166> /user => to get information about user

**
  `)
  .setImage("https://media.discordapp.net/attachments/1002637763855777932/1012788899585724476/ultrabotup_16D78B2.gif")
    ]})
      i.deferUpdate()
      }
      if(i.values == "enenecomy") {
        m.edit({embeds: [
  new MessageEmbed()
    .setAuthor({ name: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setFooter({ text: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`  
** 

<a:ss_4:1006717474819035166> /ultracash => To View Your UltraCash

<a:ss_4:1006717474819035166> /daily => To Take Your Daily Salary

<a:ss_4:1006717474819035166> /transfer => To Transfer Someone UltraCash

<a:ss_4:1006717474819035166> /top => To View The Top That Has UltraCash

**
  `)
  .setImage("https://media.discordapp.net/attachments/1002637763855777932/1012788899585724476/ultrabotup_16D78B2.gif")
    ]})
      i.deferUpdate()
      }
      if(i.values == "enadmin") {
        m.edit({embeds: [
  new MessageEmbed()
    .setAuthor({ name: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setFooter({ text: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`  
** 

<a:ss_4:1006717474819035166> /ban => To Ban Someone

<a:ss_4:1006717474819035166> /unban => To Unban Someone

<a:ss_4:1006717474819035166> /unbanall => To Unban All Banned Members

<a:ss_4:1006717474819035166> /kick => To Kick Someone

<a:ss_4:1006717474819035166> /hide => To Hide A Room

<a:ss_4:1006717474819035166> /show => To Show A Room

<a:ss_4:1006717474819035166> /showall => To Show All Rooms

<a:ss_4:1006717474819035166> /hideall => To Hide All Members

<a:ss_4:1006717474819035166> /lock => To Lock A Room

<a:ss_4:1006717474819035166> /unlock => To Unlock A Room

<a:ss_4:1006717474819035166> /lockall => To Lock All Rooms

<a:ss_4:1006717474819035166> /unlockall => To Unlock All Rooms

<a:ss_4:1006717474819035166> /role => To Give Someone Role

<a:ss_4:1006717474819035166> /temp-role => To Give Someone A Temp Role

**
  `)
  .setImage("https://media.discordapp.net/attachments/1002637763855777932/1012788899585724476/ultrabotup_16D78B2.gif")
    ]})
      i.deferUpdate()
      }
      if(i.values == "ensettings") {
        m.edit({embeds: [
  new MessageEmbed()
    .setAuthor({ name: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setFooter({ text: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`  
** 

<a:ss_4:1006717474819035166> /setline => To Set Line Image

<a:ss_4:1006717474819035166> /setcolor => To Set Embed Colors

<a:ss_4:1006717474819035166> /set-autoline => To Set A AutoLine Room(Unlimited Rooms)

<a:ss_4:1006717474819035166> /del-autoline => To Delete An Autoline Room

<a:ss_4:1006717474819035166> /set-feedback => To Set FeedbackRoom

<a:ss_4:1006717474819035166> /set-invites => To Set Invites Room

<a:ss_4:1006717474819035166> /set-levelchannel => To Set The Channel Of Leveling

<a:ss_4:1006717474819035166> /set-sug => To Set Suggestion Room

<a:ss_4:1006717474819035166> /set-tax => To Set Taxs Room

<a:ss_4:1006717474819035166> /set-welcome => To Set Welcome Channel

<a:ss_4:1006717474819035166> /set-teamrole => To Set The Team Role

<a:ss_4:1006717474819035166> /set-ordercategory => To Set The Id Of Order Category(For The Price List)
**
  `)
  .setImage("https://media.discordapp.net/attachments/1002637763855777932/1012788899585724476/ultrabotup_16D78B2.gif")
    ]})
      i.deferUpdate()
      }
      if(i.values == "enscrims") {
        m.edit({embeds: [
  new MessageEmbed()
    .setAuthor({ name: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setFooter({ text: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`  
** 

<a:ss_4:1006717474819035166> /announce-scrim => To Announce The Scrim

<a:ss_4:1006717474819035166> /scrim-rules => To Send Scrim Points

<a:ss_4:1006717474819035166> /scrim-points => To Send The Scrim Points

<a:ss_4:1006717474819035166> /reg => To Open The Regestration

<a:ss_4:1006717474819035166> /reg-form => To Send Regestration Form

<a:ss_4:1006717474819035166> /1h-reg => To Send Alert Before Close Scrim Reg By 1h

<a:ss_4:1006717474819035166> /30m-reg => To Send Alert Before Close Scrim Reg By 30m

<a:ss_4:1006717474819035166> /15m-reg => To Send Alert Before Close Scrim Reg By 15m

<a:ss_4:1006717474819035166> /5m-reg => To Send Alert Before Close Scrim Reg By 5m

<a:ss_4:1006717474819035166> /close-reg => To Close Scrim Regestration

<a:ss_4:1006717474819035166> /list => To Make The Scrim List

<a:ss_4:1006717474819035166> /id-test => to test players with id and pass role

<a:ss_4:1006717474819035166> /era => To Send Room Id Pass Map Erangel

<a:ss_4:1006717474819035166> /mir => To Send Room Id Pass Map Mirramar

<a:ss_4:1006717474819035166> /vik => To Send Room Id Pass Map Vikendi

<a:ss_4:1006717474819035166> /san => To Send Room Id Pass Map Sanhok

<a:ss_4:1006717474819035166> /roll => To Make Yes Or No Vote

<a:ss_4:1006717474819035166> /2room-result => To Calculate Scrim Result In 2 Rooms

<a:ss_4:1006717474819035166> /3room-result => To Calculate Scrim Result In 3 Rooms

<a:ss_4:1006717474819035166> /4room-result => To Calculate Scrim Result In 4 Rooms

**
  `)
  .setImage("https://media.discordapp.net/attachments/1002637763855777932/1012788899585724476/ultrabotup_16D78B2.gif")
    ]})
      i.deferUpdate()
      }
      if(i.values == "enprime") {
        m.edit({embeds: [
  new MessageEmbed()
    .setAuthor({ name: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setFooter({ text: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`  
** 

<a:ss_4:1006717474819035166> /antibots-on => To Open AntiBots Protection

<a:ss_4:1006717474819035166> /antibots-off => To Close AntiBots Protection

<a:ss_4:1006717474819035166> /antilinks-on => To Open AntiLinks Protection

<a:ss_4:1006717474819035166> /antilinks-off => To Close Antilinks Protection

<a:ss_4:1006717474819035166> /set-antimention => To Add Someone To The Antimention Protection

<a:ss_4:1006717474819035166> /set-adscategory => To Set The Category Of Ads

<a:ss_4:1006717474819035166> /set-applyteamcategory => To Set The ApplyTeam Category

<a:ss_4:1006717474819035166> /set-offersroom => To Set The Room Of Offers

<a:ss_4:1006717474819035166> /set-partnercategory => To Set The Category Of Partner

<a:ss_4:1006717474819035166> /close-reg => To Close Scrim Regestration

=======

<a:ss_4:1006717474819035166> !profile => To View Profile Seller

<a:ss_4:1006717474819035166> !fb => To Send Feedback Message To Client

<a:ss_4:1006717474819035166> !warn => To Warn A Seller(Only Adminstrator)

<a:ss_4:1006717474819035166> re => To Claim A Ticket
**
  `)
  .setImage("https://media.discordapp.net/attachments/1002637763855777932/1012788899585724476/ultrabotup_16D78B2.gif")
    ]})
      i.deferUpdate()
      }
    })
  }
  if(message.customId == "ar") {
    m.edit({
    embeds: [
  new MessageEmbed()
    .setAuthor({ name: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setFooter({ text: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`  
** 
<a:ss_4:1006717474819035166> Bot Name : UltraBot

<a:ss_4:1006717474819035166> Bot Vertion : 4.1.8

<a:ss_4:1006717474819035166> Djs Vertion : 13 , SlashHandler

<a:ss_4:1006717474819035166> Server Count : ${client.channels.cache.size}

<a:ss_4:1006717474819035166> Users Count : ${client.guilds.cache
.reduce((a, b) => a + b.memberCount, 0)
.toLocaleString()}

<a:ss_4:1006717474819035166> Ping : ${client.ws.ping}

<a:ss_4:1006717474819035166> Command Count : 86
**
  `)
  .setImage("https://media.discordapp.net/attachments/1002637763855777932/1012788899585724476/ultrabotup_16D78B2.gif")
    ] , components: [new MessageActionRow()
            .addComponents(
              new MessageSelectMenu()
              .setCustomId('select')
					.setPlaceholder('Command Categorys')
					.addOptions(
						{
							label: 'Public Commands',
							description: 'Public Commands All Mmebers Can Use It',
							value: 'enpublic',
						},
            {
							label: 'Enocomy Commands',
							description: 'Enocomy Commands Money Commands',
							value: 'enenecomy',
						},
						{
							label: 'Admin Commands',
							description: 'Admin Commands Only Admins Can Use It',
							value: 'enadmin',
						},
            {
							label: 'Setting Commands',
							description: 'Setting Commands Admin Use It To Setup Servers',
							value: 'ensettings',
						},
            {
							label: 'Scrims Commands',
							description: 'Scrim Organization Commands',
							value: 'enscrims',
						},
            {
							label: 'Prime Commands',
							description: 'Prime Commands For Only Subscribers',
							value: 'enprime',
						},
					),
            )]
});
    message.deferUpdate()

    client.on('interactionCreate' , async(i) => {
      if(!i.isSelectMenu) return;
      if(i.values == "enpublic") {
        m.edit({embeds: [
  new MessageEmbed()
    .setAuthor({ name: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setFooter({ text: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`  
** 

<a:ss_4:1006717474819035166> /avatar => To See Someones Avatar

<a:ss_4:1006717474819035166> /avatar-server => To View Server Avatar

<a:ss_4:1006717474819035166> /banner => To View Someones Banner

<a:ss_4:1006717474819035166> /bot => To View Bot Information

<a:ss_4:1006717474819035166> /help => To View Help Menu

<a:ss_4:1006717474819035166> /inrole => To Get Information About A Role

<a:ss_4:1006717474819035166> /invites => To Get Invites Count

<a:ss_4:1006717474819035166> /top-inv => to see the top 10 have invites

<a:ss_4:1006717474819035166> /ping => To Get Api Latency Of Bot

<a:ss_4:1006717474819035166> /profile => To Get Profile Of Someone

<a:ss_4:1006717474819035166> /rep => To Give Someone Rep

<a:ss_4:1006717474819035166> /say => To Say Something With Bot

<a:ss_4:1006717474819035166> /say-embed => To Say Something With Bot In Embed

<a:ss_4:1006717474819035166> /server => To Get Server Info

<a:ss_4:1006717474819035166> /server-owner => to get the owner of the server

<a:ss_4:1006717474819035166> /tax => to get the probot tax's 

<a:ss_4:1006717474819035166> /user => to get information about user

**
  `)
  .setImage("https://media.discordapp.net/attachments/1002637763855777932/1012788899585724476/ultrabotup_16D78B2.gif")
    ]})
      i.deferUpdate()
      }
      if(i.values == "enenecomy") {
        m.edit({embeds: [
  new MessageEmbed()
    .setAuthor({ name: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setFooter({ text: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`  
** 

<a:ss_4:1006717474819035166> /ultracash => To View Your UltraCash

<a:ss_4:1006717474819035166> /daily => To Take Your Daily Salary

<a:ss_4:1006717474819035166> /transfer => To Transfer Someone UltraCash

<a:ss_4:1006717474819035166> /top => To View The Top That Has UltraCash

**
  `)
  .setImage("https://media.discordapp.net/attachments/1002637763855777932/1012788899585724476/ultrabotup_16D78B2.gif")
    ]})
      i.deferUpdate()
      }
      if(i.values == "enadmin") {
        m.edit({embeds: [
  new MessageEmbed()
    .setAuthor({ name: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setFooter({ text: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`  
** 

<a:ss_4:1006717474819035166> /ban => To Ban Someone

<a:ss_4:1006717474819035166> /unban => To Unban Someone

<a:ss_4:1006717474819035166> /unbanall => To Unban All Banned Members

<a:ss_4:1006717474819035166> /kick => To Kick Someone

<a:ss_4:1006717474819035166> /hide => To Hide A Room

<a:ss_4:1006717474819035166> /show => To Show A Room

<a:ss_4:1006717474819035166> /showall => To Show All Rooms

<a:ss_4:1006717474819035166> /hideall => To Hide All Members

<a:ss_4:1006717474819035166> /lock => To Lock A Room

<a:ss_4:1006717474819035166> /unlock => To Unlock A Room

<a:ss_4:1006717474819035166> /lockall => To Lock All Rooms

<a:ss_4:1006717474819035166> /unlockall => To Unlock All Rooms

<a:ss_4:1006717474819035166> /role => To Give Someone Role

<a:ss_4:1006717474819035166> /temp-role => To Give Someone A Temp Role

**
  `)
  .setImage("https://media.discordapp.net/attachments/1002637763855777932/1012788899585724476/ultrabotup_16D78B2.gif")
    ]})
      i.deferUpdate()
      }
      if(i.values == "ensettings") {
        m.edit({embeds: [
  new MessageEmbed()
    .setAuthor({ name: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setFooter({ text: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`  
** 

<a:ss_4:1006717474819035166> /setline => To Set Line Image

<a:ss_4:1006717474819035166> /setcolor => To Set Embed Colors

<a:ss_4:1006717474819035166> /set-autoline => To Set A AutoLine Room(Unlimited Rooms)

<a:ss_4:1006717474819035166> /del-autoline => To Delete An Autoline Room

<a:ss_4:1006717474819035166> /set-feedback => To Set FeedbackRoom

<a:ss_4:1006717474819035166> /set-invites => To Set Invites Room

<a:ss_4:1006717474819035166> /set-levelchannel => To Set The Channel Of Leveling

<a:ss_4:1006717474819035166> /set-sug => To Set Suggestion Room

<a:ss_4:1006717474819035166> /set-tax => To Set Taxs Room

<a:ss_4:1006717474819035166> /set-welcome => To Set Welcome Channel

<a:ss_4:1006717474819035166> /set-teamrole => To Set The Team Role

<a:ss_4:1006717474819035166> /set-ordercategory => To Set The Id Of Order Category(For The Price List)
**
  `)
  .setImage("https://media.discordapp.net/attachments/1002637763855777932/1012788899585724476/ultrabotup_16D78B2.gif")
    ]})
      i.deferUpdate()
      }
      if(i.values == "enscrims") {
        m.edit({embeds: [
  new MessageEmbed()
    .setAuthor({ name: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setFooter({ text: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`  
** 

<a:ss_4:1006717474819035166> /announce-scrim => To Announce The Scrim

<a:ss_4:1006717474819035166> /scrim-rules => To Send Scrim Points

<a:ss_4:1006717474819035166> /scrim-points => To Send The Scrim Points

<a:ss_4:1006717474819035166> /reg => To Open The Regestration

<a:ss_4:1006717474819035166> /reg-form => To Send Regestration Form

<a:ss_4:1006717474819035166> /1h-reg => To Send Alert Before Close Scrim Reg By 1h

<a:ss_4:1006717474819035166> /30m-reg => To Send Alert Before Close Scrim Reg By 30m

<a:ss_4:1006717474819035166> /15m-reg => To Send Alert Before Close Scrim Reg By 15m

<a:ss_4:1006717474819035166> /5m-reg => To Send Alert Before Close Scrim Reg By 5m

<a:ss_4:1006717474819035166> /close-reg => To Close Scrim Regestration

<a:ss_4:1006717474819035166> /list => To Make The Scrim List

<a:ss_4:1006717474819035166> /id-test => to test players with id and pass role

<a:ss_4:1006717474819035166> /era => To Send Room Id Pass Map Erangel

<a:ss_4:1006717474819035166> /mir => To Send Room Id Pass Map Mirramar

<a:ss_4:1006717474819035166> /vik => To Send Room Id Pass Map Vikendi

<a:ss_4:1006717474819035166> /san => To Send Room Id Pass Map Sanhok

<a:ss_4:1006717474819035166> /roll => To Make Yes Or No Vote

<a:ss_4:1006717474819035166> /2room-result => To Calculate Scrim Result In 2 Rooms

<a:ss_4:1006717474819035166> /3room-result => To Calculate Scrim Result In 3 Rooms

<a:ss_4:1006717474819035166> /4room-result => To Calculate Scrim Result In 4 Rooms

**
  `)
  .setImage("https://media.discordapp.net/attachments/1002637763855777932/1012788899585724476/ultrabotup_16D78B2.gif")
    ]})
      i.deferUpdate()
      }
      if(i.values == "enprime") {
        m.edit({embeds: [
  new MessageEmbed()
    .setAuthor({ name: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setFooter({ text: client.user.username , iconURL : client.user.displayAvatarURL() })
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`  
** 

<a:ss_4:1006717474819035166> /antibots-on => To Open AntiBots Protection

<a:ss_4:1006717474819035166> /antibots-off => To Close AntiBots Protection

<a:ss_4:1006717474819035166> /antilinks-on => To Open AntiLinks Protection

<a:ss_4:1006717474819035166> /antilinks-off => To Close Antilinks Protection

<a:ss_4:1006717474819035166> /set-antimention => To Add Someone To The Antimention Protection

<a:ss_4:1006717474819035166> /set-adscategory => To Set The Category Of Ads

<a:ss_4:1006717474819035166> /set-applyteamcategory => To Set The ApplyTeam Category

<a:ss_4:1006717474819035166> /set-offersroom => To Set The Room Of Offers

<a:ss_4:1006717474819035166> /set-partnercategory => To Set The Category Of Partner

<a:ss_4:1006717474819035166> /close-reg => To Close Scrim Regestration

=======

<a:ss_4:1006717474819035166> !profile => To View Profile Seller

<a:ss_4:1006717474819035166> !fb => To Send Feedback Message To Client

<a:ss_4:1006717474819035166> !warn => To Warn A Seller(Only Adminstrator)

<a:ss_4:1006717474819035166> re => To Claim A Ticket
**
  `)
  .setImage("https://media.discordapp.net/attachments/1002637763855777932/1012788899585724476/ultrabotup_16D78B2.gif")
    ]})
      i.deferUpdate()
      }
    })
  }
})  
} catch (err) {
      console.log(err)
  }
 }
}