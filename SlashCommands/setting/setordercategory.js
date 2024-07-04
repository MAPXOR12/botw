const { EmbedBuilder , Discord , PermissionsBitField } = require('discord.js');
let db = require('pro.db')
module.exports = {
  name:"set-ordercategory",
  description:"to set the category",
  options : [{
    name : "category-id",
    description: "category idk",
    type: 3,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
if (!interaction.member.permissions.has('ADMINSTRATOR')) return message.reply(`** 😕 You don't have permission **`);

      let link = interaction.options.getString('category-id')

   let chid = link;
      db.set(`ordercategory_${interaction.guild.id}` , chid)
      interaction.editReply(`> **Done Set The Category <a:aemoji_:998754391794405386>**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
