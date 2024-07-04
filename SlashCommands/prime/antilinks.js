let db = require('pro.db')
module.exports = {
  name:"antilinks-on",
  description:"to open antilinks protection",

  run: async(client, interaction, args) => {
    try {
   let prime = db.get(`prime_${interaction.guild.id}`)
      if(prime == null) return interaction.editReply("** Note This Server Is Not A Prime Server<a:aemoji_:998754391794405386>**")
if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply(`** 😕 You don't have permission **`);
      db.set(`antilinks_${interaction.guild.id}` , "True")
      interaction.editReply(`> **Done Set The Anti Links <a:aemoji_:998754391794405386>**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
