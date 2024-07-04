const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"setfeedback",
  description:"to set a feedback room",
  options : [{
    name : "channel",
    description: "channel to set feedback",
    type: 7,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply(`** 😕 You don't have permission **`);

      let link = interaction.options.getChannel('channel')

   let chid = link.id;
      db.set(`Fed_${interaction.guild.id}` , chid)
      interaction.editReply(`> **Done Set The Feedback Room To ${link} <a:aemoji_:998754391794405386>**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
