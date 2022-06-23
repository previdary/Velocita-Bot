const { SlashCommandBuilder } = require('@discord.js/builders');

module.exports =  {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Says hello to the user'),
    async execute(interaction) {
        await interaction.reply('Hello!');
    },
};