require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log("Logged In!!!");
});
client.login(process.env.TOKEN);