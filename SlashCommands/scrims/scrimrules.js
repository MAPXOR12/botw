const { MessageEmbed , Discord , MessageActionRow, MessageButton,  } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"scrim-rules",
  description:"to send scrim rules",

  run: async(client, interaction, args) => {
    try {
   if (!interaction.member.permissions.has('MANAGE_SERVER')) return interaction.editReply(`** 😕 You don't have permission **`);
        let line = db.get(`Line_${interaction.guild.id}`)
  let color = db.get(`color_${interaction.guild.id}`)
      interaction.editReply({content: `> Done` , ephemeral: true})
      interaction.channel.send({ content: `|| @everyone ||` , embeds: [
        new MessageEmbed().setTitle("<:emoji_20:1006747635417358457> Scrim Rules <:emoji_20:1006747635417358457> ").setDescription(`**

> <a:emoji_8:1006732637412544542> ممنوع منعا باتا التفنيش بلطاسه او بوكسات

> <a:emoji_8:1006732637412544542> مطلوب التصوير من التيم باكمله

> <a:emoji_8:1006732637412544542> اقل شيء اثنين من اللاعبين موحدين التاج بتاع التيم

> <a:emoji_8:1006732637412544542> ممنوع المايك العاام

> <a:emoji_8:1006732637412544542> ممنوع التحالف


> بلتوفيق <a:Yred:1006717434880872578>


**
`).setImage(line ? line : "https://cdn.discordapp.com/attachments/991842908338667621/991846066834133052/Line-25.gif").setColor(color ? color : "CYAN").setTimestamp()
      ]})
} catch (err) {
      console.log(err)
  }
 }
}