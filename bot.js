const { Client, REST, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const schedule = require("node-schedule");

const rest = new REST({ version: "10" }).setToken("NTg1MDkzOTI4MTc3NjMxMjM1.GPDGxu.qPGYvP4QV9LGuhUIWkjpPlZE0QHtM_sohS_wL4");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
  ],
});

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  schedule.scheduleJob("0 8 * * *", async function () {
    const channelToSend = await client.channels
      .fetch("1113553458931437720")
      .catch(() => null);
    const embed = new EmbedBuilder()
      .setColor(0x2a3756)
      .setTitle("Tomar Ancoron!")
      .setDescription("AGORA!!!");

    channelToSend.send({ embeds: [embed] });
  });

  schedule.scheduleJob("0 12 * * *", async function () {
    const channelToSend = await client.channels
      .fetch("1113553458931437720")
      .catch(() => null);
    const embed = new EmbedBuilder()
      .setColor(0x2a3756)
      .setTitle("Tomar Somalgin e Ancoron!")
      .setDescription("AGORA!!!");

    channelToSend.send({ embeds: [embed] });
  });

  schedule.scheduleJob("0 18 * * *", async function () {
    const channelToSend = await client.channels
      .fetch("1113553458931437720")
      .catch(() => null);
    const embed = new EmbedBuilder()
      .setColor(0x2a3756)
      .setTitle("Tomar Somalgin e Ancoron!")
      .setDescription("AGORA!!!");

    channelToSend.send({ embeds: [embed] });
  });
})