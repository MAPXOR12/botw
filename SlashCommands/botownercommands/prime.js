const { MessageEmbed } = require('discord.js');
let ms = require('ms')
let db = require('pro.db')
module.exports = {
  name:"prime",
  description:"Private Command 🔒",
  options: [{
    name : "serverid",
    description: "🔒🔒",
    type: 3,
    required: true
  }],

  run: async(client, interaction, args) => {
    try {
      let owners = ["743887896481628190"]
      let user = interaction.options.getString('serverid')
      
      if(!owners.includes(interaction.user.id)) return interaction.editReply("بس يابابا")
      let server = client.guilds.cache.get(user)
            db.set(`prime_${user}` , "True")
      interaction.editReply({ embeds : [
                   new MessageEmbed()
            .setAuthor('✅ | تم', interaction.user.avatarURL())
            .setColor("GREEN")
            .setDescription(`**✅ | Done Gived Prime To ${server.name}.**`)
            .setThumbnail(interaction.user.avatarURL())
            .setTimestamp()
            .setFooter("Requested By: " + interaction.user.tag, interaction.user.avatarURL())
      ]});
} catch (err) {
      console.log(err)
  }
 }
}
