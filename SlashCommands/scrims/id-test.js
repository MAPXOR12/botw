const { MessageEmbed , Discord , MessageActionRow, MessageButton,  } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"id-test",
  description:"to test id and pass",
  options: [{
    name: "role",
    description: 'id-pass role',
    type: 8,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
   if (!interaction.member.permissions.has('MANAGE_SERVER')) return interaction.editReply(`** 😕 You don't have permission **`);
      let role = interaction.options.getRole('role');
      
      interaction.editReply({content: `> Done` , ephemeral: true})
      interaction.channel.send({ content: `
<a:emoji_63:1006747679939907655> Attention Here <a:emoji_63:1006747679939907655>

> Please Put React On ( <a:emoji_48:1006747687846166658> ) To Make Sure The Rule With You
> برجاء الضغط علي الرياكشن ( <a:emoji_48:1006747687846166658> ) لكي تاكد ان معاك الرول
${role}

`}).then( async(m) => {
        m.react("<a:emoji_48:1006747687846166658>")
})
} catch (err) {
      console.log(err)
  }
 }
}