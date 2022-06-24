const { SlashCommandBuilder} = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('campaign')
        .setDescription('Say hello to the bot'),
    async execute(interaction) {
        await interaction.reply('Vote Prev for earl today!')
    }
}