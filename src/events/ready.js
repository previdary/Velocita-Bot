module.exports = {
    name: 'ready',
    once: true,
    async execute() {
        console.log(`${this.client.user.tag} is online!`);
    },
}