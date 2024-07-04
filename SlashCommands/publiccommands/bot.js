const { MessageEmbed , Discord } = require('discord.js');
const config = "!"
module.exports = {
  name:"bot",
  description:"bot information",

  run: async(client, interaction, args) => {
    try {
   let invite = await interaction.guild.invites.create(interaction.channel.id);
      await interaction.editReply({
    embeds: [
  new MessageEmbed()
    .setTitle(`<a:DesignS:997869485660848158> __**Bot Information**__ <a:DesignS:997869485660848158>`)
    .setColor('#7800FF')
    .setImage("https://cdn.discordapp.com/attachments/999815285177585725/1000206183266791484/New_Project_2_8CB463C.gif")
    .setDescription(`  
  
  <a:yes:998236126953340988> Bot Name : ${client.user.username}
  
  <a:aCrew:998753806814814244> Bot Name Tag : ${client.user.tag}
  
  <a:Boost:998983689755168828> Bot Id : ${client.user.id}

  <a:DesignS:997869485660848158> Bot Dev : Nqr , Yahya

  <:discordjslogo:1000197422493995068> Djs Vertion : 14,Handler
  
  <a:emoji_35:997869490433970207> Bot Prefix : !
  
  <:groupprofileusers_iconicons:1000198002394275931> Users Count : ${client.users.cache.size}
  
  <:065servers_101509:1000200744789606440> Servers Count : ${client.guilds.cache.size}
  `)
    ]
});


} catch (err) {
      console.log(err)
  }
 }
}