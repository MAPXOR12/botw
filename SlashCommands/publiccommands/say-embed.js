const { MessageEmbed, Discord } = require('discord.js');
module.exports = {
  name: "say-embed",
  description: "to send embed with bot",
  options : [{
    name: "text",
    description: "the text you want to send with bot",
    type : 3,
    required: true,
  }],

  run: async (client, interaction, args) => {
    try {
      let text = interaction.options.getString('text')
      interaction.editReply({ embeds: [
        new MessageEmbed()
     .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true}) })
     .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
        .setDescription(`**${text}**`)
      ]})
    } catch (err) {
      console.log(err)
    }
  }
}