const { MessageEmbed , Discord , MessageActionRow, MessageButton,  } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"2room-result",
  description:"to calculate scrim result in 3 rooms",
  options: [{
    name: "team-name" ,
    description : "team name",
    type: 3,
    required: true,
  },{
    name: "room1-place" ,
    description : "place in room1",
    type: 4,
    required: true,
  },{
    name: "room1-kills" ,
    description : "kills in room1",
    type: 4,
    required: true,
  },{
    name: "room2-place" ,
    description : "place in room2",
    type: 4,
    required: true,
  },{
    name: "room2-kills" ,
    description : "kills in room2",
    type: 4,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
   if (!interaction.member.permissions.has('MANAGE_SERVER')) return interaction.editReply(`** 😕 You don't have permission **`);

  let teamname = interaction.options.getString("team-name")
  let aroom1 = interaction.options.getInteger("room1-place")
  let aroom2 = interaction.options.getInteger("room2-place")
  let kroom1 = interaction.options.getInteger("room1-kills")
  let kroom2 = interaction.options.getInteger("room2-kills")



    if (aroom1 == 1) aroom1 = 20
    else if (aroom1 == 2) aroom1 = 14
    else if (aroom1 == 3) aroom1 = 10
    else if (aroom1 == 4) aroom1 = 8
    else if (aroom1 == 5) aroom1 = 7
    else if (aroom1 == 6) aroom1 = 6
    else if (aroom1 == 7) aroom1 = 5
    else if (aroom1 == 8) aroom1 = 4
    else if (aroom1 == 9) aroom1 = 3
    else if (aroom1 == 10) aroom1 = 2
    else if (aroom1 == 11) aroom1 = 1
    else if (aroom1 == 12) aroom1 = 1
    else if (aroom1 == 13) aroom1 = 1
    else if (aroom1 == 14) aroom1 = 1
    else if (aroom1 == 15) aroom1 = 1
    else if (aroom1 == 16) aroom1 = 1
    else aroom1 = 0

    if (aroom2 == 1) aroom2 = 20
    else if (aroom2 == 2) aroom2 = 14
    else if (aroom2 == 3) aroom2 = 10
    else if (aroom2 == 4) aroom2 = 8
    else if (aroom2 == 5) aroom2 = 7
    else if (aroom2 == 6) aroom2 = 6
    else if (aroom2 == 7) aroom2 = 5
    else if (aroom2 == 8) aroom2 = 4
    else if (aroom2 == 9) aroom2 = 3
    else if (aroom2 == 10) aroom2 = 2
    else if (aroom2 == 11) aroom2 = 1
    else if (aroom2 == 12) aroom2 = 1
    else if (aroom2 == 13) aroom2 = 1
    else if (aroom2 == 14) aroom2 = 1
    else if (aroom2 == 15) aroom2 = 1
    else if (aroom2 == 6) aroom2 = 1
    else aroom2 = 0


    
    let killPoints = Math.floor( (kroom1) + (kroom2) )
    let SurvivePoints = Math.floor( (aroom1) + (aroom2) )
    let totalPoints = Math.floor( (killPoints) + (SurvivePoints) )

    if (aroom1 === 20 && aroom2 === 20 ) {
      interaction.editReply(`
𝐓𝐞𝐚𝐦 𝐍𝐚𝐦𝐞 : ${teamname}
𝐖𝐖𝐂𝐃 : 4
𝐒𝐮𝐫𝐯𝐢𝐯𝐞 𝐏𝐨𝐢𝐧𝐭𝐬 : ${SurvivePoints}
𝐊𝐢𝐥𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${killPoints}
𝐓𝐨𝐭𝐚𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${totalPoints}`)
    }
    if (aroom1 === 20 && aroom2 === 20 ) {
      interaction.editReply(`
𝐓𝐞𝐚𝐦 𝐍𝐚𝐦𝐞 : ${teamname}
𝐖𝐖𝐂𝐃 : 3
𝐒𝐮𝐫𝐯𝐢𝐯𝐞 𝐏𝐨𝐢𝐧𝐭𝐬 : ${SurvivePoints}
𝐊𝐢𝐥𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${killPoints}
𝐓𝐨𝐭𝐚𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${totalPoints}`)
    }
    if (aroom1 === 20 ) {
      interaction.editReply(`
𝐓𝐞𝐚𝐦 𝐍𝐚𝐦𝐞 : ${teamname}
𝐖𝐖𝐂𝐃 : 3
𝐒𝐮𝐫𝐯𝐢𝐯𝐞 𝐏𝐨𝐢𝐧𝐭𝐬 : ${SurvivePoints}
𝐊𝐢𝐥𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${killPoints}
𝐓𝐨𝐭𝐚𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${totalPoints}`)
    }
  if (aroom1 === 20 && aroom2 === 20) {
      interaction.editReply(`
𝐓𝐞𝐚𝐦 𝐍𝐚𝐦𝐞 : ${teamname}
𝐖𝐖𝐂𝐃 : 3
𝐒𝐮𝐫𝐯𝐢𝐯𝐞 𝐏𝐨𝐢𝐧𝐭𝐬 : ${SurvivePoints}
𝐊𝐢𝐥𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${killPoints}
𝐓𝐨𝐭𝐚𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${totalPoints}`)
    }
      if (aroom1 === 20 && aroom2 === 20 ) {
      interaction.editReply(`
𝐓𝐞𝐚𝐦 𝐍𝐚𝐦𝐞 : ${teamname}
𝐖𝐖𝐂𝐃 : 2
𝐒𝐮𝐫𝐯𝐢𝐯𝐞 𝐏𝐨𝐢𝐧𝐭𝐬 : ${SurvivePoints}
𝐊𝐢𝐥𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${killPoints}
𝐓𝐨𝐭𝐚𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${totalPoints}`)
    }
          if (aroom1 === 20 ) {
      interaction.editReply(`
𝐓𝐞𝐚𝐦 𝐍𝐚𝐦𝐞 : ${teamname}
𝐖𝐖𝐂𝐃 : 2
𝐒𝐮𝐫𝐯𝐢𝐯𝐞 𝐏𝐨𝐢𝐧𝐭𝐬 : ${SurvivePoints}
𝐊𝐢𝐥𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${killPoints}
𝐓𝐨𝐭𝐚𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${totalPoints}`)
    }
          if (aroom1 === 20) {
      interaction.editReply(`
𝐓𝐞𝐚𝐦 𝐍𝐚𝐦𝐞 : ${teamname}
𝐖𝐖𝐂𝐃 : 2
𝐒𝐮𝐫𝐯𝐢𝐯𝐞 𝐏𝐨𝐢𝐧𝐭𝐬 : ${SurvivePoints}
𝐊𝐢𝐥𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${killPoints}
𝐓𝐨𝐭𝐚𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${totalPoints}`)
    }
    if (aroom2 === 20 ) {
      interaction.editReply(`
𝐓𝐞𝐚𝐦 𝐍𝐚𝐦𝐞 : ${teamname}
𝐖𝐖𝐂𝐃 : 2
𝐒𝐮𝐫𝐯𝐢𝐯𝐞 𝐏𝐨𝐢𝐧𝐭𝐬 : ${SurvivePoints}
𝐊𝐢𝐥𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${killPoints}
𝐓𝐨𝐭𝐚𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${totalPoints}`)
    }
    if (aroom2 === 20) {
      interaction.editReply(`
𝐓𝐞𝐚𝐦 𝐍𝐚𝐦𝐞 : ${teamname}
𝐖𝐖𝐂𝐃 : 2
𝐒𝐮𝐫𝐯𝐢𝐯𝐞 𝐏𝐨𝐢𝐧𝐭𝐬 : ${SurvivePoints}
𝐊𝐢𝐥𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${killPoints}
𝐓𝐨𝐭𝐚𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${totalPoints}`)
    }
      if (aroom1 === 20) {
      interaction.editReply(`
𝐓𝐞𝐚𝐦 𝐍𝐚𝐦𝐞 : ${teamname}
𝐖𝐖𝐂𝐃 : 1
𝐒𝐮𝐫𝐯𝐢𝐯𝐞 𝐏𝐨𝐢𝐧𝐭𝐬 : ${SurvivePoints}
𝐊𝐢𝐥𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${killPoints}
𝐓𝐨𝐭𝐚𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${totalPoints}`)
    }
      if (aroom2 === 20) {
      interaction.editReply(`
𝐓𝐞𝐚𝐦 𝐍𝐚𝐦𝐞 : ${teamname}
𝐖𝐖𝐂𝐃 : 1
𝐒𝐮𝐫𝐯𝐢𝐯𝐞 𝐏𝐨𝐢𝐧𝐭𝐬 : ${SurvivePoints}
𝐊𝐢𝐥𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${killPoints}
𝐓𝐨𝐭𝐚𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${totalPoints}`)
    }
    else {  
      interaction.editReply(`
𝐓𝐞𝐚𝐦 𝐍𝐚𝐦𝐞 : ${teamname}
𝐖𝐖𝐂𝐃 : 0
𝐒𝐮𝐫𝐯𝐢𝐯𝐞 𝐏𝐨𝐢𝐧𝐭𝐬 : ${SurvivePoints}
𝐊𝐢𝐥𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${killPoints}
𝐓𝐨𝐭𝐚𝐥 𝐏𝐨𝐢𝐧𝐭𝐬 : ${totalPoints}`)
    }
} catch (err) {
      console.log(err)
  }
 }
}