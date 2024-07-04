const { MessageEmbed , Discord } = require('discord.js');
const moment = require('moment')
module.exports = {
  name: "inrole",
  description: "to get more info about role",
  options: [{
    name: "role",
    description: "the role",
    type: 8,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
    let role = interaction.options.getRole('role')
    let map = interaction.guild.roles.cache.get(role.id).members.map(rr => `**<@${rr.id}> ( ${rr.id} )**`).join("\n")
        
   interaction.editReply({ embeds: [       
     new MessageEmbed()
     .setTitle(`<a:jdd:998753982791028788> Info About \`${role.name}\` <a:jdd:998753982791028788> `)
    .setColor('#7800FF')
     .setDescription(`<a:ass_:998754918762557610> **Role Name : **\`${role.name}\`

<a:aCrew:998753806814814244> **Members Count Have This Role :** \`${interaction.guild.roles.cache.get(role.id).members.size}\`


<a:yes:998236126953340988> **Members :**
${map}


<a:accdh:998754689761943672> **Role Is Created At : **\`${moment(role.createdAt).format('DD/MM/YYYY h:mm' )} \`

`)
     .setTimestamp()
     .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true}) })
     .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
 ], split: true})


} catch (err) {
      console.log(err)
  }
 }
}