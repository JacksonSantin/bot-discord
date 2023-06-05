const Discord = require("discord.js");
const client = require("../../bot");

const adicionarLembrete = async () => {
  if (interaction.customId === "adicionarLembrete") {
    const lembrete = interaction.fields.getTextInputValue("lembrete");
    const horario = interaction.fields.getTextInputValue("horario");
    const channelToSend = await client.channels
      .fetch("1113553458931437720")
      .catch(() => null);


    const fcLembrete = await salvarLembrete();

    const embed1 = new EmbedBuilder()
      .setColor(0x2a3756)
      .setTitle("Novo Lembrete!")
      .setDescription(`Novo lembrete para ser criado!`)
      .addFields(
        {
          name: "Lembrete:",
          value: fcLembrete.lembrete.join(", "),
          inline: true,
        },
        {
          name: "Horário:",
          value: fcLembrete.horario,
          inline: true,
        }
      );


    interaction.reply({ embeds: [embed1] });
  }

  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "adicionar-lembrete") {
    const modal = new ModalBuilder()
      .setCustomId("adicionarLembrete")
      .setTitle("Novo Lembrete");

    const lembrete = new TextInputBuilder()
      .setCustomId("lembrete")
      .setLabel("Qual o lembrete?")
      .setStyle(TextInputStyle.Short)
      .setRequired(true)
      .setValue("");

    const horario = new TextInputBuilder()
      .setCustomId("horario")
      .setLabel("Qual o horário?")
      .setStyle(TextInputStyle.Short)
      .setRequired(true)
      .setValue("");

    const actionRow1 = new ActionRowBuilder().addComponents(lembrete);
    const actionRow2 = new ActionRowBuilder().addComponents(horario);

    modal.addComponents(actionRow1, actionRow2);

    await interaction.showModal(modal);
  }
}