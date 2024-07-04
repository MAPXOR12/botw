const { MessageEmbed , Discord , MessageActionRow, MessageButton,  } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"scrim-list",
  description:"to send scrim list",
  options: [{
    name: "team1" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team2" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team3" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team4" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team5" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team6" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team7" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team8" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team9" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team10" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team11" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team12" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team13" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team14" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team15" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team16" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team17" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team18" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team19" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team20" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team21" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team22" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team23" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team24" ,
    description : "team name",
    type: 3,
    required: false,
  },{
    name: "team25" ,
    description : "team name",
    type: 3,
    required: false,
  }],

  run: async(client, interaction, args) => {
    try {
   if (!interaction.member.permissions.has('MANAGE_SERVER')) return interaction.editReply(`** 😕 You don't have permission **`);

      let team1 = interaction.options.getString('team1')
      let team2 = interaction.options.getString('team2')
      let team3 = interaction.options.getString('team3')
      let team4 = interaction.options.getString('team4')
      let team5 = interaction.options.getString('team5')
      let team6 = interaction.options.getString('team6')
      let team7 = interaction.options.getString('team7')
      let team8 = interaction.options.getString('team8')
      let team9 = interaction.options.getString('team9')
      let team10 = interaction.options.getString('team10')
      let team11 = interaction.options.getString('team11')
      let team12 = interaction.options.getString('team12')
      let team13 = interaction.options.getString('team13')
      let team14 = interaction.options.getString('team14')
      let team15 = interaction.options.getString('team15')
      let team16 = interaction.options.getString('team16')
      let team17 = interaction.options.getString('team17')
      let team18 = interaction.options.getString('team18')
      let team19 = interaction.options.getString('team19')
      let team20 = interaction.options.getString('team20')
      let team21 = interaction.options.getString('team21')
      let team22 = interaction.options.getString('team22')
      let team23 = interaction.options.getString('team23')
      let team24 = interaction.options.getString('team24')
      let team25 = interaction.options.getString('team25')

      if(!team1) team1 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team2) team2 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team3) team3 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team4) team4 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team5) team5 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team6) team6 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team7) team7 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team8) team8 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team9) team9 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team10) team10 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team11) team11 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team12) team12 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team13) team13 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team14) team14 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team15) team15 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team16) team16 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team17) team17 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team18) team18 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team19) team19 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team20) team20 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team21) team21 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team22) team22 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team23) team23 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team24) team24 = "𝐄𝐦𝐩𝐭𝐲"
      if(!team25) team25 = "𝐄𝐦𝐩𝐭𝐲"

      interaction.editReply(`
\`\`\`𝐂𝐨𝐦𝐦𝐢𝐭𝐦𝐞𝐧𝐭 𝐭𝐨 𝐭𝐡𝐞 𝐞𝐱𝐚𝐜𝐭 𝐥𝐨𝐜𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐞𝐚𝐜𝐡 𝐬𝐪𝐮𝐚𝐝 𝐢𝐧 𝐭𝐡𝐞 𝐫𝐨𝐨𝐦 𝐬𝐨 𝐭𝐡𝐚𝐭 𝐢𝐭 𝐝𝐨𝐞𝐬 𝐧𝐨𝐭 𝐥𝐞𝐚𝐝 𝐭𝐨 𝐞𝐱𝐜𝐥𝐮𝐬𝐢𝐨𝐧 \`\`\`

\`\`\` الالتزام في المكان المحدد لعدم التعرض الي الاقصاء \`\`\`
  
**
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟎𝟏 : ${team1}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟎2 : ${team2}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟎𝟑 : ${team3}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟎𝟒 : ${team4}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟎𝟓 : ${team5}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟎𝟔 : ${team6}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟎𝟕 : ${team7}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟎𝟖 : ${team8}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟎𝟗 : ${team9}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟏𝟎 : ${team10}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟏𝟏 : ${team11}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟏𝟐 : ${team12}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟏𝟑 : ${team13}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟏𝟒 : ${team14}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟏𝟓 : ${team15}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟏𝟔 : ${team16}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟏𝟕 : ${team17}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟏𝟖 : ${team18}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟏𝟗 : ${team19}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟐𝟎 : ${team20}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟐𝟏 : ${team21}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟐𝟐 : ${team22}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟐𝟑 : ${team23}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟐𝟒 : ${team24}
> <a:emoji_8:1006732637412544542> 𝐓𝐄𝐀𝐌 𝟐𝟓 : ${team25}
**
 `)
  interaction.channel.send(`@everyone`)

   
} catch (err) {
      console.log(err)
  }
 }
}