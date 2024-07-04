const { MessageEmbed , Discord , MessageActionRow, MessageButton,  } = require('discord.js');
module.exports = {
  name:"san",
  description:"to send sanhok id pass",
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
<a:emoji_8:1006732637412544542> 𝐌𝐚𝐩 : <:SAN:1012739591356289044>

<a:emoji_8:1006732637412544542> 𝐈𝐝 : ${scrimTime}

<a:emoji_8:1006732637412544542> 𝐏𝐚𝐬𝐬 : ${regTime}

<a:emoji_8:1006732637412544542> 𝐒𝐭𝐚𝐫𝐭 : ${scrimType}

 || ${role}||` , embeds: [
        new MessageEmbed()
        .setImage("https://media.discordapp.net/attachments/1012688093695971368/1012737204528885870/eea75ddc1c0747c1a9a105348ab9b8bc.jpg").setColor("RANDOM")
 ]})
} catch (err) {
      console.log(err)
  }
 }
}