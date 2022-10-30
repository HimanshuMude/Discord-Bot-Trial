const { SlashCommandBuilder } = require('discord.js');
const { watchFile } = require('fs');
const { waitForDebugger } = require('inspector');
const wait = require('timers/promises').setTimeout;
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        // await interaction.reply({ content: 'Pong!', ephemeral: true });
        await interaction.deferReply({ ephemeral: true });
        await wait(5000);
        await interaction.editReply({ content: 'Suiiii!', ephemeral: true });
        await wait(2000);
        await interaction.followUp({ content: 'Suiiii! Again.', ephemeral: true })
    },
};