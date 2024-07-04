const { MessageEmbed , Discord , MessageActionRow, MessageButton,  } = require('discord.js');
module.exports = {
  name:"announce-scrim",
  description:"to send scrim announcement",
  options: [{
    name: "scrim-time",
    description: 'scrim start time',
    type: 3,
    required: true,
  },{
    name: "reg-time",
    description: 'reg start time',
    type: 3,
    required: true,
  } , {
    name: "scrim-type",
    description: "Mixed, Mob , Girls , Etc",
    type: 3,
    required: false,
  }],

  run: async(client, interaction, args) => {
    try {
   if (!interaction.member.permissions.has('MANAGE_SERVER')) return interaction.editReply(`** 😕 You don't have permission **`);
      let scrimTime = interaction.options.getString('scrim-time');
      let regTime = interaction.options.getString('reg-time');
      let scrimType = interaction.options.getString('scrim-type');
      if(!scrimType) scrimType = "MIXED"
      let invite = await interaction.guild.invites.create(interaction.channel.id);
      interaction.editReply({content: `> Done` , ephemeral: true})
      interaction.channel.send(`
𝐒𝐞𝐫𝐯𝐞𝐫 𝐍𝐚𝐦𝐞 : ${interaction.guild.name}
 
𝐒𝐜𝐫𝐢𝐦 𝐓𝐢𝐦𝐞 : ${scrimTime}
 
𝐑𝐞𝐠𝐞𝐬𝐭𝐫𝐚𝐭𝐢𝐨𝐧 𝐓𝐢𝐦𝐞 : ${regTime}
 
𝐒𝐜𝐫𝐢𝐦 𝐓𝐲𝐩𝐞 : ${scrimType}
 
𝐒𝐞𝐫𝐯𝐞𝐫 𝐋𝐢𝐧𝐤 : https://discord.gg/${invite.code}

=========================================
 
اسم السيرفر : ${interaction.guild.name}
 
معاد الاسكريم : ${scrimTime}
 
معاد التسجيل : ${regTime}
 
نوع الاسكريم : ${scrimType}
 
لينك السيرفر : https://discord.gg/${invite.code}
 
 
 || @everyone ||`)
} catch (err) {
      console.log(err)
  }
 }
}