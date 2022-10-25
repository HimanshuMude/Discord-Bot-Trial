require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once(Events.ClientReady, () => {
    console.log("Logged In!!!");
});
client.login(process.env.TOKEN);