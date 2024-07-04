const { MessageEmbed , Discord , MessageActionRow, MessageButton,  } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"roll",
  description:"to take the yes or no",
  options: [{
    name: "text",
    description: 'text of roll',
    type: 3,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
   if (!interaction.member.permissions.has('MANAGE_SERVER')) return interaction.editReply(`** 😕 You don't have permission **`);
      let text = interaction.options.getString('text');
        let line = db.get(`Line_${interaction.guild.id}`)
  let color = db.get(`color_${interaction.guild.id}`)
      interaction.editReply({content: `> Done` , ephemeral: true})
      interaction.channel.send({ content: `|| @everyone ||` , embeds: [
        new MessageEmbed().setTitle("<a:emoji_48:1006747687846166658> Attention Here <a:emoji_48:1006747687846166658> ").setDescription(`**
      ${text}
**
`).setImage(line ? line : "https://cdn.discordapp.com/attachments/991842908338667621/991846066834133052/Line-25.gif").setColor(color ? color : "CYAN").setTimestamp()
      ]}).then( async(m) => {
    m.react("<a:aCat_:1006717459073609859>")
    m.react("<a:aCat_:1006717457731420280>")
      })
} catch (err) {
      console.log(err)
  }
 }
}