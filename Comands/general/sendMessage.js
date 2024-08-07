const Discord = require("discord.js");
const schedule = require("node-schedule");
const client = require("../../index");
const rule01 = new schedule.RecurrenceRule();
rule01.hour = 8;
rule01.minute = 0;
rule01.tz = "America/Sao_Paulo"

const rule02 = new schedule.RecurrenceRule();
rule02.hour = 12;
rule02.minute = 0;
rule02.tz = "America/Sao_Paulo"

const jobOne = schedule.scheduleJob(rule01, () => {
  sendMessage("8:00", "Ancoron");
});

const jobTwo = schedule.scheduleJob(rule02, () => {
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
