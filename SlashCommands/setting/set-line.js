const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"setline",
  description:"to set a line",
  options : [{
    name : "link",
    description: "link of line",
    type: 3,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {  
if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);

      let link = interaction.options.getString('link')
      db.set(`Line_${interaction.guild.id}` , link)
      interaction.editReply(`> **Done Set The Line <a:aemoji_:998754391794405386>**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
