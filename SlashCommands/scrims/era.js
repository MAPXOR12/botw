const { MessageEmbed , Discord , MessageActionRow, MessageButton,  } = require('discord.js');
module.exports = {
  name:"era",
  description:"to send erangel id pass",
  options: [{
    name: "scrim-id",
    description: 'scrim id',
    type: 3,
    required: true,
  },{
    name: "scrim-pass",
    description: 'password',
    type: 3,
    required: true,
  } , {
    name: "scrim-start",
    description: "start time",
    type: 3,
    required: true,
  } , {
    name: "role",
    description: 'id-pass role',
    type: 8,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
   if (!interaction.member.permissions.has('MANAGE_SERVER')) return interaction.editReply(`** 😕 You don't have permission **`);
      let scrimTime = interaction.options.getString('scrim-id');
      let regTime = interaction.options.getString('scrim-pass');
      let scrimType = interaction.options.getString('scrim-start');
      let role = interaction.options.getRole('role');


      interaction.editReply({content: `> Done` , ephemeral: true})
      interaction.channel.send({content: `
<a:emoji_8:1006732637412544542> 𝐌𝐚𝐩 : <:era:1012739597089898536>

<a:emoji_8:1006732637412544542> 𝐈𝐝 : ${scrimTime}

<a:emoji_8:1006732637412544542> 𝐏𝐚𝐬𝐬 : ${regTime}

<a:emoji_8:1006732637412544542> 𝐒𝐭𝐚𝐫𝐭 : ${scrimType}

 || ${role}||` , embeds: [
        new MessageEmbed()
        .setImage("https://media.discordapp.net/attachments/1012688093695971368/1012737291975929876/db05c8cae786ad940af08718c749387b.jpg").setColor("RANDOM")
 ]})
} catch (err) {
      console.log(err)
  }
 }
}