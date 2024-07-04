const { EmbedBuilder, Discord, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const db = require('pro.db');
let ms = require('ms')
let moment = require('moment')
module.exports = {
  name: "uc-transfer",
  description: "to transfer uc",
  options: [{
    name: "user",
    description: "user to trans him",
    type: 6,
    required: true,
  }, {
    name: "coast",
    description: "coast to transfer",
    type: 4,
    required: true,
  }],

  run: async (client, interaction, args) => {
    try {
      let user = interaction.options.getUser("user")
      let amount = interaction.options.getInteger("coast")

      let ultracash = db.get(`cash_credits_${interaction.user.id}`)
      let fultracash = ultracash.credits

      if (interaction.user.id == user.id) return interaction.editReply("You Cant Transfer To Urself")
      if (user.bot) return interaction.editReply("Bots Dont Have Money")
      if (ultracash == null) return interaction.editReply(`Sorry! You don't have Money`)
      if (amount > fultracash) return interaction.editReply(`Sorry! You don't have \`${amount}\` coins in cash!`)
      if (amount == 0) return interaction.editReply(`احنا هنهزر؟؟؟!؟`)

      let UserUltraCash = db.get(`cash_credits_${user.id}`)
      if (UserUltraCash == null) {
        db.set(`cash_credits_${user.id}`, {
          credits: 0,
          userId: user.id
        });
      }
      let dsfsdf = db.get(`cash_credits_${user.id}`)
      let ffultracash = dsfsdf.credits
      let useramount = Math.floor((ffultracash * 1) + (amount * 1))
      let iuseramount = Math.floor((fultracash * 1) - (amount * 1))


      db.set(`cash_credits_${interaction.user.id}`, {
        credits: iuseramount,
        userId: interaction.user.id
      });

      db.set(`cash_credits_${user.id}`, {
        credits: useramount,
        userId: user.id
      });

      interaction.editReply(`💳 | Done Transferred \`${amount}\` Money From ${interaction.user.username} To ${user}`)
      user.send(`💳 | Done Transferred \`${amount}\` Money From ${interaction.user.username} To ${user}`)

    } catch (err) {
      console.log(err)
    }
  }
}