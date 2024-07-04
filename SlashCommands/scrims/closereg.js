const { MessageEmbed , Discord , MessageActionRow, MessageButton,  } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"close-reg",
  description:"to send scrim reg opened",
  options: [{
    name: "scrim-time",
    description: 'scrim start time',
    type: 3,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
   if (!interaction.member.permissions.has('MANAGE_SERVER')) return interaction.editReply(`** 😕 You don't have permission **`);
      let scrimTime = interaction.options.getString('scrim-time');
        let line = db.get(`Line_${interaction.guild.id}`)
  let color = db.get(`color_${interaction.guild.id}`)
      interaction.editReply({content: `> Done` , ephemeral: true})
      interaction.channel.send({ content: `|| @everyone ||` , embeds: [
        new MessageEmbed().setTitle("<a:emoji_48:1006747687846166658> Attention Here <a:emoji_48:1006747687846166658> ").setDescription(`**

> \`-\` دقائق و اللست تكون جاهزه <a:Flying_Hearts_Red:1006732609935655013>

\`\`\`  • Failure to show up without an excuse will expose you to Blacklist
 
 
• عدم الحضور بدون عذر سوف يعرضك للبلاك ليست 
\`\`\`
**
`).setImage(line ? line : "https://cdn.discordapp.com/attachments/991842908338667621/991846066834133052/Line-25.gif").setColor(color ? color : "CYAN").setTimestamp()
      ]})
} catch (err) {
      console.log(err)
  }
 }
}