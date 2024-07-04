const { MessageEmbed , Discord , MessageActionRow, MessageButton,  } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"reg-form",
  description:"to send scrim reg form",

  run: async(client, interaction, args) => {
    try {
   if (!interaction.member.permissions.has('MANAGE_SERVER')) return interaction.editReply(`** 😕 You don't have permission **`);
        let line = db.get(`Line_${interaction.guild.id}`)
  let color = db.get(`color_${interaction.guild.id}`)
      
      interaction.editReply({content: `> Done` , ephemeral: true})
      interaction.channel.send({ embeds: [
        new MessageEmbed().setTitle("<:emoji_20:1006747635417358457> **Reg Form** <:emoji_20:1006747635417358457> ")
        .setDescription(`**
> <a:emoji_8:1006732637412544542> 𝐓𝐞𝐚𝐦 𝐍𝐚𝐦𝐞 : ${interaction.guild.name}

> <a:emoji_8:1006732637412544542> 𝐓𝐞𝐚𝐦 𝐋𝐞𝐚𝐝𝐞𝐫 : <@${interaction.guild.ownerId}>
**`)
        .setColor(color ? color : "CYAN")
        .setTimestamp()
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
      ]})
} catch (err) {
      console.log(err)
  }
 }
}