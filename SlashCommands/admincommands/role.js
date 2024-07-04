const { MessageEmbed } = require('discord.js');
let ms = require('ms')
module.exports = {
  name:"role",
  description:"to give someone a role",
  options: [{
    name : "user",
    description: "user to give him role",
    type: 6,
    required: true
  } , {
    name : "role",
    description: "role to give user",
    type: 8,
    required: true
  }],

  run: async(client, interaction, args) => {
    try {
      let user = interaction.options.getMember('user')
      let role = interaction.options.getRole("role")
      
      if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return interaction.editReply(`** 😕 You don't have permissions **`);
      
        if (user.id === interaction.user.id) return interaction.editReply("لا يمكن اعطاء رتبه لنفسك")
        if (user.id === client.user.id) return interaction.editReply("لا يمكن اعطاء رتبه للبوت")
      
               user.roles.add(role)
      interaction.editReply({ embeds : [
                   new MessageEmbed()
            .setAuthor('✅ | تم', interaction.user.avatarURL())
            .setColor("GREEN")
            .setDescription(`**✅ | <@!${user.id}> تم اعطء الرتبة <@!${role.id}>`)
            .setThumbnail(interaction.user.avatarURL())
            .setTimestamp()
            .setFooter("Requested By: " + interaction.user.tag, interaction.user.avatarURL())
      ]});
} catch (err) {
      console.log(err)
  }
 }
}
