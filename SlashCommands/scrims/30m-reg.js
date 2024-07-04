const { MessageEmbed , Discord , MessageActionRow, MessageButton,  } = require('discord.js');
module.exports = {
  name:"30m-reg",
  description:"to send that there is 30m left for scrim",

  run: async(client, interaction, args) => {
    try {
   if (!interaction.member.permissions.has('MANAGE_SERVER')) return interaction.editReply(`** 😕 You don't have permission **`);

      interaction.editReply({content: `> Done` , ephemeral: true})
      interaction.channel.send(`
      **
> <a:emoji_8:1006732637412544542> 30m To Close Regestration <a:ss_3:1006717476496748566>
> <a:emoji_8:1006732637412544542> نص ساعه ويتم اغلاق التسجيل <a:ss_3:1006717476496748566>
**
 || @everyone ||`)
} catch (err) {
      console.log(err)
  }
 }
}