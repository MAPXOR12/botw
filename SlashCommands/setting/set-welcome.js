const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"setwelcome",
  description:"to set a welcome room",
  options : [{
    name : "channel",
    description: "channel to set feedback",
    type: 7,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINSTRATOR')) return message.reply(`** 😕 You don't have permission **`);

      let link = interaction.options.getChannel('channel')

   let chid = link.id;
      db.set(`welcome_${interaction.guild.id}` , chid)
      interaction.editReply(`> **Done Set The Welcome Room To ${link} <a:aemoji_:998754391794405386>**`)
      
} catch (err) {
      console.log(err)
  }
 }
}