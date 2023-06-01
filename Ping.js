const Discord = require("discord.js");

module.exports = {
  name: "ping",
  description: "See the bot's ping",
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    let embed = new Discord.EmbedBuilder()
      .setDescription(`Hello ${interaction.user}, ping = \`${client.ws.ping}\``)
      .setColor(0x2a3756);

    interaction.reply({ embeds: [embed] });
  },
};