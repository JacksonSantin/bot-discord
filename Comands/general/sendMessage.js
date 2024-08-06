const Discord = require("discord.js");
const schedule = require("node-schedule");
const client = require("../../index")

const jobOne = schedule.scheduleJob("0 8 * * *", () => {
  sendMessage("8:00", "Ancoron");
});

const jobTwo = schedule.scheduleJob("0 12 * * *", () => {
  sendMessage("12:00", "Somalgin e Atenolol");
});

async function sendMessage(time, activity) {
  const channelToSend = await client.channels
    .fetch("1113553458931437720")
    .catch(() => null);

  if (channelToSend) {
    const embed = new Discord.EmbedBuilder()
      .setTitle(`**⚠️ Hora do remédio!**`)
      .setDescription(`**📢 Olá, são ${time}, hora de tomar o ${activity}**`)
      .setColor(0x2a3756);

    channelToSend.send({ embeds: [embed] });
  }
}
