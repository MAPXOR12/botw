const { MessageEmbed , Discord } = require('discord.js');
var { inviteTracker } = require("discord-inviter")
module.exports = {
  name:"invites",
  description:"to get invites of someone",
  options : [{
    name : "user",
    description : "user to get His Invites",
    type: 6,
    required : false,
  }],

  run: async(client, interaction, args) => {
    try {
      let user = interaction.options.get('user')

if(!user) {
       var invite = await inviteTracker.getMemberInvites(interaction.member);
    interaction.editReply(`<a:yes:998236126953340988> ${interaction.user.username} Has Got ${invite.count} Invite(s) <a:ared_crown:998754844259131453>
`);
}
if(user) {
         var invite2 = await inviteTracker.getMemberInvites(user.member);
    interaction.editReply(`<a:yes:998236126953340988> ${user.user.username} Has Got ${invite2.count} Invite(s) <a:ared_crown:998754844259131453>
`);
}
 } catch (err) {
      console.log(err)
  }
 }
}