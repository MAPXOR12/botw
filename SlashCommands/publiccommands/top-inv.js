const { MessageEmbed , Discord } = require('discord.js');
var { inviteTracker } = require("discord-inviter")
module.exports = {
  name:"top-inv",
  description:"to get invites of someone",

  run: async(client, interaction, args) => {
    try {
      var top = await inviteTracker.getTopInvites(interaction.guild);
   interaction.editReply(
      top
        .map((i, n) => `\`#${n + 1}\`- <a:ass_:998754918762557610> **${i.user.tag}** has __${i.count}__ <a:ared_crown:998754844259131453>`)
        .join("\n")
    );
 } catch (err) {
      console.log(err)
  }
 }
}