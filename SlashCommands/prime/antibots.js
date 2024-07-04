let db = require('pro.db')
module.exports = {
  name:"antibots-on",
  description:"to open antibots protection",

  run: async(client, interaction, args) => {
    try {
   let prime = db.get(`prime_${interaction.guild.id}`)
      if(prime == null) return interaction.editReply("** Note This Server Is Not A Prime Server<a:aemoji_:998754391794405386>**")
if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply(`** 😕 You don't have permission **`);
      db.set(`antibots_${interaction.guild.id}` , "True")
      interaction.editReply(`> **Done SetbThe Anti Bots <a:aemoji_:998754391794405386>**`)
      
} catch (err) {
      console.log(err)
  }
 }
}
