const Discord = require("discord.js");
const cron = require('node-cron');
const client = require("../../bot");
const dayjs = require("dayjs");

const sendInformationMessage = async () => {
  const horaMensagem = dayjs().set('date', 7).set('hour', 8).set('minute', 00).set('second', 0);
  const horaAtual = dayjs();

  if (horaMensagem.isBefore(horaAtual)) {
    horaMensagem.add(1, 'month');
  }

  const diff = horaMensagem.diff(horaAtual);

  setTimeout(async () => {
    const channelToSend = await client.channels
      .fetch("1113553458931437720")
      .catch(() => null);

    if (channelToSend) {
      const embed = new Discord.EmbedBuilder()
        .setDescription("**📢 Dia de rodar o comando ```.rw``` no servidor _Discloud >> 🔌 commands_!**")
        .setColor(15548997);

      channelToSend.send({ embeds: [embed] });
    }
  }, diff);
};

cron.schedule('0 8 7 * *', sendInformationMessage);