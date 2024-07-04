const { MessageEmbed, Discord } = require('discord.js');
module.exports = {
  name: "server-owner",
  description: "to view the server owner",

  run: async (client, interaction, args) => {
    try {
      interaction.editReply({ content: `<a:ass_:998754918762557610> The Server Owner Is : <@!${interaction.guild.ownerId}> <a:emoji_271:997870576561553439>` })
    } catch (err) {
      console.log(err)
    }
  }
}