const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"set-tax",
  description:"to set a tax room",
  options : [{
    name : "channel",
    description: "channel you want to set it",
    type: 7,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINSTRATOR')) return message.reply(`** 😕 You don't have permission **`);

      let channel = interaction.options.getChannel('channel')
      let chid = channel.id;

      db.set(`Tax_${interaction.guild.id}` , chid)
      interaction.editReply(`> **Done Set ${channel} To The Tax Channel <a:aemoji_:998754391794405386>**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
