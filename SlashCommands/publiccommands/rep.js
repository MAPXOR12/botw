const { MessageEmbed, Discord, MessageActionRow, MessageButton } = require('discord.js');
const ms = require("ms")
const db = require('pro.db');
module.exports = {
  name: "rep",
  description: "to give a thanks to someone",
  options: [{
    name: "user",
    description: "user to get his ultracash",
    type: 6,
    required: true,
  }],

  run: async (client, interaction , args) => {
    try {
      let user = interaction.options.getUser('user')
        let timeout = 86400000; 
        const userr = await db.fetch(`repp_${interaction.user.id}`);
        if (userr !== null && timeout - (Date.now() - userr) > 0) {
            let time = ms(timeout - (Date.now() - user));
            return interaction.editReply(`<a:aemoji_:998754391794405386> You Gived Him One Rep Pls Wait 24 Houres To Give Him Again$! <a:yes:998236126953340988>`)
          } else {
              interaction.editReply({ embeds: [
                new MessageEmbed()
              .setDescription(`<a:aemoji_:998754391794405386> Done Gived Him A Rep <a:yes:998236126953340988>`)
              .setColor("#780ff")
                     .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true}) })
     .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
              ]})
    
              db.add(`rep_${user.id}`, 1)
              db.set(`repp_${interaction.user.id}`, Date.now())
      }
    } catch (err) {
      console.log(err)
    }
  }
}