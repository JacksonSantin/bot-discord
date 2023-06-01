const fs = require("fs")

module.exports = async (client) => {

  const SlashsArray = []

  fs.readdir(`./Comands`, (error, folder) => {
    folder.forEach(subfolder => {
      fs.readdir(`./Comands/${subfolder}/`, (error, files) => {
        files.forEach(files => {

          if (!files?.endsWith('.js')) return;
          files = require(`../Comands/${subfolder}/${files}`);
          if (!files?.name) return;
          client.slashCommands.set(files?.name, files);

          SlashsArray.push(files)
        });
      });
    });
  });
  client.on("ready", async () => {
    client.guilds.cache.forEach(guild => guild.commands.set(SlashsArray))
  });
};

