let db = require('pro.db')
module.exports = {
  name:"set-antimention",
  description:"to add someone to the antimention",
  options : [{
    name : "user",
    description: "user you want to set him",
    type: 6,
    required: true,
  }],

  run: async(client, interaction, args) => {
    try {
   let prime = db.get(`prime_${interaction.guild.id}`)
      if(prime == null) return interaction.editReply("** Note This Server Is Not A Prime Server<a:aemoji_:998754391794405386>**")
if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply(`** 😕 You don't have permission **`);
      let channel = interaction.options.getUser('user')
      let chid = channel.id;
      db.push(`antimention_${interaction.guild.id}` , chid)
      interaction.editReply(`> **Done Set ${channel} To The Anti Mention <a:aemoji_:998754391794405386>**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
