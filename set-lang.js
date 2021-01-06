const  db = require('../../reconDB');

module.exports = {
    name: 'set-lang',
    run: async(client, message, args) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        const lang = args[0];
        if(!lang) message.reply('please specify a message');
        await db.set(`lang-${message.guild.id}`, lang);
        message.channel.send('Language has been set to ' + lang);
    }
}