const { MessageEmbed , Discord , MessageActionRow, MessageButton, B } = require('discord.js');
module.exports = {
  name:"avatar-server",
  description:"getting avatar profile",

  run: async(client, interaction, args) => {
    try {
    var button = new MessageActionRow()
   .addComponents(
     new MessageButton()
      .setStyle('LINK') 
.setEmoji('<:065servers_101509:1000200744789606440>')
.setLabel(`Download Server Avatar`)
.setURL((`${interaction.guild.iconURL({dynamic: true, size: 4096})}`))
   ); 
interaction.editReply({embeds: [
          new MessageEmbed()
        .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true}) })
     .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
   .setDescription(`[Server Avatar link](${interaction.guild.iconURL({dynamic: true, size: 4096})})`)
   .setImage(`${interaction.guild.iconURL({dynamic: true, size: 4096})}`)
] , components: [button]})

} catch (err) {
      console.log(err)
  }
 }
}