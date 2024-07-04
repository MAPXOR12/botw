const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"setcolor",
  description:"to set a color of embeds",
  options : [{
    name : "color",
    description: "color name or code",
    type: 3,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINSTRATOR')) return message.reply(`** 😕 You don't have permission **`);

      let link = interaction.options.getString('color')
      db.set(`color_${interaction.guild.id}` , link)
      interaction.editReply(`> **Done Set The Color to ${link} <a:aemoji_:998754391794405386>**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
