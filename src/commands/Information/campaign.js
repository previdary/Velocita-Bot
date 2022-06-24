const { SlashCommandBuilder} = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('campaign')
        .setDescription('Vote Previdary or die!'),
    async execute(interaction) {
        await interaction.reply('Vote Prev for earl today!')
    }
}