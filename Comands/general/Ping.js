const Discord = require("discord.js");

module.exports = {
  name: "ping",
  description: "See the bot's ping",
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    let embed = new Discord.EmbedBuilder()
      .setDescription(`**\\📡 Olá ${interaction.user}, o ping do servidor Lembretes está em** \`${client.ws.ping}ms\`**.**`)
      .setColor(0x2a3756);

    interaction.reply({ embeds: [embed] });
  },
};
