require("dotenv").config();
const Discord = require("discord.js");
const Bot = new Discord.Client({intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"]});

Bot.on("ready", () => {
    console.log("Bot is ready!");
});

Bot.login(process.env.TOKEN);