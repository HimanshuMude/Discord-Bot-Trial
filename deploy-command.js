const { REST, Routes } = require('discord.js');
require('dotenv');
const fs = require('fs');

const commands = [];

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        // The put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(
            Routes.applicationGuildCommands(process.env.clientId, process.env.guildId),
            { body: commands },
        );

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        // console.log("Error");
        console.error(error);
    }
})();

rest.put(Routes.applicationGuildCommands(process.env.clientId, process.env.guildId), { body: commands })
    .then(data => console.log(`Successfully registered ${data.length} application commands.`))
    .catch(console.error);