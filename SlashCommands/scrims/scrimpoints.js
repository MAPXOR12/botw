const { MessageEmbed , Discord , MessageActionRow, MessageButton, ephemeral } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"scrim-points",
  description:"to send scrim points",

  run: async(client, interaction, args) => {
    try {
   if (!interaction.member.permissions.has('MANAGE_SERVER')) return interaction.editReply(`** 😕 You don't have permission **`);
        let line = db.get(`Line_${interaction.guild.id}`)//مش عاوزك تسادني
  let color = db.get(`color_${interaction.guild.id}`)
      await interaction.editReply({content: `> Done` , ephemeral: true})
    
      interaction.channel.send({ content: `|| @everyone ||` , embeds: [
        new MessageEmbed().setTitle("<:emoji_20:1006747635417358457> Scrim Points <:emoji_20:1006747635417358457> ").setDescription(`**
> <a:emoji_8:1006732637412544542> 1𝐬𝐭 : 20𝐩𝐨𝐢𝐧𝐭

> <a:emoji_8:1006732637412544542> 2𝐧𝐝 : 14𝐩𝐨𝐢𝐧𝐭

> <a:emoji_8:1006732637412544542> 3𝐫𝐝 : 10𝐩𝐨𝐢𝐧𝐭

> <a:emoji_8:1006732637412544542> 4𝐭𝐡 : 8𝐩𝐨𝐢𝐧𝐭

> <a:emoji_8:1006732637412544542> 5𝐭𝐡 : 7𝐩𝐨𝐢𝐧𝐭

> <a:emoji_8:1006732637412544542> 6𝐭𝐡 : 6𝐩𝐨𝐢𝐧𝐭

> <a:emoji_8:1006732637412544542> 7𝐭𝐡 : 5𝐩𝐨𝐢𝐧𝐭

> <a:emoji_8:1006732637412544542> 8𝐭𝐡 : 4𝐩𝐨𝐢𝐧𝐭

> <a:emoji_8:1006732637412544542> 9𝐭𝐡 : 3𝐩𝐨𝐢𝐧𝐭

> <a:emoji_8:1006732637412544542> 10𝐭𝐡 : 2𝐩𝐨𝐢𝐧𝐭

> <a:emoji_8:1006732637412544542> 11𝐭𝐡 => 20𝐭𝐡 : 1𝐩𝐨𝐢𝐧𝐭

> <a:emoji_8:1006732637412544542> 1𝐊𝐢𝐥𝐥 : 1𝐩𝐨𝐢𝐧𝐭
**
`).setImage(line ? line : "https://cdn.discordapp.com/attachments/991842908338667621/991846066834133052/Line-25.gif").setColor(color ? color : "CYAN").setTimestamp()
        
      ]})
} catch (err) {
      console.log(err)
  }
 } 
}