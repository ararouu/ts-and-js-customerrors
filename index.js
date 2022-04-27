const { Client, Collection, Intents, Discord } = require("discord.js");


const client = new Client({
    intents: 32767,
    partials: ["CHANNEL","GUILD_MEMBER","MESSAGE","REACTION","USER"]
    });


const db = require("quick.db")

client.on("ready", () =>{
    console.log(`${client.user.tag} is up and ready!`);
    db.delete(`modmailopen`)
    console.log('Deleted open mails.')
})

const mongoose = require('mongoose');

module.exports = client;
// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

//blacklisted user



//global embed color
client.embedColor = 'AQUA';
console.log(`Set the client embed color. It's now #${client.embedColor}.`)


// Initializing the project
require("./handler")(client);

client.login(client.config.token);
