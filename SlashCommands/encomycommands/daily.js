const { MessageEmbed, Discord, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const db = require('pro.db');
let ms = require('ms')
let moment = require('moment')
module.exports = {
  name: "daily",
  description: "to take daily of ultracash",

  run: async (client, interaction, args) => {
    try {
      let timeout = 86400000;
      const user = await db.fetch(`daily_${interaction.user.id}`);
      if (user !== null && timeout - (Date.now() - user) > 0) {
        let time = ms(timeout - (Date.now() - user));
        return interaction.editReply(
          `⏳ -  **❌You already claimed your daily reward today! Wait ${time}** `
        );
      }

      let ultracash = db.get(`cash_credits_${interaction.user.id}`)
      if (ultracash == null) db.set(`cash_credits_${interaction.user.id}`, {
          credits: 0,
          userId: interaction.user.id
        });

      let dfddfdfg = db.get(`cash_credits_${interaction.user.id}`)
      let fultracash = dfddfdfg.credits
        let famount = Math.floor(Math.random() * 2000) + 900;
      let amount = Math.floor((fultracash * 1) + (famount * 1))
        db.set(`daily_${interaction.user.id}`, Date.now())
        db.set(`cash_credits_${interaction.user.id}`, {
          credits: amount,
          userId: interaction.user.id
        });
      interaction.editReply({
          embeds: [
            new MessageEmbed()
              .setDescription(`
**💵 - اضيف لك ${interaction.user} **
  ${famount} في  الراتب  الخاص بك اليوم.`)
              .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
              .setFooter({ text: `${interaction.user.tag}`, iconURL: interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }) })
          ]
        })
    } catch (err) {
      console.log(err)
    }
  }
}