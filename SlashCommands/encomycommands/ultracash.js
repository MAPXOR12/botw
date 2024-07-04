const { MessageEmbed } = require('discord.js');
let ms = require('ms')
let db = require('pro.db')
module.exports = {
  name: "ultracash",
  description: "to see Ultra Cash",
  options: [{
    name: "user",
    description: "user to give him role",
    type: 6,
    required: false,
  }],

  run: async (client, interaction, args) => {
    try {
      let user = interaction.options.getMember('user');
      if(user) {
      let ultracash = db.get(`ultracash_${user.id}`)
      if (ultracash === null) {
        db.set(`cash_credits_${user.id}`, {
          credits: 0,
          userId: user.id
        });
      }
      let data = db.get(`cash_credits_${user.id}`)
      let fultracash = data.credits;
      interaction.editReply(`** 🏦 | ${user.user.username} Have \`${fultracash}\` ultracash(s) 💰 **`)
      }
      if(!user) {
      let ultracash = db.get(`ultracash_${interaction.user.id}`)
      if (ultracash === null) {
        db.set(`cash_credits_${interaction.user.id}`, {
          credits: 0,
          userId: interaction.user.id
        });
      }
      let data = db.get(`cash_credits_${interaction.user.id}`)
      let fultracash = data.credits;
      interaction.editReply(`** 🏦 | ${interaction.user.username} Have \`${fultracash}\` ultracash(s) 💰 **`)
      }
    } catch (err) {
      console.log(err)
    }
  }
}
