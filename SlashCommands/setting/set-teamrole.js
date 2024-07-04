const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"set-teamrole",
  description:"to set the team role",
  options : [{
    name : "role",
    description: "mention team role",
    type: 8,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINSTRATOR')) return message.reply(`** 😕 You don't have permission **`);

      let channel = interaction.options.getRole('role')
      let chid = channel.id;

      db.set(`team_role_${interaction.guild.id}` , chid)
      interaction.editReply(`> **Done Set ${channel} To The Team Role <a:aemoji_:998754391794405386>**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
