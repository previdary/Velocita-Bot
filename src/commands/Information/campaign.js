const { SlashCommandBuilder} = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('campaign')
        .setDescription('Displays Prevs Campaign'),
    async execute(interaction) {
        await interaction.reply('Vote Prev for earl today!')
    }
}